import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service.client';
import {BoardService} from '../../services/board/board.service';

@Component({
  selector: 'app-search-boards',
  templateUrl: './search-boards.component.html',
  styleUrls: ['./search-boards.component.css']
})
export class SearchBoardsComponent implements OnInit {

  user: {};
  boards: [{}];
  searchTerm: string;

  constructor(
    private boardService: BoardService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user || {};
  }

  searchBoards() {
    this.boardService.searchBoards(this.searchTerm).subscribe((res: any) => {
      this.boards = res;
    });
  }
}
