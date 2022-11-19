import { configureStore } from '@reduxjs/toolkit';
import serviceListReducer from '../features/serviceList/serviceListSlice';
import serviceReducer from '../features/service/serviceSlice';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { fetchServiceListEpic } from '../epics/serviceListEpic';
import { fetchServiceEpic } from '../epics/serviceEpic';

const epics = combineEpics(
  fetchServiceListEpic,
  fetchServiceEpic
);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    service: serviceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== 'production'  
});

epicMiddleware.run(epics);
