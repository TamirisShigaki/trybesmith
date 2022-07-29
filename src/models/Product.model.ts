import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/Product.interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> { 
    const { name, amount } = product;
    const query = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );
    const [dataInserted] = query;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const query = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    const [rows] = query;
    return rows as Product[];
  }
}
