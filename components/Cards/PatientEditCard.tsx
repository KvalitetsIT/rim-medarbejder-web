import { Button, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import { Card, Skeleton, TextField } from '@mui/material';
import { PatientDetail } from '../Models/PatientDetail';
import ApiContext from '../../pages/_context';
import IPersonService from '../../services/interfaces/IPersonService';

export interface Props {
    initialPatient : PatientDetail
}

export interface State {
    loading : boolean;
    patient : PatientDetail
}

export class PatientEditCard extends Component<Props,State> {
  static contextType = ApiContext;
  static displayName = PatientEditCard.name;
  personService!: IPersonService;

  constructor(props : Props){
      super(props);
      this.state = {loading : true, patient : props.initialPatient}
      this.modifyPatient = this.modifyPatient.bind(this);
  }

  render () : JSX.Element{
    const contents = this.state.loading ? <Skeleton variant="rectangular" height={200} /> : this.renderCard();
    return contents;
  }

  componentDidMount() : void {
      this.setState({loading:false})
}

InitializeServices() : void{
  this.personService = this.context.personService;
}

async getPerson() : Promise<void>{
  try{
    if (this.state.patient.cpr === null || this.state.patient.cpr === ""){
	  return;
    }
    
    this.setState({
      loading: true
    })
    const newPerson = await this.personService.GetPerson(this.state.patient.cpr!);
    
    const p = this.state.patient;
    p.firstname = newPerson.givenName;
    p.lastname = newPerson.familyName;
    p.patientContact.address.city = newPerson.patientContactDetails.city;
    p.patientContact.address.zipCode = newPerson.patientContactDetails.postalCode;
    p.patientContact.address.road = newPerson.patientContactDetails.street;    
    this.setState({patient : p});
    

    this.setState({
      loading: false
    })
    
  } catch(error){
    this.setState({
      loading: false
    })
    throw error;
  }
  
}

modifyPatient(patientModifier : (patient : PatientDetail, newValue : string) => PatientDetail, input :  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) : void{
  const valueFromInput = input.currentTarget.value;
    const modifiedPatient = patientModifier(this.state.patient,valueFromInput);
    this.setState({patient : modifiedPatient  })
  }

  renderCard() : JSX.Element{
	this.InitializeServices();
    return (
        <Card>
        <CardContent>
          <Stack spacing={3}>
          <Typography variant="inherit">
          Patient
      </Typography>
            <Stack direction="row">
              <TextField size="small" id="outlined-basic" required type="number" label="CPR" value={this.state.patient.cpr} onChange={input => this.modifyPatient(this.setCpr,input) }  variant="outlined" />
              <Button size="small" variant="contained" onClick={async ()=>await this.getPerson()}>Fremsøg</Button>
            </Stack>
            <Stack spacing={3} direction="row">
              <TextField disabled id="outlined-basic" label="Fornavn" value={this.state.patient.firstname} onChange={input => this.modifyPatient(this.setFirstname,input) }  variant="outlined" />
              <TextField disabled id="outlined-basic" label="Efternavn" value={this.state.patient.lastname} onChange={input => this.modifyPatient(this.setLastname,input) } variant="outlined" />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextField disabled id="outlined-basic" label="Addresse" value={this.state.patient.patientContact.address.road} onChange={input => this.modifyPatient(this.setRoad,input) }  variant="outlined" />
              <TextField disabled id="outlined-basic" label="Postnummer" value={this.state.patient.patientContact.address.zipCode} onChange={input => this.modifyPatient(this.setZipcode,input) }  variant="outlined" />
              <TextField disabled id="outlined-basic" label="By" value={this.state.patient.patientContact.address.city} onChange={input => this.modifyPatient(this.setCiy,input) }  variant="outlined" />
            </Stack>
            <Stack spacing={3} direction="row">
              <TextField id="outlined-basic" type="tel" label="Telefonnummer" value={this.state.patient.patientContact.primaryPhone} onChange={input => this.modifyPatient(this.setPhonenumber,input) } variant="outlined" />
              <TextField id="outlined-basic" type="email" label="Email" value={this.state.patient.patientContact.emailAddress} onChange={input => this.modifyPatient(this.setEmail,input) } variant="outlined" />
            </Stack>
         </Stack>

          
        </CardContent>
    </Card>
    )
  }
  

  setLastname(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.lastname = newValue;
    return modifiedPatient;
  }
  setFirstname(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.firstname = newValue;
    return modifiedPatient;
  }
  setCpr(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.cpr = newValue;
    return modifiedPatient;
  }
  
  setRoad(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.patientContact.address.road = newValue;
    return modifiedPatient;
  }
  setZipcode(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.patientContact.address.zipCode = newValue;
    return modifiedPatient;
  }
  
  setCiy(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.patientContact.address.city = newValue;
    return modifiedPatient;
  }
  
  setPhonenumber(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.patientContact.primaryPhone = newValue;
    return modifiedPatient;
  }
  
  setEmail(oldPatient : PatientDetail, newValue : string ) : PatientDetail {
    const modifiedPatient = oldPatient;
    modifiedPatient.patientContact.emailAddress = newValue;
    return modifiedPatient;
  }
  


}
