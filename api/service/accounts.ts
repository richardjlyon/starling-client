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
import type { StarlingConfig, HTTPValidationError } from "./models";
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
export const useGetAccountsAccountsGetHook = () => {
  const getAccountsAccountsGet = useAxios<StarlingConfig>();

  return () => {
    return getAccountsAccountsGet({ url: `/accounts`, method: "get" });
  };
};

export const getGetAccountsAccountsGetQueryKey = () => [`/accounts`];

export const useGetAccountsAccountsGet = <
  TData = AsyncReturnType<ReturnType<typeof useGetAccountsAccountsGetHook>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    AsyncReturnType<ReturnType<typeof useGetAccountsAccountsGetHook>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAccountsAccountsGetQueryKey();

  const getAccountsAccountsGet = useGetAccountsAccountsGetHook();

  const queryFn: QueryFunction<
    AsyncReturnType<ReturnType<typeof useGetAccountsAccountsGetHook>>
  > = () => getAccountsAccountsGet();

  const query = useQuery<
    AsyncReturnType<ReturnType<typeof useGetAccountsAccountsGetHook>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};

/**
 * @summary Get Account Balance
 */
export const useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook =
  () => {
    const getAccountBalanceAccountTypeNameAccountNameBalanceGet =
      useAxios<number>();

    return (typeName: string, accountName: string) => {
      return getAccountBalanceAccountTypeNameAccountNameBalanceGet({
        url: `/account/${typeName}/${accountName}/balance`,
        method: "get",
      });
    };
  };

export const getGetAccountBalanceAccountTypeNameAccountNameBalanceGetQueryKey =
  (typeName: string, accountName: string) => [
    `/account/${typeName}/${accountName}/balance`,
  ];

export const useGetAccountBalanceAccountTypeNameAccountNameBalanceGet = <
  TData = AsyncReturnType<
    ReturnType<
      typeof useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook
    >
  >,
  TError = HTTPValidationError
>(
  typeName: string,
  accountName: string,
  options?: {
    query?: UseQueryOptions<
      AsyncReturnType<
        ReturnType<
          typeof useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook
        >
      >,
      TError,
      TData
    >;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetAccountBalanceAccountTypeNameAccountNameBalanceGetQueryKey(
      typeName,
      accountName
    );

  const getAccountBalanceAccountTypeNameAccountNameBalanceGet =
    useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook();

  const queryFn: QueryFunction<
    AsyncReturnType<
      ReturnType<
        typeof useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook
      >
    >
  > = () =>
    getAccountBalanceAccountTypeNameAccountNameBalanceGet(
      typeName,
      accountName
    );

  const query = useQuery<
    AsyncReturnType<
      ReturnType<
        typeof useGetAccountBalanceAccountTypeNameAccountNameBalanceGetHook
      >
    >,
    TError,
    TData
  >(queryKey, queryFn, {
    enabled: !!(typeName && accountName),
    ...queryOptions,
  });

  return {
    queryKey,
    ...query,
  };
};
