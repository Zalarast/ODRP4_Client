import "./NavMenu.css"
import { IoMdPersonAdd } from "@react-icons/all-files/io/IoMdPersonAdd";
import { IoPersonRemoveSharp } from "@react-icons/all-files/io5/IoPersonRemoveSharp";
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";

interface NavMenuProps {
    openNewUserForm: () => void
}

export default function NavMenu(props: NavMenuProps) {
    return (
        <div className="cyber-nav">
            <button className="dropdown-btn">
                МЕНЮ АДМИНА
            </button>
            <div className="dropdown-content">
                <span className="menu-item" onClick={props.openNewUserForm}>
                    <IoMdPersonAdd/>
                    <span>Добавить админа</span>
                </span>
                <span className="menu-item">
                    <IoPersonRemoveSharp/>
                    <span>Снять админа</span>
                </span>
                <span className="menu-item">
                    <IoSettingsSharp/>
                    <span>Настройки</span>
                </span>
            </div>
        </div>
    )
}