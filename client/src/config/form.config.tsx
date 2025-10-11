import { FormSection, FormField } from "../types/formTypes";

const toOptions = (opts: string[]) =>
  opts.map((val) => ({ id: val, label: val }));

export const REGISTER_FORM_FIELDS: FormSection[] = [
  {
    section: "👤 Personal Information",
    fields: [
      {
        name: "profilePicture",
        label: "Profile Picture",
        type: "file",
        required: false,
      },
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "userName", label: "Username", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "tel",
        required: false,
      },
      { name: "password", label: "Password", type: "password", required: true },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        required: true,
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        required: false,
        options: toOptions(["Male", "Female", "Other"]),
      },
    ],
    fieldGroups: [
      ["profilePicture"],
      ["fullName", "userName"],
      ["email", "phoneNumber"],
      ["password", "confirmPassword", "gender"]
    ]
  },
  {
    section: "🌍 Location Information",
    fields: [
      { name: "location", label: "Location", type: "text", required: true },
    ],
  },
  {
    section: "🏢 Professional Information",
    fields: [
      {
        name: "organization",
        label: "Organization",
        type: "text",
        required: false,
      },
      { name: "jobTitle", label: "Job Title", type: "text", required: false },
    ],
    
  },
];

export const LOGIN_FORM_FIELDS: FormField[] = [
  { name: "email", label: "Email ", type: "email", required: true },
  { name: "password", label: "Password ", type: "password", required: true },
];
