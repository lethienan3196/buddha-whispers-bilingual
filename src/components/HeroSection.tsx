import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lotus flower on calm water"
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-12">
        <div className="flex items-center justify-between mb-12">
          <span className="font-heading text-lg font-semibold text-primary tracking-wide">
            ☸ Sutta Library
          </span>
          <LanguageToggle />
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {language === "en" ? (
            <>
              The Buddha's <br />
              <span className="text-gradient-gold">Essential Teachings</span>
            </>
          ) : (
            <>
              Những Lời Dạy <br />
              <span className="text-gradient-gold">Thiết Yếu Của Đức Phật</span>
            </>
          )}
        </h1>
        <p className="mt-4 max-w-2xl font-body text-base text-muted-foreground sm:text-lg">
          {language === "en"
            ? "Explore summaries of key suttas from the Pāli Canon — the oldest recorded teachings of the Buddha."
            : "Khám phá tóm tắt các bài kinh quan trọng từ Kinh tạng Pāli — những lời dạy lâu đời nhất được ghi chép của Đức Phật."}
        </p>
        <button
          onClick={() => navigate("/keywords")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 font-heading text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
        >
          <BookOpen className="h-4 w-4" />
          {language === "en" ? "Learn Key Terms" : "Học Thuật Ngữ"}
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
