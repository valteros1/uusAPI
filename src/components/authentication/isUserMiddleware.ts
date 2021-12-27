import { Request, Response, NextFunction} from 'express';


const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
const { user } = res.locals;
if(user.role !== 'Admin') {
    return res.status(401).json({
        error: 'Elevated rights required for this operation',
    });
    
}

return next();
}

export default isAdmin;