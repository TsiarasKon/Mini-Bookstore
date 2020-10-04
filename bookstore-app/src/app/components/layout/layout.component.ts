import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    breadcrumbsList: string[];
    cartNum = 0;

    /**
     * I am aware that the proper way to set up breadcrumbs would be with nested paths in Routes.
     * However, given the limit of this exercise, I found the potential complexity of that not being worth the effort.
     */
    constructor(router: Router, cartService: CartService) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                switch (val.url) {
                    case '/':
                        this.breadcrumbsList = [];
                        break;
                    case '/search':
                        this.breadcrumbsList = ['Search'];
                        break;
                    case '/add':
                        this.breadcrumbsList = ['Book', 'Add'];
                        break;
                    default:    // '/book/:id'
                        this.breadcrumbsList = ['Book'];
                }
            }
        });

        // receive information that a "BUY" button has been clicked
        cartService.changeEmitted$.subscribe(() => {
            this.cartNum++;
        });
    }

}
