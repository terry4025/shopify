"use client";

import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useState } from "react";

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

    // 선반에 기대어 있을 때의 기본 기울기 값
    const defaultRotateX = -8;
    const defaultRotateY = isOdd ? -2 : 2;
    const defaultRotateZ = isOdd ? 0.5 : -0.5;

    const [isHovered, setIsHovered] = useState(false);

    // 부드러운 애니메이션을 위한 스프링 설정
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };

    const rotateX = useSpring(defaultRotateX, springConfig);
    const rotateY = useSpring(defaultRotateY, springConfig);
    const rotateZ = useSpring(defaultRotateZ, springConfig);
    const yPos = useSpring(0, springConfig);
    const scale = useSpring(1, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isHovered) return;
        const rect = e.currentTarget.getBoundingClientRect();

        // 카드 중심을 원점(0,0)으로 한 마우스 위치를 퍼센테이지 단위([-0.5, 0.5])로 계산
        const xPct = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const yPct = (e.clientY - rect.top - rect.height / 2) / rect.height;

        // 마우스가 움직이는 방향에 맞춰 카드가 3D로 기울어지게 함 (최대 16도 기울임)
        rotateX.set(-yPct * 16);
        rotateY.set(xPct * 16);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        // 카드 들어올리기
        yPos.set(-25);
        scale.set(1.05);
        rotateZ.set(0);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // 카드 내려놓기 (원래 각도와 위치로)
        yPos.set(0);
        scale.set(1);
        rotateX.set(defaultRotateX);
        rotateY.set(defaultRotateY);
        rotateZ.set(defaultRotateZ);
    };

    return (
        <motion.div
            className="relative flex-shrink-0 cursor-pointer group"
            style={{
                width: "clamp(160px, 22vw, 300px)",
                aspectRatio: "1 / 1",
                perspective: "1200px", // 3D 회전을 위한 투시점 지정
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: row === "top" ? index * 0.08 : index * 0.08 + 0.25,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={`w-full h-full rounded-md overflow-hidden relative ${edition.color}`}
                style={{
                    rotateX,
                    rotateY,
                    rotateZ,
                    y: yPos,
                    scale,
                    transformOrigin: "bottom center", // 카드의 아래쪽을 축으로 회전하도록
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    boxShadow: isHovered
                        // 호버 시 공중에 뜬 깊은 그림자
                        ? "0 40px 60px -15px rgba(0,0,0,0.6), 0 20px 30px -5px rgba(0,0,0,0.3)"
                        // 바닥(선반)에 놓였을 때의 그림자
                        : "0 20px 40px -15px rgba(0,0,0,0.55), 0 10px 20px -5px rgba(0,0,0,0.3)",
                }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={edition.image}
                    alt={edition.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                    sizes="(max-width: 768px) 160px, (max-width: 1200px) 250px, 300px"
                />

                {/* 입체감을 살리는 빛 반사 오버레이 효과 */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    animate={{
                        background: isHovered
                            ? "linear-gradient(105deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.15) 100%)"
                            : "linear-gradient(105deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.3) 100%)",
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </motion.div>
    );
}
