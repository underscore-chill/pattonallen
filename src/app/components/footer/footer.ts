import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lexigray-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();
}
