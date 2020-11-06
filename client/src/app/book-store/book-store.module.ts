import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BookStoreComponent } from '../book-store/book-store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [BookStoreComponent, CounterDirective, CartSummaryComponent],
    exports: [BookStoreComponent, CounterDirective]
})
export class BookStoreModule {}