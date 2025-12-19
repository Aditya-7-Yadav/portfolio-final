"use client";
import Image from "next/image";
import React from "react";
import "./hero.css";
import { BsInstagram } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    icon: <BsInstagram size={20} />,
    url: "https://www.instagram.com/arc_wizard_",
  },
  {
    name: "Email",
    icon: <MdMailOutline size={25} />,
    url: "mailto:anilyadav3241@gmail.com",
  }
];

const Hero = () => {
  return (
    <section className="w-full mt-35 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border-4 border-gray-800 group relative w-40 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
        >
          {/* Bottom image (revealed on hover) */}
          <Image
            src="/images/aditya.jpg"
            alt="Aditya Yadav"
            fill
            className="object-cover"
          />

          {/* Top image (always visible) */}
          <Image
            src="/images/placeholder.svg"
            alt="ArcWizard"
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:opacity-0"
          />
        </motion.div>

        {/* Text and Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center mt-6 gap-8 md:gap-6 max-w-3xl"
        >
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <h1 className="font-display tracking-normal text-5xl font-medium text-gray-50">
              Aditya Yadav
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SkillsSlider />
          </motion.div>

          <p className="text-xl tracking-wider text-center leading-relaxed">
            I&apos;m Aditya Yadav, a professional with extensive experience in{" "}
            <span>
              crafting user-friendly{" "}
              <span className="bg-blue-900/60 px-1">websites</span>
            </span>{" "}
            and powerful{" "}
            <span className="bg-purple-900/60 px-1">AI Automations</span>. I can
            help you bring your digital ideas to life — whether it&apos;s a sleek
            modern website or a feature-rich Automation Feature!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

/* slider style comes from hero.css */
const SkillsSlider = () => {
  return (
    <div className="flex gap-3 justify-center items-baseline">
      <div className="slider">
        <div className="slides text-gray-300">
          <div>Fullstack Dev</div>
          <div>Agentic AI</div>
          <div>Problem Solver</div>
          <div>Gen AI</div>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 justify-center items-center">
        {socialLinks.map((link) => {
          return (
            <li
              key={link.name}
              className="transition-all duration-200 text-gray-400 hover:rotate-6 hover:scale-110 hover:text-gray-50"
            >
              <a
                title={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
