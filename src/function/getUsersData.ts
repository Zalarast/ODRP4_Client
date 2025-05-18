import axios from "axios"
import { serverUrl } from "../utils"

export async function getUsersData(searchNickName: string) {
    return axios({
        url: serverUrl() + "/getInfo",
        method: "POST",
        data: { searchNickName: searchNickName }
    })
}