import { toJSON_User } from '../../InterFace/User'

export function toJSON(this: toJSON_User) {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.__v
    return userObject
}
