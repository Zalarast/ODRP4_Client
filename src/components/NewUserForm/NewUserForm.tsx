import React from "react";
import { addNewUser } from "./functions";
import "./NewUserForm.css"


interface NewUserFormProps {
  setMsgActive: React.Dispatch<React.SetStateAction<boolean>>,
  setMsgCode: React.Dispatch<React.SetStateAction<number>>,
  setMsgMessage: React.Dispatch<React.SetStateAction<string>>,
  onClose: () => void,
  updateUsersData: () => void
}

export default function NewUserForm (props: NewUserFormProps) {
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