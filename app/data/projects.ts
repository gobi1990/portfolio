export interface Project {
    title: string;
    description: string;
    image: string;
    github: string;
}
  
  export const mobileProjects: Project[] = [
    {
      title: 'Project 1',
      description:  'Project 1 Description',
      image: '/project.svg',
      github: 'https://github.com/gobi1990/ps_games_mobile',
    },
    {
      title: 'Project 2',
      description: 'Project 2 Description',
      image: '/placeholder.svg',
      github: 'https://github.com/user/project2',
    },
    {
      title: 'Project 3',
      description: 'Project 3 Description',
      image: '/placeholder.svg',
      github: 'https://github.com/user/project3',
    },
  ];

  export const gameProjects: Project[] = [
    {
      title: 'Game Project 1',
      description: 'Game Project 1 Description',
      image: '/project.svg',
      github: 'https://github.com/user/gameproject1',
    },
    {
      title: 'Game Project 2',
      description: 'Game Project 2 Description',
      image: '/project.svg',
      github: 'https://github.com/user/gameproject2',
    },
  ];