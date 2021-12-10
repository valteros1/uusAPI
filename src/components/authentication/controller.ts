import { S_IFBLK } from 'constants';
import { Request, Response} from 'express';
import loginService from './service';
const authController =  {
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const token = await loginService.login(email, password);
        if(!token) {
            return res.status(404).json({
                error: 'check credentials',
            });
        }
        return res.status(200).json({
            token
           
        });
    },
}

export default authController; 