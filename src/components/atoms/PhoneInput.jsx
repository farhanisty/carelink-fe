"use client";
import React, { useState, forwardRef } from "react";

export const PhoneInput = forwardRef(
  (
    {
      label = "Phone number",
      defaultCountry = { code: "ID", dial: "+62", flag: "🇮🇩" },
      countries = [
        { code: "ID", dial: "+62", flag: "🇮🇩" },
        { code: "US", dial: "+1", flag: "🇺🇸" },
        { code: "MY", dial: "+60", flag: "🇲🇾" },
      ],
      error, // ✅ untuk tampilkan pesan error
      ...props // ✅ biar bisa pakai {...register("phone")}
    },
    ref
  ) => {
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Label */}
        {label && <label className="label-form">{label}</label>}

        {/* Input Container */}
        <div
          className={`flex items-center border rounded-xl px-2 py-2 input-form text-black gap-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        >
          {/* Dropdown Negara */}
          <select
            className="bg-transparent outline-none cursor-pointer"
            value={selectedCountry.code}
            onChange={(e) => {
              const country = countries.find((c) => c.code === e.target.value);
              setSelectedCountry(country);
            }}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dial}
              </option>
            ))}
          </select>

          {/* Kode Negara */}
          <span className="text-gray-600">{selectedCountry.dial}</span>

          {/* Input Nomor */}
          <input
            ref={ref}
            type="tel"
            placeholder="Enter phone number"
            className="flex-1 outline-none bg-transparent"
            {...props}
          />
        </div>

        {/* ✅ Pesan error */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

// ✅ Tambahkan agar ESLint tidak warning
PhoneInput.displayName = "PhoneInput";
