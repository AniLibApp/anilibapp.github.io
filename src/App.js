import "./App.css";
import React from "react";
import Wave from "react-wavify";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function CarouselImage({ src }) {
  return (
    <div className="mx-5">
      <img src={src} className="w-full rounded-xl" />
    </div>
  );
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Text({ children }) {
  return <p className="text-base text-stone-600">{children}</p>;
}

function App() {
  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen relative">
        <img src="wave.svg" className="absolute top-[-60px]" />
        <div className="z-20 container mx-auto flex flex-grow p-10">
          <div className="flex w-full flex-col lg:flex-row lg:justify-between items-center">
            <div className="w-[92%] mx-auto mt-10 lg:max-w-[50%] mr-6 space-y-3">
              <div className="flex items-center">
                <img src="logo.svg" className="w-[3rem] h-auto" />
                <h1 className="text-4xl font-medium mx-3">AniList</h1>
              </div>
              <Text>
                Your ultimate companion for tracking and discovering anime and
                manga
              </Text>

              {/* <h2>Features</h2>
            <FeatureItem>Track Your Anime & Manga</FeatureItem>
            <FeatureItem>Discover New Titles</FeatureItem>
            <FeatureItem>Stay Updated</FeatureItem>
            <FeatureItem>Connect with Friends</FeatureItem> */}

              <div className="space-y-2">
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.revolgenx.anilib&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Play Store"
                      rel="noopener noreferrer"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="https://github.com/AniLibApp/AniLib"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-[#1b1e23] px-3 py-1 rounded-md inline-flex items-center space-x-2">
                      <img
                        src="./github-logo.png"
                        width="32px"
                        className="inline"
                      />
                      <span>
                        <p className="text-white text-sm pl-1">
                          Source code on
                        </p>
                        <img
                          src="./github-text.png"
                          width="60px"
                          className="inline"
                        />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:max-w-[60%]  my-4 lg:my-0 ">
              <Slider {...carouselSettings}>
                <CarouselImage src="search.jpg" />
                <CarouselImage src="track.jpg" />
                <CarouselImage src="search.jpg" />
                <CarouselImage src="track.jpg" />
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <Wave
            fill="#0099ff"
            paused={false}
            options={{
              height: 60,
              amplitude: 30,
              speed: 0.15,
              points: 4,
            }}
          />
        </div>
      </div>

      <div className="p-10 space-x-5">
        <Link to="/privacy-policy">🔒 Privacy Policy</Link>
        <Link to="/terms-and-conditions">📋 Terms & Conditions</Link>
        <a href="https://anilist.co/terms">🔐 AniList Privacy Policy</a>
      </div>
    </div>
  );
}

export default App;
