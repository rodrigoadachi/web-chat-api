import { IsString } from "class-validator";

export class ChatDto {

  @IsString()
  id: string;

  @IsString()
  name: string;
  
  @IsString()
  email: string;

  @IsString()
  text: string;
  
}

export class PayloadDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  text: string;
}