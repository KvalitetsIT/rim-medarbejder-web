

import { IBackendApi } from "../apis/IBackendApi";
import { PatientDetail } from "@kvalitetsit/hjemmebehandling/Models/PatientDetail";
import BaseService from "@kvalitetsit/hjemmebehandling/BaseLayer/BaseService";
import IPatientService from "./interfaces/IPatientService";

export default class PatientService extends BaseService implements IPatientService {
    backendApi : IBackendApi
    
    constructor(backendApi : IBackendApi){
        super()
        this.backendApi = backendApi;
    }
    async EditPatient(patient: PatientDetail): Promise<PatientDetail> {
        try{
        return await this.backendApi.EditPatient(patient);
    } catch(error : any){
        return this.HandleError(error);
      }
    }
    async SearchPatient(searchString: string) : Promise<PatientDetail[]>{
        try{
        return await this.backendApi.SearchPatient(searchString);
    } catch(error : any){
        return this.HandleError(error);
      }
    }
    
    async CreatePatient(patient : PatientDetail) : Promise<PatientDetail>{
        try{
        return await this.backendApi.CreatePatient(patient);
    } catch(error : any){
        return this.HandleError(error);
      }
    }

    async GetPatients(includeActive : boolean,includeCompleted : boolean, page : number, pageSize : number) : Promise<PatientDetail[]>{
      try{
        this.ValidatePagination(page,pageSize);
        return await this.backendApi.GetPatients(includeActive,includeCompleted,page,pageSize)
    } catch(error : any){
        return this.HandleError(error);
      }
    }
    
    
}
  