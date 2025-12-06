// "use client"

import "./globals.css";
import { AppProvider } from "../context/cont"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
