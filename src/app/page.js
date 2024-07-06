"use client";
import { useState } from "react";
function MainTitle() {
  return (
    <>
    <div className="main-title">
      <h1>Brandon Buhr</h1>
      <h1>Software Developer</h1>
      </div>
      </>
  );
};

function WorkExperience() {
  return (
    <>
    <div className="work-experience">
      <section>
       <h1>Experience</h1>
       
       <h2><a href="https://react-weather-app-murex-phi.vercel.app/" target="blank" className="weather-app">React Weather App</a></h2>
          <p>A weather app deployed using Vercel. This project is built with React, utilizing a weather API to retrieve weather data. JavaScript is used for both the frontend and backend components of the application.</p>
          <h2><a href="https://tic-tac-toe-pi-ashen.vercel.app/" target="blank" className="tic-tac-toe-project">Tic-Tac-Toe Project</a></h2>
            <p>A simple tic-tac-toe game made using React.</p>
            <h2><a href="https://github.com/brandonbuhr" target="blank" className="my-github">Github Projects</a></h2>
        <br />
          <h2>Sales Representative</h2>
            <h3>Cellular Sales, March 2022 - May 2024</h3>
             <li>Engaged with clients in a retail setting to understand their needs and recommend suitable products.</li>
             <li>Delivered compelling sales pitches that effectively communicated the benefits of various products and services.</li>
             <li>Provided comprehensive customer support, resolving inquiries and issues promptly.</li>
             <li>Maintained an up-to-date understanding of the latest phone and internet products and services.</li>
      </section>
      <br />

      <section>
        <h2>Cable Technician, Installer </h2>
          <h3>Prince Telecom, July 2021 - January 2022</h3>
            <li>Installed Spectrum home internet, phone, and TV service in client's homes.</li>
            <li>Replaced damaged cables from telephone poles going to client's homes and routing new cables.</li>
            <li>Installed home internet and phone equipment, activated Spectrum service </li>
      </section>
      <br />

      <section>
        <h2>Carpenter, Construction Equipment Operator</h2>
          <h3>Buhr Construction, June 2014 - June 2021</h3>
            <li>Operated forklifts, loaders, dump trucks, and other heavy machinery.</li>
            <li>Experience in carpentry building fine woodwork such as tables, cabinets, and wood decor.</li>
            <li>Responsibilities included roofing, siding, framing, cutting, and using hand tools.</li>
      </section>
    </div>
    </>
  );
}

function Education() {
  return (
    <>
    <div className="education">
    <section>
       <h1>Education</h1>
          <h2>Bachelor of Fine Arts in Music Composition and Technology</h2>
            <h3>University of Wisconsin-Milwaukee, Peck School of the Arts, 2016-2021</h3>
            <li>Experience with multiple DAWs and other software including: Ableton, Fl Studio, Studio One, Digital Performer, and Vocaloid.</li>
            <li>Collaborated with artists in other fields such as film and dance, designing sound and producing music</li>
            <li>Experience with mixing, mastering, editing, and producing audio</li>
            <li>I operate my own Youtube channel and release music on various online platforms: <a 
              className="music-portfolio" 
              href="https://www.hyperfollow.com/brandonbuhr" 
              target="blank">Music Portfolio
              </a>
            </li>
      </section>
      <br />
      <section>
          <h2>Software Development</h2>
            <h3>Course Careers, 2024</h3>
            <li>This resume was made using Next.js</li>
            <li>Experience working with Go, JavaScript, React, HTML, CSS, APIs</li>
      </section>
    </div>
    </>
  );
}

export default function Portfolio() {
  return ( 
  <div>
    <MainTitle />
      <WorkExperience />
      <Education />
  </div>

  );
}
