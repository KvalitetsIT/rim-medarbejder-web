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

import { exists, mapValues } from '../runtime';
import {
    PatientDto,
    PatientDtoFromJSON,
    PatientDtoFromJSONTyped,
    PatientDtoToJSON,
    PlanDefinitionDto,
    PlanDefinitionDtoFromJSON,
    PlanDefinitionDtoFromJSONTyped,
    PlanDefinitionDtoToJSON,
    QuestionnaireWrapperDto,
    QuestionnaireWrapperDtoFromJSON,
    QuestionnaireWrapperDtoFromJSONTyped,
    QuestionnaireWrapperDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface CarePlanDto
 */
export interface CarePlanDto {
    /**
     * Id of the resource
     * @type {string}
     * @memberof CarePlanDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CarePlanDto
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CarePlanDto
     */
    status?: string;
    /**
     * 
     * @type {Date}
     * @memberof CarePlanDto
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CarePlanDto
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CarePlanDto
     */
    endDate?: Date;
    /**
     * 
     * @type {PatientDto}
     * @memberof CarePlanDto
     */
    patientDto?: PatientDto;
    /**
     * 
     * @type {Array<QuestionnaireWrapperDto>}
     * @memberof CarePlanDto
     */
    questionnaires?: Array<QuestionnaireWrapperDto>;
    /**
     * 
     * @type {Array<PlanDefinitionDto>}
     * @memberof CarePlanDto
     */
    planDefinitions?: Array<PlanDefinitionDto>;
    /**
     * 
     * @type {string}
     * @memberof CarePlanDto
     */
    departmentName?: string;
}

export function CarePlanDtoFromJSON(json: any): CarePlanDto {
    return CarePlanDtoFromJSONTyped(json, false);
}

export function CarePlanDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CarePlanDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'patientDto': !exists(json, 'patientDto') ? undefined : PatientDtoFromJSON(json['patientDto']),
        'questionnaires': !exists(json, 'questionnaires') ? undefined : ((json['questionnaires'] as Array<any>).map(QuestionnaireWrapperDtoFromJSON)),
        'planDefinitions': !exists(json, 'planDefinitions') ? undefined : ((json['planDefinitions'] as Array<any>).map(PlanDefinitionDtoFromJSON)),
        'departmentName': !exists(json, 'departmentName') ? undefined : json['departmentName'],
    };
}

export function CarePlanDtoToJSON(value?: CarePlanDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'status': value.status,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'patientDto': PatientDtoToJSON(value.patientDto),
        'questionnaires': value.questionnaires === undefined ? undefined : ((value.questionnaires as Array<any>).map(QuestionnaireWrapperDtoToJSON)),
        'planDefinitions': value.planDefinitions === undefined ? undefined : ((value.planDefinitions as Array<any>).map(PlanDefinitionDtoToJSON)),
        'departmentName': value.departmentName,
    };
}

