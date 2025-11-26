import { Component } from '@angular/core';

@Component({
  selector: 'Header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  institutionName = 'Fatec Itu';
  institurionImageUrl = 'https://avatar.iran.liara.run/public/22';
}
