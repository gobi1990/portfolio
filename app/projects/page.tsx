'use client'

import { useState, useEffect, useMemo } from 'react'
import { gameProjects, mobileProjects, Project } from '../data/projects'
import HoverProjectCard from '../components/hoverProjectCard/hoverProjectCard'
import { PROJECT_TAGS } from '../constants/strings'

const allProjects: Project[] = [...mobileProjects, ...gameProjects]

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedTag, setSelectedTag] = useState('All')
  //const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  //const [allProjects, setProjects] = useState<Project[]>([])

  //const PROJECTS_URL = process.env.NEXT_PUBLIC_PROJECTS_URL || ''

  useEffect(() => { 
    setIsMounted(true)
  } , []);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       setIsLoading(true)
  //       const response = await fetch(API_URL, {
  //         mode: 'no-cors',
  //         next: { revalidate: 3600 } 
  //       })
        
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch projects')
  //       }
        
  //       const data = await response.json()
  //       setProjects(data.projects || data)
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : 'An error occurred')
  //     } finally {
  //       setIsLoading(false)
  //       setIsMounted(true)
  //     }
  //   }

  //   fetchProjects()
  // }, [])

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') return allProjects
    return allProjects.filter(project => project.tags.includes(selectedTag))
  }, [selectedTag])

  if (!isMounted) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-dark-primary">My Projects</h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {PROJECT_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 ease-in-out
              ${
                selectedTag === tag
                  ? 'bg-dark-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <HoverProjectCard
              key={project.id}
              project={project}
              onClick={project.link ? () => window.open(project.link) : undefined}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this category</p>
          </div>
        )}
      </div>
    </div>
  )
}