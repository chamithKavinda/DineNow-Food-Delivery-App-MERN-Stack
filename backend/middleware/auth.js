import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.headers.token || req.headers.authorization;
    
    if (!token) {
        return res.json({success: false, message: "Not Authorized Login Again"});
    }
    
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next(); // This was missing in your original code
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Invalid token"});
    }
}

export default authMiddleware;