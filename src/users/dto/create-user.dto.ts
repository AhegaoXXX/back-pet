import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'mail'})
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: 'Wrong email'})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Must be string'})
    @Length(4, 16, {message: '4-16 characters'})
    readonly password: string;
}
