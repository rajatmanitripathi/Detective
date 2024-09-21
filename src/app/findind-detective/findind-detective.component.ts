import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CardComponent } from '../card/card.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { ConfirmEventType } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-findind-detective',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule,CardComponent, ConfirmPopupModule,ButtonModule,CheckboxModule],
  templateUrl: './findind-detective.component.html',
  styleUrl: './findind-detective.component.scss'
})
export class FindindDetectiveComponent {


}
