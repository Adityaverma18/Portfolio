import resume from '../assets/Resume.pdf'
import profile from './Images/profile.png'

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
    title: "Sneaker Hub",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A full-stack sneaker e-commerce platform featuring secure JWT-based authentication, role-based access control, and optimized REST APIs. The backend was designed for scalability with efficient database queries and modular architecture.",
    github: "https://github.com/Adityaverma18/sneaker-hub",
    website: "https://sneekar-hubfrontend.onrender.com/",
  },
  {
    title: "Emotion Recognition System",
    tech: ["Python", "TensorFlow", "OpenCV"],
    description:
    "Developed a real-time facial emotion recognition system capable of analyzing live video streams to identify human emotional states. The solution leverages a deep learning-based CNN trained on the FER-2013 dataset and integrates OpenCV for efficient face detection and real-time inference, enabling interactive and responsive emotion analysis.",
    github: "https://github.com/Adityaverma18/emotion-recognition",
  },
  {
    title: "VAANI – Voice & Audio Analysis Natural Interface",
    tech: ["Python", "TensorFlow", "Conv1D", "BiLSTM", "MFCC"],
    description:
      "A real-time speech emotion and speaker recognition system leveraging MFCC-based feature extraction and deep learning architectures.",
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
    title: "Sneaker Hub",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A full-stack sneaker e-commerce platform featuring secure JWT-based authentication, role-based access control, and optimized REST APIs. The backend was designed for scalability with efficient database queries and modular architecture.",
    github: "https://github.com/Adityaverma18/sneaker-hub",
    website: "https://sneekar-hubfrontend.onrender.com/",
  },
  {
    title: "Emotion Recognition System",
    tech: ["Python", "TensorFlow", "OpenCV"],
    description:
    "Developed a real-time facial emotion recognition system capable of analyzing live video streams to identify human emotional states. The solution leverages a deep learning-based CNN trained on the FER-2013 dataset and integrates OpenCV for efficient face detection and real-time inference, enabling interactive and responsive emotion analysis.",
    github: "https://github.com/Adityaverma18/emotion-recognition",
  },
  {
    title: "VAANI – Voice & Audio Analysis Natural Interface",
    tech: ["Python", "TensorFlow", "Conv1D", "BiLSTM", "MFCC"],
    description:
      "VAANI is a real-time speech emotion recognition system that uses MFCC-based feature extraction and a hybrid Conv1D–BiLSTM deep learning architecture to model temporal speech patterns. It supports live and recorded audio input for accurate emotion classification in voice-driven applications.",
    github: "https://github.com/Adityaverma18/vaani",
  },
  {
    title: "dreamPixel",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A full-stack AI SaaS app that lets users generate images from text prompts using Stable Diffusion. Built with React, Node.js, Express, and MongoDB, it includes user authentication, prompt handling, and real-time image generation. Clean UI and base64 image rendering for smooth user experience.",
    github: "https://github.com/Adityaverma18/dreamPixel",
    website: "https://dream-pixel-phi.vercel.app/",
  },
  {
    title: "FraudDetectionModel",
    tech: ["Python", "Machine Learning", "Scikit-Learn","Numpy"],
    description:
      "A machine learning project for detecting fraudulent financial transactions in highly imbalanced datasets. The project evaluates Logistic Regression and SVM models, applying GridSearchCV and RandomSearchCV to optimize performance and achieve high accuracy, precision, recall, and F1-score while minimizing false negatives.",
    github: "https://github.com/Adityaverma18/FraudDetectionModel",
  },
  {
    title: "Online-Eccomerce-sites-for-shoes",
    tech: ["HTML", "CSS", "JS","PHP"],
    description:
      "A responsive online shoe e-commerce website built using HTML, CSS, and JavaScript for the frontend, with PHP handling server-side operations. The platform includes product listings, user interaction features, and basic backend integration for managing dynamic content. The project focuses on frontend design, user experience, and understanding full-stack web fundamentals.",
    github: "https://github.com/Adityaverma18/Online-Eccomerce-sites-for-shoes",
    website: "https://adityaverma18.github.io/Online-Eccomerce-sites-for-shoes/"
  },
  {
    title: "Titanic-Survival-linear-classifier",
    tech: ["Python", "Machine Learning","Supervised Learning"],
    description:
      "A supervised machine learning model built using a linear classification algorithm to predict passenger survival on the Titanic dataset. The project includes data cleaning, handling missing values, feature encoding, and model evaluation using accuracy and classification metrics to analyze predictive performance.",
    github: "https://github.com/Adityaverma18/Titanic-Survival-linear-classifier ",
  },
];


