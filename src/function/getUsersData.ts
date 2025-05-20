import axios from "axios"
import { serverUrl } from "../utils"

export async function getUsersData(searchNickName: string) {
    return axios({
        url: serverUrl() + "/getInfo",
        method: "POST",
        data: { searchNickName, type: "findeAll" }
    })
}

export async function getUserInfo(searchSteamId: string) {
    return axios({
        url: serverUrl() + "/getInfo",
        method: "POST",
        data: { searchSteamId, type: "findeOne" }
    })
}