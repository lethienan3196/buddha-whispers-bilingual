import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { keywords } from "@/data/keywords";
import { suttas } from "@/data/suttas";
import LanguageToggle from "./LanguageToggle";
import { ArrowLeft, Search, BookOpen, Lightbulb } from "lucide-react";

const KeywordsView = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return keywords;
    return keywords.filter(
      (k) =>
        k.term[language].toLowerCase().includes(q) ||
        k.pali.toLowerCase().includes(q) ||
        k.definition[language].toLowerCase().includes(q)
    );
  }, [search, language]);

  const selected = selectedId ? keywords.find((k) => k.id === selectedId) : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
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

      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {language === "en" ? "Key Buddhist Terms" : "Thuật Ngữ Phật Học"}
        </h1>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          {language === "en"
            ? "Explore essential Pāli terms with simple analogies"
            : "Khám phá các thuật ngữ Pāli thiết yếu với những ví dụ dễ hiểu"}
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={
            language === "en" ? "Search terms..." : "Tìm thuật ngữ..."
          }
          className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Keywords grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((keyword, i) => (
          <button
            key={keyword.id}
            onClick={() =>
              setSelectedId(selectedId === keyword.id ? null : keyword.id)
            }
            className={`group rounded-lg border p-5 text-left transition-all animate-fade-in ${
              selectedId === keyword.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
            }`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-2xl">{keyword.emoji}</span>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {keyword.term[language]}
                </h3>
                <p className="font-heading text-xs italic text-muted-foreground">
                  {keyword.pali}
                </p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-foreground/80 line-clamp-2">
              {keyword.definition[language]}
            </p>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-body text-muted-foreground">
          {language === "en"
            ? "No terms found."
            : "Không tìm thấy thuật ngữ nào."}
        </p>
      )}

      {/* Expanded detail panel */}
      {selected && (
        <div className="mt-8 rounded-xl border border-primary/30 bg-card p-6 shadow-lg animate-fade-in">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">{selected.emoji}</span>
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                {selected.term[language]}
              </h2>
              <p className="font-heading text-sm italic text-muted-foreground">
                {selected.pali}
              </p>
            </div>
          </div>

          {/* Definition */}
          <div className="mb-5">
            <h3 className="mb-1 flex items-center gap-2 font-heading text-sm font-semibold text-primary">
              <BookOpen className="h-4 w-4" />
              {language === "en" ? "Definition" : "Định Nghĩa"}
            </h3>
            <p className="font-body text-sm leading-relaxed text-foreground/85">
              {selected.definition[language]}
            </p>
          </div>

          {/* Analogy */}
          <div className="mb-5 rounded-lg bg-accent/30 p-4">
            <h3 className="mb-1 flex items-center gap-2 font-heading text-sm font-semibold text-primary">
              <Lightbulb className="h-4 w-4" />
              {language === "en" ? "Simple Analogy" : "Ví Dụ Đơn Giản"}
            </h3>
            <p className="font-body text-sm italic leading-relaxed text-foreground/80">
              {selected.analogy[language]}
            </p>
          </div>

          {/* Related suttas */}
          <div>
            <h3 className="mb-2 font-heading text-sm font-semibold text-muted-foreground">
              {language === "en" ? "Found in" : "Xuất hiện trong"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {selected.relatedSuttaIds.map((sId) => {
                const s = suttas.find((st) => st.id === sId);
                if (!s) return null;
                return (
                  <button
                    key={sId}
                    onClick={() => navigate(`/sutta/${sId}`)}
                    className="rounded-full border border-border bg-muted px-3 py-1 font-body text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    {s.paliTitle}
                  </button>
                );
              })}
            </div>
          </div>
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

export default KeywordsView;
