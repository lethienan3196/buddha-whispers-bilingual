import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { suttas, collections } from "@/data/suttas";
import SuttaCard from "./SuttaCard";
import { Search } from "lucide-react";

const SuttaList = () => {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCollection, setActiveCollection] = useState("all");

  const filtered = useMemo(() => {
    return suttas.filter((s) => {
      const matchesCollection =
        activeCollection === "all" || s.collection === activeCollection;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        s.title[language].toLowerCase().includes(q) ||
        s.paliTitle.toLowerCase().includes(q) ||
        s.summary[language].toLowerCase().includes(q) ||
        s.keyTeaching[language].toLowerCase().includes(q);
      return matchesCollection && matchesSearch;
    });
  }, [search, activeCollection, language]);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-20">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={language === "en" ? "Search suttas..." : "Tìm kinh..."}
          className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Collection filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {collections.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCollection(c.id)}
            className={`rounded-full px-4 py-1.5 font-body text-xs font-medium transition-all ${
              activeCollection === c.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {c.label[language]}
          </button>
        ))}
      </div>

      {/* Sutta grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((sutta, i) => (
          <SuttaCard key={sutta.id} sutta={sutta} language={language} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-body text-muted-foreground">
          {language === "en" ? "No suttas found." : "Không tìm thấy kinh nào."}
        </p>
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
    </main>
  );
};

export default SuttaList;
