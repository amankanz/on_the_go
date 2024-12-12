import { fugaz } from "@/libs/fonts";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button
      className={`bg-[#1E90FF] hover:bg-blue-600 text-white font-light py-2 px-5 hover:scale-105 transition-all rounded-md ${fugaz.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
