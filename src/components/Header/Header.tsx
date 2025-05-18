import "./Header.css";
import { authorization } from "../../function";
import React from "react";
import { addNewUser } from "./functions";

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

interface HeaderProps {
  setMsgActive: React.Dispatch<React.SetStateAction<boolean>>,
  setMsgCode: React.Dispatch<React.SetStateAction<number>>,
  setMsgMessage: React.Dispatch<React.SetStateAction<string>>,
  logined: boolean,
  setLogined: () => void
  userInfo: {
    login?: string,
    premisson?: string
  }
  setUserInfo: React.Dispatch<React.SetStateAction<{
    login?: string,
    premisson?: string
  }>>,
  setSearchNicname: React.Dispatch<React.SetStateAction<string>>,
  updateUsersData: () => void
}

interface NewUserFormProps {
  setMsgActive: React.Dispatch<React.SetStateAction<boolean>>,
  setMsgCode: React.Dispatch<React.SetStateAction<number>>,
  setMsgMessage: React.Dispatch<React.SetStateAction<string>>,
  onClose: () => void,
  updateUsersData: () => void
}

const NewUserForm = (props: NewUserFormProps) => {
  const [formData, setFormData] = React.useState({
    nickName: '',
    steamID32: '',
    steamID64: '',
    discordID: '',
    position: 'Curator',
    department: 'Все',
    unionTeamsLink: '',
    forumLink: '',
    probation: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitNewUsers = () => {
    const emptiFilds = [];
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === "string" && value === "") {
        emptiFilds.push(key);
      }
    }
    if (emptiFilds.length > 0) {
      props.setMsgActive(true)
      props.setMsgCode(1)
      props.setMsgMessage("Заполните все поля");
    }
    else
      addNewUser(formData).then((res) => {
        props.setMsgActive(true)
        props.setMsgCode((res.code ? 0 : 1))
        props.setMsgMessage(res.msg);
        props.onClose();
        props.updateUsersData();
      })
  }

  return (
    <div className="umbrella-modal-overlay">
      <div className="umbrella-modal">
        <div className="umbrella-modal-header">
          <div className="umbrella-logo">
            <span>U</span>
            <span>M</span>
            <span>B</span>
            <span>R</span>
            <span>E</span>
            <span>L</span>
            <span>L</span>
            <span>A</span>
          </div>
          <h3>AGENT REGISTRATION TERMINAL</h3>
          <div className="umbrella-status">
            <span className="status-light"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        <div className="umbrella-modal-form">
          <div className="form-grid">
            <div className="form-column">
              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">Никнейм</span>
                  <input
                    type="text"
                    name="nickName"
                    value={formData.nickName}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">SteamID32</span>
                  <input
                    type="text"
                    name="steamID32"
                    value={formData.steamID32}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">SteamID64</span>
                  <input
                    type="text"
                    name="steamID64"
                    value={formData.steamID64}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">DiscordID</span>
                  <input
                    type="text"
                    name="discordID"
                    value={formData.discordID}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>
            </div>

            <div className="form-column">
              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">Должность</span>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChangeSelect}
                    className="umbrella-select"
                  >
                    <option value="Curator">Curator</option>
                    <option value="Sudo-Curator">Sudo-Curator</option>
                    <option value="Asisstant">Asisstant</option>
                    <option value="Senior_Admin">Senior_Admin</option>
                    <option value="Admin">Admin</option>
                    <option value="Operator">Operator</option>
                    <option value="Moderator">Moderator</option>
                    <option value="Intern">Intern</option>
                  </select>
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">Отдел</span>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChangeSelect}
                    className="umbrella-select"
                  >
                    <option value="Все">Все</option>
                    <option value="Таблица">Таблица</option>
                    <option value="Ивентер">Ивентер</option>
                    <option value="Следящий">Следящий</option>
                    <option value="Набор">Набор</option>
                    <option value="Дневной">Дневной</option>
                  </select>
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">Ссылка на UnionTeams</span>
                  <input
                    type="text"
                    name="unionTeamsLink"
                    value={formData.unionTeamsLink}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>

              <div className="umbrella-form-group">
                <label>
                  <span className="umbrella-label">Ссылка на форум</span>
                  <input
                    type="text"
                    name="forumLink"
                    value={formData.forumLink}
                    onChange={handleChange}
                    required
                    className="umbrella-input"
                  />
                  <span className="input-border"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="form-footer">
            <div className="button-group">
              <button
                type="button"
                onClick={props.onClose}
                className="umbrella-btn umbrella-btn-cancel"
              >
                Отмена
                <span className="btn-glitch"></span>
              </button>
              <button
                type="submit"
                onClick={submitNewUsers}
                className="umbrella-btn umbrella-btn-submit"
              >
                Добавить
                <span className="btn-glitch"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="modal-glitch-overlay"></div>
      </div>
    </div>
  )
}

const Login: React.FC<LoginProps> = (LoginProps) => {

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

export default function Header(HeaderProps: HeaderProps) {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showNewUserForm, setShowNewUserForm] = React.useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    HeaderProps.setSearchNicname(e.target.value);
  }

  return <header className="cyber-header">
    <div className="cyber-header-content">
      <div className="cyber-header-left">
        <input
          className="cyber-search"
          placeholder="ПОИСК АГЕНТА..."
          onChange={handleChangeInput}
        />
        <button className="cyber-button cyber-button-small">
          <span className="cyber-button-text">TOP AGENT</span>
        </button>
      </div>
      {HeaderProps.userInfo.login && <button className="cyber-button cyber-button-small" onClick={() => setShowNewUserForm(true)}>
        <span className="cyber-button-text">Добавить агента</span>
      </button>}
      {!HeaderProps.logined &&
        <button
          onClick={() => setShowLogin(true)}
          className="cyber-button cyber-button-access"
        >
          <span className="cyber-button-text">LOG IN</span>
          <span className="cyber-button-pulse"></span>
        </button>}
    </div>

    {showNewUserForm && <NewUserForm setMsgActive={HeaderProps.setMsgActive} setMsgCode={HeaderProps.setMsgCode} setMsgMessage={HeaderProps.setMsgMessage} onClose={() => setShowNewUserForm(false)} updateUsersData={HeaderProps.updateUsersData} />}
    {showLogin && <Login setMsgActive={HeaderProps.setMsgActive} setMsgCode={HeaderProps.setMsgCode} setMsgMessage={HeaderProps.setMsgMessage} onClose={() => setShowLogin(false)} setLogined={HeaderProps.setLogined} setUserInfo={HeaderProps.setUserInfo} />}

    <div className="cyber-header-scanline"></div>
  </header>
}