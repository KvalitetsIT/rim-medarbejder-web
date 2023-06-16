/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CarePlanDto,
    CarePlanDtoFromJSON,
    CarePlanDtoToJSON,
    CreateCarePlanRequest,
    CreateCarePlanRequestFromJSON,
    CreateCarePlanRequestToJSON,
    ErrorDto,
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    PlanDefinitionDto,
    PlanDefinitionDtoFromJSON,
    PlanDefinitionDtoToJSON,
    UpdateCareplanRequest,
    UpdateCareplanRequestFromJSON,
    UpdateCareplanRequestToJSON,
} from '../models';

export interface CompleteCarePlanRequest {
    id: string;
}

export interface CreateCarePlanOperationRequest {
    createCarePlanRequest: CreateCarePlanRequest;
}

export interface GetCarePlanByIdRequest {
    id: string;
}

export interface GetPlanDefinitions1Request {
    statusesToInclude?: Array<string>;
}

export interface GetUnresolvedQuestionnairesRequest {
    id: string;
}

export interface PatchCarePlanRequest {
    id: string;
    updateCareplanRequest: UpdateCareplanRequest;
}

export interface ResolveAlarmRequest {
    id: string;
    questionnaireId: string;
}

export interface SearchCarePlansRequest {
    cpr?: string;
    onlyUnsatisfiedSchedules?: boolean;
    onlyActiveCareplans?: boolean;
    pageNumber?: number;
    pageSize?: number;
}

export interface UpdateCarePlanRequest {
    carePlanDto?: CarePlanDto;
}

/**
 * 
 */
export class CarePlanApi extends runtime.BaseAPI {

    /**
     */
    async completeCarePlanRaw(requestParameters: CompleteCarePlanRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling completeCarePlan.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan/{id}/complete`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async completeCarePlan(requestParameters: CompleteCarePlanRequest, initOverrides?: RequestInit): Promise<void> {
        await this.completeCarePlanRaw(requestParameters, initOverrides);
    }

    /**
     * Create a CarePlan for a patient, based on a PlanDefinition.
     * Create a new CarePlan for a patient.
     */
    async createCarePlanRaw(requestParameters: CreateCarePlanOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createCarePlanRequest === null || requestParameters.createCarePlanRequest === undefined) {
            throw new runtime.RequiredError('createCarePlanRequest','Required parameter requestParameters.createCarePlanRequest was null or undefined when calling createCarePlan.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/careplan`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCarePlanRequestToJSON(requestParameters.createCarePlanRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a CarePlan for a patient, based on a PlanDefinition.
     * Create a new CarePlan for a patient.
     */
    async createCarePlan(requestParameters: CreateCarePlanOperationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createCarePlanRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves a CarePlan by its id.
     * Get CarePlan by id.
     */
    async getCarePlanByIdRaw(requestParameters: GetCarePlanByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CarePlanDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCarePlanById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarePlanDtoFromJSON(jsonValue));
    }

    /**
     * Retrieves a CarePlan by its id.
     * Get CarePlan by id.
     */
    async getCarePlanById(requestParameters: GetCarePlanByIdRequest, initOverrides?: RequestInit): Promise<CarePlanDto> {
        const response = await this.getCarePlanByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getPlanDefinitions1Raw(requestParameters: GetPlanDefinitions1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PlanDefinitionDto>>> {
        const queryParameters: any = {};

        if (requestParameters.statusesToInclude) {
            queryParameters['statusesToInclude'] = requestParameters.statusesToInclude;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan/plandefinition`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlanDefinitionDtoFromJSON));
    }

    /**
     */
    async getPlanDefinitions1(requestParameters: GetPlanDefinitions1Request, initOverrides?: RequestInit): Promise<Array<PlanDefinitionDto>> {
        const response = await this.getPlanDefinitions1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getUnresolvedQuestionnairesRaw(requestParameters: GetUnresolvedQuestionnairesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getUnresolvedQuestionnaires.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan/{id}/questionnaires/unresolved`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async getUnresolvedQuestionnaires(requestParameters: GetUnresolvedQuestionnairesRequest, initOverrides?: RequestInit): Promise<Array<string>> {
        const response = await this.getUnresolvedQuestionnairesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async patchCarePlanRaw(requestParameters: PatchCarePlanRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchCarePlan.');
        }

        if (requestParameters.updateCareplanRequest === null || requestParameters.updateCareplanRequest === undefined) {
            throw new runtime.RequiredError('updateCareplanRequest','Required parameter requestParameters.updateCareplanRequest was null or undefined when calling patchCarePlan.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/careplan/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCareplanRequestToJSON(requestParameters.updateCareplanRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async patchCarePlan(requestParameters: PatchCarePlanRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchCarePlanRaw(requestParameters, initOverrides);
    }

    /**
     */
    async resolveAlarmRaw(requestParameters: ResolveAlarmRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling resolveAlarm.');
        }

        if (requestParameters.questionnaireId === null || requestParameters.questionnaireId === undefined) {
            throw new runtime.RequiredError('questionnaireId','Required parameter requestParameters.questionnaireId was null or undefined when calling resolveAlarm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan/{id}/resolve-alarm/{questionnaireId}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"questionnaireId"}}`, encodeURIComponent(String(requestParameters.questionnaireId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resolveAlarm(requestParameters: ResolveAlarmRequest, initOverrides?: RequestInit): Promise<void> {
        await this.resolveAlarmRaw(requestParameters, initOverrides);
    }

    /**
     */
    async searchCarePlansRaw(requestParameters: SearchCarePlansRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CarePlanDto>>> {
        const queryParameters: any = {};

        if (requestParameters.cpr !== undefined) {
            queryParameters['cpr'] = requestParameters.cpr;
        }

        if (requestParameters.onlyUnsatisfiedSchedules !== undefined) {
            queryParameters['only_unsatisfied_schedules'] = requestParameters.onlyUnsatisfiedSchedules;
        }

        if (requestParameters.onlyActiveCareplans !== undefined) {
            queryParameters['only_active_careplans'] = requestParameters.onlyActiveCareplans;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['page_number'] = requestParameters.pageNumber;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/careplan`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CarePlanDtoFromJSON));
    }

    /**
     */
    async searchCarePlans(requestParameters: SearchCarePlansRequest, initOverrides?: RequestInit): Promise<Array<CarePlanDto>> {
        const response = await this.searchCarePlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateCarePlanRaw(requestParameters: UpdateCarePlanRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/careplan`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CarePlanDtoToJSON(requestParameters.carePlanDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateCarePlan(requestParameters: UpdateCarePlanRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateCarePlanRaw(requestParameters, initOverrides);
    }

}
