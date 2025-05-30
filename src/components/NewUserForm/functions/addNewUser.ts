import axios from "axios";
import { getCookie, serverUrl } from "../../../utils";

interface newUserData {
    nickName: string
    steamID32: string,
    steamID64: string,
    discordID: string,
    rank: string,
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
        headers: {
            "Authorization": `Bearer ${getCookie("UID")}`
        }
    }).then((res) => {
        return { code: res.data.result, msg: res.data.msg }
    }).catch((err) => {
        console.error(err)
        return { code: false, msg: "Ошибка со связью с сервером" };
    })
    return { code: res.code, msg: res.msg };
}
