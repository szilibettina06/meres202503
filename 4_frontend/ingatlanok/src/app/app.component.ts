import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ingatlanok';

  backgroundClass: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url.startsWith('/home')) {
          this.backgroundClass = 'mainPage';
        } else if (event.url.startsWith('/offers') || event.url.startsWith('/addnew') ) {
          this.backgroundClass = 'bg';
        }
      }
    })
  }
}
