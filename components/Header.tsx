import { Search, VolumeX } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-start pointer-events-none">
      {/* Left Section */}
      <div className="flex flex-col gap-6 pointer-events-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M21.2 5.1L19 1.5c-.3-.4-1-.7-1.5-.7H6c-.5 0-1 .2-1.3.6L2.3 5c-.7 1.1-.3 2.7.9 3.5l8 5.4c.4.3 1.1.3 1.5 0l8-5.3c1.2-.8 1.6-2.5.5-3.5zm-5 4.3L9.6 14v1l3 2.2 3.6-2.3v-5.5z"/>
            </svg>
            Shopify Editions
          </Link>
          
          <button className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity">
            Search
            <Search className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm font-medium text-black/60 max-w-[200px] leading-relaxed">
          Everything new across Shopify.<br/>
          Every six months.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-start gap-6 pointer-events-auto">
        <div className="flex items-center gap-6 pt-1">
          <Link href="#" className="text-sm font-semibold hover:opacity-70 transition-opacity">
            Shopify.com
          </Link>
          
          <Link 
            href="#" 
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
          >
            Start for free
          </Link>
        </div>

        <button 
          className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors shrink-0"
          aria-label="Mute sound"
        >
          <VolumeX className="w-5 h-5 text-black" />
        </button>
      </div>
    </header>
  );
}
