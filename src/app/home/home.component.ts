import { Component } from '@angular/core';

import { Carousel06Component} from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel06Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselItems: string[] = ["hello its my first detective app","find your detective here brothers for free","detective names below are reprstended through cards bettter the detective more elite his/her card may look","new student old young avg young men women can become detective register now","on overseeing missuse of this app will put you in great trouble buddy this may look fun but this app usage is only for real minded needy and true enthusiasts"];
}
