export type StateChange = "decrease" | "increase";

export interface Badge {
  text?: string;
  color?: string;
  background?: string;
}

export interface InfoData {
  title: string;
  amount?: string;
  amountTag?:string;
}
