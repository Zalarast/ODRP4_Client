import axios from "axios";
import { setCookie, serverUrl, getCookie } from "../utils";

interface userInfo {
    login?: string,
    premisson?: string
}

export async function authorization(authData: { login: string, password: string }, setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>): Promise<{
    code: boolean;
    msg: string;
}> {
    const res = await axios({
        url: serverUrl() + "/auth",
        data: { ...authData },
        headers: {
            "Authorization": `Bearer ${getCookie("UID")}`
        },
        method: "POST",
    }).then((res) => {
        if (res.data.result) {
            res.data.token && setCookie("UID", res.data.token);
            res.data.userInfo.login && setCookie("PID", res.data.userInfo.login);
            setUserInfo({ ...res.data.userInfo })
            return { code: res.data.result, msg: `Добро пожаловать, ${res.data.userInfo.login}` };
        } else {
            return { code: res.data.result, msg: res.data.msg };
        }
    }).catch((err) => {
        console.error(err)
        return { code: false, msg: "Ошибка со связью с сервером" };
    })
    return { code: res.code, msg: res.msg };
}

export async function autoAuthorization(
    setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>
) {
    if (getCookie("UID")) {
        const res = await axios({
            url: serverUrl() + "/auth",
            data: { token: getCookie("UID") },
            method: "POST",
            headers: {
                "Authorization": `Bearer ${getCookie("UID")}`
            }
        });
        if (res.data.result)
            setUserInfo({ ...res.data.userInfo });

        return res.data.result;
    } else return false;
}
