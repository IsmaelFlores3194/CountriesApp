import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';



// const apiKey: string = 'Qth6cmRPWiWGD2sZkF5ba0LN0yqihdla';
const apiUrl : string = 'https://restcountries.com/v3.1';



@Injectable({providedIn: 'root'})
export class CountriesService {



  constructor(private http: HttpClient) { }


  searchByAlphaCode(code : string ) : Observable< Country | null > {

   return this.http.get<Country[]>(`${apiUrl}/alpha/${code}`)
   .pipe(
    map ( countries => countries.length > 0 ? countries[0] : null),
    catchError(error => of(null))
   );

  }
  searchCapital(cap : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/capital/${cap}`)
   .pipe(
    catchError(error => of([]))
   );

  }
  searchCountry(cou : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/name/${cou}`)
   .pipe(
    catchError(error => of([]))
   );

  }
  searchRegion(reg : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/region/${reg}`)
   .pipe(
    catchError(error => of([]))
   );

  }







}
