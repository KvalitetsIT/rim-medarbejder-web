import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { SubscriptionForm } from "../components/forms/subscribe";
import { CenteredContent } from "../components/layout/CenteredContent";
import { useGetAllGroupsQuery } from "../feature/stakit/groupsSlice";
import { useCreateSubscriptionMutation } from "../feature/stakit/publicSlice";
import {  Subscription } from "../models/types";
import { Mode } from "./services/ServicesPage";

export function SubscribePage() {

    const createSubscription = useCreateSubscriptionMutation()[0]
    const getAllGroups = useGetAllGroupsQuery(undefined)
    const [mode, setMode] = useState<Mode>(Mode.NORMAL)

    const onSubscribtion = (subscription: Subscription) => {
        createSubscription(subscription).then(() => setMode(Mode.SUCCESS))
    }

    const {isLoading, data:groups} = useGetAllGroupsQuery(undefined) ?? []

    switch (mode) {
        case Mode.SUCCESS: return (
            <CenteredContent>
                <Container maxWidth="sm">
                    <Typography variant="h3" textAlign={"center"}>Success</Typography>
                    <Typography variant="h6">Check you email. You should recieve a confirmation</Typography>
                </Container>
            </CenteredContent>
        )
        default: return (
            <CenteredContent>
                <Container maxWidth="sm">
                    <Typography variant="h3" textAlign={"center"}>Subscribe</Typography>
                    <Typography variant="h6">Fill out the form below in order to get notified</Typography>
                    <SubscriptionForm
                        optionalGroups={groups}
                        onSubmit={async (subscription) => onSubscribtion(subscription)}
                        onCancel={() => window.history.go(-1)}
                    ></SubscriptionForm>
                </Container>
            </CenteredContent>
        )
    }



}

