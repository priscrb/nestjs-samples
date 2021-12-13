import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
// Using readonly to maintain immutability
export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of the coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of coffee' })
  @IsString()
  readonly brand: string;

  @IsNumber()
  readonly qty: number;

  @IsDate()
  @Type(() => Date)
  readonly launchDate: Date;


  @IsBoolean()
  readonly soldOut: boolean;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}
