"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-600 border border-yellow-500 hover:border-yellow-600",
  secondary:
    "bg-transparent text-yellow-600 hover:bg-yellow-100 active:bg-yellow-200 border border-yellow-600",
  outline:
    "bg-transparent text-surface-700 hover:bg-surface-50 active:bg-surface-0 border border-border",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
