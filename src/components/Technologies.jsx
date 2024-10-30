import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />
        </div>

        {/* Express */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-green-500" />
        </div>

        {/* Node.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl" style={{ color: "#68A063" }} />
        </div>

        {/* MongoDB */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl" style={{ color: "#4DB33D" }} />
        </div>

        {/* Next.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-white" />
        </div>

        {/* Java */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-7xl" style={{ color: "#f89820" }} />
        </div>

        {/* Tailwind CSS */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl" style={{ color: "#38BDF8" }} />
        </div>

        {/* SQL */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl" style={{ color: "#00758F" }} />
        </div>

        {/* Git */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl" style={{ color: "#F05032" }} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
