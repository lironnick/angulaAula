import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    static handlerError(error: HttpErrorResponse | any) {
        let errorMessage: string;

        if (error instanceof HttpErrorResponse) {
          const boby = error.error;
          errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${boby}`;
        } else {
          errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);

    }
}
