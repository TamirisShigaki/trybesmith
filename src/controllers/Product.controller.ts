import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/Product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const createdProduct = await this.productService.create(req.body);
    res.status(StatusCodes.CREATED).json(createdProduct);
  };

  public getAll = async (_req: Request, res:Response) => {
    const getProducts = await this.productService.getAll();
    res.status(StatusCodes.OK).json(getProducts);
  };
}