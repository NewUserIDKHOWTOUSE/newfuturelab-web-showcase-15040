import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ContactSection } from "@/components/sections/contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;