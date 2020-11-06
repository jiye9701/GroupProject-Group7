import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
    providers: [BookRepository, StaticDataSource, Cart]
})
export class ModelModule {}