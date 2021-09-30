import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}


  @Get()
  getAllBoards() : Board[] {
      return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() createBoardDto: CreateBoardDto
  ): Board {
    return this.boardsService.createBoard(createBoardDto); 
  }

  @Get('/:id')
  getBoardId(@Param('id') id: string): Board{
    return this.boardsService.getBoardById(id)
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void{
    this.boardsService.deleteBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardService(
    @Param('id') id: string,
    @Body('status',BoardStatusValidationPipe) status: BoardStatus,
  ){
    return this.boardsService.updateBoardStatus(id, status);
  }

}
