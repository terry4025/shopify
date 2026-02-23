"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Edition {
    id: string;
    title: string;
    color: string;
    image: string;
}

interface EditionCardProps {
    edition: Edition;
    index: number;
    row: "top" | "bottom";
}

export default function EditionCard({ edition, index, row }: EditionCardProps) {
    const isOdd = index % 2 !== 0;
    const rotationY = isOdd ? -2 : 2;
    const rotationZ = isOdd ? 0.5 : -0.5;

    return (
        <motion.div
            className="relative flex-shrink-0 cursor-pointer group"
            style={{
                width: "clamp(160px, 22vw, 300px)",
                aspectRatio: "1 / 1",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: row === "top" ? index * 0.08 : index * 0.08 + 0.25,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -14,
                scale: 1.03,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0,
                transition: { duration: 0.35, ease: "easeOut" },
            }}
        >
            {/* 카드 표면 */}
            <div
                className={`w-full h-full rounded-sm overflow-hidden relative ${edition.color}`}
                style={{
                    boxShadow: "0 40px 60px -15px rgba(0,0,0,0.55), 0 10px 20px -5px rgba(0,0,0,0.3)",
                    transform: `rotateX(-8deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`,
                    transformOrigin: "bottom center",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.35s ease",
                }}
            >
                {/* 생성된 이미지 */}
                <Image
                    src={edition.image}
                    alt={edition.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                />

                {/* 반사광 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/15 pointer-events-none z-10" />
            </div>
        </motion.div>
    );
}
