"use client";
import React from "react";

export const AuthTextSection = ({
  title = "Terhubung dengan CareLink",
  description = "Satu platform untuk keluarga, pengasuh, dan mitra terpercaya.",
}) => {
  return (
    <div className="w-1/2 min-h-screen flex flex-col items-center px-4 py-2">
      <div className="mt-24 w-[75%]">
        <h1 className="text-5xl font-semibold mb-6 text-utama-kali-ya">
          {title}
        </h1>
        <p className="text-2xl text-utama-kali-ya leading-relaxed w-[80%]">
          {description}
        </p>
      </div>

      {/* Dekorasi kiri */}
      {/* <div className="absolute top-0 left-[-30px] w-24 h-24 bg-[#F3D8A8] rounded-full"></div>
      <div className="absolute bottom-20 left-[10%] w-48 h-48 bg-[#F2C98A] rounded-full"></div> */}
    </div>
  );
};

AuthTextSection.displayName = "AuthTextSection";
