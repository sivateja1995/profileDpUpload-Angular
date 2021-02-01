import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms'
import { HttpClient} from '@angular/common/http'
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { BackendService } from 'src/app/sd-service/backend.service';
@Component({
  selector: 'app-profiledp',
  templateUrl: './profiledp.component.html',
  styleUrls: ['./profiledp.component.scss']
})
export class ProfiledpComponent implements OnInit {
  imageurl:any="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg"
  showUploadBtn:boolean;
  loggedInUsername:string= 'siva';
  file:File;

  constructor(
    public domSanitizer: DomSanitizer,
    public ps : BackendService

  ) {

    }

  ngOnInit(): void {
    this.getProfilePic()
  }

  uploadExcel(data){
    console.log(data);
  this.showUploadBtn=false

    let formdata = new FormData();
   formdata.append("image",this.file);
   formdata.append("username",this.loggedInUsername);
    this.ps.uploadImage(formdata).subscribe(res=>{
      console.log(res)
      this.getProfilePic();
    })
  }


  fileUpload(event){
    this.showUploadBtn=true
    this.file=event.target.files[0];
  }


  async getProfilePic()
{
let photo= await this.ps.getImage(this.loggedInUsername).toPromise()
  let objectURL = URL.createObjectURL(photo);
  this.imageurl= this.domSanitizer.bypassSecurityTrustUrl(objectURL)
  console.log(this.imageurl['changingThisBreaksApplicationSecurity'])


}

}
