import { useEffect } from 'react'
import { Reveal, Tween } from 'react-gsap'
import img1 from '../img/portfolio-1.jpg'
import img2 from '../img/portfolio-2.jpg'
import img3 from '../img/portfolio-3.jpg'
import img4 from '../img/portfolio-4.jpg'

const Portfolio = () => {

  const portfolio = [img1, img2, img3, img4];

  return (
    <div className="px-10 py-40 sm:py-20">
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <Reveal>
          <Tween from={{ autoAlpha: 0 }}>
            {portfolio.map((img, idx) => {
              return (
                <a className="space-y-3" href="#" key={idx}>
                  <div className="relative aspect-[4/3]">
                    <Tween from={{ scale: 1, width: 0 }} ease="expo.inOut" duration="2">
                      <img className="absolute top-0 left-0 object-cover w-full h-full" src={img} alt="image" />
                    </Tween>
                  </div>
                  <div className="space-y-1 overflow-hidden text-lg">
                    <Tween from={{ delay: 2, skewY: 7, y: 150 }} duration="1.8" ease="power4.out">
                      <h6 className="font-['Satoshi-Medium']">Pictures of the floating world</h6>
                      <p>A woodblock animation</p>
                    </Tween>
                  </div>
                </a>
              )
            })}
          </Tween>
        </Reveal>
      </div>
    </div>
  )
}

export default Portfolio;