import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-lista-characters',
  templateUrl: './lista-characters.component.html',
  styleUrls: ['./lista-characters.component.css']
})
export class ListaCharactersComponent implements OnInit {

    personagens: Array<any> = [];
  
    constructor(private listService: ListService) { }
  
    ngOnInit(): void {
      this.getList();
    }
  
    getList() {
      this.listService.getlist().subscribe((result) => {
        this.personagens = result?.results;
      })
    }
  }
  