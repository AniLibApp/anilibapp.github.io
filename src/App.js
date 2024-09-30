import './App.css'
import React from 'react'
import Wave from 'react-wavify'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

function CarouselImage({ src }) {
  return (
    <div className="mx-5">
      <img src={src} className="w-full rounded-xl" />
    </div>
  )
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  arrows: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function App() {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-between">
        <img src="wave.svg" className="absolute top-[-60px]" />
        <div className="container z-20 mx-auto flex flex-grow p-10">
          <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
            <div className="mx-auto mr-6  flex w-[92%] flex-col items-center justify-center space-y-3 lg:max-w-[50%]">
              <img src="logo.svg" width={100} />
              <h1>AniList App</h1>
              <h3 className="text-center">
                An Unofficial Client for{' '}
                <a href="https://anilist.co" target="_blank" rel="noopener noreferrer">
                  AniList
                </a>
              </h3>
              <p className="text-center text-base text-stone-600">
                Track your anime and manga progress, discover new titles, customize your lists, and much more—all in one
                app!
              </p>

              <div className="flex flex-col items-center sm:flex-row ">
                <a
                  href="https://play.google.com/store/apps/details?id=com.revolgenx.anilib&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Play Store"
                    rel="noopener noreferrer"
                    className="inline"
                    width={175}
                  />
                </a>
                <a href="https://github.com/AniLibApp/AniLib" target="_blank" rel="noopener noreferrer">
                  <img
                    src="./github-badge.png"
                    alt="Source code on github"
                    rel="noopener noreferrer"
                    width={200}
                    className="inline"
                  />
                </a>
              </div>

              <h2>Features</h2>

              <div>
                <ul class="list-disc pl-5 text-gray-700">
                  <li>Search for anime and manga</li>
                  <li>Track your anime and manga progress</li>
                  <li>Get detailed info on characters, episodes, and studios</li>
                  <li>Use advanced filters to quickly find your preferred titles</li>
                  <li>Discover recommendations based on the media you're viewing</li>
                  <li>Create custom lists with your own rating systems</li>
                  <li>Share lists and reviews with friends</li>
                  <li>Discover various stats based on your media preferences</li>
                  <li>Enjoy theme customization</li>
                  <li>Get notified about new episodes</li>
                  <li>and much more...</li>
                </ul>
              </div>
            </div>
            <div className="my-4 w-full  lg:my-0 lg:max-w-[50%] ">
              <Slider {...carouselSettings}>
                <CarouselImage src="explore.jpg" />
                <CarouselImage src="track.jpg" />
                <CarouselImage src="season.jpg" />
                <CarouselImage src="overview.jpg" />
                <CarouselImage src="search.jpg" />
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <Wave
            fill="#0099ff"
            paused={false}
            options={{
              height: 40,
              amplitude: 20,
              speed: 0.15,
              points: 4,
            }}
          />
        </div>
      </div>

      <div className="space-x-5 p-10">
        <Link to="/privacy-policy">🔒 Privacy Policy</Link>
        <Link to="/terms-and-conditions">📋 Terms & Conditions</Link>
        <a href="https://anilist.co/terms">🔐 AniList Privacy Policy</a>
        <a href="mailto:anilib.dev@gmail.com">📧 anilib.dev@gmail.com</a>
      </div>
    </div>
  )
}

export default App
