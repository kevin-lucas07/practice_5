import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';

@Injectable()
export class CocineroService {

  private cocineros: Cocinero[]=[
    // {id:1, identificacion:'1' , nombre:'Uno', direccion:'a',telefono:'123', tipo:1, estado:true},
    // {id:2, identificacion:'2' , nombre:'Dos', direccion:'b',telefono:'456', tipo:1, estado:true},
    
    {id:1, nombre:'Kevin' , sueldo_basico:200, estado:true},
    {id:2, nombre:'Victor' , sueldo_basico:100, estado:true},
  ]

  create(createCocineroDto: CreateCocineroDto) {
    const cocinero = new Cocinero();
    cocinero.id=  Math.max( ... this.cocineros.map(elemento => elemento.id),0 )+1 ;
    cocinero.nombre = createCocineroDto.nombre;
    cocinero.sueldo_basico = createCocineroDto.sueldo_basico;
    this.cocineros.push(cocinero);
    return cocinero;
  }

  findAll() : Cocinero[] {
    return this.cocineros;
  }

  findOne(id: number) {
    const cocinero =  this.cocineros.find(cocinero=> cocinero.id===id);
    if (!cocinero) throw new NotFoundException(`ID ${id} not found`)
    return cocinero;
  }

  update(id: number, updateCocineroDto: UpdateCocineroDto) {
    const { nombre, sueldo_basico, estado   } = updateCocineroDto;
    const cocinero = this.findOne(id);
    if (nombre) cocinero.nombre = nombre;
    if (sueldo_basico) cocinero.sueldo_basico = sueldo_basico;
    if (estado!= undefined) cocinero.estado= estado;

    this.cocineros =  this.cocineros.map( elemento=> {
      if (elemento.id===id) return cocinero;
      return elemento;
    } )

    return cocinero;

  }

  remove(id: number) {
    this.findOne(id);
    this.cocineros =  this.cocineros.filter(elemento=> elemento.id!== id);
  }
}
