import { Pool } from 'mysql2/promise';
import Order from '../interfaces/Order.interface';

export default class OdderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT o.id, o.userId,
    JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId;`;

    const [result] = await this.connection.execute(query);

    return result as Order[];
  }
}

// Ref. JSON_ARRAYAGG - https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg