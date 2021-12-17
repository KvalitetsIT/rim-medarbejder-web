

import React from "react";
import { IBackendApi } from "../apis/IBackendApi";
import { Answer, NumberAnswer, StringAnswer } from "../components/Models/Answer";
import { CategoryEnum } from "../components/Models/CategoryEnum";
import { PatientCareplan } from "../components/Models/PatientCareplan";
import { Question } from "../components/Models/Question";
import { QuestionnaireResponse } from "../components/Models/QuestionnaireResponse";
import BaseService from "./BaseService";
import ICareplanService from "./interfaces/ICareplanService";
import IQuestionAnswerService from "./interfaces/IQuestionAnswerService";
import IQuestionnaireService from "./interfaces/IQuestionnaireService";

export default class CareplanService extends BaseService implements ICareplanService {
  backendApi: IBackendApi

  constructor(backendApi: IBackendApi) {
    super()
    this.backendApi = backendApi;
  }
  async SetCareplan(careplan: PatientCareplan): Promise<PatientCareplan> {
    try {
      return await this.backendApi.SetCareplan(careplan)
    } catch (error) {
      return this.HandleError(error)
    }
  }

  async CreateCarePlan(carePlan: PatientCareplan): Promise<string> {
    try {
      return await this.backendApi.CreateCarePlan(carePlan)
    } catch (error: any) {
      return this.HandleError(error);
    }
  }

  async TerminateCareplan(careplan: PatientCareplan): Promise<PatientCareplan> {
    try {
      return await this.backendApi.TerminateCareplan(careplan);
    } catch (error: any) {
      return this.HandleError(error);
    }
  }

  async GetPatientCareplanById(id: string): Promise<PatientCareplan> {
    try {
      return await this.backendApi.GetPatientCareplanById(id);
    } catch (error: any) {
      return this.HandleError(error);
    }
  }

  async GetPatientCareplans(cpr: string): Promise<Array<PatientCareplan>> {
    try {
      return await this.backendApi.GetPatientCareplans(cpr);
    } catch (error: any) {
      return this.HandleError(error);
    }
  }


}
