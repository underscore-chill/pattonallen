import { NgClass } from '@angular/common';
import {
  Component,
  DOCUMENT,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lexigray-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
})
export class Header {
  isMenuOpen = signal<boolean>(false);
  isScrolled = signal<boolean>(false);
  activeDropdown = signal<string | null>(null);
  window = inject(DOCUMENT).defaultView || window;

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  showDropdown(dropdown: string) {
    this.activeDropdown.set(dropdown);
  }

  hideDropdown() {
    this.activeDropdown.set(null);
  }

  isDropdownActive(dropdown: string): boolean {
    return this.activeDropdown() === dropdown;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(this.window.scrollY > 40);
  }
}
