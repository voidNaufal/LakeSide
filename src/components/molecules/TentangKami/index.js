import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import logolakeside from "../../../assets/images/logolakeside.png";
import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";

import "./TentangKami.css";
import {
    sectionBodyAnimation,
} from "../../../hooks/useAnimation"

const Tentang = () => {
    const [ref, inView] = useInView();
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
        <div className="pt-2 my-16 parent">
            <div className="">
                <motion.div
                    className="mb-12"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >   
                    <div className="flex items-center justify-center">
                        <img src={logolakeside} alt="logolakeside 1" />
                    </div>
                        
                        
                    <h3 className="text-center text-accent">#TasteOfResearch</h3>
                    <h1 className="text-4xl font-semibold text-center drop-shadow-md text-warna-khusus">
                        Tentang Kami
                    </h1>
                    
                    {/* <BottomLine /> */}
                </motion.div>
                <div className="flex justify-between px-5 pt-4 text-center sm:px-20">
                    <motion.div
                        className="flex-1"
                        ref={ref}
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={sectionBodyAnimation}
                    >
                        <p className="font-medium text-accent rata-kanan-kiri mx-4">
                        Di jantung kampus Telkom University, LakeSide berdiri sebagai saksi perjalanan yang dimulai dari ruang eksperimen CAATISS-RA, sebuah laboratorium praktek yang telah menjadi tempat kelahiran cita rasa unik kami.
                         Dari perpaduan kreativitas dan dedikasi, LakeSide tumbuh menjadi coffee shop yang menjadi stempel kenangan manis bagi setiap pengunjungnya.LakeSide, dengan bangga, diakui sebagai tempat dengan produk minuman terenak di seluruh kampus Telkom University. Kami tidak hanya menyajikan kopi, tetapi juga memberikan pengalaman yang menggoda indera dan melibatkan setiap penikmatnya. Dengan biji kopi pilihan dan metode penyeduhan yang teliti, kami berkomitmen untuk mempersembahkan rasa kopi yang tak tertandingi.
                         Kualitas adalah kunci dalam setiap cangkir kopi yang kami sajikan.
                            </p>
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        ref={ref}
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={sectionBodyAnimation}
                    >
                        <p className="font-medium text-accent rata-kanan-kiri mx-4">
                         Kami bekerja erat dengan para petani kopi terbaik untuk memastikan setiap biji kopi yang kami gunakan adalah yang terbaik. Selain itu, kami berkomitmen untuk menjalankan bisnis dengan peduli terhadap lingkungan, memastikan bahwa setiap langkah kami mendukung keberlanjutan.
                        LakeSide bukan hanya tentang kopi; kami adalah tempat di mana komunitas berkumpul. Dengan desain interior yang nyaman dan ramah, kami menciptakan lingkungan yang mengundang untuk pertemuan santai, acara komunitas, atau hanya sekedar bersantai dan menikmati secangkir kopi di antara teman-teman.
                        Bergabunglah dengan kami di LakeSide untuk merasakan lebih dari sekadar kopi. Kami mengundang Anda untuk menyelami cerita kami, menikmati setiap sajian, dan merasakan hangatnya komunitas yang kami bangun. Terima kasih telah menjadi bagian dari perjalanan kopi kami di Telkom University!
                        </p>
                    </motion.div>
                    </div>

            </div>
        </div>
    );
};

export default Tentang;
