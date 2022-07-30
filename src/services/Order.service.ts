import connection from '../models/connection';
import Order from '../interfaces/Order.interface';
import OrderModel from '../models/Order.model';

export default class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }
  
  public async getAll(): Promise<Order[]> {
    const getOrders = await this.model.getAll();
    return getOrders;
  }
}