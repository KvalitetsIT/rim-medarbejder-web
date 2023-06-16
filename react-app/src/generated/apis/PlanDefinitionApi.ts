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
    CreatePlanDefinitionRequest,
    CreatePlanDefinitionRequestFromJSON,
    CreatePlanDefinitionRequestToJSON,
    ErrorDto,
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    PatchPlanDefinitionRequest,
    PatchPlanDefinitionRequestFromJSON,
    PatchPlanDefinitionRequestToJSON,
    PlanDefinitionDto,
    PlanDefinitionDtoFromJSON,
    PlanDefinitionDtoToJSON,
} from '../models';

export interface CreatePlanDefinitionOperationRequest {
    createPlanDefinitionRequest: CreatePlanDefinitionRequest;
}

export interface GetPlanDefinitionsRequest {
    statusesToInclude?: Array<string>;
}

export interface IsPlanDefinitionInUseRequest {
    id: string;
}

export interface PatchPlanDefinitionOperationRequest {
    id: string;
    patchPlanDefinitionRequest: PatchPlanDefinitionRequest;
}

export interface RetirePlanDefinitionRequest {
    id: string;
}

export interface UpdatePlanDefinitionRequest {
    planDefinitionDto?: PlanDefinitionDto;
}

/**
 * 
 */
export class PlanDefinitionApi extends runtime.BaseAPI {

    /**
     * Create a PlanDefinition.
     * Create a new PlanDefinition.
     */
    async createPlanDefinitionRaw(requestParameters: CreatePlanDefinitionOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createPlanDefinitionRequest === null || requestParameters.createPlanDefinitionRequest === undefined) {
            throw new runtime.RequiredError('createPlanDefinitionRequest','Required parameter requestParameters.createPlanDefinitionRequest was null or undefined when calling createPlanDefinition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/plandefinition`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePlanDefinitionRequestToJSON(requestParameters.createPlanDefinitionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create a PlanDefinition.
     * Create a new PlanDefinition.
     */
    async createPlanDefinition(requestParameters: CreatePlanDefinitionOperationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createPlanDefinitionRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getPlanDefinitionsRaw(requestParameters: GetPlanDefinitionsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PlanDefinitionDto>>> {
        const queryParameters: any = {};

        if (requestParameters.statusesToInclude) {
            queryParameters['statusesToInclude'] = requestParameters.statusesToInclude;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/plandefinition`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlanDefinitionDtoFromJSON));
    }

    /**
     */
    async getPlanDefinitions(requestParameters: GetPlanDefinitionsRequest, initOverrides?: RequestInit): Promise<Array<PlanDefinitionDto>> {
        const response = await this.getPlanDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns true if the plandefinition is in use by careplans and otherwise false if not
     * Checks if the plandefinition is in use by any careplans
     */
    async isPlanDefinitionInUseRaw(requestParameters: IsPlanDefinitionInUseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling isPlanDefinitionInUse.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/plandefinition/{id}/used`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns true if the plandefinition is in use by careplans and otherwise false if not
     * Checks if the plandefinition is in use by any careplans
     */
    async isPlanDefinitionInUse(requestParameters: IsPlanDefinitionInUseRequest, initOverrides?: RequestInit): Promise<boolean> {
        const response = await this.isPlanDefinitionInUseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async patchPlanDefinitionRaw(requestParameters: PatchPlanDefinitionOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchPlanDefinition.');
        }

        if (requestParameters.patchPlanDefinitionRequest === null || requestParameters.patchPlanDefinitionRequest === undefined) {
            throw new runtime.RequiredError('patchPlanDefinitionRequest','Required parameter requestParameters.patchPlanDefinitionRequest was null or undefined when calling patchPlanDefinition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/plandefinition/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchPlanDefinitionRequestToJSON(requestParameters.patchPlanDefinitionRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async patchPlanDefinition(requestParameters: PatchPlanDefinitionOperationRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchPlanDefinitionRaw(requestParameters, initOverrides);
    }

    /**
     */
    async retirePlanDefinitionRaw(requestParameters: RetirePlanDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling retirePlanDefinition.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/plandefinition/{id}/retire`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async retirePlanDefinition(requestParameters: RetirePlanDefinitionRequest, initOverrides?: RequestInit): Promise<void> {
        await this.retirePlanDefinitionRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updatePlanDefinitionRaw(requestParameters: UpdatePlanDefinitionRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/plandefinition`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PlanDefinitionDtoToJSON(requestParameters.planDefinitionDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updatePlanDefinition(requestParameters: UpdatePlanDefinitionRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updatePlanDefinitionRaw(requestParameters, initOverrides);
    }

}
