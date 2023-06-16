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
/**
 * 
 * @export
 * @interface AnswerDto
 */
export interface AnswerDto {
    /**
     * 
     * @type {string}
     * @memberof AnswerDto
     */
    linkId?: string;
    /**
     * 
     * @type {string}
     * @memberof AnswerDto
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof AnswerDto
     */
    answerType?: AnswerDtoAnswerTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum AnswerDtoAnswerTypeEnum {
    Integer = 'INTEGER',
    String = 'STRING',
    Boolean = 'BOOLEAN',
    Quantity = 'QUANTITY'
}

export function AnswerDtoFromJSON(json: any): AnswerDto {
    return AnswerDtoFromJSONTyped(json, false);
}

export function AnswerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkId': !exists(json, 'linkId') ? undefined : json['linkId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'answerType': !exists(json, 'answerType') ? undefined : json['answerType'],
    };
}

export function AnswerDtoToJSON(value?: AnswerDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkId': value.linkId,
        'value': value.value,
        'answerType': value.answerType,
    };
}

