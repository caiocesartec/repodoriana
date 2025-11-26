"use client";

import styles from "./styles.module.css";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useFormSection } from "./hooks/useFormSection";
import { ESTADOS_BR } from "./helpers/estados";

import { SuccessScreen } from "./components/SuccessScreen";
import { ErrorScreen } from "./components/ErrorScreen";

export const FormSection = () => {
  const {
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
  } = useFormSection();

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    adaptiveHeight: true,
  };

  return (
    <div className={styles.wrapper}>
      {status === "success" ? (
        <SuccessScreen onReset={handleReset} />
      ) : status === "error" ? (
        <ErrorScreen onReset={handleReset} />
      ) : (
        <form
          className={styles.newsletterBox}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.inner}>
            <div className={styles.titleWrapper}>
              <h3 className={styles.title}>
                Fique por dentro das <br />
                <strong className={styles.highlight}>
                  novidades e promoções
                </strong>
              </h3>
            </div>

            <div className={styles.systemOfADown}>
              <Slider
                ref={sliderRef}
                {...settings}
                className={styles.slider}
                accessibility={false}
              >
                <div>
                  <div className={styles.formGroup}>
                    <div
                      className={`${styles.floating} ${
                        errors.name ? styles.error : ""
                      }`}
                    >
                      <input
                        tabIndex={-1}
                        className={styles.input}
                        name="name"
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <label htmlFor="name">
                        Seu nome <span className={styles.required}>*</span>
                      </label>
                    </div>

                    {errors.name && (
                      <p className={styles.errorText}>Informe seu nome.</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className={styles.formGroup}>
                    <div
                      className={`${styles.floating} ${
                        errors.phone ? styles.error : ""
                      }`}
                    >
                      <input
                        tabIndex={-1}
                        className={styles.input}
                        name="phone"
                        id="phone"
                        type="text"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <label htmlFor="phone">
                        Celular <span className={styles.required}>*</span>
                      </label>
                    </div>

                    {errors.phone && (
                      <p className={styles.errorText}>
                        Informe um celular válido.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className={styles.rowGroup}>
                    <div className={styles.formGroup}>
                      <div
                        className={`${styles.floating} ${
                          errors.age ? styles.error : ""
                        }`}
                      >
                        <input
                          tabIndex={-1}
                          className={styles.input}
                          name="age"
                          id="age"
                          type="text"
                          value={form.age}
                          onChange={handleChange}
                          autoComplete="off"
                          placeholder=" "
                        />
                        <label htmlFor="age">
                          Data de nascimento{" "}
                          <span className={styles.required}>*</span>
                        </label>
                      </div>

                      {errors.age === "UNDERAGE" ? (
                        <p className={styles.errorText}>
                          É proibido realizar o cadastro para menores de 18
                          anos.
                        </p>
                      ) : errors.age ? (
                        <p className={styles.errorText}>
                          Informe sua data de nascimento.
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.formGroup}>
                      <div
                        className={`${styles.floating} ${
                          errors.state ? styles.error : ""
                        }`}
                      >
                        <select
                          tabIndex={-1}
                          className={`${styles.input} ${styles.select}`}
                          name="state"
                          id="state"
                          value={form.state}
                          onChange={handleChange}
                        >
                          <option value="" disabled hidden></option>
                          {ESTADOS_BR.map((estado) => (
                            <option key={estado.uf} value={estado.uf}>
                              {estado.nome}
                            </option>
                          ))}
                        </select>

                        <label htmlFor="state">
                          Estado <span className={styles.required}>*</span>
                        </label>
                      </div>

                      {errors.state && (
                        <p className={styles.errorText}>
                          Selecione seu estado.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.formGroup}>
                    <div
                      className={`${styles.floating} ${
                        errors.email ? styles.error : ""
                      }`}
                    >
                      <input
                        tabIndex={-1}
                        className={styles.input}
                        name="email"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                      <label htmlFor="email">
                        Seu melhor e-mail{" "}
                        <span className={styles.required}>*</span>
                      </label>
                    </div>

                    {errors.email && (
                      <p className={styles.errorText}>
                        Informe um e-mail válido.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  {errors.privacy && (
                    <p className={styles.errorText}>Este item é obrigatório.</p>
                  )}
                  <div
                    className={`${styles.checkboxGroup} ${
                      errors.privacy ? styles.errorCheckbox : ""
                    }`}
                  >
                    <input
                      tabIndex={-1}
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className={styles.checkbox}
                      onChange={handleChange}
                      checked={form.privacy}
                    />
                    <label htmlFor="privacy" className={styles.checkboxLabel}>
                      Li e aceito a{" "}
                      <a
                        tabIndex={-1}
                        href="https://www.seara.com.br/politica-de-privacidade/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Política de Privacidade
                      </a>
                      . <span className={styles.required}>*</span>
                    </label>
                  </div>

                  {errors.security && (
                    <p className={styles.errorText}>Este item é obrigatório.</p>
                  )}

                  <div
                    className={`${styles.checkboxGroup} ${
                      errors.security ? styles.errorCheckbox : ""
                    }`}
                  >
                    <input
                      tabIndex={-1}
                      type="checkbox"
                      id="security"
                      name="security"
                      className={styles.checkbox}
                      onChange={handleChange}
                      checked={form.security}
                    />
                    <label htmlFor="security" className={styles.checkboxLabel}>
                      Autorizo receber comunicações apenas de domínios oficiais.
                      <span className={styles.required}>*</span>
                    </label>
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input
                      tabIndex={-1}
                      type="checkbox"
                      id="promo"
                      name="promo"
                      className={styles.checkbox}
                      onChange={handleChange}
                      checked={form.promo}
                    />
                    <label htmlFor="promo" className={styles.checkboxLabel}>
                      Autorizo receber novidades e promoções.
                    </label>
                  </div>
                </div>
              </Slider>
            </div>

            <div className={styles.buttonsArea}>
              {step > 0 ? (
                <button
                  type="button"
                  className={styles.prevBtn}
                  onClick={prevStep}
                >
                  <ArrowLeft size={20} strokeWidth={2.5} />
                </button>
              ) : (
                <div style={{ width: 56 }} />
              )}

              <div className={styles.dots}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`${styles.dot} ${
                      step === i ? styles.activeDot : ""
                    }`}
                  />
                ))}
              </div>

              {step < 4 && (
                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={nextStep}
                >
                  Próximo
                  <ArrowRight size={20} strokeWidth={2.5} />
                </button>
              )}

              {step === 4 && (
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                >
                  Finalizar cadastro
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
