import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/products/renters")({
  head: () => ({
    meta: [
      { title: "Renters Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Affordable protection for your personal property and liability as a tenant." },
      { property: "og:title", content: "Renters Insurance, Rising Lotus" },
      { property: "og:description", content: "Affordable protection for your personal property and liability as a tenant." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80"
      icon={Building2}
      eyebrow="Renters Insurance"
      title="Cover your belongings"
      scriptWord="belongings"
      intro="Affordable protection for your personal property and liability as a tenant."
      description="Your landlord's insurance covers the building, not your stuff. Renters insurance protects your belongings against theft, fire, and water damage, plus liability if someone is injured in your unit."
      coverages={[
        { title: "Personal Property", desc: "Replaces electronics, furniture, clothing if damaged or stolen." },
        { title: "Liability Protection", desc: "Covers legal costs if you're responsible for injury or damage." },
        { title: "Loss of Use", desc: "Pays for temporary housing if your rental becomes unlivable." },
        { title: "Medical Payments", desc: "Covers minor injuries to guests in your unit." },
        { title: "Off-Premises Coverage", desc: "Protects belongings stolen outside your home." },
        { title: "Identity Theft", desc: "Optional add-on for identity recovery costs." },
      ]}
      benefits={[
        "Often under $20/month",
        "Bundle with auto for additional savings",
        "Replacement cost coverage available",
        "Covers belongings worldwide",
        "Flexible deductibles",
        "Easy online claims",
      ]}
    />
  );
}
