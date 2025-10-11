"use client";

import React, { useState } from "react";
import AuthLayout from "@/components/auth/layout";
import CommonForm from "@/components/common/Forms";
import OAuthButtons from "@/components/auth/Oauth";
import { LOGIN_FORM_FIELDS } from "@/config/form.config";
import { SOCIAL_PROVIDERS } from "@/config/oauth.config";
import Link from "next/link";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  
  };

  const handleOAuthClick = (providerId: string) => {
    console.log(`🔗 ${providerId} login clicked`);
    // TODO: Integrate OAuth flow (NextAuth, custom backend route, etc.)
  };

  return (
    <AuthLayout title="Welcome Back 👋" subtitle="Login to your account">
      <div className="w-full space-y-8">
        {/* Login Form */}
        <CommonForm
          formControls={[
            { section: "Login Information", fields: LOGIN_FORM_FIELDS },
          ]}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          buttonText= "Login"
          
        />

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-indigo-400 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mt-6 mb-4">
          <div className="absolute w-full border-t border-gray-300" />
          <span className="relative px-3 text-sm text-gray-700 bg-white">
            OR CONTINUE WITH
          </span>
        </div>

        {/* Social Logins */}
        <OAuthButtons
          providers={SOCIAL_PROVIDERS.map((p) => ({
            ...p,
            onClick: () => handleOAuthClick(p.id),
          }))}
        />

        {/* Register Redirect */}
        <p className="text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Register now
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
