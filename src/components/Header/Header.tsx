import "./Header.css";
import { authorization } from "./functions";
import React from "react";

interface LoginProps {
    onClose: () => void
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
    const auth = () => {

    }
    return (
    <div className="cyber-modal-overlay">
      <div className="cyber-modal">
        <div className="modal-glitch-effect"></div>
        
        <h2 className="cyber-modal-title">
          <span className="cyber-text-flicker">SYSTEM ACCESS</span>
        </h2>
        
        <form className="cyber-form">
          <div className="input-group">
            <label className="cyber-label">LOGIN</label>
            <input
              type="text"
              className="cyber-input"
              required
            />
            <div className="input-underline"></div>
          </div>
          
          <div className="input-group">
            <label className="cyber-label">PASSWORD</label>
            <input
              type="password"
              className="cyber-input"
              required
            />
            <div className="input-underline"></div>
          </div>
          
          <div className="cyber-button-group">
            <button type="submit" className="cyber-button cyber-button-primary">
              <span className="cyber-button-text">Авторизация</span>
              <span className="cyber-button-glitch"></span>
            </button>
            
            <button 
              type="button" 
              onClick={onClose}
              className="cyber-button cyber-button-secondary"
            >
              <span className="cyber-button-text">Закрыть</span>
              <span className="cyber-button-glitch"></span>
            </button>
          </div>
        </form>
        
        <div className="cyber-modal-footer">
          <span className="cyber-text-pulse">UMBRELLA SECURITY SYSTEM v4.2</span>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
    const [showLogin, setShowLogin] = React.useState(false);
    return <header className="cyber-header">
      <div className="cyber-header-content">
        <div className="cyber-header-left">
          <input 
            className="cyber-search" 
            placeholder="ПОИСК АГЕНТА..." 
          />
          <button className="cyber-button cyber-button-small">
            <span className="cyber-button-text">TOP AGENT</span>
          </button>
        </div>
        
        <button 
          onClick={() => setShowLogin(true)}
          className="cyber-button cyber-button-access"
        >
          <span className="cyber-button-text">LOG IN</span>
          <span className="cyber-button-pulse"></span>
        </button>
      </div>
      
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      
      <div className="cyber-header-scanline"></div>
    </header>
}