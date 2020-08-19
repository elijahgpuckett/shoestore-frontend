import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shoe } from '../../../model/Shoe';
import { HttpClientService } from '../../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addshoe',
  templateUrl: './addshoe.component.html',
  styleUrls: ['./addshoe.component.css']
})
export class AddshoeComponent implements OnInit {

  @Input()
  shoe: Shoe;

  @Output()
  shoeAddedEvent = new EventEmitter();


  // public selectedFile;
  // imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(){
  }

  // public onFileChanged(event) {
  //   console.log(event);
  //   this.selectedFile = event.target.files[0];

  //   let reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (event2) => {
  //     this.imgURL = reader.result;
  //   };

  // }

saveShoe() {
  this.httpClientService.addShoe(this.shoe)
  .subscribe(
    (shoe) => {
      this.shoeAddedEvent.emit();
      this.router.navigate(['admin', 'shoes']);
    }
  );
  console.log(this.shoe);

  // if (this.shoe.id == null) {

  //   const uploadData = new FormData();
  //   uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
  //   this.selectedFile.imageName = this.selectedFile.name;

//     this.httpClient.post('http://localhost:8080/shoes/upload', uploadData, { observe: 'response' })
//       .subscribe((response) => {
//         if (response.status === 200) {
//           this.httpClientService.addShoe(this.shoe).subscribe(
//             (shoe) => {
//               this.shoeAddedEvent.emit();
//               this.router.navigate(['admin', 'shoes']);
//             }
//           );
//           console.log('Image uploaded successfully');
//         } else {
//           console.log('Image not uploaded successfully');
//         }
//         console.log(this.shoe);
//       }
//     );

//   } else {
//       this.httpClientService.updateShoe(this.shoe).subscribe(
//         (shoe) => {
//           this.shoeAddedEvent.emit();
//           this.router.navigate(['admin', 'shoes']);
//         }
//       );
//    }
 }

}
