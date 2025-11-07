import React from "react";

export const DashboardOperasional = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 grid grid-cols-12 grid-rows-6 gap-4 auto-rows-fr">
      {/* 1. Judul di kiri atas, ukurannya sama dengan sidebar */}
      <div className="col-span-2 row-span-1 bg-blue-400 flex items-center justify-center rounded-lg">
        <h1 className="text-white font-bold text-lg">Operational Dashboard</h1>
      </div>

      {/* 2. Header Kanan (Baris atas di kanan judul) */}
      <div className="col-span-10 row-span-1 bg-gray-300 p-4 rounded-lg flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-20 h-8 bg-gray-400 rounded"></div>
          <div className="w-20 h-8 bg-gray-400 rounded"></div>
          <div className="w-20 h-8 bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* 3. Sidebar Kiri */}
      <div className="col-span-2 row-span-5 flex bg-gray-300 rounded-lg overflow-hidden">
        <div className="w-1/2 bg-yellow-300"></div>
        <div className="w-1/2 bg-gray-400"></div>
      </div>

      {/* 4. Konten Utama */}
      <div className="col-span-10 row-span-5 flex flex-col gap-4">
        {/* Baris Atas - 4 kotak kecil sejajar */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-24 rounded-lg"></div>
          <div className="bg-gray-300 h-24 rounded-lg"></div>
        </div>

        {/* Area Tengah */}
        <div className="grid grid-cols-3 gap-4 grow">
          <div className="col-span-2 bg-gray-300 rounded-lg"></div>
          <div className="bg-gray-300 rounded-lg"></div>
        </div>

        {/* Baris Bawah */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="bg-gray-300 h-48 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
