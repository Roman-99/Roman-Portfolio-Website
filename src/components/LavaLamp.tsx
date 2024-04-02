import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LavaLamp() {
  useGSAP(() => {
    gsap.to('#blob1', { rotation: '+=360', duration: 10 });
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
          transform="translate(100 100)"
          stroke-width="0"
          style={{ transition: 'all 0.3s ease 0s;' }}
        />
      </svg>
    </div>
  );
}
