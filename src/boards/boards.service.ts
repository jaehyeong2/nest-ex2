import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';


@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    )

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board>

    async getBoardById(id:number): Promise <Board> {
        const found = await this.boardRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`cant find Board with id $(id)`);
        }

        return found;
    }


    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoatdDto : CreateBoardDto) {
    //     const { title, description } = createBoatdDto;
    //     const board: Board = {
    //         id: uuid,
    //         title, 
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board;
    // }
    // getBoardById(id: string) : Board {
    //     const found = this.boards.find((board) => board.id === id );

    //     if(found) {
    //         throw new NotFoundException(`can't find board id : ${id}`);
    //     } 
    //     return found;
    // }
    
    // deleteBoardById(id: string) : void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !==found.id );
    // }

    // updateBoardStatus(id: string, status: BoardStatus ): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
