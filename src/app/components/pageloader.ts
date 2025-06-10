import {
  Component,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  InputSignal,
  model,
  input,
} from '@angular/core';
import {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
} from '@angular/router';

@Component({
  selector: 'lexigray-page-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #008080;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: sk-bounce 2s infinite ease-in-out;
        animation: sk-bounce 2s infinite ease-in-out;
      }

      .double-bounce2 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }

      @-webkit-keyframes sk-bounce {
        0%,
        100% {
          -webkit-transform: scale(0);
        }
        50% {
          -webkit-transform: scale(1);
        }
      }

      @keyframes sk-bounce {
        0%,
        100% {
          transform: scale(0);
          -webkit-transform: scale(0);
        }
        50% {
          transform: scale(1);
          -webkit-transform: scale(1);
        }
      }
    `,
  ],
  template: ` @if(showLoader()){
    <div
      class="fixed inset-0 z-[1000] flex items-center justify-center w-screen h-screen"
      [class]="class()"
    >
      <div
        class="m-auto gap-4 flex flex-col items-center justify-center w-full md:w-[50%] h-full md:h-[50%]"
      >
        <div>
          <div class="size-[40px] top-[50%] relative">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
      </div>
    </div>
    }`,
})
export class PageLoader implements OnInit {
  public showLoader = model<boolean>(true);

  /**pass classes to apply on the loader container. Especially if u would want to use a different background that is not bg-white */
  public class: InputSignal<string> = input<string>('bg-white');

  private router: Router = inject(Router);

  constructor() {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.showLoader.set(true);
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.showLoader.set(false);
        }
      },
      error: (error: any) => {
        this.showLoader.set(false);
      },
    });
  }

  ngOnInit(): void {}
}
