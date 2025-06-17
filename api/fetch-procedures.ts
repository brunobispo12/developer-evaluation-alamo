import type { Procedures } from "@/app/types/procedure";
import { procedures } from "@/mock-data/procedures-mock";

/**
 * Simula um delay entre 50ms e 250ms antes de retornar os procedimentos.
 */
export async function fetchProcedures(): Promise<Procedures> {
  const delay = Math.random() * (250 - 50) + 50;
  await new Promise<void>((resolve) => setTimeout(resolve, delay));
  return procedures;
}