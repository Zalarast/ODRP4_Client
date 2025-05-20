import React from "react";
import "./UserCard.css";
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { getUserInfo } from "../../function";
import { IoPersonRemoveSharp } from "@react-icons/all-files/io5/IoPersonRemoveSharp";
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";

interface UserInfo {
    id: number;
    position: string;
    department: string;
    nickName: string;
    steamID32: string;
    steamID64: string;
    discordID: string;
    vacation: string;
    status: number;
    addedTime: string;
    warnings: number;
    preds: number;
    linkUnion: string;
    linkForum: string;
    vacationMSG: string;
}

interface UserCardProps {
    steamID32: string;
    onClose: () => void;
}

interface CopyButtonProps {
    text: string;
}

function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
    };

    return (
        <button
            onClick={handleCopy}
            title="Копировать"
            className="copy-button"
        >
            {copied ? <FaCheck /> : <FaCopy />}
        </button>
    );
}

const UserCard = ({ steamID32, onClose }: UserCardProps) => {

    const [userInfo, setUserInfo] = React.useState<UserInfo>({
        id: 0,
        department: "",
        nickName: "",
        steamID32: "",
        steamID64: "",
        discordID: "",
        position: "",
        vacation: "",
        addedTime: "",
        warnings: 0,
        preds: 0,
        status: 0,
        linkForum: "",
        linkUnion: "",
        vacationMSG: ""
    });

    let status = "Активен";

    switch (userInfo.status) {
        case 0:
            status = "активен";
            break;
        case 1:
            status = "Отпуск"
            break;
        case 2:
            status = "Замарозка"
            break;
    }

    const statusClass = status.toLowerCase() === 'активен'
        ? 'status-active'
        : 'status-inactive';

    const warningClass = userInfo.warnings > 0
        ? 'warning-count'
        : '';

    const predsClass = userInfo.preds > 0
        ? 'warning-count'
        : '';


    React.useEffect(() => {
        getUserInfo(steamID32)
            .then((res) => setUserInfo(res.data.usersData))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <div className="user-card-overlay" onClick={onClose} />
            <div className="user-card">
                <div className="cyber-nav">
                    <IoSettingsSharp size={25} onClick={() => console.log("Settings clicked")} />
                    <div className="dropdown-content">
                        <span className="menu-item">
                            <span>Добавить админа</span>
                        </span>
                        <span className="menu-item">
                            <IoPersonRemoveSharp />
                            <span>Снять админа</span>
                        </span>
                        <span className="menu-item">
                            <IoSettingsSharp />
                            <span>Настройки</span>
                        </span>
                    </div>
                </div>
                <h1>
                    <span>{userInfo.nickName}</span>
                    <span>{userInfo.position}</span>
                </h1>

                <div className="user-info-grid">
                    <label>
                        Статус
                        <span className={statusClass}>{status}</span>
                    </label>
                    {status.toLowerCase() === 'отпуск' &&
                        <label>
                            Период отпуска
                            <span className={statusClass}>{userInfo.vacationMSG}</span>
                        </label>
                    }

                    {status.toLowerCase() === 'в замарозке' &&
                        <label>
                            Период замарозки
                            <span className={statusClass}>{userInfo.vacationMSG}</span>
                        </label>
                    }

                    <label>
                        Предупреждения
                        <span className={predsClass}>{userInfo.preds}</span>
                    </label>

                    <label>
                        Выговоры
                        <span className={warningClass}>{userInfo.warnings}</span>
                    </label>

                    <label>
                        Отдел
                        <span>{userInfo.department}</span>
                    </label>

                    <label>
                        Дата вступления
                        <span>{userInfo.addedTime}</span>
                    </label>
                </div>

                <div className="ticket-stats">
                    <div className="ticket-stat">
                        <span>50</span>
                        Норматив тикетов
                    </div>
                    <div className="ticket-stat">
                        <span>20</span>
                        Выполнено
                    </div>
                </div>
                <div>
                    <label>
                        STEAMID32
                        <span>
                            {userInfo.steamID32}
                            <CopyButton text={userInfo.steamID32} />
                        </span>
                    </label>
                    <label>
                        STEAMID64
                        <span>
                            {userInfo.steamID64}
                            <CopyButton text={userInfo.steamID64} />
                        </span>
                    </label>
                    <label>
                        DISCORDID
                        <span>
                            {userInfo.discordID}
                            <CopyButton text={userInfo.discordID} />
                        </span>
                    </label>
                    <div>
                        <a href={userInfo.linkUnion} target="_blank" rel="noreferrer"><button>UNIONTEAMS</button></a>
                        <a href={userInfo.linkForum} target="_blank" rel="noreferrer"><button>FORUM</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;