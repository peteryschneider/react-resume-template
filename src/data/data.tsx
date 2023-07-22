import {
  AcademicCapIcon,
  DownloadIcon,
  LocationMarkerIcon,
  MailIcon,
  OfficeBuildingIcon,
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
  EducationItem,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
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
      Some of the areas I have worked in include perception, computer vision, synthetic aperture radar (SAR), signal
      processing, RF, anomaly detection, tracking, natural language processing, guidance and control, and
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
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Matlab',
        level: 9,
      },
      {
        name: 'C++',
        level: 6,
      },
    ],
  },
  {
    name: 'Machine Learning Libraries',
    skills: [
      {
        name: 'TensorFlow',
        level: 10,
      },
      {
        name: 'scikit-learn',
        level: 10,
      },
      {
        name: 'Pytorch',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Japanese',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GPS-III',
    description: 'Led a team working on the next generation GPS satellite constellation (GPS-III)',
    url: 'https://www.lockheedmartin.com/en-us/products/gps.html',
    image: porfolioImage1,
  },
  {
    title: 'Falcon 9',
    description: 'Guidance, Navigation, and Control and flight software analysis for Falcon 9 launch vehicle.',
    url: 'https://www.spacex.com/vehicles/falcon-9/',
    image: porfolioImage2,
  },
  {
    title: 'MQ-4C Triton',
    description: 'Machine learning and autonomy work for Triton, a surveillance unmanned aircraft system (UAS).',
    url: 'https://www.northropgrumman.com/what-we-do/air/triton/',
    image: porfolioImage3,
  },
  {
    title: 'RF Machine Learning',
    description: 'RF Machine Learning, including research of complex-valued neural networks and collaboration with Deepwave Digital.',
    url: 'https://news.northropgrumman.com/news/releases/northrop-grumman-invests-in-deepwave-digitals-ai',
    image: porfolioImage4,
  },
  {
    title: 'SAR ATR',
    description: 'Deep learning for SAR including research of complex-valued neural networks.',
    url: 'https://emagsys.com/deep-learning-radar-automated-target-recognition-atr/',
    image: porfolioImage5,
  },
  {
    title: 'Cognitive Autonomy',
    description: 'Cognitive Autonomy research group at Northrop Grumman.',
    url: 'https://www.northropgrumman.com/ng-next-research/#CA',
    image: porfolioImage6,
  },
  {
    title: 'SAR Simulation for AI/ML',
    description: 'Rapid generation of SAR simulation data for deep learning',
    url: 'https://emagsys.com/radar-simulation-software-for-rapid-generation-of-sar-or-isar-ai-ml-training-data/',
    image: porfolioImage7,
  },
  {
    title: 'Atlas-V',
    description: 'Guidance, Navigation, and Control and flight software analysis for Atlas-V launch vehicle.',
    url: 'https://www.ulalaunch.com/rockets/atlas-v',
    image: porfolioImage8,
  },
  {
    title: 'GOES satellite constellation',
    description: 'Attitude control analysis and simulation for GOES satellite constellation.',
    url: 'https://www.nasa.gov/content/goes-overview/index.html',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://www.peteryschneider.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://www.peteryschneider.com',
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
    link: 'https://www.northropgrumman.com/what-we-do/air/autonomous-systems/',
    content: (
      <>
        <p>
          Leading machine learning projects in areas that include perception (EO, IR, SAR), tracking,
          RF and signal processing, and Large Language Models (LLMs).
        </p>
        <br />
        <ul>
          <li>• Research and development of novel complex-valued neural networks exploiting both magnitude and phase
          data in synthetic aperture radar (SAR) improving model performance.</li>
          <li>• Research and development of Graph Neural Networks (GNNs) for multi-view multi-object tracking.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Aug 2019 - Jul 2020',
    company: 'Electromagnetic Systems Inc.',
    title: 'Senior Machine Learning Engineer',
    link: 'https://emagsys.com/',
    content: (
      <>
        <p>
          Deep learning with SAR (synthetic aperture radar) imagery.
        </p>
        <br />
        <ul>
          <li>• Research and development of novel complex-valued neural networks exploiting both magnitude and phase
          data in SAR under  National Geospatial-Intelligence Agency (NGA) Boosting Innovative GEOINT (BIG) BAA.</li>
          <li>• Evaluated domain shift bias from training with synthetic data; combined collected with synthetic data
          using transfer learning to significantly improve model performance.</li>
          <li>•  Redeveloped existing models to modern SOTA single-shot architectures improving performance.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Aug 2019 - Jul 2020',
    company: 'Northrop Grumman Corporation',
    title: 'Senior Principal Engineer | Autonomy Research UAS Technology Dept.',
    link: 'https://www.northropgrumman.com/what-we-do/air/autonomous-systems/',
    content: (
      <p>
        Machine learning and autonomy
      </p>
    ),
  },
  {
    date: 'Apr 2014 - May 2017',
    company: 'The Aerospace Corporation',
    title: 'Senior Member of the Technical Staff | Guidance & Control Subdivision',
    link: 'https://aerospace.org/',
    content: (
      <>
        <p>
          The Aerospace Corporation is a federally funded research and development center (FFRDC) for national-security
          space that works closely with the United States Space Force and the National Reconnaissance Office (NRO).
        </p>
        <br />
        <p>
          Machine learning, Guidance, Navigation & Control (GNC) analysis, and simulation for various space vehicles.
        </p>
        <ul>
          <li>• Lead a team working on the next generation GPS satellite constellation (GPS Block III)</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Apr 2014 - May 2017',
    company: 'Space Systems Loral (acquired, now Maxar Technologies)',
    title: 'Senior Research and Development Engineer',
    link: 'https://www.maxar.com/',
    content: (
      <p>
        Guidance, Navigation & Control (GNC) analysis and simulation for various satellites.
      </p>
    ),
  },
  {
    date: 'Oct 2008 - May 2012',
    company: 'ASRC Federal Space and Defense',
    title: 'Attitude Control / Simulation Engineer',
    link: 'https://www.asrcfederal.com/markets/space/',
    content: (
      <p>
        Guidance, Navigation & Control (GNC) analysis and simulation for the GOES satellite constellation.
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
    specialization: 'Machine Learning Specialization',
    content: (
    <>
      <p>
        <strong>TA</strong>
        <ul>
          <li>• CSE 8803: Big Data for Healthcare</li>
          <li>• CS 8803: AI for Robotics</li>
        </ul>
        <strong>Coursework</strong>
        <ul>
          <li>• CS 7641: Machine Learning</li>
          <li>• CS 7646: Machine Learning for Trading</li>
          <li>• CS 8803: Reinforcement Learning</li>
          <li>• CSE 6242: Data and Visual Analytics</li>
          <li>• CS 6476: Computer Vision</li>
          <li>• CS 7637: Knowledge Based AI</li>
          <li>• CS 8803: AI for Robotics</li>
          <li>• CSE 8803: Big Data for Healthcare</li>
          <li>• CS 6505: Computability and Algorithms</li>
          <li>• CS 6262: Network Security</li>
        </ul>
      </p>
    </>
    ),
  },

  {
    date: 'June 2014',
    school: 'University of California, Los Angeles',
    degree: 'M.S. Aerospace Engineering',
    link: 'https://samueli.ucla.edu/',
    specialization: 'Dynamic Systems and Control',
    content: (
    <>
      <p>
        <strong>Coursework</strong>
        <ul>
          <li>• MAE 171B: Digital Control of Physical Systems</li>
          <li>• MAE M270A: Linear Dynamic Systems</li>
          <li>• MAE 270B: Linear Optimal Control</li>
          <li>• MAE C270A: Probability and Stochastic Processes in Dynamical Systems</li>
          <li>• MAE 271B: Stochastic Estimation</li>
          <li>• MAE 250C: Compressible Flows</li>
          <li>• MAE 250D: Computational Fluid Dynamics for Compressible Flows</li>
          <li>• MAE M269A: Dynamics of Structures</li>
          <li>• Advised Capstone Project, System Identification</li>
        </ul>
      </p>
    </>
    ),
  },

  {
    date: 'June 2008',
    school: 'University of California, Los Angeles',
    degree: 'B.S. Aerospace Engineering',
    link: 'https://samueli.ucla.edu/',
    specialization: '',
    content: '',
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
