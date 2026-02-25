import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { suttas } from "@/data/suttas";
import { getSuttaDetail } from "@/data/suttaDetails";
import LanguageToggle from "./LanguageToggle";
import { ArrowLeft, BookOpen } from "lucide-react";

interface Props {
  suttaId: string;
}

const SuttaDetailView = ({ suttaId }: Props) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const sutta = suttas.find((s) => s.id === suttaId);
  const detail = getSuttaDetail(suttaId);

  if (!sutta) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Sutta not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-heading">
            {language === "en" ? "Back" : "Quay lại"}
          </span>
        </button>
        <LanguageToggle />
      </div>

      {/* Sutta meta */}
      <div className="mb-8">
        <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {sutta.collection}
        </span>
        <h1 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {sutta.title[language]}
        </h1>
        <p className="mt-1 font-heading text-lg italic text-muted-foreground">
          {sutta.paliTitle}
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-foreground/80">
          {sutta.summary[language]}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-medium text-primary">✦</span>
          <span className="font-body text-sm font-medium text-primary">
            {sutta.keyTeaching[language]}
          </span>
        </div>
      </div>

      {/* Detailed sections */}
      {detail ? (
        <div className="space-y-8">
          {detail.sections.map((section, i) => (
            <section
              key={i}
              className="rounded-lg border border-border bg-card p-6 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                {section.emoji} {section.title[language]}
              </h2>
              <div className="font-body text-sm leading-relaxed text-foreground/85 whitespace-pre-line">
                {renderMarkdownLite(section.content[language])}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-10 text-center">
          <BookOpen className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
          <p className="font-body text-sm text-muted-foreground">
            {language === "en"
              ? "Detailed summary coming soon."
              : "Bản tóm tắt chi tiết sẽ sớm được cập nhật."}
          </p>
        </div>
      )}

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
    </div>
  );
};

/** Minimal bold markdown renderer */
function renderMarkdownLite(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default SuttaDetailView;
