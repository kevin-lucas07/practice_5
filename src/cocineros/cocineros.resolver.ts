import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CocinerosService } from './cocineros.service';
import { Cocinero } from './entities/cocinero.entity';
import { UpdateCocineroInput, CreateCocineroInput } from './dto/inputs';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Cocinero)
export class CocinerosResolver {
  constructor(private readonly cocinerosService: CocinerosService) {}

  @Mutation(() => Cocinero)
  async createCocinero(@Args('createCocineroInput') createCocineroInput: CreateCocineroInput)
  :Promise<Cocinero> {
    return this.cocinerosService.create(createCocineroInput);
  }

  @Query(() => [Cocinero], { name: 'cocineros' })
  async findAll():Promise<Cocinero[]> {
    return this.cocinerosService.findAll();
  }

  @Query(() => Cocinero, { name: 'cocinero' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Cocinero> {
    return this.cocinerosService.findOne(id);
  }

  @Mutation(() => Cocinero)
  updateCocinero(@Args('updateCocineroInput') updateCocineroInput: UpdateCocineroInput): Promise<Cocinero> {
    return this.cocinerosService.update(updateCocineroInput.id, updateCocineroInput);
  }

  @Mutation(() => Cocinero)
  removeCocinero(@Args('id', { type: () => ID }) id: string): Promise<Cocinero> {
    return this.cocinerosService.remove(id);
  }
}
