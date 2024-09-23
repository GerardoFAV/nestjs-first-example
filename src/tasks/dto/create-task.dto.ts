import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator'

export{
IsString
} from 'class-validator'

export class CreateTaskDto{

    @IsString()
    @MinLength(1)
    title:string

    @IsString()
    @MinLength(1)
    description:string
}