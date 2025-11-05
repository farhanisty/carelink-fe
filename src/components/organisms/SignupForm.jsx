"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../atoms/TextInput";
import { PhoneInput } from "../atoms/PhoneInput";
import { Button } from "../atoms/Button";
import { VSignupSchema } from "@/schemas/auth.schema"; // Ganti schema login

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(VSignupSchema),
  });

  const onSubmit = (data) => {
    console.log("✅ Data Form:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-screen w-full flex flex-row bg-background px-4 py-2 overflow-hidden"
    >
      {/* ✅ BAGIAN TEKS (dipindah ke kiri) */}
      <div className="w-1/2 flex flex-col items-start relative px-12">
        <div className="mt-24 w-[75%]">
          <h1 className="text-5xl font-semibold mb-6 text-utama-kali-ya">
            Terhubung dengan CareLink
          </h1>
          <p className="text-2xl text-utama-kali-ya leading-relaxed w-[80%]">
            Satu platform untuk keluarga, pengasuh, dan mitra terpercaya.
          </p>
        </div>

        {/* Dekorasi kiri */}
        <div className="absolute top-0 left-[-30px] w-24 h-24 bg-[#F3D8A8] rounded-full"></div>
        <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#F2C98A] rounded-full"></div>
      </div>

      {/* ✅ BAGIAN FORM (di kanan) */}
      <div className="relative w-1/2 h-screen flex justify-center items-center">
        {/* Dekorasi kanan */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#B7C6B0] rounded-full"></div>
        <div className="absolute -bottom-10 right-[15%] w-64 h-64 bg-[#F1C88E] rounded-full"></div>

        {/* Card Form */}
        <div className="w-[85%] h-[92%] border border-gray-300 rounded-3xl bg-white z-10 shadow-sm py-6 px-14 flex flex-col">
          <h2 className="text-4xl font-bold">Sign up now</h2>
          <div className="flex flex-col gap-4 mt-12">
            <TextInput
              label="Name"
              placeholder="Enter your name"
              error={errors.name?.message}
              {...register("name")}
            />
            <TextInput
              label="Email address"
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />
            <PhoneInput label="Phone number" />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>
          {/* Checkbox Section */}{" "}
          <div className="flex flex-col gap-3 mt-3 text-sm text-gray-600">
            {" "}
            <label className="flex items-start gap-2 cursor-pointer">
              {" "}
              <input
                type="checkbox"
                className="mt-1"
                {...register("terms")}
              />{" "}
              <span>
                {" "}
                By creating an account, I agree to our{" "}
                <span className="text-utama-kali-ya cursor-pointer underline">
                  {" "}
                  Terms of use{" "}
                </span>{" "}
                and{" "}
                <span className="text-utama-kali-ya cursor-pointer underline">
                  {" "}
                  Privacy Policy{" "}
                </span>{" "}
              </span>{" "}
            </label>{" "}
            <label className="flex items-start gap-2 cursor-pointer">
              {" "}
              <input
                type="checkbox"
                className="mt-1"
                {...register("marketing")}
              />{" "}
              <span>
                {" "}
                By creating an account, I am also consenting to receive SMS
                messages and emails, including product new feature updates,
                events, and marketing promotions.{" "}
              </span>{" "}
            </label>{" "}
          </div>
          {/* Button */}
          <div className="flex justify-start items-center flex-row mt-auto">
            <Button type="submit" label="Sign up" isForm={true} />
            <p className="mx-4">
              Sudah punya akun?{" "}
              <span className="text-utama-kali-ya underline cursor-pointer">
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
