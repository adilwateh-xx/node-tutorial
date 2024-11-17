import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../routes/entity/user.entity';

export class UserController {
    public static async saveUser(req: Request, res: Response): Promise<any> {
        const { name, email, password } = req.body;
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
        const userRepository = AppDataSource.getRepository(User);
        await userRepository.save(user);
        return res.json({ success: true });
    }

    public static async getUser(req: Request, res: Response): Promise<any> {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();
        return res.json({ success: true, data: users });
    }

    public static async getUserById(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: id } });
        return res.json({ success: true, data: user });
    }

    public static async updateUser(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        const user = req.body;
        const userRepository = AppDataSource.getRepository(User);
        await userRepository.update(id, user);
        return res.json({ success: true });
    }

    public static async deleteUser(req: Request, res: Response): Promise<any> {
        const id = req.params.id;
        const userRepository = AppDataSource.getRepository(User);
        await userRepository.delete(id);
        return res.json({ success: true });
    }
}
