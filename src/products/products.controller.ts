import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { DiscountEntity } from './Discount.Entity';
import { ProductDiscountEntity } from './Product.Discount.entity';


@Controller('products')
export class ProductsController {
  constructor(private readonly DiscountEntity: ProductsService) {}

  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.DiscountEntity.create(createDiscountDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto  ) {
    return this.DiscountEntity.findAll( paginationDto );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DiscountEntity.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: UpdateDiscountDto) {
    return this.DiscountEntity.update(+id, updateDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.DiscountEntity.remove(+id);
  }
}
