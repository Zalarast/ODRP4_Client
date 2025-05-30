import React from "react";
import "./StructureTable.css";
import { UserCard } from "../../components";

interface StructureTableProps {
    data: [{
        id: number,
        department: string,
        nickName: string,
        steamID32: string,
        steamID64: string,
        discordID: string,
        vacation: string,
        status: number,
        addedTime: string,
        warnings: number,
        preds: number;
        linkUnion: string;
        linkForum: string;
        vacationMSG:string;
        Rank: {
        rank_name: string
    }
    }] | []
    logined: boolean
}

interface TableRow {
    id: number,
    department: string,
    nickName: string,
    steamID32: string,
    steamID64: string,
    discordID: string,
    vacation: string,
    status: number,
    addedTime: string,
    warnings: number,
    preds: number;
    linkUnion: string;
    linkForum: string;
    vacationMSG:string;
    Rank: {
        rank_name: string
    }
}

export default function StructureTable({ data, logined }: StructureTableProps) {
    const [userID, setUserID] = React.useState("");

    const handleRowClick = (row: TableRow) => {
        setUserID(row.steamID32)
    }

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof TableRow) => {
    //     setEditForm({
    //         ...editForm,
    //         [field]: e.target.value
    //     });
    // };

    // const handleSave = () => {
    //     const newData = data.map(item =>
    //         item.id === editForm.id ? editForm : item
    //     );
    //     setData(newData);
    //     setEditingID(null);
    // };

    const handleCancel = () => {
        setUserID("");
    };



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Отдел</th>
                        <th>Никнейм</th>
                        <th>SteamID32</th>
                        <th>Должность</th>
                        <th>Статус</th>
                        <th>Вступление</th>
                        <th>Выговоры</th>
                        <th>Преды</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id} onClick={() => handleRowClick(row)}>
                            <td>{row.department}</td>
                            <td>{row.nickName}</td>
                            <td>{row.steamID32}</td>
                            <td>{row.Rank.rank_name}</td>
                            <td>{(row.status === 0) ? ("Активен") : ((row.status === 1) ? ("В отпуске") : ("В замарозке"))}</td>
                            <td>{row.addedTime}</td>
                            <td>{row.warnings}</td>
                            <td>{row.preds}</td>
                        </tr>)
                    )}
                </tbody>
            </table>

            {userID && (
                <UserCard steamID32={userID} onClose={handleCancel} logined={logined}/>
            )}
        </div>
    )
}