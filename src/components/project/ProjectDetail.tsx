import { useParams } from 'react-router-dom'

import ProjectLayout  from './ProjectLayout'
import ProjectHeader  from './ProjectHeader'
import ImageCarousel  from '../ImageCarousel'
import ProjectOverview  from './ProjectOverview'
import TechStack   from './TechStack'
import TechnicalHighlights   from './TechnicalHighlights'
import { MyProjectIcon1, MyProjectIcon2 }   from '../../assets/project_icons';
import socialLinks from '@/config/socialLinks'
import { Github, LucideCalendarCheck, LucideMessageCircle, LucideSparkles, LucideStar, LucideTicket, LucideUser, LucideList, LucideCirclePlus, type LucideIcon } from 'lucide-react';


const projectsData = {
  'project-one': {
    icon: MyProjectIcon1,
    title: 'Key',
    technologies: ['Android Studio', 'Java', 'Figma', 'Visual Paradigm'],
    subtitle: 'Thesis Project (Group of 2). A mobile application connecting customers with beauty service providers (makeup artists, nail artists, and eyelash artists), enabling users to discover, book, and manage beauty service reservations.',
    githubUrl: socialLinks.repositories.projectOne,
    features: [
      {
        icon: LucideCalendarCheck,
        title: 'Service Booking',
        description: 'Users can book beauty services based on provider availability.'
      },
      {
        icon: LucideSparkles,
        title: 'Recommendation',
        description: 'Recommends beauty service providers using the SAW method.'
      },
      {
        icon: LucideMessageCircle,
        title: 'Chat',
        description: 'Users and beauty providers can communicate through in-app chat.'
      },
      {
        icon: LucideStar,
        title: 'Review & Rating',
        description: 'Users can rate and review beauty services after an appointment.'
      }
    ],
    overview: [
      'Key is a mobile Android application designed to help users discover and book beauty services, including makeup, nail, and eyelash services.',
      'The application provides beauty service recommendations using the Simple Additive Weighting (SAW) method based on criteria such as distance, rating, experience, and price.',
      'This project was developed as a thesis project in a team of two, with my work focused on the Android application development, Firebase integration, provider-side UI/UX design, and system documentation.'
    ],    
    highlights: [
      'Developed the Android application using Java and integrated Firebase for database management.',
      'Designed and refined the provider-side UI/UX in Figma.',
      'Created UML diagrams, including use case and sequence diagrams, using Visual Paradigm.',
      'Handled the majority of the thesis documentation covering system design, implementation, and testing.'
    ],

  }
  ,
    'project-two': {
      icon: MyProjectIcon2,
      title: 'EventGo',
      subtitle: 'Final Project for Mobile Programming Course (Group of 2). An Android mobile application for event ticket booking (concerts, community events, etc.)',
      githubUrl:socialLinks.repositories.projectTwo,
      technologies: ['Android Studio', 'Java'],
      features: [
      {
        icon: LucideUser,
        title: 'User Authentication',
        description: 'Users can register and log in securely using Firebase Authentication.'
      },
       {
        icon: LucideTicket ,
        title: 'Service Booking',
        description: 'Enables users to book tickets for concerts, community events, and other activities.'
      }
    ],
    overview: [
      'An Android mobile application designed to simplify event ticket booking for concerts, community events, and other activities. The application allows users to explore upcoming events, view event details, and book tickets through a convenient and user-friendly interface.',
      'This project was developed as a final project in a team of two, with my work focused on the Android application development, Firebase integration, and system documentation.'
    ],    
    highlights: [
      'Developed core app functionality including user authentication and ticket booking flow using Firebase (Authentication, Realtime Database, FCM)',
      'Designed the application UI in Figma',
      'Implemented push notifications using Firebase Cloud Messaging (FCM) to notify users of booking updates'
    ],
    },
    'project-three': {
      icon: null,
      title: 'Lost and Found',
      subtitle: 'Bootcamp Project (Group of 2). A web application developed to help users report and recover lost items. ',
      githubUrl: null,
      technologies: ['Laravel', 'PHP'],
      features: [
      {
        icon: LucideCirclePlus,
        title: 'Lost Item Reporting',
        description: 'Allows campus members to submit reports of lost items.'
      },
       {
        icon: LucideList,
        title: 'Item Browsing',
        description: 'Enables users to browse reported lost items to find belongings they may have lost.'
      }
    ],
    overview: [
      'Lost & Found is a web application designed for the campus community to report, search for, and recover items lost within the campus area. The platform helps connect students and other campus members who have lost belongings with those who have found them, making it easier to identify missing items and coordinate their return.',
    ],    
    highlights: [
      'Set up the Laravel framework and configure the development environment.',
      'Implement the design provided by UI/UX design using HTML, CSS, and JavaScript.'
    ],
    }
    

}

const ProjectDetail = () => {
  const { slug } = useParams()

  const project = slug
    ? projectsData[slug as keyof typeof projectsData]
    : undefined

  if (!project) {
    return <div>Project tidak ditemukan</div>
  }

const allScreenshots = import.meta.glob<string>(
  '../../assets/project_icons/*/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

const screenshots = Object.entries(allScreenshots)
  .filter(([path]) => path.includes(`/project_icons/${slug}/`))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image);


  return (
    <ProjectLayout>
      <ProjectHeader
        icon={project.icon}
        title={project.title}
        subtitle={project.subtitle}
        githubUrl={project.githubUrl}
        features={project.features}
      />
      
      <TechStack technologies={project.technologies}/>

      <ProjectOverview paragraphs={project.overview} />
      
      <TechnicalHighlights
        highlights={project.highlights}
      />

      {screenshots.length > 0 && (
        <ImageCarousel
          images={screenshots}
          projectName={project.title}
        />
      )}

    </ProjectLayout>
 
  )
  
}


export default ProjectDetail