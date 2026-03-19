import { LanguageProvider } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import SuttaList from "@/components/SuttaList";

const SearchPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <SuttaList />
      </div>
    </LanguageProvider>
  );
};

export default SearchPage;
