import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCocineroDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
    
    @IsNumber()
    @IsNotEmpty()
    sueldo_basico: number;
}
