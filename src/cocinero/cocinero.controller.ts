import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';

@Controller('cocinero')
export class CocineroController {
  constructor(private readonly cocineroService: CocineroService) {}

  @Post()
  create(@Body() createCocineroDto: CreateCocineroDto) {
    return this.cocineroService.create(createCocineroDto);
  }

  @Get()
  findAll() : Cocinero[] {
    return this.cocineroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cocineroService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocineroDto: UpdateCocineroDto) {
    return this.cocineroService.update(+id, updateCocineroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocineroService.remove(+id);
  }
}
