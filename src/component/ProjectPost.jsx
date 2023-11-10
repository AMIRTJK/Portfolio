import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectPost = (props) => {
  return (
    <div className="post w-[32%] h-[567px] rounded-[20px] flex flex-col overflow-hidden shadow-lg ">
      <div
        className="wrapper-image bg-no-repeat bg-cover h-[100%]"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="wrapper-text bg-[#fff] rounded-b-[20px] flex flex-col gap-[12px] py-[27px] pl-[28px] pb-[25px] pr-[30px] ">
        <p className="text-[28px] font-[500] leading-[26px]">{props.title}</p>
        <p className="text-[18px] font-[300] leading-[26px] text-[#666666] mt-[5px]">
          {props.desc}
        </p>
        <p className="text-[#42446E] text-[16px] font-[400]">
          Tech stack{" "}
          <span className="text-[14px] font-[300] text-[#666666]">
            {props.stack}
          </span>
        </p>
        <div className="wrapper-icon flex justify-between items-start mt-[9px]">
          <div className="link flex gap-[10px]">
            <img src="src/assets/link.svg" alt="" />
            <a
              href={props.viewProject}
              target="_blank"
              className="text-[16px] font-[400] underline"
            >
              Live Preview
            </a>
          </div>
          <div className="link flex gap-[10px]">
            <GitHubIcon />
            <a
              href={props.viewCode}
              target="_blank"
              className="text-[16px] font-[400] underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
