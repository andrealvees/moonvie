import styles from "./Login.module.css";
import { useState } from "react";
import logo_escura from "../src/assets/logo_escura.png";
import logo_clara from "../src/assets/logo_clara.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo_escura} alt="Logo - Moonvie" />
      </div>
      <div className={styles.formContainer}>
        <h1 style={{ marginBottom: "4rem" }}>Login</h1>
        <form method="post" className={styles.form}>
          <div className={styles.input_box}>
            <input
              className={styles.input}
              name="email"
              id="email"
              type="text"
              placeholder="Email ou Usuário"
              required
            />
            <label className={styles.label} htmlFor="email">
              Email ou Usuário
            </label>
          </div>
          <div className={styles.input_box}>
            <input
              className={styles.input}
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              required
            />
            <label className={styles.label} htmlFor="password">
              Senha
            </label>
            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className={styles.showPassword}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className={styles.showPassword}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <div className={styles.options}>
            <div className={styles.checkbox}>
              <input
                className={styles.checkbox_input}
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className={styles.checkbox_label} htmlFor="remember">
                <span className={styles.checkbox_checkmark}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.icon}
                    width={16}
                  />
                </span>
                Lembrar de mim
              </label>
            </div>
            <a className={styles.forgot} href="#">
              Esqueceu a senha?
            </a>
          </div>
          <div style={{ width: "50%", marginTop: "4rem" }}>
            <button className={styles.submit} type="submit">
              Entrar
            </button>
            <div className={styles.line}></div>
          </div>
        </form>
        <a href="./register" className={styles.register}>
          Não possui conta? <span>Registre - se</span>
        </a>
      </div>
    </div>
  );
}
