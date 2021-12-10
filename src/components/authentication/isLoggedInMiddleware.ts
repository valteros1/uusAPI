import { Request, Response, NextFunction} from 'express';
import jwtService from '../general/services/jwtService';

const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
const authHeader = req.headers.authorization;
const token = authHeader?.split(' ')[1];
if (!token) {
    return res.status(401).json({
        error: 'Invalid token or not provided',
    });
}
const payload = await jwtService.verify(token);
if(!payload) {
    return res.status(401).json({
        error: 'Invalid token',
    });
    
 
}
res.locals.user = payload;


console.log(payload);
return next();
}

export default isLoggedIn;
