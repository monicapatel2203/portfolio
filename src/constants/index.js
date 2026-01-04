import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ConquerThePalace,
  IceHockey,
  CleanTheCity,
  threejs,
  RugbyTactics,
  SpinWarrior,
  CoronaWarrior,
  DiseaseFighter,
  analyticsConsole,
  casinoBuild,
  networkSync,
  launchPad,
  game,
  crossplatform,
  multiplayer,
  tools,
  ui,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Game Development",
    icon: game,
    points: [
      "Unity (C#)",
      "Gameplay Programming",
      "Game Mechanics & Systems",
    ],
  },
  {
    title: "Cross-Platform",
    icon: crossplatform,
    points: [
      "AppStore & Google PlayStore",
      "Amazon Appstore Deployment",
    ],
  },
  {
    title: "Multiplayer & Backend",
    icon: multiplayer,
    points: [
      "Multiplayer Systems (Unity Netcode / Photon)",
      "REST APIs & Socket Integration",
    ],
  },
  {
    title: "UI / UX & Tools",
    icon: ui,
    points: [
      "Unity UI",
      "Localization & Multi-Language Support",
      "Shader Graph (Basic-Intermediate)",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: tools,
    points: [
      "Git & Version Control",
      "Debugging & Profiling",
      "Third-Party SDK Integration",
    ],
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Game Developer",
    company_name: "Facial Stats AI",
    icon: analyticsConsole,
    iconBg: "#161329",
    date: "Jan 2024 - Oct 2025",
    points: [
      "Developed and optimized Unity sports titles, elevating gameplay feel and player engagement across platforms.",
      "Partnered with artists, designers, and backend engineers to deliver localized UI/UX updates and new features.",
      "Deployed mobile builds to iOS and Android with Unity IAP integrations and platform-specific performance tuning.",
    ],
  },
  {
    title: "Unity Developer",
    company_name: "NMS Games Developer",
    icon: casinoBuild,
    iconBg: "#161329",
    date: "Feb 2022 - Oct 2022",
    points: [
      "Produced casino experiences such as Rummy Star and Bigwin using Unity for mobile platforms.",
      "Integrated socket and REST APIs to expand gameplay services and live event systems.",
      "Led technical interviews and mentored junior engineers to uphold team quality standards.",
    ],
  },
  {
    title: "Unity Developer",
    company_name: "Ieko Media LLC",
    icon: networkSync,
    iconBg: "#161329",
    date: "Apr 2021 - Feb 2022",
    points: [
      "Implemented shader graph visuals and Photon-powered multiplayer for 3D racing and action prototypes.",
      "Coordinated with backend teams to integrate Photon SDK, manage networking layers, and ensure real-time sync.",
      "Delivered remote milestones reliably through clear communication and disciplined task ownership.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Invisible Fiction",
    icon: launchPad,
    iconBg: "#161329",
    date: "May 2019 - May 2021",
    points: [
      "Advanced from junior to lead responsibilities while shipping Unity games across mobile, PC, WebGL, and Facebook.",
      "Designed gameplay structures, UI flows, animations, and third-party SDK integrations end-to-end.",
      "Published multiple 2D, 3D, FPS, and TPS titles, managing store submissions and post-launch updates.",
    ],
  },
];

export const projects = [
  {
    name: "Conquer the Palace",
    description:
      "A real-time troop combat prototype where autonomous warriors navigate, engage enemies dynamically, and race to conquer the opposing palace by planting their flag.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "CSharp", color: "green-text-gradient" },
      { name: "AIGameplay", color: "pink-text-gradient" },
      { name: "Multiplayer", color: "pink-text-gradient" },
      { name: "NavMesh", color: "pink-text-gradient" },
    ],
    image: ConquerThePalace,
    comingSoon: true,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Rugby Tactics",
    description:
      "Rugby Tactics is an educational mobile app that simulates real-game rugby scenarios to improve players' decision-making, positioning, and strategies through interactive breakdowns.",
    tags: [
      { name: "EducationalApp", color: "blue-text-gradient" },
      { name: "GameDev", color: "green-text-gradient" },
      { name: "BrainCloud", color: "pink-text-gradient" },
    ],
    image: RugbyTactics,
    detailRoute: "/projects/rugby-tactics",
  },
  {
    name: "Hockey Chess",
    description:
      "A hockey-focused coaching and training app that helps players and coaches run exercises, practice scenarios, and improve game knowledge through interactive tools and trivia.",
    tags: [
      { name: "MobileApp", color: "blue-text-gradient" },
      { name: "Coaching", color: "green-text-gradient" },
      { name: "SportsTech", color: "pink-text-gradient" },
    ],
    image: IceHockey,
    detailRoute: "/projects/hockey-chess",
  },
  {
    name: "CleanTheCity",
    description:
      "A 3D endless-level mobile game where players clean the city while avoiding obstacles, with a focus on smooth gameplay and optimized performance.",
    tags: [
      { name: "ShaderGraph", color: "blue-text-gradient" },
      { name: "MobileGame", color: "blue-text-gradient" },
    ],
    image: CleanTheCity,
    detailRoute: "/projects/clean-the-city",
  },
  {
    name: "CoronaWarrior",
    description:
      "A 3D FPS game where players shoot germs across progressively challenging levels, focusing on accuracy, speed, and precise shooting mechanics.",
    tags: [
      { name: "FPSGame", color: "blue-text-gradient" },
    ],
    image: CoronaWarrior,
    detailRoute: "/projects/corona-warrior",
  },
  {
    name: "Spin Warrior",
    description:
      "A 2D ninja action game where players swipe to spin a warrior’s shield, avoid obstacles, and collect stars to score points and unlock new characters.",
    tags: [
      { name: "2DGame", color: "blue-text-gradient" },
      { name: "NinjaGame", color: "green-text-gradient" },
    ],

    image: SpinWarrior,
    detailRoute: "/projects/spin-warrior",
  },
  {
    name: "Disease Fighter",
    description:
      "A 3D action game where players fight germs across visually rich environments, featuring animated characters, diverse regions, and progressively challenging enemies.",
    tags: [
      { name: "3DGame", color: "blue-text-gradient" },
      { name: "ActionGame", color: "green-text-gradient" },
    ],

    image: DiseaseFighter,
    detailRoute: "/projects/disease-fighter",
  },
];
