export const setAdminUser = (user) => {
    return user.password === 'fc2020' ? user.username : null
}

export const toggleAdmin = (user) => {
    return user.password === 'fc2020'
}