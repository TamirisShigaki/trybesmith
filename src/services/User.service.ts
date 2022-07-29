import connection from '../models/connection';
import User from '../interfaces/User.interfaces';
import UserModel from '../models/User.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    const createdUser = this.model.create(user);
    return createdUser;
  }
}