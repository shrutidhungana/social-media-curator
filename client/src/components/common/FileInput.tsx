"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";

type Props = {
  value: File | null;
  onChange: (file: File | null) => void;
  label?: string;
  variant?: "avatar" | "dropzone";
};

const FileInput: React.FC<Props> = ({
  value,
  onChange,
  label = "Upload Image",
  variant = "avatar",
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>("");

  useEffect(() => {
    if (value && value instanceof File) {
      const url = URL.createObjectURL(value);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100"
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <Image
            src={preview}
            alt="Profile"
            width={96}
            height={96}
            className="object-cover h-full w-full"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            <PlusIcon className="h-6 w-6" />
          </div>
        )}
      </div>
      <p className="text-sm text-gray-600">{label}</p>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileInput;
