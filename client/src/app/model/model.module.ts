import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
    imports: [HttpClientModule],
    providers: [BookRepository, StaticDataSource, Cart,
    {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule {}