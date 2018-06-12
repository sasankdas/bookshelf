import {Component} from "@angular/core";
import {Book} from "../shared/book";
import { Router, ActivatedRoute } from "@angular/router";
import { GoogleBooksService } from "../shared/google-books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  private book: Book;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private googleBooksService: GoogleBooksService) {
this.route.params.subscribe(params=> {console.log(params);
if(params['bookId']){
this.getBook(params['bookId']);
    }
});

}

  getBook(bookId: string) {
    this.googleBooksService.retrieveBook('bookId')
          .subscribe(value => this.book=value);
          console.log(this.book)
  }

  hasBook(book: Book): boolean {
    //TODO
    return false;
  }

  addBook(book: Book) {
    //TODO
  }

  removeBook(book: Book) {
    //TODO
  }
}
