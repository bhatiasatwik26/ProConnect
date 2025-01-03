import jwt from 'jsonwebtoken';

export const generateVerificationCode = () => {
    return Math.floor(10000 + Math.random() * 9000).toString();
}
export const generateTokenAndSetCookies = (res, id) => {
    console.log('Generaring token');
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
    res.cookie('access_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 7*24*60*60*1000
    });
    return token;
}