import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from '../../../model/Shoe';
import { Router } from '@angular/router';
import { HttpClientService } from '../../../service/http-client.service';

@Component({
  selector: 'app-viewshoe',
  templateUrl: './viewshoe.component.html',
  styleUrls: ['./viewshoe.component.css']
})
export class ViewshoeComponent implements OnInit {

  @Input()
  shoe: Shoe;

  @Output()
  shoeDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, 
    private router: Router) { }

  ngOnInit(){
  }
 
  deleteShoe() {
    this.httpClientService.deleteShoe(this.shoe.id).subscribe(
      (shoe) => {
        this.shoeDeletedEvent.emit();
        this.router.navigate(['admin', 'shoes']);
      }
    )
  }

  editShoe() {
    this.router.navigate(['admin', 'shoes'], { queryParams: { action: 'edit', id: this.shoe.id } });
  }
}
