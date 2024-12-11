import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductEntity } from './entities/product.entity'; 
import { Category } from '../categories/entities/category.entity'; 

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  
})
export class ProductsModule {}
