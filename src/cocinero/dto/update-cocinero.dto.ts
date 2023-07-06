import { PartialType } from '@nestjs/mapped-types';
import { CreateCocineroDto } from './create-cocinero.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCocineroDto extends PartialType(CreateCocineroDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
