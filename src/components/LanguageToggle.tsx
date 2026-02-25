import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
      <span className="font-heading text-base tracking-wide">
        {language === "en" ? "Tiếng Việt" : "English"}
      </span>
    </button>
  );
};

export default LanguageToggle;
