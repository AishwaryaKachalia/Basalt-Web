export type Tile = { title: string; category: string; tone: string; ratio: number };

// Each inner array is one row of the justified grid.
// `ratio` is the tile's width relative to its row mates.
export const rows: Tile[][] = [
  [
    { title: 'Project One', category: 'Branding & Packaging', tone: '#bdbab3', ratio: 1 },
    { title: 'Project Two', category: 'Identity & Motion', tone: '#b0ada6', ratio: 1 },
    { title: 'Project Three', category: 'Packaging Design', tone: '#c8c5be', ratio: 1 },
  ],
];
