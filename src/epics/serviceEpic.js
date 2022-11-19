import { ajax } from 'rxjs/ajax';
import { map, tap, filter, mergeMap, catchError } from 'rxjs/operators';
import { fetchServiceRequest, fetchServiceFailure, fetchServiceSuccess } from '../features/service/serviceSlice';
import { of } from 'rxjs';

export const fetchServiceEpic = action$ => action$.pipe(
  filter(fetchServiceRequest.match),
  tap(action => console.log('fetchServiceEpic', action)),
  mergeMap(action => ajax.getJSON(action.payload)
    .pipe(
      //retry(0),
      map(response => fetchServiceSuccess(response)),
      catchError(error => of(fetchServiceFailure(error.message)))
  ))
);