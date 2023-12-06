"use client";

import { ComponentProps } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  return (
    <button {...props} type="submit" className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
};

export default FormSubmitButton;
