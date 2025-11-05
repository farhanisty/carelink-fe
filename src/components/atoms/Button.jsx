import React from "react";
import { cn } from "@/utils/classname.util"; 

export const Button = ({ type, isForm, label }) => {
  isForm = isForm ? "Form" : "Landing Page";
  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 rounded-full",
        isForm === "Form" && "button-form",
        isForm === "Landing Page" && "button-landing"
      )}
    >
      {label}
    </button>
  );
};
