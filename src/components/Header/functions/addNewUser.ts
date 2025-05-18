import axios from "axios";
import { getCookie, serverUrl } from "../../../utils";

interface newUserData {
    nickName: string
    steamID32: string,
    steamID64: string,
    discordID: string,
    position: string,
    department: string,
    unionTeamsLink: string,
    forumLink: string,
    probation: boolean,
}

export default async function addNewUser(newUserData: newUserData): Promise<{
    code: boolean;
    msg: string;
}> {
    const res = await axios({
        url: serverUrl() + "/newUser",
        data: { token: getCookie("UID"), newUserData: newUserData },
        method: "POST",
    }).then((res) => {
        if (res.data.result) {
            return { code: true, msg: "Пользователь успешно добавлен" };
        } else {
            return { code: false, msg: "Ошибка при добавлении" };
        }
    }).catch((err) => {
        console.error(err)
        return { code: false, msg: "Ошибка со связью с сервером" };
    })
    return { code: res.code, msg: res.msg };
}
