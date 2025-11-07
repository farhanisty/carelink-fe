"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../atoms/TextInput";
import { PhoneInput } from "../atoms/PhoneInput";
import { Button } from "../atoms/Button";
import { CheckboxInput } from "../atoms/CheckboxInput";
import { AuthTextSection } from "../molecules/AuthTextSection";
import Link from "next/link";

// Import schema
import { VSignupSchema, VLoginSchema } from "@/schemas/auth.schema";

export const AuthCard = ({ mode = "signup" }) => {
  const isSignup = mode === "signup";
  const schema = isSignup ? VSignupSchema : VLoginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("✅ Data Form:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 flex flex-row bg-background px-4 py-2"
    >
      <div></div>

      {/* BAGIAN FORM */}
      <div className="relative h-screen flex justify-center items-center">
        {/* Dekorasi */}
        {/* <div className="absolute top-10 right-10 w-20 h-20 bg-[#B7C6B0] rounded-full"></div>
        <div className="absolute -bottom-10 right-[15%] w-64 h-64 bg-[#F1C88E] rounded-full"></div> */}

        {/* Card Form */}
        <div className="h-[92%] border border-gray-300 rounded-3xl bg-white z-10 shadow-sm py-6 px-14 flex flex-col overflow-auto">
          <h2 className="text-4xl font-bold mb-10">
            {isSignup ? "Sign up now" : "Welcome back"}
          </h2>

          <div className="flex flex-col gap-4 mt-4">
            {isSignup && (
              <>
                <TextInput
                  label="Name"
                  placeholder="Enter your name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <PhoneInput
                  label="Phone number"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </>
            )}

            <TextInput
              label="Email address"
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />

            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register("password")}
              showForgotPassword={!isSignup}
            />
          </div>

          {/* Checkbox hanya untuk signup */}
          {isSignup && (
            <div className="flex flex-col gap-3 mt-3 text-sm text-gray-600">
              <CheckboxInput
                label="I agree to the Terms of Use and Privacy Policy."
                error={errors.terms?.message}
                {...register("terms")}
              />
              <CheckboxInput
                label="By creating an account, I am also consenting to receive SMS messages and emails, including product updates, events, and promotions."
                error={errors.marketing?.message}
                {...register("marketing")}
              />
            </div>
          )}

          {/* Tombol dan navigasi */}
          <div className="flex justify-start items-center flex-row mt-auto">
            <Button
              type="submit"
              label={isSignup ? "Sign up" : "Log in"}
              isForm={true}
            />
            <p className="mx-4">
              {isSignup ? (
                <>
                  Sudah punya akun?{" "}
                  <Link
                    href="/login"
                    className="text-utama-kali-ya underline cursor-pointer"
                  >
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  Belum punya akun?{" "}
                  <Link
                    href="/signup"
                    className="text-utama-kali-ya underline cursor-pointer"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
