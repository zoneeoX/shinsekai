import React, { useEffect, useState } from "react";
import { MdFavorite, MdHome } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Downbar = () => {
  const [down, setDown] = useState(0);
  const [nav, setNav] = useState(true);
  const navigate = useNavigate()

  const scrollDetect = (e) => {
    const window = e.currentTarget;
    if (down > window.scrollY) {
      setNav(true);
    } else if (down < window.scrollY) {
      setNav(false);
    }
    setDown(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => scrollDetect(e));

    return () => {
      window.removeEventListener("scroll", (e) => scrollDetect(e));
    };
  }, [down]);

  const routes = [
    {
      name: "Home",
      params: "/",
      icon: <MdHome />,
      color: "text-white",
    },
    {
      name: "Favorites",
      params: "/favorites",
      icon: <MdFavorite />,
      color: "text-red-400",
    },
  ];

  return (
    <>
    <AnimatePresence>
        {nav && (
    <motion.nav
      className="fixed bottom-[0vw] w-screen h-fit bg-blue-700 filter backdrop-blur-sm z-50 py-[1vw]"
      initial={{ y: "30vw" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: "30vw" }}
    >
      <ul className="flex justify-center gap-4 mt-2 items-center">
        {routes.map(({ name, icon, color, params }, i) => (
          <li
            className={`font-josef md:text-2xl text-lg ${color} cursor-pointer flex flex-col justify-center items-center hover:bg-white/10 px-4 duration-200`}
            key={i}
            onClick={() => navigate(params)}
          >
            {icon} {name}
          </li>
        ))}
      </ul>
    </motion.nav>

        )}
  
  </AnimatePresence>
  </>
)};

export default Downbar;
