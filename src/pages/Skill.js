import React from "react";
import { useState } from "react";

const Skill = (props) => {
  const [mySkill, setmySkill] = useState([
    "HTML GOOD",
    "CSS GOOD",
    "JS GOOD",
    "REACTJS GOOD",
    "NODEJS BASIC",
    "SQL GOOD",
    "MONGODB BASIC",
    "PHP GOOD",
    "JAVA GOOD",
  ]);
  return (
    <div className="condiv skills">
      <h1 className="subtopic">MY SKILL</h1>
      <ul>
        {mySkill.map((items) => {
          return <li key={items}>{items}</li>;
        })}
      </ul>
      <div className="experience">
        <div className="university">
          <h1>Experience </h1>
          <ul>
            <li>
              <h2>Senior Project</h2>
              <h3>Walk From Home Application</h3>
              <div className="para">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using Android Studio and the
                  Java language to develop android application, creating a
                  database system to collect patient walking distance data and
                  send it to the database by using PHP and PHPMYADMIN to let the
                  user record and view the result.
                </p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <h2>Mini Projects</h2>
              <h3>
                Develop a website where users can purchase books and stationery
                stuffs online.
              </h3>
              <div className="para">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating a website that allows
                  users to purchase books and stationery items using HTML,
                  CSS,PHPlanguageand create the SQL DATABASE by using XAMPP,
                  PHPMYADMIN as the WEB-SERVER that can increasing and
                  decreasing the number of products, and allow users to register
                  to complete certain processes.
                </p>
              </div>
            </li>
          </ul>
          <ul>
          <li>
              <h2>Mini Projects</h2>
              <h3>
                Developing a system that will cause alarm when a fire is
                detected by the use of Raspberry Pi.
              </h3>
              <div className="para">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using the IR- Frame Sensor and
                  Gas-Sensor with the Raspberry Pi and Python language for
                  creating a system that detects fire and smoke and then
                  notifies the user on the application by using Android Studio
                  with JAVA language.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;

