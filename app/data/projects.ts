export interface Project {
    id: | null | undefined;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}
  
  export const projects: Project[] = [
    {
      title: 'Trendee Moviez',
      description: 'Showcase popular and trending movies and user will be able to search movies by title.',
      image: 'https://drive.google.com/uc?export=view&id=1ocFRRUbqlRqZ0x5CFL8S_RASMijaPh7Y',
      link: 'https://github.com/gobi1990/flutter_trendee_moviez',
      tags: ['Flutter / Dart', 'Android', 'iOS', 'Mobile App', 'Dart'],
      id: undefined
    },
    {
      title: 'Squeezy Jelly Run',
      description: 'Android Mobile Game which is created using Unity3D.',
      image: 'https://drive.google.com/uc?export=view&id=1c83WgMPNDGUseZZFoQxe3uSWmqyD_Alh',
      link: 'https://www.youtube.com/watch?v=7xI3uVB7uqA',
      tags: ['Unity3D / C#', 'Unity3D', 'Android', 'C#', 'Game Development'],
      id: undefined
    },
    {
      title: 'Smash Mosquito',
      description: 'It is a simple yet addictive game that requires the player to kill mosquitoes by spraying repellent on them. The game has a circular motion mosquito which moves faster with each level.',
      image: 'https://drive.google.com/uc?export=view&id=1wSVuL_vAeJP2Q80D6r_SUdpvF1zxcLeB',
      link: 'https://skich.app/games/smash-mosquito',
      tags: [],
      id: undefined
    },
    {
      title: 'PS Games',
      description: 'Showcase popular PlayStation games with details and user will be able to search & favorite games.',
      image: 'https://drive.google.com/uc?export=view&id=13c92OkBE74T62perlnbv1cAHynI9YqLH',
      link: 'https://github.com/gobi1990/ps_games_mobile',
      tags: [],
      id: undefined
    },
  ];