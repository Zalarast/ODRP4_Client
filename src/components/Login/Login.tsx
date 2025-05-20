import React from "react"
import { authorization } from "../../function"
import "./Login.css"

interface LoginProps {
  onClose: () => void,
  setMsgActive: React.Dispatch<React.SetStateAction<boolean>>,
  setMsgCode: React.Dispatch<React.SetStateAction<number>>,
  setMsgMessage: React.Dispatch<React.SetStateAction<string>>,
  setLogined: () => void
  setUserInfo: React.Dispatch<React.SetStateAction<{
    login?: string,
    premisson?: string
  }>>
}

interface LoginData {
  login: string,
  password: string
}

export default function Login (LoginProps:LoginProps) {

  const [loginData, setLoginData] = React.useState<LoginData>({
    login: "",
    password: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof LoginData) => {
    setLoginData({
      ...loginData,
      [field]: e.target.value
    })
  }

  const handleAuth = () => {
    if (loginData.login && loginData.password)
      authorization(loginData, LoginProps.setUserInfo).then((res) => {
        if (!res.code) {
          LoginProps.setMsgActive(true);
          LoginProps.setMsgCode(1);
          LoginProps.setMsgMessage(res.msg);
        } else {
          LoginProps.setMsgActive(true);
          LoginProps.setMsgCode(0);
          LoginProps.setMsgMessage(res.msg);
          LoginProps.setLogined()
          LoginProps.onClose()
        }
      })
    else {
      LoginProps.setMsgActive(true);
      LoginProps.setMsgCode(1);
      if (!loginData.login && !loginData.password) {
        LoginProps.setMsgMessage("Не указан логин и пароль");
      } else if (!loginData.password) {
        LoginProps.setMsgMessage("Не указан пароль");
      } else if (!loginData.login) {
        LoginProps.setMsgMessage("Не указан логин");
      }
      /*LoginProps.setMsgMessage(`${!loginData.login && ("Отсутствует логин")} ${!loginData.password && ("Отсутствует пароль")}`);*/
    }
  }

  return (
    <div className="cyber-modal-overlay">
      <div className="cyber-modal">
        <div className="modal-glitch-effect"></div>

        <h2 className="cyber-modal-title">
          <span className="cyber-text-flicker">SYSTEM ACCESS</span>
        </h2>

        <div className="cyber-form">
          <div className="input-group">
            <label className="cyber-label">LOGIN</label>
            <input
              type="text"
              className="cyber-input"
              required
              onChange={(e) => handleInputChange(e, "login")}
            />
            <div className="input-underline"></div>
          </div>

          <div className="input-group">
            <label className="cyber-label">PASSWORD</label>
            <input
              type="password"
              className="cyber-input"
              required
              onChange={(e) => handleInputChange(e, "password")}
            />
            <div className="input-underline"></div>
          </div>

          <div className="cyber-button-group">
            <button type="submit" className="cyber-button cyber-button-primary" onClick={handleAuth}>
              <span className="cyber-button-text">Авторизация</span>
              <span className="cyber-button-glitch"></span>
            </button>

            <button
              type="button"
              onClick={LoginProps.onClose}
              className="cyber-button cyber-button-secondary"
            >
              <span className="cyber-button-text">Закрыть</span>
              <span className="cyber-button-glitch"></span>
            </button>
          </div>
        </div>

        <div className="cyber-modal-footer">
          <span className="cyber-text-pulse">UMBRELLA SECURITY SYSTEM v4.2</span>
        </div>
      </div>
    </div>
  );
}