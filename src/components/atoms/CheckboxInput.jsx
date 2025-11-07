"use client";
import React, { forwardRef } from "react";

export const CheckboxInput = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="flex items-start gap-2 text-sm">
        <input
          ref={ref}
          type="checkbox"
          className="mt-0.5 accent-blue-600 w-4 h-4"
          {...props}
        />
        <span className="text-gray-700">
          {label || "Saya menyetujui syarat dan ketentuan"}
        </span>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

CheckboxInput.displayName = "CheckboxInput";
