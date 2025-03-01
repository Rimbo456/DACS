import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        // Cuộn xuống
        setShowNavbar(false);
      } else {
        // Cuộn lên
        setShowNavbar(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Đảm bảo lastScrollTop không âm
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: showNavbar ? 0 : -60 }} // Navbar sẽ di chuyển lên hoặc xuống
      transition={{ duration: 0.3 }}  // Thay đổi thời gian và hiệu ứng chuyển động nếu cần
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div style={{ padding: "10px 20px" }}>
        <h1>Navbar</h1>
      </div>
    </motion.div>
  );
};

export default Navbar;
