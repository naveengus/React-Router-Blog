import React from "react";
import Topbar from "./components/Topbar";
import CardData from "./components/cardDatas/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";

function App() {
  let cards = [
    {
      image: "/img/career-1.webp",
      title: "10 Tips to Stay Motivated in Your Motion Graphic Design Career",
      roll: "Career",
    },
    {
      image: "/img/cb-1.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      roll: "Cyber-Security",
    },
    {
      image: "/img/fsd-2.jpg",
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      roll: "FSD",
    },
    {
      image: "/img/cb-3",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenge...",
      roll: "Cyber-Security",
    },
    {
      image: "/img/fsd-3.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      roll: "FSD",
    },
    {
      image: "/img/db-4.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      roll: "Data-Science",
    },

    {
      image: "/img/cb-2.webp",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      roll: "Cyber-Security",
    },
    {
      image: "/img/career-2.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      roll: "Career",
    },

    {
      image: "/img/db-2.webp",
      title: "Roles and Responsibilities of a Data Scientist",
      roll: "Data-Science",
    },

    {
      image: "/img/fsd-1.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024",
      roll: "FSD",
    },

    {
      image: "/img/db-1.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      roll: "Data-Science",
    },
    {
      image: "/img/cb-4.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      roll: "Cyber-Security",
    },
    {
      image: "/img/career-3.webp",
      title:
        "How Does an SEO Certification Elevate Your Digital Marketing Career?",
      roll: "Career",
    },

    {
      image: "/img/db-6.webp",
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      roll: "Data-Science",
    },
    {
      image: "/img/cb-6.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      roll: "Cyber-Security",
    },
    {
      image: "/img/fsd-4.webp",
      title: "10 Best Database Management Systems For Software Developers",
      roll: "FSD",
    },
    {
      image: "/img/db-5.webp",
      title: "Can A Commerce Student Do Data Science?",
      roll: "Data-Science",
    },
    {
      image: "/img/career-4.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      roll: "Career",
    },
    {
      image: "/img/fsd-5.webp",
      title:
        "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
      roll: "FSD",
    },
    {
      image: "/img/cb-5.webp",
      title:
        "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      roll: "Cyber-Security",
    },
    {
      image: "/img/db-3.webp",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      roll: "Data-Science",
    },
    {
      image: "/img/fsd-6.webp",
      title: "7 Unique Web Development Project Ideas for Beginners",
      roll: "FSD",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="" element={<CardData cards={cards} />} />
          <Route
            path="/Full-Stack-Development"
            element={<FullStack cards={cards} />}
          />
          <Route path="/Data-Science" element={<DataScience cards={cards} />} />
          <Route
            path="/Cyber-Security"
            element={<CyberSecurity cards={cards} />}
          />
          <Route path="/Career" element={<Career cards={cards} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
