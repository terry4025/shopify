export default function FooterTimeline() {
    const timelineData = [
        { year: 2026, season: "Winter", edition: "Renaissance", active: true },
        { year: 2025, season: "Summer", edition: "Horizons", active: false },
        { year: 2025, season: "Winter", edition: "Boring", active: false },
        { year: 2024, season: "Summer", edition: "Unified", active: false },
        { year: 2024, season: "Winter", edition: "Foundations", active: false },
        { year: 2023, season: "Summer", edition: "Imagine My Business", active: false },
        { year: 2023, season: "Winter", edition: "Built to Last", active: false },
        { year: 2022, season: "Summer", edition: "Connect to Consumer", active: false }
    ];

    return (
        <footer className="fixed bottom-0 left-0 w-full z-10 px-8 pb-6 hidden md:flex justify-center items-end pointer-events-none">
            <div className="flex items-center gap-12 font-medium text-[11px] uppercase tracking-widest pointer-events-auto relative">
                <div className="absolute -top-2 left-0 right-0 h-[1px] bg-black/10" />
                {timelineData.map((item) => (
                    <button
                        key={`${item.year}-${item.season}`}
                        className={`flex flex-col text-left transition-colors relative pt-4 hover:text-black
              ${item.active ? "text-black" : "text-black/30"}
            `}
                    >
                        <span className="mb-0.5">{item.year}</span>
                        <span className="mb-0.5">{item.season}</span>
                        <span className="font-bold">{item.edition}</span>

                        {/* 활성 아이템 표시 라인 */}
                        {item.active && (
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-black -mt-[1px]" />
                        )}
                    </button>
                ))}
            </div>
        </footer>
    );
}
