export type Project = { title: string; category: string; tone: string };

// Each inner array is one row of the justified grid.
// `ratio` is the tile's width relative to its row mates.
export type Tile = Project & { ratio: number };

export const rows: Tile[][] = [
  [
    { title: 'Ember Spirits', category: 'Branding & Packaging', tone: '#bdbab3', ratio: 1.5 },
    { title: 'Nocturne Festival', category: 'Identity & Motion', tone: '#b0ada6', ratio: 1 },
  ],
  [
    { title: 'Hollow Coffee', category: 'Packaging Design', tone: '#c8c5be', ratio: 1 },
    { title: 'Tidal Records', category: 'Album Art', tone: '#a9a6a0', ratio: 1.4 },
  ],
  [
    { title: 'Monolith Gin', category: 'Alcohol & Spirits', tone: '#b8b5ae', ratio: 1 },
    { title: 'Strata Studio', category: 'Brand Identity', tone: '#bdbab3', ratio: 1 },
    { title: 'Kiln Ceramics', category: 'Branding', tone: '#b0ada6', ratio: 1 },
  ],
  [
    { title: 'Obsidian Tour', category: 'Campaign & Motion', tone: '#c8c5be', ratio: 1.3 },
    { title: 'Fjord Water', category: 'Packaging', tone: '#a9a6a0', ratio: 1 },
  ],
  [
    { title: 'Pyre Podcast', category: 'Visual Identity', tone: '#b8b5ae', ratio: 1 },
    { title: 'Slate Architecture', category: 'Web & Print', tone: '#bdbab3', ratio: 1.6 },
  ],
];
