import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';



// const apiKey: string = 'Qth6cmRPWiWGD2sZkF5ba0LN0yqihdla';
const apiUrl : string = 'https://restcountries.com/v3.1';



@Injectable({providedIn: 'root'})
export class ServiceNameService {



  constructor(private http: HttpClient) { }


  searchCapital(term : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/capital/${term}`);

  }







}
