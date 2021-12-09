import {BaseApiError} from "./../apis/Errors/BaseApiError"
import { ErrorDtoFromJSON } from "../generated";

export default class BaseApi {
    
    /**
     * Transform responses into BaseApiErrors
     * @param error the thrown error from api-method (this should be of type response)
     */
    async HandleError(error : any) : Promise<any> {
        console.debug("Transforming error to ServiceError")
        console.log(error)
        if(error instanceof Response){
            let response = error as Response
            
            try{
                let body = await response.json()
                let errorDto = ErrorDtoFromJSON(body)
    
                throw new BaseApiError(response, errorDto.errorText!, errorDto.errorCode!)
            } catch(error){
                //When json-parser tries to parse fx "" we end up here
                throw new BaseApiError(response, "Der skete en ukendt fejl i tolkningen af data fra bagvedliggende applikation",response.status!)
            }

        }
        
        throw error;
        
    }


}
  