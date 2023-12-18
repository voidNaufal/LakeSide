import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import coffeeBaristaImage from "../../../assets/images/coffeebarista.png";
import { headingAnimation } from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";
import "./Service.css";

const Service = () => {
  const [inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="py-20 parent bg-neutral">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Fokus & Layanan</h3>
        <h1 className="text-4xl font-semibold text-center">
          Solusi <span className="text-primary">Digital & Kreatif</span>
        </h1>
        <BottomLine />
        <br />
        <div className="flex items-center justify-center ml-90">
          <img src={coffeeBaristaImage} alt="Coffee Barista" />
        </div>

        <p className="py-7 text-center text-accent font-bold rata-kanan-kiri" style={{ fontSize: '20px' }}>
          LakeSide adalah cafe yang terletak dekat Gedung Fakultas Industri
          Kreatif ini tidak hanya menjadi tempat yang strategis untuk mahasiswa,
          tetapi juga menawarkan atmosfer yang sempurna untuk menyelesaikan
          tugas-tugas akademis. Dengan banyaknya tempat cas yang tersedia, cafe
          ini sangat mendukung kebutuhan mahasiswa akan daya baterai perangkat
          mereka. Selain itu, interior yang nyaman dan tempat duduk yang santai
          menciptakan lingkungan yang cocok untuk berkumpul bersama teman-teman
          atau bekerja secara individu. Yang membuat cafe ini benar-benar
          istimewa adalah kelezatan minuman kopi mereka yang memanjakan lidah.
          Dengan berbagai pilihan varian yang menggugah selera, mahasiswa dapat
          menikmati secangkir kopi yang nikmat sambil menyelesaikan tugas-tugas
          mereka. Sebuah tempat yang tidak hanya mendukung produktivitas, tetapi
          juga menawarkan kenikmatan kuliner bagi para pecinta kopi.
        </p>
      </motion.div>
    </div>
  );
};

export default Service;
