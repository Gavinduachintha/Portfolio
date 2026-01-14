import { useEffect, useRef } from "react";

const icons = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Arduino",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  {
    name: "Raspberry Pi",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  },
];

export default function IconCloud() {
  const iconRefs = useRef([]);

  const radius = 150;
  const speed = 0.001;

  useEffect(() => {
    const items = iconRefs.current;

    // Initial sphere positioning
    items.forEach((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / items.length);
      const theta = Math.sqrt(items.length * Math.PI) * phi;

      item.x = radius * Math.cos(theta) * Math.sin(phi);
      item.y = radius * Math.sin(theta) * Math.sin(phi);
      item.z = radius * Math.cos(phi);
    });

    const animate = () => {
      items.forEach((item) => {
        rotateX(item);
        rotateY(item);

        const scale = (item.z + radius) / (2 * radius);
        item.el.style.transform = `
          translate3d(${item.x}px, ${item.y}px, ${item.z}px)
          scale(${scale})
        `;
        item.el.style.opacity = scale;
      });

      requestAnimationFrame(animate);
    };

    const rotateX = (item) => {
      const y = item.y * Math.cos(speed) - item.z * Math.sin(speed);
      const z = item.y * Math.sin(speed) + item.z * Math.cos(speed);
      item.y = y;
      item.z = z;
    };

    const rotateY = (item) => {
      const x = item.x * Math.cos(speed) + item.z * Math.sin(speed);
      const z = -item.x * Math.sin(speed) + item.z * Math.cos(speed);
      item.x = x;
      item.z = z;
    };

    animate();
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
      <div className="relative w-[350px] h-[350px] [perspective:1200px]">
        {icons.map(({ name, icon }, i) => (
          <div
            key={i}
            ref={(el) =>
              (iconRefs.current[i] = {
                el,
                x: 0,
                y: 0,
                z: 0,
              })
            }
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              cursor-pointer
              transition-all
              duration-200
              will-change-transform
              hover:scale-125
              group
            "
          >
            <div className="relative p-3 rounded-xl  border-white/20 shadow-xl group-hover:shadow-2xl group-hover:border-white/30 group-hover:bg-white/20 transition-all duration-200">
              <img
                src={icon}
                alt={name}
                className="w-10 h-10 object-contain filter drop-shadow-lg"
              />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-neutral-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                  {name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
                    <div className="border-4 border-transparent border-t-neutral-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
