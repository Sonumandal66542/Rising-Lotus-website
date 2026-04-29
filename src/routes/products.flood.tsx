import { createFileRoute } from "@tanstack/react-router";
import { Droplets } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/products/flood")({
  head: () => ({
    meta: [
      { title: "Flood Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Specialized coverage for water damage that standard home policies exclude." },
      { property: "og:title", content: "Flood Insurance, Rising Lotus" },
      { property: "og:description", content: "Specialized coverage for water damage that standard home policies exclude." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1527011045973-e380e2f5b801?w=1600&q=80"
      icon={Droplets}
      eyebrow="Flood Insurance"
      title="Stay protected from flood damage"
      scriptWord="flood"
      intro="Specialized coverage for water damage that standard home policies exclude."
      description="Most homeowners policies do NOT cover flooding. With weather patterns shifting, even low-risk areas can be hit hard. Flood insurance protects your structure and belongings from rising water, through the National Flood Insurance Program or private carriers."
      coverages={[
        { title: "Building Coverage", desc: "Protects the structure, foundation, and built-in appliances." },
        { title: "Contents Coverage", desc: "Replaces furniture, electronics, and personal items." },
        { title: "Replacement Cost", desc: "Pays full cost to rebuild without depreciation." },
        { title: "Basement Coverage", desc: "Limited protection for finished basement areas." },
        { title: "Debris Removal", desc: "Covers cost to clear flood debris." },
        { title: "Increased Cost of Compliance", desc: "Pays to bring home up to current code after flood." },
      ]}
      benefits={[
        "Available in all flood zones",
        "Required by many mortgage lenders",
        "30-day waiting period typical",
        "Federal and private options",
        "Affordable premiums in low-risk zones",
        "Peace of mind in any weather",
      ]}
    />
  );
}
