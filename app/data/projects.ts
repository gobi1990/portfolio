export interface Project {
    id: | null | undefined;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}
  
  export const mobileProjects: Project[] = [
    {
      title: 'Trendee Moviez',
      description: 'Showcase popular and trending movies and user will be able to search movies by title.',
      image: 'https://drive.google.com/uc?export=view&id=1ocFRRUbqlRqZ0x5CFL8S_RASMijaPh7Y',
      link: 'https://github.com/gobi1990/flutter_trendee_moviez',
      tags: ['Flutter / Dart', 'Android', 'iOS', 'Mobile App', 'Dart'],
      id: undefined
    },
    {
      title: 'Project 2',
      description: 'Project 2 Description',
      image: '/placeholder.svg',
      link: 'https://github.com/user/project2',
      tags: ['React Native', 'Android', 'iOS', 'Mobile App', 'Javascript'],
      id: undefined
    },
    {
      title: 'Project 3',
      description: 'Project 3 Description',
      image: '/placeholder.svg',
      link: 'https://github.com/user/project3',
      tags: [],
      id: undefined
    },
  ];

  export const gameProjects: Project[] = [
    {
      title: 'Game Project 1',
      description: 'Game Project 1 Description',
      image: '/project.svg',
      link: 'https://github.com/user/gameproject1',
      tags: [],
      id: undefined
    },
    {
      title: 'Game Project 2',
      description: 'Game Project 2 Description',
      image: '/project.svg',
      link: 'https://github.com/user/gameproject2',
      id: undefined,
      tags: [],
    },
  ];