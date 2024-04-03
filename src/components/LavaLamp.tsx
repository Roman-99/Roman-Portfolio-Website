import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LavaLamp() {
  useGSAP(() => {
    gsap.to("#blob1", { rotation: "+=360", duration: 5 });
  });

  return (
    <div
      id="blob"
      className="blob position-fixed w-100 h-100"
      style={{ zIndex: -1 }}
    >
      <svg
        id="svg-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
      >
        <defs>
          <linearGradient id="blob1-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="#FF8000FF" offset="0%"></stop>
            <stop id="stop2" stop-color="#CC00FFFF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          id="blob1"
          fill="url(#blob1-gradient)"
          d="M25.1,-30.1C32.9,-23.3,39.9,-15.8,42.2,-6.9C44.4,2,41.9,12.4,36.3,19.9C30.7,27.4,22,32,13.4,34C4.7,35.9,-3.9,35.1,-12.1,32.4C-20.2,29.8,-28,25.2,-34,18C-40.1,10.9,-44.4,1.1,-41.8,-6.2C-39.1,-13.6,-29.4,-18.5,-21.3,-25.3C-13.1,-32,-6.6,-40.6,1,-41.8C8.6,-43,17.2,-36.9,25.1,-30.1Z"
          transform="translate(0 0)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

        <path
          id="blob2"
          fill="url(#blob1-gradient)"
          d="M26.4,-14.8C32.1,-5.5,33,7,27.8,17.9C22.6,28.7,11.3,37.8,0.4,37.6C-10.6,37.4,-21.2,27.9,-26.8,16.8C-32.4,5.7,-33.1,-6.9,-27.8,-16C-22.5,-25.2,-11.2,-30.9,-0.4,-30.7C10.4,-30.4,20.8,-24.2,26.4,-14.8Z"
          transform="translate(50 0)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

        <path
          id="blob3"
          fill="url(#blob1-gradient)"
          d="M27.6,-12.8C34.7,-3.5,38.8,10.6,33.7,19.5C28.6,28.4,14.3,32,0.5,31.7C-13.3,31.4,-26.6,27.2,-31.2,18.7C-35.8,10.1,-31.6,-2.8,-24.9,-11.8C-18.2,-20.8,-9.1,-25.8,0.6,-26.1C10.2,-26.4,20.4,-22.1,27.6,-12.8Z"
          transform="translate(100 0)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob4"
          fill="url(#blob1-gradient)"
          d="M20.2,-12.1C23.5,-6,21.6,2.7,17.4,9.4C13.1,16.1,6.6,20.9,-1.4,21.7C-9.4,22.5,-18.8,19.4,-23.6,12.4C-28.4,5.4,-28.6,-5.6,-23.8,-12.6C-19.1,-19.6,-9.6,-22.6,-0.6,-22.3C8.5,-22,16.9,-18.3,20.2,-12.1Z"
          transform="translate(150 0)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob5"
          fill="url(#blob1-gradient)"
          d="M16.3,-1.7C16.3,8.3,8.2,16.6,-1.2,16.6C-10.6,16.6,-21.1,8.3,-21.1,-1.7C-21.1,-11.8,-10.6,-23.6,-1.2,-23.6C8.2,-23.6,16.3,-11.8,16.3,-1.7Z"
          transform="translate(200 0)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob6"
          fill="url(#blob1-gradient)"
          d="M23,-11.1C30,-1.2,36,11.6,32,21.1C28,30.6,14,36.9,0.4,36.7C-13.2,36.5,-26.4,29.7,-33,18.7C-39.5,7.7,-39.4,-7.5,-32.8,-17.2C-26.2,-26.9,-13.1,-31.2,-2.5,-29.7C8,-28.2,16,-21,23,-11.1Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob7"
          fill="url(#blob1-gradient)"
          d="M21.5,-14.7C26.4,-3.8,28.1,6.7,24,14.4C19.8,22.2,9.9,27.2,0.9,26.6C-8,26.1,-16.1,20,-20.2,12.2C-24.3,4.5,-24.6,-4.9,-20.6,-15.3C-16.5,-25.7,-8.3,-37.1,0,-37.1C8.3,-37.1,16.5,-25.7,21.5,-14.7Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob8"
          fill="url(#blob1-gradient)"
          d="M23,-14.5C28.5,-3.7,30.8,7.7,26.4,16.9C22,26.2,11,33.3,1.5,32.4C-7.9,31.6,-15.9,22.7,-20.3,13.3C-24.7,4,-25.7,-5.7,-21.7,-15.5C-17.8,-25.4,-8.9,-35.4,-0.1,-35.3C8.7,-35.3,17.5,-25.2,23,-14.5Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob9"
          fill="url(#blob1-gradient)"
          d="M10.7,2.5C6.8,13.1,-8.5,13.4,-12.2,3C-15.9,-7.3,-7.9,-28.4,-0.3,-28.5C7.3,-28.7,14.7,-8,10.7,2.5Z"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob10"
          fill="url(#blob1-gradient)"
          d="M10.7,2.5C6.8,13.1,-8.5,13.4,-12.2,3C-15.9,-7.3,-7.9,-28.4,-0.3,-28.5C7.3,-28.7,14.7,-8,10.7,2.5Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob11"
          fill="url(#blob1-gradient)"
          d="M24.8,-1.4C24.8,13.1,12.4,26.3,-0.1,26.3C-12.6,26.3,-25.1,13.1,-25.1,-1.4C-25.1,-16,-12.6,-32,-0.1,-32C12.4,-32,24.8,-16,24.8,-1.4Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />

<path
          id="blob12"
          fill="url(#blob1-gradient)"
          d="M20.2,-13.7C25.3,-3,27.7,7.2,23.9,17.1C20.1,27.1,10,36.8,-1.2,37.5C-12.4,38.2,-24.9,29.9,-31.7,18.2C-38.5,6.5,-39.7,-8.6,-33.5,-20C-27.3,-31.4,-13.7,-39.2,-3,-37.4C7.6,-35.7,15.2,-24.4,20.2,-13.7Z"
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: "all 0.3s ease 0s;" }}
        />
      </svg>
    </div>
  );
}
