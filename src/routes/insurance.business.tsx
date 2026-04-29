import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/insurance/business")({
  head: () => ({
    meta: [
      { title: "Business Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Commercial insurance for small businesses: liability, property, workers comp, and more. Get a quote today." },
      { property: "og:title", content: "Business Insurance, Rising Lotus" },
      { property: "og:description", content: "Tailored commercial coverage to keep your business protected and growing." },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      icon={Briefcase}
      eyebrow="Business Insurance"
      title="Built for your business"
      scriptWord="business"
      intro="Commercial coverage that grows with you, from solo operators to multi-location enterprises."
      description="Every business is different, and your insurance should be too. We build custom commercial policies that protect your property, your team, and your reputation. Whether you need a simple BOP or a complex multi-line program, our team designs coverage that lets you focus on what you do best, running your business."
      coverages={[
        { title: "General Liability", desc: "Protects against third-party bodily injury, property damage, and lawsuits." },
        { title: "Commercial Property", desc: "Covers buildings, inventory, equipment, and furniture from covered losses." },
        { title: "Workers Compensation", desc: "Required coverage for employee injuries and lost wages on the job." },
        { title: "Professional Liability", desc: "Errors & omissions protection for service-based businesses." },
        { title: "Commercial Auto", desc: "Coverage for vehicles owned, leased, or used by your business." },
        { title: "Cyber Liability", desc: "Protects against data breaches, ransomware, and digital threats." },
      ]}
      benefits={[
        "Business Owners Policies (BOP) bundles",
        "Industry-specific coverage packages",
        "Certificates of insurance issued within 2-3 business days",
        "Risk management consulting included",
        "Scalable plans as your team grows",
        "Dedicated business account manager",
      ]}
    />
  );
}