import { useParams, useNavigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SuttaDetailView from "@/components/SuttaDetailView";

const SuttaDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SuttaDetailView suttaId={id} />
      </div>
    </LanguageProvider>
  );
};

export default SuttaDetailPage;
