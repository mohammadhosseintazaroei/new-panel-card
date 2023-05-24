export type StateChange = "decrease" | "increase";
export type BorderColor = "success" | "danger" | "warning" | "error" | "info";

interface ChangeProcess {
  percentageChange?: number;
  stateChange?: StateChange;
}

export interface InfoData {
  title: string;
  amount: number;
  changeProcess?: ChangeProcess;
}
