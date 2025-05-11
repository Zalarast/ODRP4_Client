import React from "react";
import "./StructureTable.css";

interface TableRow {
    id: number,
    departament: string,
    nickname: string,
    steamId: string,
    position: string,
    vacation: string,
    addedTime: string,
    warnings: number,
    preds: number
}

export default function StructureTable() {
    const [data, setData] = React.useState<TableRow[]>([
        {
            id: 1,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 2,
            departament: "Следющий",
            nickname: "kaifffs",
            steamId: "5235",
            position: "Судо-куратор",
            vacation: "Отсутствует",
            addedTime: "10.05.2025",
            warnings: 1,
            preds: 3
        },
        {
            id: 3,
            departament: "Набор",
            nickname: "One-Puch Man",
            steamId: "43643",
            position: "Асисстент",
            vacation: "Отсутствует",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 4,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 5,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 6,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 7,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Administrator",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        },
        {
            id: 8,
            departament: "Набор",
            nickname: "Zalarast",
            steamId: "12412",
            position: "Администратор",
            vacation: "Отпуск с 04.04 - 06.04",
            addedTime: "12.23.4214",
            warnings: 1,
            preds: 3
        }
    ])
    const [edittingID, setEditingID] = React.useState<null | number>(null)
    const [editForm, setEditForm] = React.useState<TableRow>(
        {
            id: 0,
            departament: "",
            nickname: "",
            steamId: "",
            position: "",
            vacation: "",
            addedTime: "",
            warnings: 0,
            preds: 0
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
        <table draggable>
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
                    {edittingID && <th>Действие</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <React.Fragment key={row.id}>
                        {edittingID === row.id ? (<tr>
                            <td><input onChange={(e) => handleInputChange(e, "departament")} value={editForm.departament} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "nickname")} value={editForm.nickname} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "steamId")} value={editForm.steamId} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "position")} value={editForm.position} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "vacation")} value={editForm.vacation} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "addedTime")} value={editForm.addedTime} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "warnings")} value={editForm.warnings} /></td>
                            <td><input onChange={(e) => handleInputChange(e, "preds")} value={editForm.preds} /></td>
                            <td>
                                <button onClick={handleSave}>Сохранить</button>
                                <button onClick={handleCancel}>Закрыть</button>
                            </td>
                        </tr>) : (<tr onClick={() => handleRowClick(row)}>
                            <td>{row.departament}</td>
                            <td>{row.nickname}</td>
                            <td>{row.steamId}</td>
                            <td>{row.position}</td>
                            <td>{row.vacation}</td>
                            <td>{row.addedTime}</td>
                            <td>{row.warnings}</td>
                            <td>{row.preds}</td>
                            {edittingID && <td/>}
                        </tr>)}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>
}