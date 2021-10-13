import { Answer } from "./Answer";
import { CategoryEnum } from "./CategoryEnum";
import { Measurement } from "./Measurement";
import { PatientSimple } from "./PatientSimple";
import { Question } from "./Question";
import { Questionnaire } from "./Questionnaire";

export class QuestionnaireResponse {
    id! : string
    questionnaire!: Questionnaire
    measurements! : Map<MeasurementType,Measurement>
    questions! : Map<Question,Answer>
    answeredTime! : Date;
    status! : MeasurementCollectionStatus
    category! : CategoryEnum;
    patient! : PatientSimple
}



export enum  MeasurementType {
    CRP = "CRP",
    TEMPERATURE = "TEMPERATUR",
    WEIGHT = "VÆGT"
}

export enum  MeasurementCollectionStatus {
    Processed = "Behandlet",
    NotProcessed = "Ikke behandlet",
    InProgress = "Under behandling"
}