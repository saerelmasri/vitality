const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }
}

module.exports = verifyJWT;