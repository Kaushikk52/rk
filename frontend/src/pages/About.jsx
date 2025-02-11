import { Slide, Fade } from "react-awesome-reveal";

import TeamBG1 from "../assets/about-us-images/team-1.jpg";
import Team2 from "../assets/about-us-images/team-2.png";
import House from "../assets/about-us-images/home-insurance.png";

import Team from "../components/Team";


const About = () => {
  return (
    <>
      <Fade triggerOnce>
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url(${TeamBG1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
          >
            <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 text-white">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-4">
                  Education is not preparation for life.
                </h1>
                <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 max-w-3xl">
                  Education is life itself.
                </p>
                {/* <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="w-full sm:w-auto border-2 border-transparent bg-[#ffd700] text-black py-2 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold rounded-sm transition duration-300 ease-in-out hover:bg-[#e6c200]">
                    Explore Courses
                  </button>
                  <button className="w-full sm:w-auto border-2 border-[#ffd700] text-[#ffd700] py-2 px-4 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold rounded-sm transition duration-300 ease-in-out hover:bg-[#ffd700] hover:text-black">
                    Contact us
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl container mx-auto px-4 w-full">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center my-10">
          <Slide triggerOnce direction="up" className="md:w-1/2 mb-6 md:mb-0">
            <Fade triggerOnce>
              <div>
                <img
                  src={Team2}
                  alt="team image"
                  className="w-full rounded-md"
                />
              </div>
            </Fade>
          </Slide>
          <Slide
            triggerOnce
            direction="up"
            delay="0.2s"
            className="md:w-1/2 text-[#253858] md:pl-8"
          >
            <Fade triggerOnce>
              <div>
                <h1 className="text-4xl md:text-6xl font-black">
                  Why We Exist
                </h1>
                <p className="text-lg md:text-xl my-6 font-semibold">
                  Our courses start from just 12,000 INR. At RK Insurance, our mission is to empower individuals, families, and
                  businesses with high-quality, accessible education that
                  fosters growth and success. We envision a world where everyone
                  can confidently achieve their goals with the right skills and
                  knowledge at their fingertips.
                </p>
              </div>
            </Fade>
          </Slide>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-10">
          <Slide triggerOnce direction="up" className="md:w-1/2 mb-6 md:mb-0">
            <Fade triggerOnce>
              <div>
                <img
                  src={House}
                  alt="team image"
                  className="w-full rounded-md"
                />
              </div>
            </Fade>
          </Slide>

          <Slide
            triggerOnce
            direction="up"
            delay="0.2s"
            className="md:w-1/2 text-[#253858] md:pr-8"
          >
            <Fade triggerOnce>
              <div>
                <h1 className="text-4xl md:text-6xl font-black">Our Vision</h1>
                <p className="text-lg md:text-xl my-6 font-semibold">
                We strive to create a future where education is accessible, simple, and impactful. Our commitment is to empower learners with the confidence and skills needed to face life’s challenges and seize opportunities.
                </p>
              </div>
            </Fade>
          </Slide>
        </div>
      </div>

      <Team />
    </>
  );
};

export default About;
