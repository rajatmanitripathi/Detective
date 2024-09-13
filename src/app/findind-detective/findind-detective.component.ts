import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-findind-detective',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule,CardComponent],
  templateUrl: './findind-detective.component.html',
  styleUrl: './findind-detective.component.scss'
})
export class FindindDetectiveComponent {

}
