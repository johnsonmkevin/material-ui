export interface FormValues {
  id: number;
  name?: string;
  role?: string;
  skills: string[];
  startDate?: string;
  preference?: string;
}

export const contactData: Array<FormValues> = [{ id: 1, name: "Shawn Spen" }];
