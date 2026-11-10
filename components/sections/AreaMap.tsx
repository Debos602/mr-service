"use client";

import dynamic from "next/dynamic";

/** Leaflet touches `window`, so the map only renders in the browser. */
export const AreaMap = dynamic(() => import("./AreaMapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-faint">
      Loading Live Map...
    </div>
  ),
});
