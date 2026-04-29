import { createFileRoute } from "@tanstack/react-router";
import { Caravan } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/products/rv")({
  head: () => ({
    meta: [
      { title: "RV Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Comprehensive coverage for motorhomes, travel trailers, and your home on wheels." },
      { property: "og:title", content: "RV Insurance, Rising Lotus" },
      { property: "og:description", content: "Comprehensive coverage for motorhomes, travel trailers, and your home on wheels." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&q=80"
      icon={Caravan}
      eyebrow="RV Insurance"
      title="Protect your adventure"
      scriptWord="adventure"
      intro="Comprehensive coverage for motorhomes, travel trailers, and your home on wheels."
      description="Your RV is part vehicle, part home, and needs insurance that covers both. We protect Class A, B, and C motorhomes, travel trailers, and fifth wheels against accidents, theft, weather, and the unique risks of life on the road."
      coverages={[
        { title: "Liability", desc: "Bodily injury and property damage protection on the road." },
        { title: "Collision & Comprehensive", desc: "Repairs after accidents, theft, or weather damage." },
        { title: "Total Loss Replacement", desc: "New RV replacement after a covered total loss." },
        { title: "Personal Belongings", desc: "Covers contents inside your RV." },
        { title: "Vacation Liability", desc: "Liability coverage when RV is parked at a campsite." },
        { title: "Emergency Expenses", desc: "Lodging, transportation, and food after a breakdown." },
      ]}
      benefits={[
        "Full-timer coverage available",
        "Storage discounts when not in use",
        "Roadside assistance for big rigs",
        "Awning and equipment coverage",
        "Pet injury coverage",
        "Towed vehicle protection",
      ]}
    />
  );
}
