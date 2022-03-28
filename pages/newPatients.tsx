import { Component } from "react"
import CreatePatient from "../components/createpatient"

interface Props {
    editmode: boolean,
    openAccordians?: boolean[]
    match: { params: { cpr?: string, questionnaireId?: string, careplanId?: string } }
  }

export class NewPatientPage extends Component<Props> {
    render() : JSX.Element{
        return <CreatePatient {...this.props}/>
    }
}