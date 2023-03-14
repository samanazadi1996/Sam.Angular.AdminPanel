import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorHandler {
    public GetErrors(model: Object): Array<String> {
        var errors: Array<String> = [];

        var obj = Object(model).errors;

        if (obj != null) {
            for (let index = 0; index < obj.length; index++) {
                errors.push(obj[index].errorMessage);
            }
        }
        
        return errors;
    }
}