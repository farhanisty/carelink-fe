"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/auth.schema"; // Pastikan path sesuai
import { TextInput } from "../atoms/TextInput";
import Image from "next/image";
import { Button } from "../atoms/Button";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Data Form:", data);
    // Kirim ke backend atau API login
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-screen w-full flex flex-row justify-center items-center bg-background px-4 py-2"
    >
      {/* FORM */}
      <div className="relative w-1/2 h-screen flex justify-center items-center px-4 py-2">
        {/* Lingkaran Dekoratif */}{" "}
        <div className="absolute top-10 left-12 w-20 h-20 bg-[#F3D8A8] rounded-full"></div>{" "}
        <div className="absolute bottom-10 left-[-60px] w-64 h-64 bg-[#F1C88E] rounded-full"></div>{" "}
        <div className="absolute bottom-20 right-[-50px] w-48 h-48 bg-[#B7C6B0] rounded-full"></div>
        <div className="w-full h-full border border-gray-300 rounded-3xl bg-white z-10 shadow-sm py-6 px-16 flex flex-col">
          <h2 className="text-4xl font-bold">Log In Now</h2>

          <div className="flex flex-col gap-4 mt-12">
            <TextInput
              label="Email Address"
              type="email"
              placeholder="Enter your email address"
              error={errors.email?.message}
              {...register("email")}
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              showForgotPassword="true"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div className="flex items-center w-full my-6">
            <div className="flex-1 border-t-2 border-[#66666640]"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t-2 border-[#66666640]"></div>
          </div>

          {/* TOMBOL GOOGLE (kosongkan dulu fungsinya) */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-300 rounded-[40px] hover:bg-gray-100 transition-all"
            // onClick={() => {}}
          >
            <Image
              width={20}
              height={20}
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Logo"
            />
            <span className="text-sm font-medium text-gray-600">
              Continue with Google
            </span>
          </button>

          {/* Button Login */}
          <div className="flex justify-start items-center flex-row mt-auto pt-8">
            <Button type="submit" label="Login" isForm={true} />
            <p className="mx-4">
              Belum punya akun?{" "}
              <span className="text-utama-kali-ya underline cursor-pointer">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* BAGIAN TEKS */}
      <div className="w-1/2 min-h-screen flex flex-col items-center px-4 py-2">
        <div className="mt-24 w-[75%]">
          <h1 className="text-5xl font-semibold mb-6 text-utama-kali-ya">
            Terhubung dengan CareLink
          </h1>
          <p className="text-2xl text-utama-kali-ya leading-relaxed">
            Satu platform untuk keluarga, pengasuh, dan mitra terpercaya.
          </p>
        </div>
        {/* Lingkaran Dekoratif di sebelah kanan */}{" "}
        <div className="absolute top-10 right-[25%] w-10 h-10 bg-[#E2D9A7] rounded-full"></div>{" "}
        <div className="absolute bottom-10 right-0 w-56 h-56 bg-[#F2C98A] rounded-full"></div>
      </div>
    </form>
  );
};
