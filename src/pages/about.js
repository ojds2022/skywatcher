import React from "react";
import BannerImage from "../assets/nightSky.jpg";

const About = () => {
  return (
    <div className="home h-screen bg-center bg-cover flex" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="px-6 text-center place-self-center mb-14 bg-black mx-3 rounded-xl bg-opacity-50">
            <h1 className="text-white text-2xl font-bold">About Us</h1>
            <p className="text-white">
                Fugiat magna pariatur dolor deserunt sint et nostrud irure sint. Culpa incididunt voluptate et ad tempor enim magna esse labore amet. Reprehenderit ullamco irure do sunt eu fugiat aliquip aute quis occaecat minim reprehenderit qui sit. Quis elit do voluptate in irure sint. Velit consectetur ea cillum sit quis amet excepteur excepteur nulla irure quis cillum in. Consequat deserunt sit et nulla esse nulla do ullamco deserunt ipsum anim.
            </p>
        </div>
    </div>
  );
};

export default About;
