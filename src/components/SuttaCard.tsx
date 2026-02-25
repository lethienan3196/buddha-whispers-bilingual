import { useNavigate } from "react-router-dom";
import type { Sutta, Language } from "@/data/suttas";

interface SuttaCardProps {
  sutta: Sutta;
  language: Language;
  index: number;
}

const SuttaCard = ({ sutta, language, index }: SuttaCardProps) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/sutta/${sutta.id}`)}
      className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg animate-fade-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {sutta.collection}
        </span>
        <span className="font-body text-xs text-muted-foreground">
          {sutta.id.toUpperCase()}
        </span>
      </div>

      <h3 className="mb-1 font-heading text-lg font-semibold text-foreground leading-snug">
        {sutta.title[language]}
      </h3>
      <p className="mb-3 font-heading text-sm italic text-muted-foreground">
        {sutta.paliTitle}
      </p>

      <p className="mb-4 font-body text-sm leading-relaxed text-foreground/80">
        {sutta.summary[language]}
      </p>

      <div className="flex items-center gap-2 border-t border-border pt-3">
        <span className="text-xs font-medium text-primary">✦</span>
        <span className="font-body text-xs font-medium text-primary">
          {sutta.keyTeaching[language]}
        </span>
      </div>
    </article>
  );
};

export default SuttaCard;
