import EditionCard from "./EditionCard";

export default function Shelf() {
    // 에디션별 더미 컨텐츠 구성
    const topEditions = [
        { id: "renaissance", title: "The Renaissance Edition", color: "bg-stone-300" },
        { id: "horizons", title: "Horizons", color: "bg-indigo-900" },
        { id: "boring", title: "The Boring Edition", color: "bg-neutral-200/80 backdrop-blur" },
        { id: "unified", title: "UNIFIED", color: "bg-zinc-800" },
    ];

    const bottomEditions = [
        { id: "foundations", title: "FOUNDATIONS", color: "bg-blue-100" },
        { id: "imagine", title: "IMAGINE MY BUSINESS", color: "bg-slate-900" },
        { id: "built", title: "BUILT TO LAST", color: "bg-amber-400" },
        { id: "connect", title: "CONNECT TO CONSUMER", color: "bg-fuchsia-300" },
    ];

    return (
        <div className="relative w-full max-w-[1400px] flex flex-col gap-24 lg:gap-32 mt-12 px-12 perspective-[2000px]">

            {/* 윗 선반 영역 */}
            <div className="relative w-full flex justify-center pb-2">
                {/* 선반 뒤 빛번짐 (Halo) 효과 */}
                <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-white/60 blur-[60px] rounded-[100%] pointer-events-none -z-10" />

                {/* 카드 배치 컨테이너 */}
                <div className="relative z-10 flex gap-6 md:gap-8 lg:gap-12 w-full justify-center px-8 translate-y-[2px]">
                    {topEditions.map((edition, i) => (
                        <EditionCard key={edition.id} edition={edition} index={i} row="top" />
                    ))}
                </div>

                {/* 선반 밑단 디테일 (3D 느낌) */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-white rounded-full shelf-shadow z-20 
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[98%] after:h-1 after:bg-gray-200/50 after:rounded-b-full">
                </div>
            </div>

            {/* 아래 선반 영역 */}
            <div className="relative w-full flex justify-center pb-2">
                {/* 하단 선반 후광 */}
                <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-white/60 blur-[60px] rounded-[100%] pointer-events-none -z-10" />

                <div className="relative z-10 flex gap-6 md:gap-8 lg:gap-12 w-full justify-center px-8 translate-y-[2px]">
                    {bottomEditions.map((edition, i) => (
                        <EditionCard key={edition.id} edition={edition} index={i} row="bottom" />
                    ))}
                </div>

                {/* 하단 선반 디자인 */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-white rounded-full shelf-shadow z-20
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[98%] after:h-1 after:bg-gray-200/50 after:rounded-b-full">
                </div>
            </div>

        </div>
    );
}
