import { Component } from '@angular/core';
import { Book } from '../model/book.model'; //
import { BookRepository } from './../model/book.repository'; //

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent
{

  constructor(private repository: BookRepository) { } //


  get books(): Book[] //
  {
    return this.repository.getBooks();
  }

  get authors(): string[] //
  {
    return this.repository.getAuthors();
  }
}
