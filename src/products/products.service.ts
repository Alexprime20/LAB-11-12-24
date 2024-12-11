import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { CreateCatDto } from '../cats/dto/create-cat.dto';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { DiscountEntity } from './Discount.Entity';
import { ProductDiscountEntity } from './Product.Discount.entity';

@Injectable()
export class ProductsService {
  constructor(
  ) {}

  async findAll( paginationDto: PaginationDto ) {
    return 
  }
  
  async findOne(id:number) {
    return 
  }
  
  async create( createDiscountDto: CreateDiscountDto ) {
    return 
  }
  async update(id:number, updateDiscountDto: UpdateDiscountDto) {
    return 
  }
  async remove(id: number) {
    return 
  }

  // Otras funciones (create, update, delete) aquí...
}
