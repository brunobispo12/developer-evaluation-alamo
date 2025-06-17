export interface Step {
  item: string;
  amount: string;
}

export interface Metrics {
  CHO: string;
  PTN: string;
  LIP: string;
  absorbance: string;
}

export interface Procedure {
  time: string;
  title: string;
  steps: Step[];
  observations: string[];
  metrics: Metrics;
}

export type Procedures = Procedure[];