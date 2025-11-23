"use client";
import styles from "./styles.module.css";
import { useState } from "react";

export const FormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: false,
    consent: false,
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  // Futuro submit do form pro back

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("sending");

  //   try {
  //     const response = await fetch("https://new.primor.com.br/wp-json/primor/v1/newsletter", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       setStatus("success");
  //       setForm({ name: "", email: "", consent: false, age: false });
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch (err) {
  //     setStatus("error");
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <form className={styles.newsletterBox} onSubmit={handleSubmit}>
        <div className={styles.inner}>
          <h3 className={styles.title}>
            Fique por dentro das <br />
            <strong className={styles.highlight}>novidades e promoções</strong>
          </h3>

          {status === "error" && (
            <div className={styles.errorBox}>
              Houve um erro na solicitação. Por favor, tente novamente.
            </div>
          )}

          <div className={styles.row}>
            
            <div className={styles.twoColumns}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nome</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Insira seu nome"
                  className={styles.input}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className={styles.input}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="age"
                name="age"
                className={styles.checkbox}
                onChange={handleChange}
                checked={form.age}
                required
              />
              <label htmlFor="age" className={styles.checkboxLabel}>
                Confirmo ter mais de 18 anos.
              </label>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                className={styles.checkbox}
                onChange={handleChange}
                checked={form.consent}
              />
              <label htmlFor="consent" className={styles.checkboxLabel}>
                Autorizo o uso das minhas informações para receber e-mails com novidades
                e lançamentos da Doriana.
              </label>
            </div>

            {status === "sending" && (
              <div className={styles.sendingBox}>
                <div className={styles.sendingAlert}>Enviando sua mensagem...</div>
              </div>
            )}

            <div className={styles.buttonWrapper}>
              <button
                type="submit"
                className={`${styles.submitBtn} ${
                  status === "sending" ? styles.disabled : ""
                }`}
              >
                <span className={styles.btnAnimation}></span>
                <span className={styles.btnText}>Cadastre-se</span>
              </button>
            </div>
          </div>
        </div>

        {status === "success" && (
          <div className={styles.successOverlay}>
            <div className={styles.successContent}>
              <span className={styles.successMsg}>
                E-mail cadastrado <br /> com sucesso
              </span>

              <button
                type="reset"
                onClick={() => setStatus("idle")}
                className={styles.successBtn}
              >
                <span className={styles.btnAnimation}></span>
                <span className={styles.btnText}>OK</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
