import { useState, useRef } from "react";

export const useFormSection = () => {
  const sliderRef = useRef(null);

  const initialFormState = {
    name: "",
    phone: "",
    age: "",
    state: "",
    email: "",
    privacy: false,
    security: false,
    promo: false,
  };

  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      let digits = value.replace(/\D/g, "").slice(0, 11);
      let formatted = digits;

      if (digits.length > 2 && digits.length <= 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else if (digits.length > 7) {
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(
          2,
          7
        )}-${digits.slice(7)}`;
      }

      setForm((prev) => ({ ...prev, phone: formatted }));
      return;
    }

    if (name === "age") {
      let digits = value.replace(/\D/g, "").slice(0, 8);
      let formatted = digits;

      if (digits.length > 2 && digits.length <= 4) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      } else if (digits.length > 4) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(
          4
        )}`;
      }

      setForm((prev) => ({ ...prev, age: formatted }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 0) {
      if (!form.name.trim()) newErrors.name = true;
    }

    if (currentStep === 1) {
      if (form.phone.replace(/\D/g, "").length < 11) newErrors.phone = true;
    }

    if (currentStep === 2) {
        if (form.age.length < 10) newErrors.age = true;
        if (!form.state) newErrors.state = true;
      
        if (form.age.length === 10) {
          const [day, month, year] = form.age.split("/").map(Number);
          const birthDate = new Date(year, month - 1, day);
          const today = new Date();
      
          let age = today.getFullYear() - birthDate.getFullYear();
          const m = today.getMonth() - birthDate.getMonth();
      
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
      
          if (age < 18) {
            newErrors.age = "UNDERAGE";
          }
        }
      }
      

    if (currentStep === 3) {
      if (!form.email.includes("@")) newErrors.email = true;
    }

    if (currentStep === 4) {
      if (!form.privacy) newErrors.privacy = true;
      if (!form.security) newErrors.security = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep(step)) return;
    sliderRef.current?.slickNext();
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    sliderRef.current?.slickPrev();
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setStatus("sending");

    try {
      const response = await fetch(
        "https://new.doriana.com.br/wp-json/primor/v1/newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setForm(initialFormState);
    setErrors({});
    setStep(0);
    sliderRef.current?.slickGoTo(0);
  };

  return {
    sliderRef,
    form,
    step,
    status,
    errors,
    handleChange,
    nextStep,
    prevStep,
    handleSubmit,
    handleReset,
  };
};
