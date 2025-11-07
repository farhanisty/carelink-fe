"use client";
import React from "react";
import { AuthTextSection } from "../molecules/AuthTextSection";
import { AuthCard } from "../molecules/AuthCard";

export const LoginForm = () => (
  <div className="h-screen w-full flex flex-row justify-center items-center bg-background px-4 py-2">
    <AuthCard mode="login" />
    <AuthTextSection />
  </div>
);
