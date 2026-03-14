import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 font-semibold border-2 border-black bg-black text-white hover:bg-white hover:text-black transition shadow-[4px_4px_0px_black] ${className}`}
      {...props}
    />
  );
}

