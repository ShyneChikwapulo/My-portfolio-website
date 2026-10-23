import djangoBrainImage from '../images/BTCM.PNG';
import auxImage from '../images/Capture.PNG';
import vossieImage from '../images/SW.PNG';
import flappyImage from '../images/FlappyBird.jpg';
import organizerImage from '../images/file-organizer.jpg';

const img = (name) => `${process.env.PUBLIC_URL}/projects/${name}`;

export const featuredProjects = [
  {
    title: 'ML Advisor',
    status: 'Capstone · team of four, I was team lead',
    description:
      'A mobile app that helps students and developers choose a machine-learning model for software bug prediction. It has a model library, side-by-side comparison, a guided recommendation wizard and an AI chat grounded in 26 research papers.',
    tech: ['Flutter', 'Firebase', 'FastAPI', 'Python'],
    image: img('ml-advisor.png'),
    links: [
      { type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/ml-advisor' },
      { type: 'live', label: 'API', href: 'https://ml-advisor-api.onrender.com' },
    ],
  },
  {
    title: 'Inkrepublik',
    status: 'Portfolio project · solo',
    description:
      'A booking site and admin panel for a tattoo studio. Clients request bookings and manage them through private expiring links; the studio runs bookings, a calendar, artists, services and reviews from an admin area.',
    tech: ['.NET 10', 'Blazor', 'EF Core', 'Docker'],
    image: img('inkrepublik.png'),
    links: [
      { type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/inkrepublik' },
      { type: 'live', label: 'Live demo', href: 'https://inkrepublik.onrender.com/' },
    ],
  },
  {
    title: "The Butcher's Mermaid",
    status: 'Proposal project · solo',
    description:
      'A website for a high-end butchery, restaurant, bar and deli in Hout Bay. It has a database-backed menu, validated enquiry forms emailed through Resend, a password-protected admin dashboard and 31 xUnit tests.',
    tech: ['.NET 10', 'Blazor', 'EF Core', 'SQLite', 'xUnit'],
    image: img('butchers-mermaid.png'),
    links: [
      { type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/butchers-mermaid' },
      { type: 'live', label: 'Live demo', href: 'https://butchers-mermaid.onrender.com' },
    ],
  },
  {
    title: 'African Nations League',
    status: 'Solo project',
    description:
      'A football tournament simulator. Federation reps register teams with generated 23-player squads, an admin builds an eight-team knockout bracket, and each match is either simulated or played with AI-written commentary.',
    tech: ['React', 'TypeScript', 'Express', 'Firebase', 'OpenRouter'],
    image: img('african-nations-league.png'),
    links: [
      { type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/CAF-African-Nations-League' },
    ],
  },
];

export const moreProjects = [
  {
    title: 'Brain Tumor Classification',
    status: 'Machine learning',
    description:
      'A convolutional neural network built with TensorFlow and Keras that classifies brain MRI scans as tumour or no tumour, with a Django front end. About 99% accuracy on the test set.',
    tech: ['TensorFlow', 'Keras', 'Python', 'Django'],
    image: djangoBrainImage,
    links: [
      { type: 'github', label: 'Model', href: 'https://github.com/ShyneChikwapulo/Brain-Tumor-classificaion-model' },
      { type: 'github', label: 'Django app', href: 'https://github.com/ShyneChikwapulo/Advanced-Brain-Tumor-Classification-with-Django-frontend' },
    ],
  },
  {
    title: 'Pass the Aux',
    status: 'Full-stack',
    description:
      'Users create or join music rooms and control playback together in real time. The host connects Spotify and guests vote to skip songs.',
    tech: ['Django', 'DRF', 'React', 'Spotify Web API', 'OAuth2'],
    image: auxImage,
    links: [{ type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/Pass-the-aux-app' }],
  },
  {
    title: 'Vossie',
    status: 'Full-stack',
    description:
      'A social platform with authentication, profiles, image posts, likes and comments, and real-time messaging over WebSockets.',
    tech: ['Django', 'WebSockets', 'REST API', 'JavaScript'],
    image: vossieImage,
    links: [{ type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/Social_Media_App' }],
  },
  {
    title: 'C2C Marketplace',
    status: 'Full-stack',
    description:
      'A customer-to-customer marketplace with Google sign-in, product listings and PayPal Sandbox checkout.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Google OAuth', 'PayPal Sandbox'],
    links: [{ type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/C2C-E-commerce-website' }],
  },
  {
    title: 'Flappy Bird AI',
    status: 'AI',
    description:
      'A neural network evolves with NEAT to play Flappy Bird, improving over generations through fitness scoring.',
    tech: ['Python', 'NEAT', 'Pygame'],
    image: flappyImage,
    links: [{ type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/Flappy-Bird-AI' }],
  },
  {
    title: 'Auto File Organizer',
    status: 'Automation',
    description:
      'A Python script that watches a folder and sorts files into subfolders by type and by year and month.',
    tech: ['Python'],
    image: organizerImage,
    links: [{ type: 'github', label: 'Code', href: 'https://github.com/ShyneChikwapulo/Automated-desktop-cleaner' }],
  },
  // Add Resume Studio here once you're ready, for example:
  // {
  //   title: 'Resume Studio',
  //   status: 'In progress',
  //   wip: true,
  //   description: '...',
  //   tech: [...],
  //   links: [{ type: 'github', label: 'Code', href: '...' }],
  // },
];