import axios from "axios";
import { serverUrl } from "../../../utils";


export default async function authorization(authData: { login: string, password: string }) {
    const res = await axios({
        url: serverUrl() + "/auth",
        data: { ...authData, reauth: true },
        method: "POST",
    });
    return res.data.result;
}