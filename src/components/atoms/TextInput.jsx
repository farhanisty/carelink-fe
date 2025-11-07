"use client";

import React, { useState, forwardRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const TextInput = forwardRef(
  (
    {
      label = "Text Input",
      type = "text",
      placeholder = "Enter text here",
      showForgotPassword = false,
      forgotPasswordText = "Forgot Password?",
      error, // ⚡️tambahkan ini
      ...props // ⚡️ini untuk menerima semua dari register()
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Label */}
        <div className="relative flex items-center">
          {label && <label className="label-form">{label}</label>}

          {/* Icon mata */}
          {type === "password" && (
            <button
              type="button"
              id="icon"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          )}

          {/* Show / Hide Text */}
          {type === "password" && (
            <label
              htmlFor="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </label>
          )}
        </div>

        {/* Input */}
        <input
          ref={ref} // ⚡️ penting!
          type={inputType}
          placeholder={placeholder}
          className={`input-form w-full pr-24 ${
            error ? "border-red-500" : ""
          }`}
          {...props} // ⚡️ spread dari register()
        />

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Helper text */}
        {type === "password" &&
          (showForgotPassword ? (
            <p className="text-sm text-utama-kali-ya text-right cursor-pointer hover:underline my-4">
              {forgotPasswordText}
            </p>
          ) : (
            <p className="text-xs text-gray-500">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          ))}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";