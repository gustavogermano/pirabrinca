"use client";

import { MessageCircle } from "lucide-react";
import { LinkButton, type LinkButtonProps } from "@/components/ui/link-button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends Omit<LinkButtonProps, "href"> {
  message?: string;
  label?: string;
  showIcon?: boolean;
}

/**
 * Every WhatsApp CTA on the site routes through this single component,
 * which consumes lib/whatsapp.ts — no ad-hoc wa.me links in feature code.
 */
export function WhatsAppButton({
  message,
  label = "Solicitar orçamento no WhatsApp",
  showIcon = true,
  className,
  variant = "whatsapp",
  ...props
}: WhatsAppButtonProps) {
  return (
    <LinkButton
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={cn(className)}
      {...props}
    >
      {showIcon && <MessageCircle size={20} />}
      {label}
    </LinkButton>
  );
}
