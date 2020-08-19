import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Shoe } from '../model/Shoe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopshoe',
  templateUrl: './shopshoe.component.html',
  styleUrls: ['./shopshoe.component.css']
})
export class ShopshoeComponent implements OnInit {

  shoes: Array<Shoe>;
  shoesRecieved: Array<Shoe>

  cartShoes: any;

  constructor(private router: Router, private HttpClientService: HttpClientService) { }

  ngOnInit() {
    this.HttpClientService.getShoes().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    let data = localStorage.getItem('cart');
    if(data !== null){
      this.cartShoes = JSON.parse(data);
    } else {
      this.cartShoes = [];
    }
  }

// we will be taking the books response returned from the database
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
      shoewithRetrievedImageField.pic = shoe.pic;
      this.shoes.push(shoewithRetrievedImageField);
    }
  }

addToCart(shoeId) {
    //retrieve book from shoes array using the shoe id
    let shoe = this.shoes.find(shoe => {
      return shoe.id === +shoeId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected shoe to cart data
    cartData.push(shoe);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    shoe.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartShoes = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartShoes = [];
    localStorage.clear();
  }

}
