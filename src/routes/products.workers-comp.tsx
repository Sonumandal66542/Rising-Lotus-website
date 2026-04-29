import { createFileRoute } from "@tanstack/react-router";
import { HardHat } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/products/workers-comp")({
  head: () => ({
    meta: [
      { title: "Workers Compensation, Rising Lotus Insurance" },
      { name: "description", content: "Required coverage that protects employees and your business after on-the-job injuries." },
      { property: "og:title", content: "Workers Compensation, Rising Lotus" },
      { property: "og:description", content: "Required coverage that protects employees and your business after on-the-job injuries." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
      icon={HardHat}
      eyebrow="Workers Compensation"
      title="Protect your team"
      scriptWord="team"
      intro="Required coverage that protects employees and your business after on-the-job injuries."
      description="Workers comp is mandatory in most states and shields your business from costly lawsuits when employees are hurt at work. We help you stay compliant, manage premiums, and create a safer workplace through proactive risk management."
      coverages={[
        { title: "Medical Benefits", desc: "Pays medical bills for work-related injuries and illnesses." },
        { title: "Lost Wages", desc: "Replaces a portion of income while employees recover." },
        { title: "Disability Benefits", desc: "Long-term support for permanent injuries." },
        { title: "Death Benefits", desc: "Provides for families after a fatal workplace incident." },
        { title: "Rehabilitation", desc: "Covers physical therapy and vocational retraining." },
        { title: "Employer Liability", desc: "Protects against employee lawsuits over workplace injuries." },
      ]}
      benefits={[
        "State-compliant policies",
        "Pay-as-you-go premium options",
        "Free safety consultations",
        "Return-to-work program support",
        "Multi-state coverage available",
        "Dedicated claims adjusters",
      ]}
    />
  );
}
