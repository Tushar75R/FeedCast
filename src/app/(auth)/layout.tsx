import { BackgroundBeams } from "@/components/ui/background-beams";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}
      <BackgroundBeams />
    </div>
  );
}
