"use client";

import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 rounded-none hover:scale-[1.02] active:scale-95";

  const variants = {
    primary:
      "bg-tiffany text-black hover:bg-tiffany-dark",
    secondary:
      "bg-white text-black hover:bg-gray-light",
    outline:
      "border border-tiffany text-tiffany hover:bg-tiffany hover:text-black",
    ghost:
      "text-white hover:text-tiffany",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
