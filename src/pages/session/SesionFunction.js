import shipper from "../../functions/shipper/Shipper"

export const getSessionList = async () => {
    const sessionList = await shipper.get('/session/get-all-of-sessions')
        .then(async res => {
            console.log(res);
            if (res && res.isSuccess) {
                return res.sessions
            } else {
                return undefined
            }
        })
        .catch(err => {
            console.log(err.message)
            return undefined
        })
    return sessionList
}