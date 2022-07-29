import connection from '../models/connection';
import Product from '../interfaces/Product.interfaces';
import ProductModel from '../models/Product.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const createdProduct = this.model.create(product);
    return createdProduct;
  }
}