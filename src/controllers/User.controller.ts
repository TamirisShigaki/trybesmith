import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { SignOptions } from 'jsonwebtoken';
import UserService from '../services/User.service';

const secret = process.env.JWT_SECRET || 'secreta' as string;

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const createdUser = await this.userService.create(req.body);

    const config: SignOptions = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ user: createdUser }, secret, config);
    return res.status(StatusCodes.CREATED).json({ token });
  };
}