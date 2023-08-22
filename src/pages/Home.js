import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Eyobed Tegene</h2>
        <div className="prompt">
          <p>Intern from Jigjiga University</p>
      
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <span>I like drawing, ik not relevant but painting and making trash music is my skills</span>
        <ol className="list">
          
          <li className="item">
            <h2>Languages</h2>
            <span>Learning HTML,CSS,JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
