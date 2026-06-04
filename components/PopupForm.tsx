// components/PopupForm.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PopupFormProps {
  delay?: number; // Delay in milliseconds (default: 2500 = 2.5 seconds)
  title?: string;
  subtitle?: string;
  buttonText?: string;
  successMessage?: string;
  formEndpoint?: string; // Your form submission endpoint
}

export default function PopupForm({
  delay = 2500,
  title = "Get In Touch",
  subtitle = "Fill out the form and our team will get back to you within 24 hours.",
  buttonText = "Submit",
  successMessage = "Thank you! We'll get back to you soon.",
  formEndpoint = "/api/contact",
}: PopupFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================================================
  // ⏰ SHOW POPUP AFTER DELAY - EVERY TIME PAGE LOADS
  // ==========================================================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // ==========================================================================
  // 🔒 CLOSE HANDLERS
  // ==========================================================================
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // ==========================================================================
  // 📝 FORM HANDLERS
  // ==========================================================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace with your actual form submission logic
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after success
        setTimeout(() => {
          setIsOpen(false);
          // Reset after popup closes
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "" });
          }, 500);
        }, 3000);
      } else {
        setErrors({ submit: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setErrors({ submit: "Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ================================================================
              🌑 OVERLAY BACKDROP
              ================================================================ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* ================================================================
                📦 POPUP CONTAINER
                ================================================================ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Gradient accent bar at top */}
              <div className="h-1.5 bg-gradient-to-r from-[#199b9d] via-[#1381c4] to-[#199b9d]" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {isSubmitted ? (
                  /* ========================================================
                     ✅ SUCCESS STATE
                     ======================================================== */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">{successMessage}</p>
                  </motion.div>
                ) : (
                  /* ========================================================
                     📝 FORM STATE
                     ======================================================== */
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {title}
                      </h2>
                      <p className="text-gray-500 text-sm sm:text-base">
                        {subtitle}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="popup-name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="popup-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-[#199b9d]"
                          } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="popup-email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="popup-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-[#199b9d]"
                          } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="popup-phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="popup-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-[#199b9d]"
                          } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Submit Error */}
                      {errors.submit && (
                        <p className="text-sm text-red-500 text-center">
                          {errors.submit}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#199b9d] to-[#1381c4] hover:from-[#1381c4] hover:to-[#199b9d] text-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            {buttonText}
                            <span>→</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}