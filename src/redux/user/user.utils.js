export const setAdminUser = (user) => {
    console.log('userin')
    console.log(user)
    if (user.password === 'fc2020')
    {
        return user.username
    }
}