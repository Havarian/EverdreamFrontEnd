export default function  AuthHeader()  {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token
    if (user && token){
        return {'Authorization': `Bearer ${token}`};
    } else {
        return {};
    }
}