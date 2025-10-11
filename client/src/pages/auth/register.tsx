// app/auth/register/page.tsx
"use client";

import React, { useState } from "react";
import AuthLayout from "@/components/auth/layout";
import CommonForm from "@/components/common/Forms";
import OAuthButtons from "@/components/auth/Oauth";
import { REGISTER_FORM_FIELDS } from "@/config/form.config";
import { SOCIAL_PROVIDERS } from "@/config/oauth.config";
import Link from "next/link";


type FormData = { [key: string]: any };

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});


  // Example placeholder for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  
  };

  const handleProviderClick = (providerId: string) => {
    // Replace with actual OAuth logic
    console.log(`OAuth login clicked: ${providerId}`);
    
  };

  return (
    <AuthLayout title="Join Social Media Curator" subtitle="Create your account now">
      <div className="w-full max-w-3xl space-y-6">
        {/* Registration Form */}
        <CommonForm
          formControls={REGISTER_FORM_FIELDS}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          buttonText="Register"
        />

        {/* OR divider */}
        <div className="mt-10 text-center text-sm text-gray-400">
          OR CONTINUE WITH
        </div>

        {/* Social OAuth Buttons */}
        <OAuthButtons
          providers={SOCIAL_PROVIDERS.map((provider) => ({
            ...provider,
            onClick: () => handleProviderClick(provider.id),
          }))}
        />

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
