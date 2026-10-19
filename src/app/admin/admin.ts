import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Content } from '../content/content';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  imports: [Header, Sidebar, Content, Footer ],
  selector: 'app-admin',
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
