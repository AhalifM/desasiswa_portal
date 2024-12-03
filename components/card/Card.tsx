import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white drop-shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={`px-6 py-4 font-medium ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
}

export const CardTitle = ({ children }: CardTitleProps) => {
  return <h2 className="text-base font-semibold text-center">{children}</h2>;
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div
      className={`border-t border-slate-200 px-6 py-4 font-medium ${className}`}
    >
      {children}
    </div>
  );
};
