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
import type { AnswerModel } from './AnswerModel';
import {
    AnswerModelFromJSON,
    AnswerModelFromJSONTyped,
    AnswerModelToJSON,
} from './AnswerModel';

/**
 * 
 * @export
 * @interface EnableWhen
 */
export interface EnableWhen {
    /**
     * 
     * @type {AnswerModel}
     * @memberof EnableWhen
     */
    answer?: AnswerModel;
    /**
     * 
     * @type {string}
     * @memberof EnableWhen
     */
    operator?: EnableWhenOperatorEnum;
}


/**
 * @export
 */
export const EnableWhenOperatorEnum = {
    Equal: 'EQUAL',
    GreaterThan: 'GREATER_THAN',
    LessThan: 'LESS_THAN',
    GreaterOrEqual: 'GREATER_OR_EQUAL',
    LessOrEqual: 'LESS_OR_EQUAL'
} as const;
export type EnableWhenOperatorEnum = typeof EnableWhenOperatorEnum[keyof typeof EnableWhenOperatorEnum];


/**
 * Check if a given object implements the EnableWhen interface.
 */
export function instanceOfEnableWhen(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EnableWhenFromJSON(json: any): EnableWhen {
    return EnableWhenFromJSONTyped(json, false);
}

export function EnableWhenFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnableWhen {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'answer': !exists(json, 'answer') ? undefined : AnswerModelFromJSON(json['answer']),
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
    };
}

export function EnableWhenToJSON(value?: EnableWhen | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'answer': AnswerModelToJSON(value.answer),
        'operator': value.operator,
    };
}

