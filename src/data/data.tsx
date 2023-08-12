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
import styles from './styles.module.css';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Peter Y. Schneider Resume",
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
    link: 'https://www.northropgrumman.com/what-we-do/artificial-intelligence-and-machine-learning/',
    content: (
      <>
        <p>
          Leading AI and machine learning projects in areas that include computer vision,
          synthetic aperture radar (SAR), tracking, RF and signal processing, and Large Language Models (LLMs).
        </p>
        <br />
        Selected projects:
        <ul>
          <li className={styles.customBullet}>Research and development of complex-valued neural networks exploiting both magnitude and phase
          data in SAR improving model performance including successful ATR demo deployed on Triton.</li>
          <li className={styles.customBullet}>Research and development of Graph Neural Networks (GNNs) for multi-view multi-object tracking.</li>
          <li className={styles.customBullet}>Research and development of hyperbolic neural networks improving performance with hierarchical data.</li>
          <li className={styles.customBullet}>Research and development of LLMs including development of custom chat
          assistants, fine-tuning of existing foundational models, providing models with extra specialized knowledge via
          embedded databases for retrieval, and integration with LangChain. </li>
          <li className={styles.customBullet}>Supervised and unsupervised learning of temporal vessel track data
          including use of transformers and parametric UMAP.</li>

        </ul>
        <br />
        Mentoring groups of engineers in the role of AI/ML Subject Matter Expert at the sector level:
        <ul>
          <li className={styles.customBullet}>AI Advanced Program</li>
          <li className={styles.customBullet}>AI Techstarters</li>
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
          <a className={styles.customLink}
          href="https://emagsys.com/deep-learning-radar-automated-target-recognition-atr/" rel="noopener noreferrer"
          target="_blank">Deep learning with SAR</a> (synthetic aperture radar) imagery.
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Research and development of complex-valued neural networks exploiting both magnitude and phase
          data in SAR under  <a className={styles.customLink}
          href="https://www.nga.mil/" rel="noopener noreferrer"
          target="_blank">National Geospatial-Intelligence Agency</a> (NGA) <a className={styles.customLink}
          href="https://www.nga.mil/news/NGA_solicits_input_for_airborne_SAR_in_Boosting_In.html" rel="noopener noreferrer"
          target="_blank">Boosting Innovative GEOINT</a> BAA.</li>
          <li className={styles.customBullet}>Evaluated domain shift bias from training with synthetic data; combined collected with synthetic data
          using transfer learning to significantly improve model performance.</li>
          <li className={styles.customBullet}>Redeveloped existing models to modern SOTA single-shot architectures improving performance.</li>
          <li className={styles.customBullet}>Presented work at 2020 SAREM forum in Chantilly, Virginia.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Aug 2019 - Jul 2020',
    company: 'Northrop Grumman Corporation',
    title: 'Senior Principal Engineer | Autonomy Research UAS Technology Dept.',
    link: 'https://www.northropgrumman.com/what-we-do/artificial-intelligence-and-machine-learning/',
    content: (
      <>
        <p>
          Machine learning and autonomy, worked with the <a className={styles.customLink}
          href="https://www.northropgrumman.com/ng-next-research/#CA" rel="noopener noreferrer"
          target="_blank">Cognitive Autonomy</a> Group.
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Developed and trained deep learning models for multiple projects
          including perception with satellite imagery and anomaly detection with time-series telemetry data.</li>
          <li className={styles.customBullet}>Developed trajectory optimization and nonlinear state estimation algorithms as well as accompanying
          simulation platform for autonomous formation flying.</li>
        </ul>
      </>
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
          Machine learning, Guidance Navigation & Control (GNC), and simulation for various space vehicles.
        </p>
        <br />
        <p>
          The Aerospace Corporation is a federally funded research and development center (FFRDC) for national-security
          space that works closely with the <a className={styles.customLink}
          href="https://www.spaceforce.com/about" rel="noopener noreferrer"
          target="_blank">U.S. Space Force</a> (USSF) and the <a className={styles.customLink}
          href="https://www.nro.gov/" rel="noopener noreferrer"
          target="_blank">National Reconnaissance Office</a>  (NRO).
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Lead a team working on the next generation GPS satellite constellation (
          <a className={styles.customLink}
          href="https://www.lockheedmartin.com/en-us/products/gps.html" rel="noopener noreferrer"
          target="_blank">GPS Block III</a>).</li>
          <li className={styles.customBullet}>Machine learning and GNC analysis for USSF and NRO operated
          satellites, launch vehicles (<a className={styles.customLink}
          href="https://www.ulalaunch.com/rockets/atlas-v" rel="noopener noreferrer"
          target="_blank">Atlas V</a> and <a className={styles.customLink}
          href="https://www.spacex.com/vehicles/falcon-9/" rel="noopener noreferrer"
          target="_blank">Falcon</a>), and missile systems.</li>
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
      <>
        <p>
        Guidance Navigation & Control (GNC) analysis and simulation for various <a className={styles.customLink}
          href="https://space.skyrocket.de/doc_sat/ssloral-1300.htm" rel="noopener noreferrer" target="_blank">satellites</a>.
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Developed new control layer capable of autonomously navigating satellites
          through on-orbit scenarios from the ground and software tools to improve autonomous accounting of propellant
           usage.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'Oct 2008 - May 2012',
    company: 'ASRC Federal Space and Defense',
    title: 'Attitude Control / Simulation Engineer',
    link: 'https://www.asrcfederal.com/markets/space/',
    content: (
      <>
        <p>
          Guidance Navigation & Control (GNC) analysis and simulation for the <a className={styles.customLink}
          href="https://www.nasa.gov/content/goes-overview/index.html" rel="noopener noreferrer" target="_blank">GOES</a> satellite
          constellation operated by <a className={styles.customLink}
          href="https://www.nesdis.noaa.gov/" rel="noopener noreferrer" target="_blank">NOAA</a>.
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Presented a <a className={styles.customLink}
          href="https://arc.aiaa.org/doi/pdf/10.2514/6.2010-2140" rel="noopener noreferrer" target="_blank">
          paper</a> on thruster leak analysis at the <a className={styles.customLink}
          href="https://arc.aiaa.org/doi/book/10.2514/MSPOP10" rel="noopener noreferrer" target="_blank">
          SpaceOps 2010 Conference</a> in Huntsville, Alabama.</li>
        </ul>
      </>
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
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://www.sunlab.org/teaching/cse8803/fall2016/aboutus/" rel="noopener noreferrer" target="_blank">CSE 8803: Big Data for Healthcare</a></li>
          <li className={styles.customBullet}>CS 8803: AI for Robotics</li>
        </ul>
        <strong>Coursework</strong>
        <ul>
          <li className={styles.customBullet}>CS 7641: Machine Learning</li>
          <li className={styles.customBullet}>CS 7646: Machine Learning for Trading</li>
          <li className={styles.customBullet}>CS 8803: Reinforcement Learning</li>
          <li className={styles.customBullet}>CSE 6242: Data and Visual Analytics</li>
          <li className={styles.customBullet}>CS 6476: Computer Vision</li>
          <li className={styles.customBullet}>CS 7637: Knowledge Based AI</li>
          <li className={styles.customBullet}>CS 8803: AI for Robotics</li>
          <li className={styles.customBullet}>CSE 8803: Big Data for Healthcare</li>
          <li className={styles.customBullet}>CS 6505: Computability and Algorithms</li>
          <li className={styles.customBullet}>CS 6262: Network Security</li>
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
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAE171B" rel="noopener noreferrer" target="_blank">MAE 171B: Digital Control of Physical Systems</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAEM270A" rel="noopener noreferrer" target="_blank">MAE M270A: Linear Dynamic Systems</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAE270B" rel="noopener noreferrer" target="_blank">MAE 270B: Linear Optimal Control</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAEC271A" rel="noopener noreferrer" target="_blank">MAE C270A: Probability and Stochastic Processes in Dynamical Systems</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAE271B" rel="noopener noreferrer" target="_blank">MAE 271B: Stochastic Estimation</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAE250C" rel="noopener noreferrer" target="_blank">MAE 250C: Compressible Flows</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAE250D" rel="noopener noreferrer" target="_blank">MAE 250D: Computational Fluid Dynamics for Compressible Flows</a></li>
          <li className={styles.customBullet}><a className={styles.customLink}
          href="https://catalog.registrar.ucla.edu/course/2023/MECHAEM269A" rel="noopener noreferrer" target="_blank">MAE M269A: Dynamics of Structures</a></li>
          <li className={styles.customBullet}>Advised Capstone Project, System Identification</li>
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
