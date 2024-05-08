import { Entity, Fail, Ok, Result } from 'types-ddd'
import { CategoryValueObject } from '../value-objects/category'

export interface ProductProps {
  name: string
  category: CategoryValueObject
  price: number
  description: string
  images: string[]
}

export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps) {
    super(props)
  }

  public static create(props: ProductProps): Result<Product> {
    if (props.price <= 0) {
      return Fail('Price must be greater than zero')
    }
    return Ok<Product>(new Product(props))
  }
}
