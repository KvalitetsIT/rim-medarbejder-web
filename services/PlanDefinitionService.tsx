import { IBackendApi } from "../apis/interfaces/IBackendApi";
import { PlanDefinition } from "@kvalitetsit/hjemmebehandling/Models/PlanDefinition";
import BaseService from "@kvalitetsit/hjemmebehandling/BaseLayer/BaseService";
import { IPlanDefinitionService } from "./interfaces/IPlanDefinitionService";
import { NotImplementedError } from "@kvalitetsit/hjemmebehandling/Errorhandling/ApiErrors/NotImplementedError";

export default class PlanDefinitionService extends BaseService implements IPlanDefinitionService {
    backendApi: IBackendApi;

    constructor(backendapi: IBackendApi) {
        super();
        this.backendApi = backendapi;
    }

    async createPlanDefinition(planDefinition: PlanDefinition): Promise<void> {
        try {
            console.log(planDefinition);
            throw new NotImplementedError();
        } catch (error) {
            return this.HandleError(error)
        }
    }
    async updatePlanDefinition(planDefinition: PlanDefinition): Promise<void> {
        try {
            console.log(planDefinition);
            throw new NotImplementedError();
        } catch (error) {
            return this.HandleError(error)
        }
    }


    async GetAllPlanDefinitions(): Promise<PlanDefinition[]> {
        try {
            return await this.backendApi.GetAllPlanDefinitions();
        } catch (error: unknown) {
            return this.HandleError(error);
        }
    }

    async GetPlanDefinitionById(planDefinitionId: string): Promise<PlanDefinition> {
        try {
            return await this.backendApi.GetPlanDefinitionById(planDefinitionId);
        } catch (error: unknown) {
            return this.HandleError(error);
        }
    }

}
