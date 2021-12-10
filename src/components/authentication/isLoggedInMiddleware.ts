import { Request, Response, NextFunction} from 'express';

const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
const authHeader = req.headers.authorization;
console.log(authHeader)
return next();
}

export default isLoggedIn;
