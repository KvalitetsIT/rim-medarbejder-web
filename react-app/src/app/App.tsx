
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SubscribePage } from '../pages/SubscribePage';
import Layout from '../components/layout/Layout';
import { ServiceDetails } from '../pages/services/details';
import { PageNotFound } from '../pages/404';
import { GroupDetails } from '../pages/groups/details';
import { EditService } from '../pages/services/edit';
import { EditGroup } from '../pages/groups/edit';
import { ServicesPage } from '../pages/services/ServicesPage';
import { AllGoupsPage } from '../pages/groups/all';
import { useMemo, useState } from 'react';
import { User } from '../models/User';
import { GetJWTToken, UserContext } from '../feature/authentication/logic/FetchUser';
import UserFactory from '../feature/authentication/logic/UserFactory';
import { AnnouncementsPage, DetailedAnnouncementPage } from '../pages/announcements/announcements';
import { useKeycloak } from '@react-keycloak/web';
import getEnvironment from '../config/env';
import { AbilityContext } from '../feature/authentication/logic/Can';
import PrivateRoute from '../components/PrivateRoute';



export default function App() {

    //const loggedInAs = useContext(UserContext)
    const userFactory = new UserFactory()


    const [user, setUser] = useState<User>(userFactory.createGuestUser())

       const keycloak = useKeycloak();
       useMemo(async () => {
           if (keycloak.initialized) {
               const jwt = await GetJWTToken(keycloak.keycloak!)
               const userFactory = new UserFactory()
               setUser(userFactory.createUserFromJWT(jwt!))
               // getUserRolesLazyTrigger();
           }
       }, [keycloak.initialized, keycloak.keycloak])

       let timeInterval = setInterval(() => {
           let lastAcivity = localStorage.getItem('lastActvity')
           const maxInactivity = parseInt(getEnvironment().REACT_APP_INACTIVITY_MAX_MINUTES ?? 1)
           var diffMs = Math.abs(new Date(parseInt(lastAcivity!)).getTime() - new Date().getTime()); // milliseconds between now & last activity
           var seconds = Math.floor((diffMs / 1000));
           var minute = Math.floor((seconds / 60));
           if (minute >= maxInactivity) {
               console.log(`No activity in last ${maxInactivity} minutes... Logging Out`)
               clearInterval(timeInterval)
               //code for logout or anything...
               keycloak.keycloak.logout()
           }    
       }, 5000)
       

    return (
        <Router>
            <UserContext.Provider value={user}>
                <AbilityContext.Provider value={user.getAbility()}>
                    <Layout>
                        <>
                            <Routes>
                                <Route path="/">
                                    <Route index element={<DashboardPage />} />
                                    {/* <Route path='profile' element={<ProfilePage />} /> */}
                                    {/* <Route path="login" element={<LoginPage />} /> */}
                                    {/* <Route path="register" element={<RegistrationPage />} /> */}
                                    <Route path="subscribe" element={<SubscribePage />} />
                                </Route>
                                
                                <Route path="/services">
                                    <Route index element={<PrivateRoute><ServicesPage /></PrivateRoute>} />
                                    <Route path=":id">
                                        <Route index element={<PrivateRoute><ServiceDetails/></PrivateRoute> } />
                                        <Route path="edit" element={<PrivateRoute><EditService/></PrivateRoute>} />
                                    </Route>
                                </Route>
                                <Route path='/groups'>
                                    <Route index element={<PrivateRoute><AllGoupsPage /></PrivateRoute>} />
                                    <Route path=':id' >
                                        <Route index element={<PrivateRoute><GroupDetails/></PrivateRoute>} />
                                        <Route path="edit" element={<PrivateRoute><EditGroup/></PrivateRoute>} />
                                    </Route>
                                </Route>
                                <Route path='/announcements'>
                                    <Route index element={<PrivateRoute><AnnouncementsPage/></PrivateRoute>} />
                                    <Route path=':id' >
                                        <Route index element={<PrivateRoute><DetailedAnnouncementPage /></PrivateRoute>} />
                                        <Route path="edit" element={<PrivateRoute><EditGroup /></PrivateRoute>} />
                                    </Route>
                                </Route>
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                            <ToastContainer closeButton={true} position="bottom-right" />
                        </>
                    </Layout>
                </AbilityContext.Provider>
            </UserContext.Provider>
        </Router >
    )
}


