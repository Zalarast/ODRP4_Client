import "./Header.css";
import React from "react";
import { Login, NavMenu, NewUserForm, ProfileMenu } from "..";

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
      </div>
      {HeaderProps.logined && <NavMenu openNewUserForm={() => setShowNewUserForm(true)} />}
      {!HeaderProps.logined ?
        <button
          onClick={() => setShowLogin(true)}
          className="cyber-button cyber-button-access"
        >
          <span className="cyber-button-text">LOG IN</span>
          <span className="cyber-button-pulse"></span>
        </button> : <ProfileMenu />}
    </div>

    {showNewUserForm && <NewUserForm setMsgActive={HeaderProps.setMsgActive} setMsgCode={HeaderProps.setMsgCode} setMsgMessage={HeaderProps.setMsgMessage} onClose={() => setShowNewUserForm(false)} updateUsersData={HeaderProps.updateUsersData} />}
    {showLogin && <Login setMsgActive={HeaderProps.setMsgActive} setMsgCode={HeaderProps.setMsgCode} setMsgMessage={HeaderProps.setMsgMessage} onClose={() => setShowLogin(false)} setLogined={HeaderProps.setLogined} setUserInfo={HeaderProps.setUserInfo} />}

    <div className="cyber-header-scanline"></div>
  </header>
}