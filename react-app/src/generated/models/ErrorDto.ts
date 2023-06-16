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
 * @interface ErrorDto
 */
export interface ErrorDto {
    /**
     * 
     * @type {Date}
     * @memberof ErrorDto
     */
    timestamp?: Date;
    /**
     * 
     * @type {number}
     * @memberof ErrorDto
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDto
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDto
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorDto
     */
    path?: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorDto
     */
    errorCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorDto
     */
    errorText?: string;
}

export function ErrorDtoFromJSON(json: any): ErrorDto {
    return ErrorDtoFromJSONTyped(json, false);
}

export function ErrorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorText': !exists(json, 'errorText') ? undefined : json['errorText'],
    };
}

export function ErrorDtoToJSON(value?: ErrorDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'status': value.status,
        'error': value.error,
        'message': value.message,
        'path': value.path,
        'errorCode': value.errorCode,
        'errorText': value.errorText,
    };
}

