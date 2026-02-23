"use client";

import { motion } from "framer-motion";

interface Edition {
    id: string;
    title: string;
    color: string;
}

interface EditionCardProps {
    edition: Edition;
    index: number;
    row: "top" | "bottom";
}

export default function EditionCard({ edition, index, row }: EditionCardProps) {
    // 인덱스 마다 번갈아가며 미세한 기울기(회전) 주기 (현실감)
    const isOdd = index % 2 !== 0;
    const rotationY = isOdd ? "-2deg" : "2deg";
    const rotationZ = isOdd ? "0.5deg" : "-0.5deg";

    return (
        <motion.div
            className="relative w-[340px] aspect-square flex-shrink-0 cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: row === "top" ? index * 0.1 : (index * 0.1) + 0.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
                y: -15,
                scale: 1.02,
                rotateX: "0deg", // 호버 시 정면을 향하도록
                rotateY: "0deg",
                rotateZ: "0deg",
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            style={{
                transformPerspective: 1000,
                // 선반에 기대어 있는 각도 (-10deg) + 좌우 미세 비틀림
                rotateX: "-8deg",
                rotateY: rotationY,
                rotateZ: rotationZ,
                transformOrigin: "bottom center"
            }}
        >
            {/* 카드 표면 (더미 컬러 / 차후 이미지 교체 가능) */}
            <div
                className={`w-full h-full rounded-sm shadow-[0_30px_50px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 text-center border-[0.5px] border-white/20 ${edition.color} overflow-hidden transition-all duration-500`}
            >
                {/* 카드 좌우측 반사광 (글래스 효과 느낌) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20 pointer-events-none" />

                {/* 임시 텍스트 (이미지가 없을 때만 보임) */}
                <h3 className="text-2xl font-black text-white mix-blend-overlay tracking-tight z-10 drop-shadow-md">
                    {edition.title}
                </h3>
            </div>
        </motion.div>
    );
}
