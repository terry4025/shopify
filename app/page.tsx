import Header from "@/components/Header";
import FooterTimeline from "@/components/FooterTimeline";
import Shelf from "@/components/Shelf";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--background)]">
      {/* 상단 네비게이션 */}
      <Header />

      {/* 중앙 선반 시스템 영역 */}
      <section className="absolute inset-0 flex flex-col items-center justify-center pt-20 pb-32">
        <div className="w-full max-w-[1200px] h-full flex flex-col justify-center items-center">
          <Shelf />
        </div>
      </section>

      {/* 하단 타임라인 */}
      <FooterTimeline />
    </main>
  );
}
