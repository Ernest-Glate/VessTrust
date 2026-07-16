"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "233500000000";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#C9A84C] hover:bg-[#DBBD68] text-navy-dark p-3.5 rounded-full shadow-lg flex items-center justify-center transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      title="Chat with VessTrust on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
    </motion.a>
  );
}
