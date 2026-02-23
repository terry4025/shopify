import EditionCard from "./EditionCard";

export default function Shelf() {
    const topEditions = [
        { id: "renaissance", title: "The Renaissance Edition", color: "bg-stone-800", image: "/edition_renaissance.png" },
        { id: "horizons", title: "Horizons", color: "bg-indigo-900", image: "/edition_horizons.png" },
        { id: "boring", title: "The Boring Edition", color: "bg-neutral-300", image: "/edition_boring.png" },
        { id: "unified", title: "UNIFIED", color: "bg-zinc-900", image: "/edition_unified.png" },
    ];

    const bottomEditions = [
        { id: "foundations", title: "FOUNDATIONS", color: "bg-blue-100", image: "/edition_foundations.png" },
        { id: "imagine", title: "IMAGINE MY BUSINESS", color: "bg-slate-900", image: "/edition_imagine.png" },
        { id: "built", title: "BUILT TO LAST", color: "bg-amber-400", image: "/edition_built.png" },
        { id: "connect", title: "CONNECT TO CONSUMER", color: "bg-fuchsia-300", image: "/edition_connect.png" },
    ];

    return (
        <div className="relative w-full max-w-[1400px] flex flex-col gap-24 lg:gap-32 mt-12 px-12" style={{ perspective: "2000px" }}>

            {/* 윗 선반 영역 */}
            <div className="relative w-full flex justify-center pb-2">
                {/* 선반 뒤 빛번짐 (Halo) 효과 */}
                <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-white/60 blur-[60px] rounded-[100%] pointer-events-none -z-10" />

                {/* 카드 배치 컨테이너 */}
                <div className="relative z-10 flex gap-6 md:gap-8 lg:gap-10 w-full justify-center px-8 translate-y-[2px]">
                    {topEditions.map((edition, i) => (
                        <EditionCard key={edition.id} edition={edition} index={i} row="top" />
                    ))}
                </div>

                {/* 선반 밑단 (3D 느낌) */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-white rounded-full z-20"
                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)" }}>
                </div>
            </div>

            {/* 아래 선반 영역 */}
            <div className="relative w-full flex justify-center pb-2">
                {/* 하단 선반 후광 */}
                <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-white/60 blur-[60px] rounded-[100%] pointer-events-none -z-10" />

                <div className="relative z-10 flex gap-6 md:gap-8 lg:gap-10 w-full justify-center px-8 translate-y-[2px]">
                    {bottomEditions.map((edition, i) => (
                        <EditionCard key={edition.id} edition={edition} index={i} row="bottom" />
                    ))}
                </div>

                {/* 하단 선반 디자인 */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-white rounded-full z-20"
                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.1)" }}>
                </div>
            </div>

        </div>
    );
}
