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

export const toggleStatusOfMachine = async (ms) => {
    const response = await shipper.post('/user-action/control-machine', ms)
        .then(res => {
            if (res && res.isSuccess) {
                return true
            } else {
                return false
            }
        })
        .catch(err => false)

    return response
}

export const toggleStatusOfDevices = async (ms) => {
    const response = await shipper.post('/user-action/control-devices', ms)
        .then(res => {
            if (res && res.isSuccess) {
                return true
            } else {
                return false
            }
        })
        .catch(err => false)

    return response
}

export const toggleIsAutoOfMachine = async (ms) => {
    const response = await shipper.post('/user-action/control-manual-or-auto', ms)
        .then(res => {
            if (res && res.isSuccess) {
                return true
            } else {
                return false
            }
        })
        .catch(err => false)

    return response
}

export const setCycleTimeOfMachine = async (ms) => {
    const response = await shipper.post('/user-action/set-cycle-time', ms)
        .then(res => {
            if (res && res.isSuccess) {
                return true
            } else {
                return false
            }
        })
        .catch(err => false)

    return response
}