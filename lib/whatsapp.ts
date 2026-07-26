const WHATSAPP_NUMBER = "5519989106413"; // (19) 98910-6413

export function getWhatsAppLink(message?: string) {
  const defaultMessage =
    "Olá! Vim pelo site da Pirabrinca e gostaria de solicitar um orçamento para recreação infantil. 🎉";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getPlanWhatsAppLink(planName: string) {
  return getWhatsAppLink(
    `Olá! Tenho interesse no ${planName} da Pirabrinca e gostaria de solicitar um orçamento. 🎉`
  );
}

export const WHATSAPP_DISPLAY = "(19) 98910-6413";
export const INSTAGRAM_HANDLE = "@pirabrinca";
export const INSTAGRAM_URL = "https://instagram.com/pirabrinca";
