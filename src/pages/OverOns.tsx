import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { AboutSection } from "@/components/sections/about";

const OverOnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default OverOnsPage;