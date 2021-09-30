import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]
    


    transform(value: any, metadata: ArgumentMetadata){
        value = value.upperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isnt in the status options `)
        }
        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }

}