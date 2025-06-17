import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lexigray-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  year = new Date().getFullYear();
}
