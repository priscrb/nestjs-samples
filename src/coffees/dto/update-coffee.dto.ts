import { PartialType } from '@nestjs/swagger';
import { CreateCoffeeDto } from './create-coffee.dto';


/**
 * Partial type expects type return values of the class assigned with all the values set to optional
 * also inherits validation rules
 */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
