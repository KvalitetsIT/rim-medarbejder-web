import { FormControl, Stack, Button, CircularProgress, TextField } from "@mui/material"
import { Formik, Form } from "formik"
import { t } from "i18next"
import { ValidatedTextField } from "../input/validatedTextField"
import * as yup from 'yup';
import { Announcement } from "../../models/types"
import { FormProps } from "./subscribe"

interface AnnouncementFormProps extends FormProps<Announcement> {
    announcement?: Announcement
    loading?: boolean
}

export function AnnouncementForm(props: AnnouncementFormProps) {

    const validationSchema = yup.object().shape({
        announcement: yup.object().shape({
            subject: yup.string().required(t("subject is required")),
            message: yup.string().required(t("message is required")),
            from_datetime: yup.date().required(t("from is required")),
            to_datetime: yup.date().required(t("to is required")),
        }),
    })

    const defaultValues: Announcement = {
        message: "",
        subject: "",
        from_datetime: new Date(),
        to_datetime: new Date(),
    }

    if (props.isLoading) return (<></>)
    return (
        <FormControl fullWidth>
            <Formik
                initialValues={{
                    announcement: props.announcement ?? defaultValues,
                    checked: false
                }}
                onSubmit={(values) => { values.announcement.from_datetime = new Date(values.announcement.from_datetime!); values.announcement.to_datetime = new Date(values.announcement.to_datetime!); props.onSubmit(values.announcement) }}
                validationSchema={validationSchema}
                enableReinitialize

            >
                {({ errors, touched, values, handleChange }) => (
                    <Form>
                        <Stack spacing={2}>
                            <ValidatedTextField
                                type={"text"}
                                error={errors.announcement?.subject && touched.announcement?.subject ? errors.announcement.subject : undefined}
                                label="Subject"
                                name="announcement.subject"
                                value={values.announcement?.subject}
                                onChange={handleChange}
                            />

                            <ValidatedTextField
                                type={"text"}
                                multiline
                                rows={3}
                                error={errors.announcement?.message && touched.announcement?.message ? errors.announcement.message : undefined}
                                label="Message"
                                name="announcement.message"
                                value={values.announcement?.message}
                                onChange={handleChange}
                            />

                            <Stack spacing={2} direction={"row"}>


                                <ValidatedTextField
                                    type={"datetime-local"}
                                    error={errors.announcement?.from_datetime && touched.announcement?.from_datetime ? errors.announcement.from_datetime : undefined}
                                    label="From"
                                    name="announcement.from_datetime"
                                    value={values.announcement?.from_datetime}
                                    onChange={handleChange}
                                />

                                <ValidatedTextField
                                    type={"datetime-local"}
                                    error={errors.announcement?.to_datetime && touched.announcement?.to_datetime ? errors.announcement.to_datetime : undefined}
                                    label="To"
                                    name="announcement.to_datetime"
                                    value={values.announcement?.to_datetime}
                                    onChange={handleChange}
                                />


                            </Stack>
                            <Stack spacing={2} direction={"row"}>
                                <Button
                                    type={"submit"}
                                    variant="contained"
                                    disabled={props.loading}
                                    fullWidth={true}
                                >
                                    {props.loading ? <CircularProgress color={"inherit"} size={"1.5em"}></CircularProgress> : <>{t("Submit")}</>}
                                </Button>

                                <Button fullWidth={true} onClick={props.onCancel} variant="outlined">Cancel</Button>
                            </Stack>
                        </Stack>
                    </Form>
                )}

            </Formik>
        </FormControl >
    )
}