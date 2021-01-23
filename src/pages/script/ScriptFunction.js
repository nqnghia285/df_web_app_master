import shipper from "../../functions/shipper/Shipper"

export const getScriptList = async () => {
    const scripts = await shipper.get('/script/get-all-of-scripts')
        .then(async res => {
            console.log(res);
            if (res && res.isSuccess) {
                return res.scripts
            } else {
                return undefined
            }
        })
        .catch(err => {
            console.log(err.message)
            return undefined
        })
    return scripts
}