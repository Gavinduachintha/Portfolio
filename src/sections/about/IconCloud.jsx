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

export default function IconCloud({ size = "normal" }) {
  const iconRefs = useRef([]);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Size configurations
  const sizeConfig = {
    normal: {
      radius: 150,
      container: "w-[350px] h-[350px]",
      wrapper: "h-[400px]",
      iconSize: "w-10 h-10",
    },
    large: {
      radius: 220,
      container: "w-[500px] h-[500px]",
      wrapper: "h-[550px]",
      iconSize: "w-11 h-11",
    },
    "extra-large": {
      radius: 320,
      container: "w-[700px] h-[700px]",
      wrapper: "h-[750px]",
      iconSize: "w-14 h-14",
    },
  };

  const config = sizeConfig[size] || sizeConfig.normal;
  const radius = config.radius;
  const baseSpeed = 0.0003;
  const mouseInfluence = 0.00012;

  useEffect(() => {
    const items = iconRefs.current;
    const container = containerRef.current;

    // Initial sphere positioning
    items.forEach((item, i) => {
      const phi = Math.acos(-1 + (2 * i) / items.length);
      const theta = Math.sqrt(items.length * Math.PI) * phi;

      item.x = radius * Math.cos(theta) * Math.sin(phi);
      item.y = radius * Math.sin(theta) * Math.sin(phi);
      item.z = radius * Math.cos(phi);
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse offset from center (-1 to 1 range)
      mouseRef.current.x = (e.clientX - centerX) / (rect.width / 2);
      mouseRef.current.y = (e.clientY - centerY) / (rect.height / 2);
    };

    // Reset mouse position when leaving container
    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      // Calculate rotation speeds based on mouse position
      const speedX = baseSpeed + mouseRef.current.y * mouseInfluence;
      const speedY = baseSpeed + mouseRef.current.x * mouseInfluence;

      items.forEach((item) => {
        rotateX(item, speedX);
        rotateY(item, speedY);

        const scale = (item.z + radius) / (2 * radius);
        item.el.style.transform = `
          translate3d(${item.x}px, ${item.y}px, ${item.z}px)
          scale(${scale})
        `;
        item.el.style.opacity = scale;
      });

      requestAnimationFrame(animate);
    };

    const rotateX = (item, speed) => {
      const y = item.y * Math.cos(speed) - item.z * Math.sin(speed);
      const z = item.y * Math.sin(speed) + item.z * Math.cos(speed);
      item.y = y;
      item.z = z;
    };

    const rotateY = (item, speed) => {
      const x = item.x * Math.cos(speed) + item.z * Math.sin(speed);
      const z = -item.x * Math.sin(speed) + item.z * Math.cos(speed);
      item.x = x;
      item.z = z;
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [radius]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center w-full ${config.wrapper} overflow-hidden`}
    >
      {/* Gradient glow effect behind the cloud */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] h-[80%]  rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60%] h-[60%]  rounded-full blur-2xl" />
      </div>

      {/* Title */}
      {size === "normal" && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <h4 className="text-lg font-bold text-white/80 tracking-wide">
            My Tech Stack
          </h4>
          <div className="h-0.5 w-12 mx-auto mt-1 " />
        </div>
      )}

      <div className={`relative ${config.container} [perspective:1200px]`}>
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
            {/* Glass morphism icon background */}
            <div className="relative p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl group-hover:shadow-2xl group-hover:border-white/30 group-hover:bg-white/15 transition-all duration-300">
              <img
                src={icon}
                alt={name}
                className={`${config.iconSize} object-contain filter drop-shadow-lg`}
              />

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10 scale-90 group-hover:scale-100">
                <div className="bg-neutral-900/95 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap border border-white/10">
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
