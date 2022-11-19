import React from "react";
import { useDispatch } from "react-redux";
import useFetchObservable from "../hooks/useFetchObservable";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

export const withObservable = (WrappedComponent) => (props) => {
  const dispatch = useDispatch();
  const { selector, fetchAction, fetchUrl, ...rest } = props;
  const injected = useFetchObservable(selector, fetchAction, fetchUrl);
  const { isLoading, error } = injected;

  return (
    <>
      <Spinner isLoading={ isLoading } />
      <Error onRetry={ () => dispatch(fetchAction(fetchUrl)) } error={ error } />
      { !isLoading && !error && <WrappedComponent { ...injected } { ...rest } /> }
    </>
  );
};