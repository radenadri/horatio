import gsap from 'gsap';
import { useEffect } from 'react';
import { Tween } from 'react-gsap';

const Hero = () => {

  useEffect(() => {
    gsap.from('.hero-bg', 1.5, {
      width: 0,
    });
  });

  return (
    <div className="h-screen mt-[-75px] bg-[#4438FF] text-white hero-bg">
      <div className="py-[75px] px-10 h-full place-items-center grid">
        <span className="text-6xl sm:text-4xl sm:leading-normal overflow-hidden leading-snug max-w-[40ch]">
          <Tween from={{ autoAlpha: 0, delay: 3, skewY: 7, y: 350 }} duration="1.8" ease="power4.out">
            <p>
              Horatio is a creative studio that creates meaningful, lasting experiences through playful interactions and rigorous design thinking. <a className="transition-opacity ease-in-out hover:opacity-80" href="#">More about the studio ↗︎</a>
            </p>
          </Tween>
        </span>
      </div>
    </div>
  );
}

export default Hero;