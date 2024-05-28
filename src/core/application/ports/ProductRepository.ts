import { Product } from '../../domain/entities/Product'

export interface IProductRepository {
  addProduct(product: Product): Promise<Product | void>
  editProduct(product: Product): Promise<void>
  removeProduct(productId: number): Promise<void>
  getProductsByIds(productIds: number[]): Promise<Product[]>
}
