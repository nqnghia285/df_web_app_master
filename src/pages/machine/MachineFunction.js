import shipper from "../../functions/shipper/Shipper"

export const getMachineList = async () => {
    const machineList = await shipper.get('/machine/get-all-of-machines')
        .then(async res => {
            console.log(res);
            if (res && res.isSuccess) {
                return res.machines
            } else {
                return undefined
            }
        })
        .catch(err => {
            console.log(err.message)
            return undefined
        })
    return machineList
}