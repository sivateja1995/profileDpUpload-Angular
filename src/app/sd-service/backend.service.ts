import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public http:HttpClient) { }


  //uplaoding of the image
  uploadImage(payload){
    return this.http.post(`${environment.baseUrl}/upload`,payload)
  }

// retiving the image
getImage(username){
  return this.http.get(`${environment.baseUrl}/uploaded/pic?userName=${username}`,{responseType:'blob'})
}



}
