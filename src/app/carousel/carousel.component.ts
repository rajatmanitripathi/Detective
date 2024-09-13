import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class Carousel06Component implements OnInit {
  images: any[] | undefined = [];
  loadImages() {
    this.images = [
      {
        itemImageSrc: 'https://rare-gallery.com/uploads/posts/964809-digital-digital-art-artwork-Batman-DC-Comics-DC-Universe.jpg',
        thumbnailImageSrc: 'Home',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
      itemImageSrc: 'https://images3.alphacoders.com/697/697669.jpg',
      thumbnailImageSrc: 'Our Detectives',
      alt: 'Description for Image 1',
      title: 'Title 1'
  },
  {
    itemImageSrc: 'https://img.freepik.com/premium-photo/scene-thief-with-gun-being-caught-by-police-car-light-rainy-night-with-digital-art-style-illustration-painting_37402-1367.jpg',
    thumbnailImageSrc: 'Stories',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
{
  itemImageSrc: 'https://cdn.pixabay.com/photo/2017/08/17/18/24/knife-2652398_1280.jpg',
  thumbnailImageSrc: 'Case Files',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://cdn.pixabay.com/photo/2017/08/17/18/24/knife-2652398_1280.jpg',
  thumbnailImageSrc: 'License',
  alt: 'Description for Image 1',
  title: 'Title 1'
},
{
  itemImageSrc: 'https://cdn.pixabay.com/photo/2017/08/17/18/24/knife-2652398_1280.jpg',
  thumbnailImageSrc: 'About',
  alt: 'Description for Image 1',
  title: 'Title 1' 
}


    
    ];
  }

  responsiveOptions: any[] | undefined;
  constructor() {}

  ngOnInit() {
    this.loadImages();
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
