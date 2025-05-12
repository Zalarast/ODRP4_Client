import React from "react";
import "./StructureTable.css";
import { UserCard } from "../../components";

interface TableRow {
    id: number,
    position: string,
    departament: string,
    nickName: string,
    steamID32: string,
    steamID64: string,
    discordID: string,
    vacation: string,
    status: string,
    addedTime: string,
    warnings: number,
    preds: number;
    linkUnion: string;
    linkForum: string;
}

export default function StructureTable() {
    const [data, setData] = React.useState<TableRow[]>([
        {
            id: 1,
            departament: "Табличник",
            nickName: "Zalarast",
            steamID32: "STEAM_0:1:188639659",
            steamID64: "76561198337545047",
            discordID: "266121340384313345",
            position: "Sudo-Curator",
            vacation: "Отсутствует",
            addedTime: "12.23.4214",
            warnings: 0,
            preds: 0,
            status: "Активен",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 2,
            departament: "Набор",
            nickName: "Kaifffs",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 2,
            status: "Активен",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 3,
            departament: "Все",
            nickName: "One-Puch Man",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Curator",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 1,
            status: "Отпуск",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 4,
            departament: "Следящий",
            nickName: "Gwin",
            steamID32: "42141421",
            steamID64: "32523634636",
            discordID: "1241421414",
            position: "Assistant",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 0,
            preds: 3,
            status: "В замарозке",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 0,
            departament: "Набор",
            nickName: "Zalarast",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Администратор",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 0,
            preds: 0,
            status: "Активен",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 6,
            departament: "Набор",
            nickName: "Zalarast",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Администратор",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 0,
            preds: 0,
            status: "Активен",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 7,
            departament: "Набор",
            nickName: "Zalarast",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Администратор",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 0,
            preds: 0,
            status: "Отпуск",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        },
        {
            id: 8,
            departament: "Набор",
            nickName: "Zalarast",
            steamID32: "4141",
            steamID64: "2141",
            discordID: "54353",
            position: "Администратор",
            vacation: "04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 2,
            status: "Отпуск",
            linkUnion: `https://unionteams.ru/player/76561198337545047`,
            linkForum: "https://forum.unionteams.ru/members/zalarast.1597/"
        }
    ])
    const [edittingID, setEditingID] = React.useState<null | number>(null)
    const [editForm, setEditForm] = React.useState<TableRow>(
        {
            id: 0,
            departament: "",
            nickName: "",
            steamID32: "",
            steamID64: "",
            discordID: "",
            position: "",
            vacation: "",
            addedTime: "",
            warnings: 0,
            preds: 0,
            status: "",
            linkForum: "",
            linkUnion: ""
        }
    );

    const handleRowClick = (row: TableRow) => {
        setEditingID(row.id)
        setEditForm(row)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof TableRow) => {
        setEditForm({
            ...editForm,
            [field]: e.target.value
        });
    };

    const handleSave = () => {
        const newData = data.map(item =>
            item.id === editForm.id ? editForm : item
        );
        setData(newData);
        setEditingID(null);
    };

    const handleCancel = () => {
        setEditingID(null);
    };



    return <div>
        <table>
            <thead>
                <tr>
                    <th>Отдел</th>
                    <th>Никнейм</th>
                    <th>SteamID32</th>
                    <th>Должность</th>
                    <th>Отпуск</th>
                    <th>Дата вступления</th>
                    <th>Выговоры</th>
                    <th>Преды</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id} onClick={() => handleRowClick(row)}>
                        <td>{row.departament}</td>
                        <td>{row.nickName}</td>
                        <td>{row.steamID32}</td>
                        <td>{row.position}</td>
                        <td>{row.vacation}</td>
                        <td>{row.addedTime}</td>
                        <td>{row.warnings}</td>
                        <td>{row.preds}</td>
                    </tr>)
                )}
            </tbody>
        </table>

        {edittingID && (
            <UserCard userInfo={editForm} onClose={handleCancel} />
        )}
    </div>
}