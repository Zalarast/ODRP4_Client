import "./ProfileMenu.css"
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";
import { IoExit } from "@react-icons/all-files/io5/IoExit";
import { getCookie, removeCoockie } from "../../utils";

export default function ProfileMenu() {
    return (
        <div className="profile-menu">
            <button className="profile-btn">
                <span className="user-id">{getCookie("PID")}</span>
            </button>
            <div className="profile-dropdown">
                <span className="profile-item">
                    <IoSettingsSharp />
                    <span>Настройки</span>
                </span>
                <span className="profile-item exit" onClick={() => {
                    removeCoockie(["UID", "PID"]);
                    window.location.reload();
                }}>
                    <IoExit />
                    <span>Выйти</span>
                </span>
            </div>
        </div>
    )
}