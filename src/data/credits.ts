export type Credit = {
    title: string;
    role: string;
    company: string;
    year: number;
    type: 'Film' | 'TV' | 'Modeling';
    link?: string;
    image: string; // new
  };
  
  export const credits: Credit[] = [
    {
      title: "Robin Hood",
      role: "Extra",
      company: " companies	Tiger Aspect Productions",
      year: 2023,
      type: "TV",
      image: "/credits/robinHood.jpg",
      link: "https://www.imdb.com/title/tt0787985/",
    },
    {
      title: "Good Sam",
      role: "Stand-in",
      company: "CBC",
      year: 2022,
      type: "TV",
      image: "/credits/goodSam.jpg",
        link: "https://www.imdb.com/title/tt11055882/",
    },
    {
      title: "You Gotta Believe",
      role: "Model",
      company: "TrendWear Kids",
      year: 2023,
      type: "Film",
      image: "/credits/believe.jpg",
    },
  ];
  