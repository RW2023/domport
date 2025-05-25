// data/credits.ts
export type Credit = {
    title: string;
    role: string;
    company: string;
    year: number;
    type: 'Film' | 'TV' | 'Modeling';
    link?: string;
  };
  
  export const credits: Credit[] = [
    {
      title: "The Long Summer",
      role: "Young Jack",
      company: "Sunbeam Pictures",
      year: 2023,
      type: "Film",
      link: "https://example.com/trailer-long-summer",
    },
    {
      title: "Kids on the Move",
      role: "Guest Star",
      company: "MapleLeaf TV",
      year: 2022,
      type: "TV",
    },
    {
      title: "Back-to-School Catalog",
      role: "Model",
      company: "TrendWear Kids",
      year: 2023,
      type: "Modeling",
    },
  ];
  