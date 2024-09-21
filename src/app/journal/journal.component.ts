import { NgClass, NgIf } from '@angular/common';
import { Component,ViewChildren,QueryList,ElementRef } from '@angular/core';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [NgClass,NgIf],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  // @ViewChildren('page') myDivs!: QueryList<ElementRef>;
  // @ViewChildren('.page') targetElements!: QueryList<ElementRef>;
  getClassNames(event: any) {
    console.log(event)
    const target = event.target as HTMLElement;
    const classList = target.classList;
    
    console.log('Class Names:', Array.from(classList));
    // You can also check for specific classes
    if (classList.contains('active')) {
      
      this.nextPage();
    }
    else if(classList.contains('flipped')){
     
      this.prevPage();
    }
   
  }


 

  nextPage() {
    const activePage = document.querySelector('.page.active');
    const nextPage = activePage?.nextElementSibling;

    if (activePage && nextPage) {
      activePage.classList.remove('active');
      activePage.classList.add('flipped');
      nextPage.classList.add('active');
    }
  }

  prevPage(){
    const flippedPages= document.querySelectorAll('.page.flipped');
    const lastFlipped = flippedPages[flippedPages.length - 1] as HTMLElement;

    if(lastFlipped){
      lastFlipped.classList.remove('flipped');
      lastFlipped.classList.add('active');
    }
    const activePage = document.querySelector('.page.active') as HTMLElement;
    if (activePage && activePage !== lastFlipped) {
      activePage.classList.remove('active');
    }
  }


}
