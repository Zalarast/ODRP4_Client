import React from "react";
import "./UserCard.css";

interface UserInfo {
    id: number;
    position: string;
    departament: string;
    nickName: string;
    steamID32: string;
    steamID64: number;
    discordID: number;
    vacation: string;
    status: string;
    addedTime: string;
    warnings: number;
    preds: number;
}

interface UserCardProps {
    userInfo: UserInfo;
    onClose: () => void;
}

const UserCard = ({ userInfo, onClose }: UserCardProps) => {
    const statusClass = userInfo.status.toLowerCase() === 'активен'
        ? 'status-active'
        : 'status-inactive';

    const warningClass = userInfo.warnings > 0
        ? 'warning-count'
        : '';

    const predsClass = userInfo.preds > 0
        ? 'warning-count'
        : '';

    return (
        <>
            <div className="user-card-overlay" onClick={onClose} />
            <div className="user-card">
                <h1>
                    <span>{userInfo.nickName}</span>
                    <span>{userInfo.position}</span>
                </h1>

                <div className="user-info-grid">
                    <label>
                        Статус
                        <span className={statusClass}>{userInfo.status}</span>
                    </label>
                    {userInfo.status.toLowerCase() === 'отпуск' &&
                        <label>
                            Период отпуска
                            <span className={statusClass}>{userInfo.vacation}</span>
                        </label>
                    }

                    {userInfo.status.toLowerCase() === 'в замарозке' &&
                        <label>
                            Период замарозки
                            <span className={statusClass}>{userInfo.vacation}</span>
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
                        <span>{userInfo.departament}</span>
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
                        </span>
                    </label>
                    <label>
                        STEAMID64
                        <span>
                            {userInfo.steamID64}
                        </span>
                    </label>
                    <label>
                        DISCORDID
                        <span>
                            {userInfo.discordID}
                        </span>
                    </label>
                    <div>
                        <button>UNIONTEAMS</button>
                        <button>FORUM</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;