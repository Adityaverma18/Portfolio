import resume from '../assets/Resume.pdf'
import profile from './Images/Aditya.jpeg'
import dream from './Images/dream.png'
import ecommerce from './Images/ecommerce.png'
import facial from './Images/facial.png'
import fraud from './Images/fraud.png'
import sneekarhub from './Images/sneekarhub.svg'
import titanic from './Images/titanic.png'
import vaani from './Images/vaani.png'

import {
  SiCplusplus,
  SiPython,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiGit,
  SiGithub,
  SiPostman,
  SiTableau,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export const skillGroups = [
  {
    title: "Programming Languages",
    icons: [SiCplusplus, SiPython, FaJava, SiC],
  },
  {
    title: "Web Technologies",
    icons: [SiReact, SiNodedotjs, SiExpress, SiTailwindcss],
  },
  {
    title: "Databases",
    icons: [SiMongodb, SiMysql, SiPostgresql],
  },
  {
    title: "Machine Learning & Data Science",
    icons: [SiTensorflow, SiOpencv, SiNumpy, SiPandas],
  },
  {
    title: "Tools & Platforms",
    icons: [SiGit, SiGithub, SiPostman, SiTableau],
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export {resume, profile}

export const projects = [
  {
    image: sneekarhub,
    title: "Sneaker Hub",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Architected and developed a production-level full-stack sneaker e-commerce platform, implementing secure JWT and OAuth2.0 authentication workflows and contributing over 6000 lines of code. Designed scalable REST APIs with optimized MongoDB queries and caching strategies, reducing API latency by 20%. Strengthened reliability through automated unit and functional testing to improve regression detection.",
    github: "https://github.com/Adityaverma18/sneaker-hub",
    website: "https://sneekar-hubfrontend.onrender.com/",
  },

  {
    image: facial,
    title: "Facial Emotion Recognition System",
    tech: ["Python", "TensorFlow", "OpenCV"],
    description:
      "Engineered a real-time facial emotion recognition system using a custom CNN trained on the FER-2013 dataset. Improved validation accuracy to 64% through hyperparameter tuning, data augmentation, batch normalization, and dropout strategies. Integrated OpenCV for live webcam inference to enable responsive real-time emotion classification.",
    github: "https://github.com/Adityaverma18/emotion-recognition",
  },

  {
    image: vaani,
    title: "VAANI – Voice & Audio Analysis Natural Interface",
    tech: ["Python", "TensorFlow", "Conv1D", "BiLSTM", "MFCC"],
    description:
      "Developed a real-time speech emotion and speaker recognition system using MFCC-based feature extraction and a hybrid Conv1D–BiLSTM–Attention architecture. Designed an end-to-end audio preprocessing and inference pipeline with noise-robust augmentation. Achieved 96% emotion classification accuracy and 89% speaker recognition accuracy using multi-dataset training (RAVDESS, TESS, CREMA-D, SAVEE).",
    github: "https://github.com/Adityaverma18/vaani",
  },
];

export const achievements = [
  "⭐ CodeChef 3★ Coder with a peak rating of 1616, demonstrating strong problem-solving and competitive programming skills.",
  
  "🏆 Secured Global Rank 34 in CodeChef Global Starters 158, competing among thousands of participants worldwide.",
  
  "📈 Codeforces Pupil, with consistent performance in algorithmic contests focusing on data structures and optimization.",
  
  "✅ Solved 500+ DSA problems across platforms like CodeChef, Codeforces, and LeetCode, covering arrays, trees, graphs, DP, and greedy techniques.",
];

export const competitiveProfiles = {
  codechef: {
    platform: "CodeChef",
    rating: "1616 (3★)",
    link: "https://www.codechef.com/users/aadi_10",
  },
  codeforces: {
    platform: "Codeforces",
    rank: "Pupil",
    link: "https://codeforces.com/profile/aadi07",
  },
  leetcodes: {
    platform: "Leetcodes",
    rank: "100+ DSA problems",
    link: "https://leetcode.com/u/aadi_7/",
  },
  
};


export const githubProjects = [
  {
    image: sneekarhub,
    title: "Sneaker Hub",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Architected and developed a production-level full-stack sneaker e-commerce platform, implementing secure JWT and OAuth2.0 authentication workflows and contributing over 6000 lines of code. Designed scalable REST APIs with optimized MongoDB queries and caching strategies, reducing API latency by 20%. Strengthened reliability through automated unit and functional testing to improve regression detection.",
    github: "https://github.com/Adityaverma18/sneaker-hub",
    website: "https://sneekar-hubfrontend.onrender.com/",
  },

  {
    image: facial,
    title: "Facial Emotion Recognition System",
    tech: ["Python", "TensorFlow", "OpenCV"],
    description:
      "Engineered a real-time facial emotion recognition system using a custom CNN trained on the FER-2013 dataset. Improved validation accuracy to 64% through hyperparameter tuning, data augmentation, batch normalization, and dropout strategies. Integrated OpenCV for live webcam inference to enable responsive real-time emotion classification.",
    github: "https://github.com/Adityaverma18/emotion-recognition",
  },

  {
    image: vaani,
    title: "VAANI – Voice & Audio Analysis Natural Interface",
    tech: ["Python", "TensorFlow", "Conv1D", "BiLSTM", "MFCC"],
    description:
      "Developed a real-time speech emotion and speaker recognition system using MFCC-based feature extraction and a hybrid Conv1D–BiLSTM–Attention architecture. Designed an end-to-end audio preprocessing and inference pipeline with noise-robust augmentation. Achieved 96% emotion classification accuracy and 89% speaker recognition accuracy using multi-dataset training (RAVDESS, TESS, CREMA-D, SAVEE).",
    github: "https://github.com/Adityaverma18/vaani",
  },

  {
    image: dream,
    title: "dreamPixel",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Built a full-stack AI SaaS application integrating Stable Diffusion for real-time image generation from text prompts. Implemented secure authentication, optimized backend prompt processing, and structured scalable APIs. Enhanced frontend performance through efficient base64 image rendering and responsive UI design for seamless user interaction.",
    github: "https://github.com/Adityaverma18/dreamPixel",
    website: "https://dream-pixel-phi.vercel.app/",
  },

  {
    image: fraud,
    title: "FraudDetectionModel",
    tech: ["Python", "Machine Learning", "Scikit-Learn", "NumPy"],
    description:
      "Developed a fraud detection system for highly imbalanced financial transaction datasets using Logistic Regression and SVM classifiers. Applied hyperparameter optimization with GridSearchCV and RandomSearchCV, achieving 99.57% accuracy, 99.75% recall, and 99.57% F1-score. Significantly reduced false negatives to enhance reliability in real-world fraud detection scenarios.",
    github: "https://github.com/Adityaverma18/FraudDetectionModel",
  },

  {
    image: ecommerce,
    title: "Online-Eccomerce-sites-for-shoes",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    description:
      "Designed and implemented a responsive shoe e-commerce website focusing on intuitive UI and dynamic content rendering. Integrated PHP-based backend logic for form handling and product workflows, simulating real-world e-commerce operations to strengthen full-stack development fundamentals.",
    github: "https://github.com/Adityaverma18/Online-Eccomerce-sites-for-shoes",
    website: "https://adityaverma18.github.io/Online-Eccomerce-sites-for-shoes/",
  },

  {
    image: titanic,
    title: "Titanic-Survival-linear-classifier",
    tech: ["Python", "TensorFlow", "Supervised Learning"],
    description:
      "Implemented a supervised learning pipeline for Titanic survival prediction using TensorFlow Estimator. Conducted structured experimentation with multiple learning rates (0.01, 0.1, 0.5) and optimizers (SGD, Ftrl), identifying lr=0.1 with Ftrl as the optimal configuration, achieving 74.62% accuracy. Designed preprocessing and evaluation workflows to systematically analyze model performance.",
    github: "https://github.com/Adityaverma18/Titanic-Survival-linear-classifier",
  },
];