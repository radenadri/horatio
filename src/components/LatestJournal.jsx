import { Reveal, Tween } from "react-gsap"

const LatestJournal = () => {
  return (
    <div className="bg-[#4438FF] py-32 px-10">
      <div className="max-w-[50ch] mx-auto text-white text-center flex flex-col space-y-6">
          <div className="overflow-hidden">
            <Reveal>
              <Tween from={{ autoAlpha: 0 }} duration="1.8" ease="power4.out">
                <h2 className="font-['Satoshi-Medium'] text-xl">Latest Journal</h2>
                <a className="font-['Satoshi-Bold'] leading-snug text-6xl hover:opacity-80 transition-opacity ease-in-out" href="#">
                  The Art Guide for Non Artist
                </a>
              </Tween>
            </Reveal>
          </div>
      </div>
    </div>
  )
}

export default LatestJournal;