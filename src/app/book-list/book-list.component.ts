import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  

  bookTitle : string = "Angular 9";
  book : Book = { id : 1, author : "John Doe", title : "Angular 9"};

  books : Book[] = [

    // { id : 1, author : "John Doe", title : "Angular 9"},
    // { id : 2, author : "Jane Doe", title : "Angular 10"},
    // { id : 3, author : "Jim Doe", title : "Angular 11"},
    // { id : 4, author : "Josh Doe", title : "Angular 12"},
    // { id : 5, author : "Jill Doe", title : "Angular 13"}

  ];

  constructor(private bookService : BookService){}

  ngOnInit(){      //Lifecycle hook
    this.getBooks();
  }

  getBooks() :void {
    this.bookService.getBooks()
    .subscribe(booksFromApi => this.books = booksFromApi);
  }

}
