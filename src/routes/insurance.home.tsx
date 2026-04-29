import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/insurance/home")({
  head: () => ({
    meta: [
      { title: "Home Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Protect your home, belongings, and family with tailored homeowners insurance. Get a free personalized quote." },
      { property: "og:title", content: "Home Insurance, Rising Lotus" },
      { property: "og:description", content: "Safeguard the place you love most with coverage that fits your home." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80"
      icon={Home}
      eyebrow="Home Insurance"
      title="Protect what you love"
      scriptWord="love"
      intro="Coverage for the home you've built, your structure, your belongings, and the people inside."
      description="Your home is more than four walls. Our homeowners policies safeguard your dwelling, personal property, and liability exposure against fire, storms, theft, and the unexpected. We'll help you understand exactly what you have, identify gaps, and choose protection that gives you peace of mind without overpaying."
      coverages={[
        { title: "Dwelling Coverage", desc: "Protects the physical structure of your home from covered perils." },
        { title: "Personal Property", desc: "Replaces furniture, electronics, clothing, and belongings if damaged or stolen." },
        { title: "Liability Protection", desc: "Covers legal and medical costs if someone is injured on your property." },
        { title: "Loss of Use", desc: "Pays for temporary housing and living costs if your home becomes unlivable." },
        { title: "Other Structures", desc: "Covers detached garages, fences, sheds, and outdoor structures." },
        { title: "Medical Payments", desc: "Pays for minor injuries to guests, regardless of fault." },
      ]}
      benefits={[
        "Replacement cost or actual cash value options",
        "Bundle with auto for big savings",
        "Optional flood and earthquake riders",
        "Coverage for valuables: jewelry, art, electronics",
        "Identity theft protection add-ons",
        "Local agents who know your area",
      ]}
    />
  );
}