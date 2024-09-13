import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from "./card/card.component";
import { FindindDetectiveComponent } from './findind-detective/findind-detective.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, HomeComponent, CardComponent,FindindDetectiveComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Detective';
}
