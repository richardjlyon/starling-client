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
import type { AccountBalance } from "./models";
import { useAxios } from "../useAxios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;

/**
 * @summary Get Balances
 */
export const useGetBalancesBalancesGetHook = () => {
  const getBalancesBalancesGet = useAxios<AccountBalance[]>();

  return () => {
    return getBalancesBalancesGet({ url: `/balances`, method: "get" });
  };
};

export const getGetBalancesBalancesGetQueryKey = () => [`/balances`];

export const useGetBalancesBalancesGet = <
  TData = AsyncReturnType<ReturnType<typeof useGetBalancesBalancesGetHook>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    AsyncReturnType<ReturnType<typeof useGetBalancesBalancesGetHook>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options || {};

  const queryKey =
    queryOptions?.queryKey ?? getGetBalancesBalancesGetQueryKey();

  const getBalancesBalancesGet = useGetBalancesBalancesGetHook();

  const queryFn: QueryFunction<
    AsyncReturnType<ReturnType<typeof useGetBalancesBalancesGetHook>>
  > = () => getBalancesBalancesGet();

  const query = useQuery<
    AsyncReturnType<ReturnType<typeof useGetBalancesBalancesGetHook>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};
