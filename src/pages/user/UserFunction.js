import shipper from "../../functions/shipper/Shipper"

export const getUserList = async () => {
    const userList = await shipper.get('/user/get-all-of-users')
        .then(async res => {
            console.log(res);
            if (res && res.isSuccess) {
                return res.users
            } else {
                return undefined
            }
        })
        .catch(err => {
            console.log(err.message)
            return undefined
        })
    return userList
}