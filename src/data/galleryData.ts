// File: src/app/gallery/galleryData.ts

export type GalleryImage = {
    src: string;
    alt: string;
    category: string;
  };
  
  export const categories = ['All', 'Headshots', 'Modeling', 'On Set'];
  
  export const images: GalleryImage[] = [
    {
    //   src: '/gallery/headshot1.jpg',
    src:'/profile/dominicBeach.jpg',
      alt: 'Dominic headshot smiling',
      category: 'Headshots',
    },
    {
    //   src: '/gallery/modeling1.jpg',
    src:'/profile/domBasketball.jpg',
      alt: 'Dominic modeling pose',
      category: 'Modeling',
    },
    {
    //   src: '/gallery/onset1.jpg',
    src:'/profile/dominicBeachWalking.jpg',
      alt: 'Dominic on set of TV show',
      category: 'On Set',
    },
    // Add more images with correct paths and categories
  ];
  