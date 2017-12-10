import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board/board.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards: any;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getRandomBoardCollection().subscribe((boards: any) => {
      this.boards = boards;
    });
  }
}
