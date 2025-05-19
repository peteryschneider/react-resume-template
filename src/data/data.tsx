import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOfficeIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

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
  title: 'Peter Schneider | AI and Machine Learning Engineer',
  description: "Welcome to my personal website! I'm Peter Schneider, an AI and Machine Learning Engineer working in deep learning.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Portfolio: 'portfolio',
  Projects: 'projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Peter Schneider`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Artificial Intelligence</strong> and
        <strong className="text-stone-100"> Machine Learning</strong> at
        Northrop Grumman
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
      I am a Staff AI Engineer leading AI/ML projects at Northrop Grumman.
      <br />
      <br />
      My work is focused in deep learning. This has included applications for computer vision, synthetic aperture radar (SAR),
      Large Language Models (LLMs), graphs and network-based data, signal processing and RF, and temporal data.
    </>
  ),
  aboutItems: [
    {label: 'Employment', text: 'AI/ML @Northrop Grumman', Icon: BuildingOfficeIcon},
    {label: 'Location', text: 'Manhattan Beach, CA', Icon: MapPinIcon},
    {label: 'Study', text: 'M.S. Computer Science @Georgia Tech', Icon: AcademicCapIcon},
    {label: 'Study', text: 'M.S. Aerospace Engineering @UCLA', Icon: AcademicCapIcon},
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
        name: 'PyTorch',
        level: 10,
      },
      {
        name: 'scikit-learn',
        level: 10,
      },
      {
        name: 'JAX',
        level: 6,
      },
      {
        name: 'Pytorch Geometric (PyG)',
        level: 6,
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
    url: 'https://www.c4isrnet.com/intel-geoint/2021/02/02/with-deepwave-digital-northrop-grumman-is-pushing-processing-to-the-edge/',
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
    url: 'https://now.northropgrumman.com/cognitive-automation-drones-disaster-relief',
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
    title: 'Strike',
    description: 'AI/ML for Strike programs, PI for Strike-Aligned AI Research.',
    url: 'https://www.northropgrumman.com/what-we-do/air/b-21-raider',
    image: porfolioImage10,
  },
    {
    title: 'F-35',
    description: 'AI/ML for F-35 including role as PI for Strike-Aligned AI Research.',
    url: 'https://www.northropgrumman.com/what-we-do/air/f35-lightning',
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
    title: 'Staff AI Engineer',
    link: 'https://www.northropgrumman.com/',
    content: (
      <>
        <p>
          Leading <a className={styles.customLink}
          href="https://www.northropgrumman.com/what-we-do/artificial-intelligence-and-machine-learning/" rel="noopener noreferrer"
          target="_blank">AI/ML</a> projects focused on deep learning in areas that include computer vision,
          synthetic aperture radar (SAR), Large Language Models (LLMs), graph neural networks (GNNs), temporal data,
          RF and signal processing.
        </p>
        <br />
        Selected projects:
        <ul>
          <li className={styles.customBullet}> Principal Investigator for Strike-Aligned AI Research, including work with LLMs, multimodal LVLMs, and agentic AI.</li>
          <li className={styles.customBullet}> Complex-valued neural networks better exploiting both magnitude and phase
          in SAR and optical data; successful SAR ATR demo deployed on Triton.</li>
          <li className={styles.customBullet}>GNNs with heterogenous graphs for various applications, including for
          multi-view multi-object tracking.</li>
          <li className={styles.customBullet}>Hyperbolic neural networks improving performance with hierarchical data.</li>
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
          target="_blank">Deep learning with SAR imagery</a>.
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Research and development of complex-valued neural networks exploiting both magnitude and phase
          data in SAR under  <a className={styles.customLink}
          href="https://www.nga.mil/" rel="noopener noreferrer"
          target="_blank">National Geospatial-Intelligence Agency</a> (NGA) <a className={styles.customLink}
          href="https://www.nga.mil/resources/Boosting_Innovative_GEOINT_Research_Broad_Agency_A.html" rel="noopener noreferrer"
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
    date: 'May 2017 - Aug 2019',
    company: 'Northrop Grumman Corporation',
    title: 'Senior Principal Engineer',
    link: 'https://www.northropgrumman.com/',
    content: (
      <>
        <p>
          Machine learning and autonomy, worked with the <a className={styles.customLink}
          href="https://now.northropgrumman.com/cognitive-automation-drones-disaster-relief" rel="noopener noreferrer"
          target="_blank">Cognitive Autonomy</a> Research Group.
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
    date: 'Mar 2014 - Apr 2017',
    company: 'The Aerospace Corporation',
    title: 'Senior Member of the Technical Staff',
    link: 'https://aerospace.org/',
    content: (
      <>
        <p>
          Machine learning, Guidance, Navigation & Control (GNC), and modeling/simulation for national security space
          in support of the <a className={styles.customLink}
          href="https://www.spaceforce.com/about" rel="noopener noreferrer"
          target="_blank">U.S. Space Force</a> and <a className={styles.customLink}
          href="https://www.nro.gov/" rel="noopener noreferrer"
          target="_blank">National Reconnaissance Office</a> (NRO).
        </p>
        <br />
        <ul>
          <li className={styles.customBullet}>Lead a team working on the next generation GPS satellite constellation (
          <a className={styles.customLink}
          href="https://www.lockheedmartin.com/en-us/products/gps.html" rel="noopener noreferrer"
          target="_blank">GPS Block III</a>) and worked on other satellites, launch vehicles (<a className={styles.customLink}
          href="https://www.ulalaunch.com/rockets/atlas-v" rel="noopener noreferrer"
          target="_blank">Atlas V</a> and <a className={styles.customLink}
          href="https://www.spacex.com/vehicles/falcon-9/" rel="noopener noreferrer"
          target="_blank">Falcon</a>), and missile systems.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'May 2012 - Mar 2014',
    company: 'Space Systems Loral (acquired, now Maxar Technologies)',
    title: 'Senior Research and Development Engineer',
    link: 'https://www.maxar.com/',
    content: (
      <>
        <p>
        Guidance, Navigation & Control (GNC) and modeling/simulation for <a className={styles.customLink}
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
          Guidance, Navigation & Control (GNC) and modeling/simulation for the <a className={styles.customLink}
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
    date: 'Jun 2014',
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
    date: 'Jun 2008',
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
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:peteryschneider@gmail.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/peteryschneider/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/peteryschneider'},
];
