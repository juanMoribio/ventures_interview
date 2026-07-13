import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Table } from '../components/table/table';
import { Menu } from '../components/menu/menu';
import { Brand } from '../components/brand/brand';
import { Footer } from '../components/footer/footer';
import { Detail } from '../components/detail/detail';


@Component({
  selector: 'app-main-page',
  imports: [Header, Table, Menu, Brand, Footer, Detail],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
