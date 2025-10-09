export type FieldType =
  | "text"
  | "email"
  | "password"
  | "tel"
  | "select"
  | "file"
  | "checkbox"
  | "textarea";

export type FormField = {
  name: string;
  label: string | React.ReactNode;
  type: FieldType;
  required: boolean;
  options?: { id: string; label: string }[];
};

export type FormSection = {
  section: string;
  fields: FormField[];
};
