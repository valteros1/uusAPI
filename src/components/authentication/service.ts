import usersService from "../users/services"
import hashService from "../general/services/hashService";
import jwtService from "../general/services/jwtService";

const loginService = {
    login: async (email: string, password: string) => {
        const user: any = await usersService.getUserByEmail(email);
        if (!user) return false;
        const match = await hashService.match(password, user.password);
        if (!match) return false;
        const token = await jwtService.sign(user);
        return token;
        
    }
}

export default loginService;