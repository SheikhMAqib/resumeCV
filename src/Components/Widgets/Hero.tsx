import Wrapper from "@/Components/shared/Wrapper";
import CellIcon from "@/assets/images/phone.svg";
import EmailIcon from "@/assets/images/email.svg";
import AddressIcon from "@/assets/images/address.svg";
import Yellowstar from "@/Components/shared/Yellowstar";
import Whitestar from "@/Components/shared/Whitestar";
import HeroPoster from "@/assets/images/hero-poster.jpg";
import FacebookIcon from "@/assets/images/facebook.svg";
import TwitterIcon from "@/assets/images/twitter.svg";
import GitHubIcon from "@/assets/images/github.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";

import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className=" flex flex-col  md:flex-row basis-4/12 ">
          {/* Lift side  */}
          <div className=" bg-teal-700 font-san  rounded-lg text-white ">
            <div>
              <div className="flex mx-1 justify-center mt-12">
                <Image
                  className="rounded-full w-32 h-32  md:w-32 md:h-32 lg:w-60 lg:h-60 "
                  src={HeroPoster}
                  alt={"Hero Poster"}
                />
              </div>
              {/* Contact */}
              <div className="flex mx-1 md:mt-5 px-1 mt-12">
                <h4>Contact</h4>
              </div>

              {/* phone icon */}
              <div className="flex mt-3 ">
                <Image
                  className="w-10 h-6 md:w-5"
                  src={CellIcon}
                  alt={"celllink"}
                />
                <text className="px-2 mr-1 ml-10  sm:text-center md:text-sm">
                  <a href="https://wa.me/qr/TZ6QKKV6N5NNP1">+92-313-5978852</a>
                </text>
              </div>
              {/* email icon */}
              <div className="flex mt-3 ">
                <Image
                  className="w-10 h-6 md:w-5 "
                  src={EmailIcon}
                  alt={"Emaillink"}
                />
                <text className="px-2 text-center md:text-sm">
                  SheikhMohammadAqib@gmail.com
                </text>
              </div>

              {/* map-pin */}
              <div className="flex mt-3 ">
                <Image
                  className="w-10 h-6 md:w-5"
                  src={AddressIcon}
                  alt={"Addresslink"}
                />
                <text className="px-2 sm:text-center md:text-sm">
                  HSP Staff Colony House # i/262 Sahiwal
                </text>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h4 className=" flex mx-1 px-1 mt-12 md:text-sm ">
                Social Account
              </h4>
            </div>

            {/* Link Icon */}

            {/* facebook icon */}
            <div className="flex mt-3 text-center md:text-sm ">
              <Image
                className="w-10 h-6  md:w-5"
                src={FacebookIcon}
                alt={"facebooklink"}
              />
              <a href="https://www.facebook.com/Sheikhmohammadaqib">Facebook</a>
            </div>
            {/* twitter icon */}
            <div className="flex mt-3  md:text-sm">
              <Image
                className="w-10 h-6 md:w-5"
                src={TwitterIcon}
                alt={"Twitterlink"}
              />
              <a href="https://twitter.com/SheikhMAqib">Twitter</a>
            </div>
            {/* Github Icon */}
            <div className="flex mt-3 md:text-sm ">
              <Image
                className="w-10 h-6 md:w-5 "
                src={GitHubIcon}
                alt={"Githublink"}
              />
              <a href="https://github.com/SheikhMAqib">GitHub </a>
            </div>
            {/* linkedin */}
            <div className="flex mt-3 md:w-5 md:text-sm">
              <Image
                className="w-10 h-6 "
                src={linkedinIcon}
                alt={"Linkedinlink"}
              />
              <a href="https://www.linkedin.com/in/sheikhmaqib/">linkedin</a>
            </div>
            {/* Skills */}
            <div>
              <h4 className="flex mx-1 px-1 mt-12 md:text-sm ">Skills</h4>
            </div>
            <div className="flex flex-col">
              {/* HTML */}
              <div className="flex mt-6 md:text-sm">
                <h4 className=" mx-1 px-1 ">HTML </h4>
                <div className="flex  self-end  ">
                  <Yellowstar text="1" />
                  <Yellowstar text="2" />
                  <Yellowstar text="3" />
                  <Whitestar text="4" />
                  <Whitestar text="5" />
                </div>
              </div>
              {/* Tailwind CSS */}
              <div className="flex mt-8 md:text-sm">
                <h4 className=" mx-1 px-1">Tailwind CSS </h4>
                <div className="flex  self-end  ">
                  <Yellowstar text="1" />
                  <Yellowstar text="2" />
                  <Yellowstar text="3" />
                  <Whitestar text="4" />
                  <Whitestar text="5" />
                </div>
              </div>
              {/* Java Script */}
              <div className="flex mt-8">
                <h4 className=" mx-1 px-1  md:text-sm">JavaScript </h4>
                <div className="flex self-end">
                  <Yellowstar text="1" />
                  <Yellowstar text="2" />
                  <Yellowstar text="3" />
                  <Whitestar text="4" />
                  <Whitestar text="5" />
                </div>
              </div>
              {/* TypeScript */}
              <div className="flex mt-8">
                <h4 className=" mx-1 px-1 md:text-sm"> TypeScript</h4>
                <div className="flex self-end ">
                  <Yellowstar text="1" />
                  <Yellowstar text="2" />
                  <Yellowstar text="3" />
                  <Whitestar text="4" />
                  <Whitestar text="5" />
                </div>
              </div>
              {/* NextJS */}
              <div className="flex mt-8 ">
                <h4 className=" mx-1 px-1 md:text-sm ">NextJS </h4>
                <span className="flex self-end ">
                  <Yellowstar text="1" />
                  <Yellowstar text="2" />
                  <Yellowstar text="3" />
                  <Whitestar text="4" />
                  <Whitestar text="5" />
                </span>
              </div>
            </div>
          </div>

          {/* Right side  */}

          <div className=" flex flex-1 rounded-lg bg-gray-500 font-sans max-w-screen-xl basis-4/12 mx-auto px-4 text-white ">
            <div className="py-28 lg:w-auto md:ml-0  sm:ml-11">
              <h1 className=" font-sans lg:text-4xl text-2xl  -mt-20 md:text-3xl md:-mt-0 md:font-lg ">
                Sheikh Mohammad Aqib
              </h1>
              <h4> Full Stack Web-Developer</h4>
              <div className="lg:mt-32  md:mt-1">
                {/* profile */}

                <div>
                  <h4 className="text-amber-900  font-bold">Profile</h4>
                  <p className="md:text-xs ">
                    8 Years experience in networking field on installation and
                    service for “Security surveillance solutions” for Punjab and
                    Sindh Prisons.
                    <br />• High level command on installation and service of IP
                    networks. Configuration of IP cameras and switches.
                    <br />• High level command on NVR based setup installation.
                    <br />• High level command on setting of NVR, IP Cameras and
                    Switches.
                    <br />• 3 month working experience on Automatic road
                    blocker, automatic road barrier .
                    <br />• Ability to address connectivity problems on the
                    network and urgent rectification.
                  </p>
                </div>
                {/* objective */}
                <div>
                  <h4 className="text-amber-900 font-bold">Objective</h4>
                  <p className="md:text-xs ">
                    As a web developer, my objective is to utilize my technical
                    skills and experience to create efficient and user-friendly
                    web applications. I aim to work in a dynamic environment
                    that challenges me to continuously improve my abilities and
                    stay up-to-date with the latest technologies. I strive to
                    deliver high-quality work that meets and exceeds client
                    expectations, while collaborating effectively with team
                    members and stakeholders. Ultimately, my goal is to
                    contribute to the success of projects by designing and
                    implementing innovative solutions that enhance user
                    experience and drive business growth.
                  </p>
                </div>
                {/* Working Exp */}
                <div>
                  <h4 className="text-amber-900 font-bold">
                    Working Experience
                  </h4>
                  <div className="flex">
                    <h3 className="md:text-xs text-gray-800 font-semibold">
                      National Radio & Telecom Corporation.
                    </h3>
                    <h4 className="text-white md:text-xs">
                      / 2014 to till date
                    </h4>
                  </div>
                  <h3 className="md:text-xs text-gray-800 font-semibold">
                    [Job Positions]
                  </h3>
                  <p className="md:text-xs ">
                    Doing job(NRTC) National Radio Telecommunication Corporation
                    as a Operator 1 Sep 2014 to till date. <br /> 8 Years
                    Experience in networking field on installation and service
                    for “Security Surveillance Solutions” for Punjab and Sindh
                    Prisons.
                  </p>
                </div>
                {/* Education */}
                <div>
                  <h4 className="text-amber-900 font-bold">Education</h4>
                  <div className="flex">
                    <h3 className="md:text-xs text-gray-800 font-semibold">
                      BISE Abbottabad . BTE Peshawar
                    </h3>
                    <h4 className="text-white md:text-xs">/ 2009 to 2012</h4>
                  </div>
                  <h3 className="md:text-xs text-gray-800 font-semibold">
                    [ SSC (Science) / DAE (Electrical) ]
                  </h3>
                  <p className="md:text-xs ">
                    Electrical technology is the study and application of
                    electrical systems, components, and devices. It involves the
                    understanding of principles and laws governing the behavior
                    of electricity, circuits, and electromagnetic fields.
                    Electrical technology plays a crucial role in various
                    industries, including power generation, distribution,
                    telecommunications, automation, and transportation.
                  </p>
                </div>
                {/* PIAIC */}
                <div>
                  <h4 className="text-amber-900 font-bold">Education</h4>
                  <div className="flex">
                    <h3 className="md:text-xs text-gray-800 font-semibold">
                      Presidential Initiative for Artificial Intelligence and
                      Computing (PIAIC)
                    </h3>
                    <h4 className="text-white md:text-xs">
                      / 19th June 2022 to To be Contine ...
                    </h4>
                  </div>
                  <h3 className="md:text-xs text-gray-800 font-semibold">
                    [ Web 3 and Metaverse Specialization ]
                  </h3>
                  <p className="md:text-xs ">
                    Web 3.0 (Blockchain) and Metaverse Specialization
                    <br />
                    This Web 3.0 and Metaverse specialization focuses on
                    developing full-stack Web 3.0 and Metaverse experiences for
                    the next generation of the internet by specializing in
                    building worlds that merge the best of cutting-edge
                    decentralized distributed blockchains with 3D metaverse
                    client experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
