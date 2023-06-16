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
} from './';

/**
 * 
 * @export
 * @interface PatientListResponse
 */
export interface PatientListResponse {
    /**
     * 
     * @type {Array<PatientDto>}
     * @memberof PatientListResponse
     */
    patients?: Array<PatientDto>;
}

export function PatientListResponseFromJSON(json: any): PatientListResponse {
    return PatientListResponseFromJSONTyped(json, false);
}

export function PatientListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatientListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'patients': !exists(json, 'patients') ? undefined : ((json['patients'] as Array<any>).map(PatientDtoFromJSON)),
    };
}

export function PatientListResponseToJSON(value?: PatientListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'patients': value.patients === undefined ? undefined : ((value.patients as Array<any>).map(PatientDtoToJSON)),
    };
}

