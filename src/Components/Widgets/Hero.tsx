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
        <div className=" flex  px-20 ">
          {/* Lift side  */}
          <div className="basis-auto md:text-sm min-sm:flex-col md:flex-none bg-teal-700 font-san text-white md:border-[0]  border-8 h-auto">
            <div>
              <div className="flex mx-1 justify-center mt-12">
                <Image
                  className="rounded-full w-32 h-32 md:w-32 md:h-32 lg:w-60 lg:h-60 "
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
                <text className="px-3 md:text-sm">+92-313-5978852</text>
              </div>
              {/* email icon */}
              <div className="flex mt-3 ">
                <Image
                  className="w-10 h-6 md:w-5 "
                  src={EmailIcon}
                  alt={"Emaillink"}
                />
                <text className="px-3 md:text-sm">
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
                <text className="px-3 md:text-sm">
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
            <div className="flex mt-3 md:text-sm ">
              <Image
                className="w-10 h-6 md:w-5"
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

          <div className=" flex flex-1  basis-auto bg-gray-500 font-sans max-w-screen-xl  mx-auto px-4 text-white h-auto">
            <div className="py-28 lg:w-auto md:ml-0 ml-11">
              <h1 className=" font-sans lg:text-4xl md:text-sm md:-mt-16 md:font- ">
                Sheikh Mohammad Aqib
                <h4>Student PIAIC-165870</h4>
              </h1>
              <div className="lg:mt-32 md:mt-1">
                {/* profile */}

                <div>
                  <h4 className="text-amber-900  font-bold">Profile</h4>
                  <p className="md:text-xs ">
                    8 years experience in networking field on installation and
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima error, sunt doloribus delectus commodi eaque, aliquid
                    soluta eligendi maiores provident fugiat eveniet! Ullam
                    expedita laudantium in, consequatur minus veritatis veniam?
                  </p>
                </div>
                {/* Working Exp */}
                <div>
                  <h4 className="text-amber-900 font-bold">
                    Working Experience
                  </h4>
                  <h3 className="md:text-xs">
                    Company Name / MINISTRY OF DEFENCE PRODUCTION
                  </h3>
                  <h3 className="md:text-xs">
                    National Radio & Telecom Corporation./2014 to till date
                  </h3>
                  <p className="md:text-xs ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima error, sunt doloribus delectus commodi eaque, aliquid
                    soluta eligendi maiores provident fugiat eveniet! Ullam
                    expedita laudantium in, consequatur minus veritatis veniam?
                  </p>
                </div>
                {/* profile */}
                <div>
                  <h4 className="text-amber-900 font-bold">profile</h4>
                  <p className="md:text-xs ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima error, sunt doloribus delectus commodi eaque, aliquid
                    soluta eligendi maiores provident fugiat eveniet! Ullam
                    expedita laudantium in, consequatur minus veritatis veniam?
                  </p>
                </div>
                {/* profile */}
                <div>
                  <h4 className="text-amber-900 font-bold">profile</h4>
                  <p className="md:text-xs ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima error, sunt doloribus delectus commodi eaque, aliquid
                    soluta eligendi maiores provident fugiat eveniet! Ullam
                    expedita laudantium in, consequatur minus veritatis veniam?
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
