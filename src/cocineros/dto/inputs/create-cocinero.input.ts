import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateCocineroInput {

  @Field(()=>String )
  @IsNotEmpty()
  identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  // @Field(()=>String )
  // @IsNotEmpty()
  // direccion:string;

  // @Field(()=>[String], {nullable:true} )
  // @IsNotEmpty()
  // telefono:string[];

  @Field(()=>Int )
  @IsPositive()
  sueldo_basico: number;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
