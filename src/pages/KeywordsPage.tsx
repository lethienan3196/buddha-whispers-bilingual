import { LanguageProvider } from "@/contexts/LanguageContext";
import KeywordsView from "@/components/KeywordsView";

const KeywordsPage = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background">
      <KeywordsView />
    </div>
  </LanguageProvider>
);

export default KeywordsPage;
