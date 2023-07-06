import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';
export declare class CocineroController {
    private readonly cocineroService;
    constructor(cocineroService: CocineroService);
    create(createCocineroDto: CreateCocineroDto): Cocinero;
    findAll(): Cocinero[];
    findOne(id: number): Cocinero;
    update(id: string, updateCocineroDto: UpdateCocineroDto): Cocinero;
    remove(id: string): void;
}
