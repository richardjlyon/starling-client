/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */

/**
 * Defines the server transaction response model.
 */
export interface TransactionSchema {
  uuid: string;
  account_uuid: string;
  time: string;
  counterparty_name: string;
  amount: number;
  reference?: string;
}
