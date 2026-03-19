import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { suttas } from "@/data/suttas";
import SuttaCard from "@/components/SuttaCard";
import HeroSection from "@/components/HeroSection";
import { Search } from "lucide-react";

const RandomSuttas = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const randomSuttas = useMemo(() => {
    const shuffled = [...suttas].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          {language === "en" ? "Discover Suttas" : "Khám Phá Kinh Điển"}
        </h2>
        <button
          onClick={() => navigate("/search")}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-heading text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Search className="h-4 w-4" />
          {language === "en" ? "Search All Suttas" : "Tìm Tất Cả Kinh"}
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {randomSuttas.map((sutta, i) => (
          <SuttaCard key={sutta.id} sutta={sutta} language={language} index={i} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-border pt-8 text-center">
        <p className="font-heading text-sm text-muted-foreground">
          {language === "en"
            ? "May all beings be happy and free from suffering."
            : "Nguyện cho tất cả chúng sinh được an lạc và thoát khổ."}
        </p>
        <p className="mt-1 font-heading text-xs text-muted-foreground/60">
          Sabbe sattā bhavantu sukhitattā
        </p>
      </footer>
    </main>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <RandomSuttas />
      </div>
    </LanguageProvider>
  );
};

export default Index;
