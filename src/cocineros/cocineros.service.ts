import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCocineroInput, UpdateCocineroInput } from './dto/inputs';
import { Cocinero } from './entities/cocinero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CocinerosService {

  constructor( 
    @InjectRepository(Cocinero)
    private readonly cocinerosRepository:Repository<Cocinero> ){}

  async create(createCocineroInput: CreateCocineroInput): Promise<Cocinero>  {
    const newCocinero= this.cocinerosRepository.create(createCocineroInput);
    return await this.cocinerosRepository.save(newCocinero); 
  }

  async findAll(): Promise<Cocinero[]> {
    return this.cocinerosRepository.find();
  }

  async findOne(id: string): Promise<Cocinero> {
     const cocinero= await  this.cocinerosRepository.findOneBy({id});
     if (!cocinero) throw new NotFoundException(`Not found`)
     return cocinero;
  }

  async update(id: string, updateCocineroInput: UpdateCocineroInput): Promise<Cocinero> {
    
    const cocinero = await this.cocinerosRepository.preload(updateCocineroInput);
    if (!cocinero) throw new NotFoundException(`Not found`)
    return this.cocinerosRepository.save(cocinero);

  }

  async remove(id: string): Promise<Cocinero> {

    const cocinero= await  this.findOne(id);

    await this.cocinerosRepository.update({id:id},{estado:false  });

    //await this.cocinerosRepository.remove(cocinero);

    return {...cocinero, id};

  }
}
