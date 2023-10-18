'use client'
import React from "react";
interface PantallaProps {
  texto?: string;
  resultado?: number | null;
}

const Pantalla: React.FC<PantallaProps> = ({ texto, resultado }) => {
  return (
    <div className="">
      <div className="p-20 h-6 text-5xl text-white text-right">
         {resultado !== null ? resultado : texto || "0"}
         
      </div>
    </div>
  );
};

export default Pantalla;
