/*
Masters in Computer Science
Wichita State University, Aug 2022 to Dec 2023
Cgpa: 3.9 / 4.0

B.Tech Computer Science
Sastra Deemed to be University, June 2017 to May 2021
Cgpa: 7.0
*/

export type Education = {
  degree: string;
  institution: string;
  from: string;
  to: string;
  cgpa: string;
};

export const education: Education[] = [
  {
    degree: "Masters in Computer Science",
    institution: "Wichita State University",
    from: "Aug 2022",
    to: "Dec 2023",
    cgpa: "3.9 / 4.0",
  },
  {
    degree: "B.Tech Computer Science",
    institution: "Sastra Deemed to be University",
    from: "June 2017",
    to: "May 2021",
    cgpa: "7.0",
  },
];
