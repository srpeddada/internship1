import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import * as $ from "jquery";
import { NgForm } from "@angular/forms";


export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
      public service: ServiceService,
  ) { }
  imgn = false
  photoJSON
  photo = false;
  logo
  delItem
  photosData
  ngOnInit(): void {
    this.service.getImages().subscribe((res) => {
      console.log(res)
      this.photosData = res
    })
  }

 selectedFile: ImageSnippet;
    processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    //  console.log(this.selectedFile.src.split("base64,")[1]);
      $("#imageUploadForm").addClass('loading1');
      this.service.uploadImage(this.selectedFile.src.split("base64,")[1]).subscribe(
        (res) => {
          console.log(res)
          this.photoJSON = res
          var obj = JSON.parse(this.photoJSON)
          console.log(obj)
          $("#uploadedImg")[0].style.backgroundImage='url(https://i.imgur.com/'+obj.data.id+'.png)';
           $("#imageUploadForm").addClass('loading');
          const form = {
            link : 'https://i.imgur.com/'+obj.data.id+'.png',
          }
            this.service.addphoto(form).subscribe((res)=>{
   console.log(res)
   if(res=="success"){
     this.photo=true
        setTimeout(function() {
          $("#imageUploadForm").addClass('loaded');
      }, 5000);
      //console.log(this.branchcount);

      setTimeout(function() {
        $("#imageUploadForm").removeClass('loading').removeClass('loaded').removeClass('loading1');
      location.reload()     
      }, 10000);
   }
   else{
     this.photo=false
   }
 })
      //        setTimeout(function() {
      //         $("#imageUploadForm").addClass('loaded');
      // }, 8000);
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
   
   
    }
  delete(data) {
     console.log(data)
    this.delItem = data
  }
  
  deleteImg(data) {
    var da = {
      id: data
    }
    console.log(data)
    this.service.deleteImage(da).subscribe((res) => {
      console.log(res)
      if (res == "success") {
        location.reload()
      }
    })
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
  
}
