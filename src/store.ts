import { registerInDevtools, Store } from "pullstate";


export interface FormStep1 {
    fullName?: string | undefined;
    age?: string | undefined;
}

export interface FormStep2 {
    birthPlace: string | undefined;
    maidenName: string | undefined;
}

export interface FormStep3 {
  termsAccepted: string | undefined;
  privacyAccepted: string | undefined;
}
export type FormValues =  {
  progress: number;
} & FormStep1 & FormStep2 & FormStep3;

export const WizardStore = new Store<FormValues>({
  fullName: "",
  age: "",
  birthPlace: "",
  maidenName: "",
  termsAccepted: "",
  privacyAccepted: "",
  progress: 0,
});
registerInDevtools({
  WizardStore,
});
