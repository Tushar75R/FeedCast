import { NavbarDemo } from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex w-screen bg-black flex-col overflow-hidden">
      <AuroraBackground>
        <NavbarDemo />
        <div className="mt-28 w-full flex justify-center absolute z-10">
          {children}
        </div>
      </AuroraBackground>
    </div>
  );
}
