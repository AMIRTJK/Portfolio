import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Switcher from "./component/Switcher";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProjectPost from "./component/ProjectPost";
import { useTranslation } from "react-i18next";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

import {
  Box,
  Typography,
  Stack,
  Container,
  TextField,
  Button,
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material/";

function App() {
  // useState for translator
  const [t, i18n] = useTranslation();
  // Функция для смены языка
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };
  // useState для select
  const [lang, setLang] = useState();

  return (
    <>
      <main className="dark:bg-[#000] dark:text-[#fff] p-[50px] bg-[#FFFFFF]">
        {/* Section 1 */}
        <header>
          <div className="container">
            <nav className="flex justify-between">
              <Button
                sx={{
                  padding: "0px",
                  minHeight: "0px",
                  textAlign: "left",
                  textTransform: "none",
                }}
              >
                <a href="">
                  <div className="logo">
                    <p className="text-[20px] font-[900] bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] text-transparent bg-clip-text leading-[24px]">
                      AMIRRO
                    </p>
                    <p className="text-[20px] font-[900] bg-gradient-to-r from-[#00C0FD] to-[#E70FAA] text-transparent bg-clip-text leading-[24px]">
                      Portfolio
                    </p>
                  </div>
                </a>
              </Button>
              <ul className="flex items-center gap-[50px]">
                <li>
                  <a className="text-[#666666] font-[500]" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#666666] font-[500]" href="">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-[#666666] font-[500]" href="">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a className="text-[#666666] font-[500]" href="">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-[#666666] font-[500]" href="">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AMIRTJK" target="_blank">
                    <GitHubIcon className="text-[#666666]" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <TwitterIcon className="text-[#666666]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="text-[20px] font-[500] text-[#666666]"
                    target="_blank"
                  >
                    <LinkedInIcon className="text-[#666666]" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Section 2 */}
        <div className="fullscreen mt-[230px]">
          <div className="container">
            <div className="wrapper-content flex justify-between items-center">
              <aside className="left w-[50%]">
                <div className="wrapper-text">
                  <h1 className="text-[58px] font-[700] leading-[70px] text-[#42446E]">
                    Hi 👋, My name is{" "}
                    <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-transparent bg-clip-text">
                      Amir
                    </span>{" "}
                    I build things for web
                  </h1>
                </div>
              </aside>
              <aside className="right w-[50%] flex justify-end">
                <div className="wrapper-image h-[350px] w-[350px] rounded-[175px] border-[#00C0FD] border-[5px] flex justify-center items-center bg-[url('src/assets/avatar-1.jpg')] bg-no-repeat bg-cover"></div>
              </aside>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="wrapper-information mt-[190px]">
          <div className="container">
            <div className="wrapper-content flex justify-between items-start gap-[80px] border-b-[2px] border-[#EBEAED] pb-[24px]">
              <aside className="left w-[50%] flex flex-col gap-[20px] ">
                <div className="post flex flex-col gap-[20px]">
                  <p className="text-[42px] font-[700] leading-[52px] text-[#42446E]">
                    About Me
                  </p>
                  <p className="text-[18px] font-[400] leading-[24px] text-[#666666]">
                    The Generator App is an online tool that helps you to export
                    ready-made templates ready to work as your future website.
                    It helps you to combine slides, panels and other components
                    and export it as a set of static files: HTML/CSS/JS.
                  </p>
                </div>
                <div className="post flex flex-col gap-[20px]">
                  <p className="text-[42px] font-[700] leading-[52px] text-[#42446E]">
                    Education
                  </p>
                  <div className="wrapper-list flex flex-col gap-[7px] ">
                    <div className="wrapper-full-time flex items-start justify-between">
                      <p className="text-[18px] font-[400] leading-[24px] text-[#666666]">
                        Bachelor in Electronics & Communication
                      </p>
                      <div className="active-full-time bg-[#D7FFE0] px-[10px] py-[2px]  rounded-[50px]">
                        <p className="text-[11px] font-[600] text-[#018C0F]">
                          Full Time
                        </p>
                      </div>
                    </div>
                    <div className="wrapper-date flex items-start justify-between">
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <ApartmentIcon sx={{ fontSize: "16px" }} />
                        Bangalore Instutute of Technology
                      </p>
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <KeyboardAltOutlinedIcon sx={{ fontSize: "16px" }} />
                        Aug 2015 - Dec 2020
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="right w-[50%] ">
                <div className="post flex flex-col gap-[20px]">
                  <p className="text-[42px] font-[700] leading-[52px] text-[#42446E]">
                    Work Experience
                  </p>
                  <div className="wrapper-list border-b-[2px] border-[#EBEAED] pb-[24px]">
                    <div className="wrapper-full-time flex items-start justify-between">
                      <p className="text-[18px] font-[400] leading-[24px] text-[#666666]">
                        Junior Web Developer
                      </p>
                      <div className="active-full-time bg-[#D7FFE0] px-[10px] py-[2px]  rounded-[50px]">
                        <p className="text-[11px] font-[600] text-[#018C0F]">
                          Full Time
                        </p>
                      </div>
                    </div>
                    <div className="wrapper-date flex items-start justify-between">
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <ApartmentIcon sx={{ fontSize: "16px" }} />
                        Dr. Rajkumar’s Learning App
                      </p>
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <KeyboardAltOutlinedIcon sx={{ fontSize: "16px" }} />
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                  <div className="wrapper-list border-b-[2px] border-[#EBEAED] pb-[24px]">
                    <div className="wrapper-full-time flex items-start justify-between">
                      <p className="text-[18px] font-[400] leading-[24px] text-[#666666]">
                        Web Development Intern
                      </p>
                      <div className="active-full-time bg-[#D7FFE0] px-[10px] py-[2px]  rounded-[50px]">
                        <p className="text-[11px] font-[600] text-[#018C0F]">
                          Internship
                        </p>
                      </div>
                    </div>
                    <div className="wrapper-date flex items-start justify-between">
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <ApartmentIcon sx={{ fontSize: "16px" }} />
                        IonPixelz Web Solutions
                      </p>
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <KeyboardAltOutlinedIcon sx={{ fontSize: "16px" }} />
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                  <div className="wrapper-list">
                    <div className="wrapper-full-time flex items-start justify-between">
                      <p className="text-[18px] font-[400] leading-[24px] text-[#666666]">
                        SEO / SEM Specialist
                      </p>
                      <div className="active-full-time bg-[#D7FFE0] px-[10px] py-[2px]  rounded-[50px]">
                        <p className="text-[11px] font-[600] text-[#018C0F]">
                          Internship
                        </p>
                      </div>
                    </div>
                    <div className="wrapper-date flex items-start justify-between">
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <ApartmentIcon sx={{ fontSize: "16px" }} />
                        Bengaluru
                      </p>
                      <p className="flex items-center gap-[5px] text-[12px] font-[500] leading-[28px] text-[#A7A7A7]">
                        <KeyboardAltOutlinedIcon sx={{ fontSize: "16px" }} />
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="wrapper-teach-stack py-[190px]">
          <div className="container">
            <div className="wrapper-text flex flex-col items-center justify-center text-center gap-[30px]">
              <h2 className="text-[40px] font-[700] text-[#42446E]">
                My Tech Stack
              </h2>
              <p className="text-[32px] font-[400] leading-[26px] text-[#666666]">
                Technologies I’ve been working with recently
              </p>
            </div>
            <div className="wrapper-list flex justify-between items-start flex-wrap gap-[100px] mt-[138px]">
              <div className="wrapper-image w-[130px] h-[130px]">
                <a
                  href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
                  target="_blank"
                >
                  <img
                    src="src/assets/stack-html.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a
                  href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics"
                  target="_blank"
                >
                  <img
                    src="src/assets/stack-css.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://learn.javascript.ru/" target="_blank">
                  <img
                    src="src/assets/stack-javascript.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://react.dev/" target="_blank">
                  <img
                    src="src/assets/stack-react.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://tailwindcss.com/" target="_blank">
                  <img
                    src="src/assets/stack-tailwind.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://mui.com/" target="_blank">
                  <img
                    src="src/assets/stack-mui.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://sass-lang.com/" target="_blank">
                  <img
                    src="src/assets/stack-sass.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://git-scm.com/" target="_blank">
                  <img
                    src="src/assets/stack-git.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://devdocs.io/cpp-diagnostics/" target="_blank">
                  <img
                    src="src/assets/stack-c++.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://code.visualstudio.com/" target="_blank">
                  <img
                    src="src/assets/stack-vscode.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
              <div className="wrapper-image w-[130px] h-[130px]">
                <a href="https://github.com/" target="_blank">
                  <img
                    src="src/assets/stack-github.svg"
                    alt=""
                    className="w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div className="wrapper-project">
          <div className="container">
            <div className="wrapper-text flex flex-col items-center justify-center text-center gap-[30px]">
              <h3 className="text-[40px] font-[700] text-[#42446E]">
                Projects
              </h3>
              <p className="text-[32px] font-[400] leading-[26px] text-[#666666]">
                Vanilla development
              </p>
            </div>
            <div className="wrapper-post flex justify-between items-start flex-wrap gap-y-[62px] gap-x-[20px] mt-[96px]">
              <ProjectPost
                image="bg-[url('src/assets/IQMO.png')]"
                title="IQMO"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML, SASS, JavaScript"
                viewProject="https://amirtjk.github.io/Home-Work-04.09.2023/"
                viewCode="https://github.com/AMIRTJK/Home-Work-04.09.2023"
              />
              <ProjectPost
                image="bg-[url('src/assets/INTERWORK.png')]"
                title="INTERWORK"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML, CSS"
                viewProject="https://amirtjk.github.io/HomeWork-31.08.2023/"
                viewCode="https://github.com/AMIRTJK/HomeWork-31.08.2023"
              />
              <ProjectPost
                image="bg-[url('src/assets/Britlex.png')]"
                title="BRITLEX"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML, SASS, only GRID"
                viewProject="https://amirtjk.github.io/Home-Work-06.09.2023/"
                viewCode="https://github.com/AMIRTJK/Home-Work-06.09.2023"
              />
              <ProjectPost
                image="bg-[url('src/assets/Catase.png')]"
                title="TOUTOWN"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML, TailwindCSS, React"
                viewProject="https://tou-town-website.vercel.app/"
                viewCode="https://github.com/AMIRTJK/TouTown-Website"
              />
              <ProjectPost
                image="bg-[url('src/assets/Cleaning.png')]"
                title="CLEANING-X"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML , JavaScript, SASS, React"
                viewProject="https://cleaning-5oj8hgal4-amirros-projects.vercel.app"
                viewCode="https://github.com/AMIRTJK/Cleaning-X"
              />
              <ProjectPost
                image="bg-[url('src/assets/project-6.svg')]"
                title="Project Tile goes here"
                desc="This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content"
                stack=" : HTML , JavaScript, SASS, React"
                viewProject=""
                viewCode=""
              />
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <footer className="mt-[275px]">
          <div className="container">
            <div className="footer-top border-b-[2px] border-[#EBEAED] pb-[42px]">
              <nav className="flex justify-between">
                <Button
                  sx={{
                    padding: "0px",
                    minHeight: "0px",
                    textAlign: "left",
                    textTransform: "none",
                  }}
                >
                  <a href="">
                    <div className="logo">
                      <p className="text-[20px] font-[900] text-[#42446E] leading-[24px]">
                        AMIRRO
                      </p>
                      <p className="text-[20px] font-[900] text-[#42446E] leading-[24px]">
                        Portfolio
                      </p>
                    </div>
                  </a>
                </Button>
                <ul className="flex items-center gap-[50px]">
                  <li>
                    <a className="text-[#666666] font-[500]" href="">
                      +91 12345 09876
                    </a>
                  </li>
                  <li>
                    <a className="text-[#666666] font-[500]" href="">
                      info@example.com
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AMIRTJK" target="_blank">
                      <GitHubIcon className="text-[#666666]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <TwitterIcon className="text-[#666666]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="text-[20px] font-[500] text-[#666666]"
                      target="_blank"
                    >
                      <LinkedInIcon className="text-[#666666]" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-bottom pt-[60px] flex justify-between items-start">
              <ul className="flex items-center gap-[50px]">
                <li>
                  <a className="text-[#42446E] font-[400]" href="">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-[#42446E] font-[400]" href="">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-[#42446E] font-[400]" href="">
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a className="text-[#42446E] font-[400]" href="">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-[#42446E] font-[400]" href="">
                    Contact
                  </a>
                </li>
              </ul>
              <p className="text-[#666666]">
                Designed and built by{" "}
                <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-transparent bg-clip-text">
                  Amir
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-transparent bg-clip-text">
                  Love
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] text-transparent bg-clip-text">
                  Coffee
                </span>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
