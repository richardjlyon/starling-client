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
  AccountSchema,
  HTTPValidationError,
  GetAccountsParams,
  AccountBalanceSchema,
} from "./models";
import { useAxios } from "../useAxios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

/**
 * @summary Get Accounts
 */
export const useGetAccountsHook = () => {
  const getAccounts = useAxios<AccountSchema[]>();

  return (params?: GetAccountsParams) => {
    return getAccounts({ url: `/accounts/`, method: "get", params });
  };
};

export const getGetAccountsQueryKey = (params?: GetAccountsParams) => [
  `/accounts/`,
  ...(params ? [params] : []),
];

export const useGetAccounts = <
  TData = AsyncReturnType<ReturnType<typeof useGetAccountsHook>>,
  TError = HTTPValidationError
>(
  params?: GetAccountsParams,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<ReturnType<typeof useGetAccountsHook>>,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountsQueryKey(params);

  const getAccounts = useGetAccountsHook();

  const queryFn: QueryFunction<
    AsyncReturnType<ReturnType<typeof useGetAccountsHook>>
  > = () => getAccounts(params);

  const query = useQuery<
    AsyncReturnType<ReturnType<typeof useGetAccountsHook>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Get Account Balances
 */
export const useGetAccountBalancesHook = () => {
  const getAccountBalances = useAxios<AccountBalanceSchema[]>();

  return () => {
    return getAccountBalances({ url: `/accounts/balances`, method: "get" });
  };
};

export const getGetAccountBalancesQueryKey = () => [`/accounts/balances`];

export const useGetAccountBalances = <
  TData = AsyncReturnType<ReturnType<typeof useGetAccountBalancesHook>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    AsyncReturnType<ReturnType<typeof useGetAccountBalancesHook>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetAccountBalancesQueryKey();

  const getAccountBalances = useGetAccountBalancesHook();

  const queryFn: QueryFunction<
    AsyncReturnType<ReturnType<typeof useGetAccountBalancesHook>>
  > = () => getAccountBalances();

  const query = useQuery<
    AsyncReturnType<ReturnType<typeof useGetAccountBalancesHook>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
