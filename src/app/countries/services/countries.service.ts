import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';



// const apiKey: string = 'Qth6cmRPWiWGD2sZkF5ba0LN0yqihdla';
const apiUrl : string = 'https://restcountries.com/v3.1';




@Injectable({providedIn: 'root'})
export class CountriesService {

  public cacheStore : CacheStore = {
    byCapital : { term: '' , countries: [] },
    byCountry : { term: '' , countries: [] },
    byRegion : { region: '' , countries: [] }

  }

  constructor(private http: HttpClient) { }


  private saveToLocalStorage(){
    localStorage.setItem( 'cacheStorage', JSON.stringify( this.cacheStore ) );

  }

  private loadFromLocalStorage() {
    if(!localStorage.getItem( 'cacheStorage' )) return;
  }


  private getCountriesRequest(url : string ) : Observable<Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      catchError(error => of([])),

         );
  }




  searchByAlphaCode(code : string ) : Observable< Country | null > {

   return this.http.get<Country[]>(`${apiUrl}/alpha/${code}`)
   .pipe(
    map ( countries => countries.length > 0 ? countries[0] : null),
    catchError(error => of(null))
   );

  }



  searchCapital(term : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/capital/${term}`)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries })
  //   catchError(error => of([]))
   );

  }
  searchCountry(term : string ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/name/${term}`)
   .pipe(
    tap( countries => this.cacheStore.byCountry = { term, countries })
  //   catchError(error => of([]))
    );
  }
  searchRegion(region : Region ) : Observable<Country[]> {

   return this.http.get<Country[]>(`${apiUrl}/region/${region}`)
   .pipe(
    tap( countries => this.cacheStore.byRegion = { region, countries })
  //   catchError(error => of([]))
    );

  }







}
