import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';
export declare class CocineroService {
    private cocineros;
    create(createCocineroDto: CreateCocineroDto): Cocinero;
    findAll(): Cocinero[];
    findOne(id: number): Cocinero;
    update(id: number, updateCocineroDto: UpdateCocineroDto): Cocinero;
    remove(id: number): void;
}
