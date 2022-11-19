import { ajax } from 'rxjs/ajax';
import { map, tap, filter, mergeMap, catchError } from 'rxjs/operators';
import { fetchServiceListRequest, fetchServiceListFailure, fetchServiceListSuccess } from '../features/serviceList/serviceListSlice';
import { of } from 'rxjs';

export const fetchServiceListEpic = action$ => action$.pipe(
  filter(fetchServiceListRequest.match),
  tap(action => console.log('fetchServiceListEpic', action)),
  mergeMap(action => ajax.getJSON(action.payload)
    .pipe(
      //retry(0),
      map(response => fetchServiceListSuccess(response)),
      catchError(error => of(fetchServiceListFailure(error.message)))
  ))
);
