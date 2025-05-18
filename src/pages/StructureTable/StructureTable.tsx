import React from "react";
import "./StructureTable.css";
import { UserCard } from "../../components";

interface StructureTableProps {
    data: [{
        id: number,
        position: string,
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
    }] | []
}

interface TableRow {
    id: number,
    position: string,
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
}

export default function StructureTable({ data }: StructureTableProps) {
    const [edittingID, setEditingID] = React.useState<null | number>(null)
    const [editForm, setEditForm] = React.useState(
        {
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
            linkUnion: ""
        }
    );

    const handleRowClick = (row: TableRow) => {
        setEditingID(row.id)
        setEditForm(row)
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
                        <td>{row.department}</td>
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