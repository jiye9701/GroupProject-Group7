import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BookStoreComponent } from '../book-store/book-store.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [BookStoreComponent],
    exports: [BookStoreComponent]
})
export class BookStoreModule {}