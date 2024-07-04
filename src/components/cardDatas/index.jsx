import React from "react";
import Card from "./Card";
function index({ cards }) {
  // let cards = [
  //   {
  //     image: "/img/fsd-2.jpg",
  //     title: "Top 10 Full-Stack Developer Frameworks in 2024",
  //     roll: "fsd",
  //   },
  //   {
  //     image: "/img/db-4.webp",
  //     title: "Top Product-Based Companies for Data Scientists in 2024",
  //     roll: "data-science",
  //   },
  //   {
  //     image: "/img/db-2.webp",
  //     title: "Roles and Responsibilities of a Data Scientist",
  //     roll: "data-science",
  //   },
  //   {
  //     image: "/img/fsd-1.jpg",
  //     title: "Best Full-Stack Development Project Ideas in 2024",
  //     roll: "FSD",
  //   },

  //   {
  //     image: "/img/db-1.webp",
  //     title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
  //     roll: "data-science",
  //   },

  //   {
  //     image: "/img/fsd-3.webp",
  //     title: "How Long Would It Take to Be a Full Stack Developer?",
  //     roll: "FSD",
  //   },
  //   {
  //     image: "/img/db-6.webp",
  //     title: "10 Best Data Science Online Courses for Beginners | 2024",
  //     roll: "data-science",
  //   },

  //   {
  //     image: "/img/fsd-4.webp",
  //     title: "10 Best Database Management Systems For Software Developers",
  //     roll: "FSD",
  //   },
  //   {
  //     image: "/img/db-5.webp",
  //     title: "Can A Commerce Student Do Data Science?",
  //     roll: "data-science",
  //   },
  //   {
  //     image: "/img/fsd-5.webp",
  //     title:
  //       "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
  //     roll: "FSD",
  //   },
  //   {
  //     image: "/img/db-3.webp",
  //     title: "12 Real-World Data Science Examples: Power Of Data Science",
  //     roll: "data-science",
  //   },
  //   {
  //     image: "/img/fsd-6.webp",
  //     title: "7 Unique Web Development Project Ideas for Beginners",
  //     roll: "FSD",
  //   },
  // ];

  return (
    <>
      <div className="card-container">
        {cards.map((card, i) => {
          return <Card data={card} ker={i} />;
        })}
      </div>
    </>
  );
}

export default index;
