import type { ReactNode } from "react";
import { Header } from "./header";

export function AppLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col bg-[#f6f7f9]"><Header />{children}<footer className="flex min-h-[55px] items-center justify-end gap-2 bg-white px-[5.55%] text-[10px] text-[#a3a6ac] max-sm:justify-center"><span className="text-[9px] font-bold text-[#55b8a7]">TMDB</span><span>This product uses the TMDB API but is not endorsed or certified by TMDB.</span></footer></div>;
}
