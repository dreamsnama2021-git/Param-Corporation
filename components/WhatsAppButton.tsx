"use client";


import { WhatsappLogoIcon } from "@phosphor-icons/react";

export default function WhatsAppButton() {
  const phone = "+919820149950"; // replace with your number
  const message = "Hello Param Corporation, I’m interested in your products.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
      w-14 h-14 flex items-center justify-center 
      rounded-full shadow-[var(--shadow-strong)] 
      bg-[var(--clr-primary)] text-white 
      hover:scale-105 active:scale-95 transition"
    >
      <WhatsappLogoIcon className="w-6 h-6" />
    </a>
  );
}