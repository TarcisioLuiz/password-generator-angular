import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private route: Router) {}

  goToGenerator() {
    this.route.navigate(["/generator"])
  }

  goToHistory() {
    this.route.navigate(["/history"])

  }
}
