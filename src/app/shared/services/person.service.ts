import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PersonService {

  url = "https://data-test2-b1af6-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  public getAnimal(): Observable<any>{
    return this.http.get(`${this.url}/pets.json`);
  }

  public addAnimal(animal: any): Observable<any>{
    return this.http.post(`${this.url}/pets.json`, animal);
  }

  public deleteAnimal(id: any): Observable<any>{
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }

  public updateAnimal(animal: any, id: any): Observable<any>{
    return this.http.put(`${this.url}/pets/${id}.json`, animal);
  }

}