import React from "react";
import {Sidebar} from "@/components/layout/sidebar";

export const LayoutGrid = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return(
    <div className={`grid lg:grid-cols-[300px_1fr] h-[100vh]`}>
      <Sidebar />
      <main className={`max-h-full overflow-y-auto pt-[65px] lg:pt-4 py-4 px-6`}>
        {children}
      </main>
    </div>
  )
}
