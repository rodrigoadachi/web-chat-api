import { IsString } from "class-validator";

export class ChatDto {

  @IsString()
  id: string;

  @IsString()
  email: string;
  
  @IsString()
  text: string;
  
}