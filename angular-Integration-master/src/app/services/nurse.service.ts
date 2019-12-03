import { Injectable } from '@angular/core';
import { BaseUrlProvider } from '../providers/urls.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private url:BaseUrlProvider, private  http:HttpClient) { }
}
