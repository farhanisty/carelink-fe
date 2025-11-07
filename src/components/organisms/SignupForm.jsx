"use client";
import React from "react";
import { AuthTextSection } from "../molecules/AuthTextSection";
import { AuthCard } from "../molecules/AuthCard";

export const SignupForm = () => (
  <div className="h-screen w-full flex flex-row bg-background px-4 py-2 overflow-hidden">
    <AuthTextSection />
    <AuthCard mode="signup" />
  </div>
);
