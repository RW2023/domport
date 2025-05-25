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
      title: "The Long Summer",
      role: "Young Jack",
      company: "Sunbeam Pictures",
      year: 2023,
      type: "Film",
      image: "/credits/long-summer.jpg",
      link: "https://example.com/trailer-long-summer",
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
      title: "Back-to-School Catalog",
      role: "Model",
      company: "TrendWear Kids",
      year: 2023,
      type: "Modeling",
      image: "/images/back-to-school.jpg",
    },
  ];
  