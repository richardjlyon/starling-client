/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from "react-query";
import type {
  TransactionSchema,
  HTTPValidationError,
  GetTransactionsBetweenParams,
  GetTransactionsForAccountIdBetweenParams,
} from "./models";
import { useAxios } from "../useAxios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

/**
 * Get transactions from all accounts for the specified time interval.
 * @summary Get Transactions Between
 */
export const useGetTransactionsBetweenHook = () => {
  const getTransactionsBetween = useAxios<TransactionSchema[]>();

  return (params?: GetTransactionsBetweenParams) => {
    return getTransactionsBetween({
      url: `/transactions/`,
      method: "get",
      params,
    });
  };
};

export const getGetTransactionsBetweenQueryKey = (
  params?: GetTransactionsBetweenParams
) => [`/transactions/`, ...(params ? [params] : [])];

export const useGetTransactionsBetween = <
  TData = AsyncReturnType<ReturnType<typeof useGetTransactionsBetweenHook>>,
  TError = HTTPValidationError
>(
  params?: GetTransactionsBetweenParams,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<ReturnType<typeof useGetTransactionsBetweenHook>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetTransactionsBetweenQueryKey(params);

  const getTransactionsBetween = useGetTransactionsBetweenHook();

  const queryFn: QueryFunction<
    AsyncReturnType<ReturnType<typeof useGetTransactionsBetweenHook>>
  > = () => getTransactionsBetween(params);

  const query = useQuery<
    AsyncReturnType<ReturnType<typeof useGetTransactionsBetweenHook>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * Get transactions for the specified account and time interval.
 * @summary Get Transactions For Account Id Between
 */
export const useGetTransactionsForAccountIdBetweenHook = () => {
  const getTransactionsForAccountIdBetween = useAxios<TransactionSchema[]>();

  return (
    accountId: string,
    params?: GetTransactionsForAccountIdBetweenParams
  ) => {
    return getTransactionsForAccountIdBetween({
      url: `/transactions/${accountId}`,
      method: "get",
      params,
    });
  };
};

export const getGetTransactionsForAccountIdBetweenQueryKey = (
  accountId: string,
  params?: GetTransactionsForAccountIdBetweenParams
) => [`/transactions/${accountId}`, ...(params ? [params] : [])];

export const useGetTransactionsForAccountIdBetween = <
  TData = AsyncReturnType<
    ReturnType<typeof useGetTransactionsForAccountIdBetweenHook>
  >,
  TError = HTTPValidationError
>(
  accountId: string,
  params?: GetTransactionsForAccountIdBetweenParams,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<
        ReturnType<typeof useGetTransactionsForAccountIdBetweenHook>
      >,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetTransactionsForAccountIdBetweenQueryKey(accountId, params);

  const getTransactionsForAccountIdBetween =
    useGetTransactionsForAccountIdBetweenHook();

  const queryFn: QueryFunction<
    AsyncReturnType<
      ReturnType<typeof useGetTransactionsForAccountIdBetweenHook>
    >
  > = () => getTransactionsForAccountIdBetween(accountId, params);

  const query = useQuery<
    AsyncReturnType<
      ReturnType<typeof useGetTransactionsForAccountIdBetweenHook>
    >,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!accountId, ...queryOptions });

  return {
    queryKey,
    ...query,
  };
};
