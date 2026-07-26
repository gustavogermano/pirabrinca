import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-pink-500 text-white shadow-soft hover:bg-pink-600 hover:shadow-card-hover hover:-translate-y-0.5",
        secondary:
          "bg-sun-400 text-ink-900 shadow-card hover:bg-sun-300 hover:-translate-y-0.5",
        outline:
          "border-2 border-ink-900/10 text-ink-900 hover:border-pink-500 hover:text-pink-600 bg-white/70",
        ghost: "text-ink-800 hover:text-pink-600",
        whatsapp:
          "bg-[#25D366] text-white shadow-soft hover:bg-[#1FBF5C] hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-base",
        lg: "h-14 px-9 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
