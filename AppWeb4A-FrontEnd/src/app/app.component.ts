import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationService } from './Services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription = new Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent | undefined;

    constructor(public authService:AuthenticationService, private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
        this.authService.loadUser();


        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }


    }
    // removeFooter() {
    //     var titlee = this.location.prepareExternalUrl(this.location.path());
    //     titlee = titlee.slice( 1 );
    //     if(titlee === 'signup'){
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }
}
