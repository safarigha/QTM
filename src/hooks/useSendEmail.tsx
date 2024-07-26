import { useState } from "react";
import emailjs from "emailjs-com";

const useSendEmail = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendEmail = async (toEmail: string, resetUrl: string) => {
    setIsSending(true);
    setError(null);
    try {
      const result = await emailjs.send(
        "service_hwbdtlh", // "YOUR_SERVICE_ID",  ID سرویس EmailJS
        "template_wvwp0uu", // "YOUR_TEMPLATE_ID",  ID قالب EmailJS
        {
          user_email: toEmail,
          reset_url: resetUrl,
        },
        "Sl3obfyWn2VMGlgYV" // "YOUR_PUBLIC_KEY"  کلید عمومی EmailJS
      );
      if (result.status === 200) {
        setSuccess(true);
      } else {
        setError("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
      }
    } catch (error) {
      setError("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
    } finally {
      setIsSending(false);
    }
  };

  return { isSending, error, success, sendEmail };
};

export default useSendEmail;
