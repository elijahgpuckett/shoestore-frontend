import { Component, OnInit } from '@angular/core';
import { Shoe } from './../../model/Shoe';
import { HttpClientService } from '../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  shoes: Array<Shoe>;
  shoesRecieved: Array<Shoe>
  selectedShoe: Shoe;
  action: string;

  constructor(private httpClientService: HttpClientService,
  private activedRoute: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.httpClientService.getShoes().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
        (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
	      // get the parameter id. this will be the id of the shoe whose details 
	      // are to be displayed when action is view.
	      const id = params['id'];
	      // if id exists, convert it to integer and then retrive the shoe from
	      // the shoes array
        if (id) {
            this.selectedShoe = this.shoes.find(shoe => {
            return shoe.id === +id;
          });
        }
      }
    );
}

  // we will be taking the shoes response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.shoes = new Array<Shoe>();
    //get books returned by the api call
    this.shoesRecieved = response;
    for (const shoe of this.shoesRecieved) {
    
      const shoewithRetrievedImageField = new Shoe();
      shoewithRetrievedImageField.id = shoe.id;
      shoewithRetrievedImageField.name = shoe.name;
      //populate retrieved image field so that book image can be displayed
      // shoewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + shoe.picByte;
      shoewithRetrievedImageField.brand = shoe.brand;
      shoewithRetrievedImageField.price = shoe.price;
      shoewithRetrievedImageField.size = shoe.size;
      shoewithRetrievedImageField.pic= shoe.pic;
      this.shoes.push(shoewithRetrievedImageField);
    }
  }

  addShoe() {
    this.selectedShoe = new Shoe();
    this.router.navigate(['admin', 'shoes'], { queryParams: { action: 'add' } });
  }

  viewShoe(id: number ) {
    this.router.navigate(['admin', 'shoes'], { queryParams: {id, action: 'view'}});
  }

}

