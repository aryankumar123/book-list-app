import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5213';

  constructor(private http : HttpClient) { }

  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);

  }
}
