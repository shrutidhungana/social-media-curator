"use client";

import React, { useState } from "react";
import { Button } from "@radix-ui/themes";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import * as Select from "@radix-ui/react-select";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import FileInput from "./FileInput";

export type FormControl = {
  name: string;
  label: string | React.ReactNode;
  type:
    | "text"
    | "email"
    | "password"
    | "tel"
    | "select"
    | "file"
    | "checkbox"
    | "textarea";
  required?: boolean;
  options?: { id: string; label: string }[];
};

export type SectionField = {
  section: string;
  fields: FormControl[];
  fieldGroups?: string[][];
};

type FormProps<T extends Record<string, unknown>> = {
  formControls: SectionField[];
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  isBtnDisabled?: boolean;
};

const CommonForm = <T extends Record<string, unknown>>({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled = false,
}: FormProps<T>) => {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});

  const togglePassword = (name: string) =>
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));

  const renderInput = (control: FormControl) => {
    const commonProps = {
      id: control.name,
      name: control.name,
      required: control.required,
      value: formData[control.name] as string,
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => setFormData({ ...formData, [control.name]: e.target.value }),
      className:
        "w-full rounded-xl border border-indigo-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400",
    };

    switch (control.type) {
      case "password":
        return (
          <div className="relative">
            <input
              {...commonProps}
              type={showPassword[control.name] ? "text" : "password"}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-600"
              onClick={() => togglePassword(control.name)}
            >
              {showPassword[control.name] ? <RxEyeOpen /> : <GoEyeClosed />}
            </button>
          </div>
        );

      case "select":
        return (
          <Select.Root
            value={formData[control.name] as string}
            onValueChange={(val) =>
              setFormData({ ...formData, [control.name]: val })
            }
          >
            <Select.Trigger
              className="w-full inline-flex items-center justify-between rounded-xl border border-indigo-300 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400"
              aria-label={control.label as string}
            >
              <Select.Value placeholder={control.label} />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Content className="bg-white rounded-xl shadow-md">
              <Select.Viewport>
                {control.options?.map((opt) => (
                  <Select.Item
                    key={opt.id}
                    value={opt.id}
                    className="cursor-pointer px-2 py-1 text-sm hover:bg-indigo-100 rounded"
                  >
                    <Select.ItemText>{opt.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        );

      case "checkbox":
        return (
          <label className="flex items-center gap-2 cursor-pointer">
            <Checkbox.Root
              checked={Boolean(formData[control.name])}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, [control.name]: !!checked })
              }
              className="h-[18px] w-[18px] flex items-center justify-center border border-indigo-300 rounded bg-white"
            >
              <Checkbox.Indicator>
                <CheckIcon className="text-indigo-600" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-sm text-indigo-600">{control.label}</span>
          </label>
        );

      case "file":
        return (
          <FileInput
            value={formData[control.name] as File | null}
            onChange={(file) =>
              setFormData({ ...formData, [control.name]: file })
            }
            label={control.label as string}
            variant="avatar"
          />
        );

      default:
        return <input type={control.type} {...commonProps} />;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {formControls?.map(({ section, fields, fieldGroups }) => (
        <section key={section}>
          <h2 className="mb-4 text-lg font-semibold text-indigo-600">
            {section}
          </h2>

          {/* --- If fieldGroups exist (Register) --- */}
          {fieldGroups ? (
            <div className="space-y-5">
              {fieldGroups?.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className={clsx(
                    "grid gap-4",
                    group.length === 1
                      ? "grid-cols-1"
                      : group.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-3"
                  )}
                >
                  {group?.map((fieldName) => {
                    const control = fields.find((f) => f.name === fieldName);
                    if (!control) return null;
                    return (
                      <div key={control.name} className="flex flex-col gap-1">
                        {control.type !== "checkbox" && (
                          <label
                            htmlFor={control.name}
                            className="text-sm font-medium text-indigo-700"
                          >
                            {control.label}
                            {control.required && (
                              <span className="text-red-500 ml-1">*</span>
                            )}
                          </label>
                        )}
                        {renderInput(control)}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Render any remaining fields not in fieldGroups */}
              {fields
                ?.filter(
                  (f) => !fieldGroups.some((group) => group.includes(f.name))
                )
                ?.map((control) => (
                  <div key={control.name} className="flex flex-col gap-1">
                    {control.type !== "checkbox" && (
                      <label
                        htmlFor={control.name}
                        className="text-sm font-medium text-indigo-700"
                      >
                        {control.label}
                        {control.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                    )}
                    {renderInput(control)}
                  </div>
                ))}
            </div>
          ) : (
            /* --- If no fieldGroups (Login) --- */
            <div className="flex flex-col gap-4">
              {fields?.map((control) => (
                <div key={control.name} className="flex flex-col gap-1">
                  {control.type !== "checkbox" && (
                    <label
                      htmlFor={control.name}
                      className="text-sm font-medium text-indigo-700"
                    >
                      {control.label}
                      {control.required && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                  )}
                  {renderInput(control)}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <div>
        <Button
          disabled={isBtnDisabled}
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default CommonForm;
