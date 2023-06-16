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
    ErrorDto,
    ErrorDtoFromJSON,
    ErrorDtoToJSON,
    PartialUpdateQuestionnaireResponseRequest,
    PartialUpdateQuestionnaireResponseRequestFromJSON,
    PartialUpdateQuestionnaireResponseRequestToJSON,
    QuestionnaireResponseDto,
    QuestionnaireResponseDtoFromJSON,
    QuestionnaireResponseDtoToJSON,
} from '../models';

export interface CreateQuestionnaireResponseRequest {
    questionnaireResponseDto?: QuestionnaireResponseDto;
}

export interface GetQuestionnaireResponsesByCarePlanIdRequest {
    carePlanId: string;
    questionnaireIds: Array<string>;
    pageNumber: number;
    pageSize: number;
}

export interface GetQuestionnaireResponsesByStatusRequest {
    status: Array<GetQuestionnaireResponsesByStatusStatusEnum>;
    pageNumber: number;
    pageSize: number;
}

export interface PatchQuestionnaireResponseRequest {
    id: string;
    partialUpdateQuestionnaireResponseRequest: PartialUpdateQuestionnaireResponseRequest;
}

/**
 * 
 */
export class QuestionnaireResponseApi extends runtime.BaseAPI {

    /**
     */
    async createQuestionnaireResponseRaw(requestParameters: CreateQuestionnaireResponseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/questionnaireresponse`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QuestionnaireResponseDtoToJSON(requestParameters.questionnaireResponseDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createQuestionnaireResponse(requestParameters: CreateQuestionnaireResponseRequest, initOverrides?: RequestInit): Promise<void> {
        await this.createQuestionnaireResponseRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getQuestionnaireResponsesByCarePlanIdRaw(requestParameters: GetQuestionnaireResponsesByCarePlanIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<QuestionnaireResponseDto>>> {
        if (requestParameters.carePlanId === null || requestParameters.carePlanId === undefined) {
            throw new runtime.RequiredError('carePlanId','Required parameter requestParameters.carePlanId was null or undefined when calling getQuestionnaireResponsesByCarePlanId.');
        }

        if (requestParameters.questionnaireIds === null || requestParameters.questionnaireIds === undefined) {
            throw new runtime.RequiredError('questionnaireIds','Required parameter requestParameters.questionnaireIds was null or undefined when calling getQuestionnaireResponsesByCarePlanId.');
        }

        if (requestParameters.pageNumber === null || requestParameters.pageNumber === undefined) {
            throw new runtime.RequiredError('pageNumber','Required parameter requestParameters.pageNumber was null or undefined when calling getQuestionnaireResponsesByCarePlanId.');
        }

        if (requestParameters.pageSize === null || requestParameters.pageSize === undefined) {
            throw new runtime.RequiredError('pageSize','Required parameter requestParameters.pageSize was null or undefined when calling getQuestionnaireResponsesByCarePlanId.');
        }

        const queryParameters: any = {};

        if (requestParameters.questionnaireIds) {
            queryParameters['questionnaireIds'] = requestParameters.questionnaireIds;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/questionnaireresponse/{carePlanId}`.replace(`{${"carePlanId"}}`, encodeURIComponent(String(requestParameters.carePlanId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestionnaireResponseDtoFromJSON));
    }

    /**
     */
    async getQuestionnaireResponsesByCarePlanId(requestParameters: GetQuestionnaireResponsesByCarePlanIdRequest, initOverrides?: RequestInit): Promise<Array<QuestionnaireResponseDto>> {
        const response = await this.getQuestionnaireResponsesByCarePlanIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getQuestionnaireResponsesByStatusRaw(requestParameters: GetQuestionnaireResponsesByStatusRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<QuestionnaireResponseDto>>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling getQuestionnaireResponsesByStatus.');
        }

        if (requestParameters.pageNumber === null || requestParameters.pageNumber === undefined) {
            throw new runtime.RequiredError('pageNumber','Required parameter requestParameters.pageNumber was null or undefined when calling getQuestionnaireResponsesByStatus.');
        }

        if (requestParameters.pageSize === null || requestParameters.pageSize === undefined) {
            throw new runtime.RequiredError('pageSize','Required parameter requestParameters.pageSize was null or undefined when calling getQuestionnaireResponsesByStatus.');
        }

        const queryParameters: any = {};

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/questionnaireresponse`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestionnaireResponseDtoFromJSON));
    }

    /**
     */
    async getQuestionnaireResponsesByStatus(requestParameters: GetQuestionnaireResponsesByStatusRequest, initOverrides?: RequestInit): Promise<Array<QuestionnaireResponseDto>> {
        const response = await this.getQuestionnaireResponsesByStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async patchQuestionnaireResponseRaw(requestParameters: PatchQuestionnaireResponseRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchQuestionnaireResponse.');
        }

        if (requestParameters.partialUpdateQuestionnaireResponseRequest === null || requestParameters.partialUpdateQuestionnaireResponseRequest === undefined) {
            throw new runtime.RequiredError('partialUpdateQuestionnaireResponseRequest','Required parameter requestParameters.partialUpdateQuestionnaireResponseRequest was null or undefined when calling patchQuestionnaireResponse.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/questionnaireresponse/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PartialUpdateQuestionnaireResponseRequestToJSON(requestParameters.partialUpdateQuestionnaireResponseRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async patchQuestionnaireResponse(requestParameters: PatchQuestionnaireResponseRequest, initOverrides?: RequestInit): Promise<void> {
        await this.patchQuestionnaireResponseRaw(requestParameters, initOverrides);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetQuestionnaireResponsesByStatusStatusEnum {
    NotExamined = 'NOT_EXAMINED',
    UnderExamination = 'UNDER_EXAMINATION',
    Examined = 'EXAMINED'
}
