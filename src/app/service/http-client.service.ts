import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Shoe } from '../model/Shoe';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('https://shoestore-backend.herokuapp.com/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('https://shoestore-backend.herokuapp.com/users/add', newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('https://shoestore-backend.herokuapp.com/users/' + id);
  }

  getShoes() {
    return this.httpClient.get<Shoe[]>('https://shoestore-backend.herokuapp.com/shoes/get');
  }

  addUploadData(selectedFile) {

    return this.httpClient.post('https://shoestore-backend.herokuapp.com/shoes/upload', selectedFile);
  }

  addShoe(newShoe: Shoe) {
    console.log("add shoe")
    return this.httpClient.post<Shoe>('https://shoestore-backend.herokuapp.com/shoes/add', newShoe);
  }

  deleteShoe(id) {
    return this.httpClient.delete<Shoe>('https://shoestore-backend.herokuapp.com/shoes/' + id);
  }

  updateShoe(updatedShoe: Shoe) {
    return this.httpClient.put<Shoe>('https://shoestore-backend.herokuapp.com/shoes/update', updatedShoe);
  }
  
}


