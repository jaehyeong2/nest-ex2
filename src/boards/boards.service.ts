import { Injectable } from '@nestjs/common';
import { BoardStatus } from './board.model';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];


    getAllBoards(): Board[] {
        return this.boards;
    }
}
