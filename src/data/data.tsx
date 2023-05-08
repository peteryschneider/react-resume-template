import {
  AcademicCapIcon,
  DownloadIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  MailIcon
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  EducationItem,
  WorkItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Peter Schneider`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Machine Learning</strong> and
        <strong className="text-stone-100"> Artificial Intelligence</strong> engineer working in Autonomy at
        Northrop Grumman
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      I am a machine learning and artificial intelligence engineer leading autonomy initiatives at Northrop Grumman
      Aeronautics Systems.
      <br />
      <br />
      Some of the areas I have worked in include perception, computer vision, synthetic aperature radar (SAR), signal
      processing, RF, anomaly detection, tracking, natural language processing (NLP), guidance and control, and
      estimation.
    </>
  ),
  aboutItems: [
    {label: 'Employment', text: 'AI/ML @Northrop Grumman', Icon: OfficeBuildingIcon},
    {label: 'Location', text: 'Los Angeles, CA', Icon: LocationMarkerIcon},
    {label: 'Study', text: 'Computer Science @Georgia Tech', Icon: AcademicCapIcon},
    {label: 'Study', text: 'Aerospace Engineering @UCLA', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */

export const experience: WorkItem[] = [
  {
    date: 'Jul 2020 - Present',
    company: 'Northrop Grumman Corporation',
    title: 'Staff AI Engineer | Advanced Autonomy Group',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Aug 2019 - Jul 2020',
    company: 'Electromagnetic Systems Inc.',
    title: 'Senior Machine Learning Engineer',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Aug 2019 - Jul 2020',
    company: 'Northrop Grumman Corporation',
    title: 'Senior Principal Engineer | Autonomy Research UAS Technology Dept.',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Apr 2014 - May 2017',
    company: 'The Aerospace Corporation',
    title: 'Senior Member of the Technical Staff | Guidance & Control Subdivision',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Apr 2014 - May 2017',
    company: 'Space Systems Loral (acquired, now Maxar Technologies)',
    title: 'Senior Research and Development Engineer',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Oct 2008 - May 2012',
    company: 'ASRC Federal Space and Defense',
    title: 'Attitude Control / Simulation Engineer',
    link: 'https://www.cc.gatech.edu/',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];


export const education: EducationItem[] = [
  {
    date: 'May 2017',
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science',
    link: 'https://www.cc.gatech.edu/',
    specialization: 'Machine Learning',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },

  {
    date: 'June 2014',
    school: 'University of California, Los Angeles',
    degree: 'M.S. Aerospace Engineering',
    link: 'https://samueli.ucla.edu/',
    specialization: 'Dynamic Systems and Control',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },

  {
    date: 'June 2008',
    school: 'University of California, Los Angeles',
    degree: 'B.S. Aerospace Engineering',
    link: 'https://samueli.ucla.edu/',
    specialization: '',
    content: <></>,
  },
];

/**
 * Contact section
 */

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Email', Icon: MailIcon, href: 'mailto:peteryschneider@gmail.com/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/peteryschneider/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/peteryschneider'},
];
