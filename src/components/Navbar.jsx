import { Tween } from 'react-gsap';

const Navbar = () => {

  return (
    <div className="px-10 min-h-[75px] flex justify-between items-center text-white text-lg relative">
        <div className="overflow-hidden">
          <Tween from={{ delay: 1, skewY: 7, y: 100 }} duration="1.8" ease="power4.out">
            <h6>Horatio</h6>
          </Tween>
        </div>

      <div className="sm:flex hidden items-center">
        <button className="flex items-center">
          <svg className="text-white stroke-white stroke-2" width="60" height="12" viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="60" y2="1" />
            <line y1="17" x2="60" y2="17" />
          </svg>
        </button>
      </div>

      <ul className="sm:hidden inline-flex gap-10 overflow-hidden">
        <Tween from={{ delay: 2, skewY: 7, y: 100 }} duration="1.8" ease="power4.out" stagger="0.3">
          <li>
            <a href="#">
              Projects
            </a>
          </li>
          <li>
            <a href="#">
              Studio
            </a>
          </li>
          <li>
            <a href="#">
              Journal
            </a>
          </li>
        </Tween>
      </ul>
    </div>
  );
}

export default Navbar;