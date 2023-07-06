import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'chef'})
@ObjectType()
export class Cocinero {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    @Column()
    @Field(()=> String)
    identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    // @Column()
    // @Field(()=>String)
    // direccion:string;

    // @Column('text',{array:true})
    // @Field(()=>[String] ,{nullable:true} )
    // telefono:string[];

    @Column()
    @Field(()=> Int)
    sueldo_basico: number;

    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
