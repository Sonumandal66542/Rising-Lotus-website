import { createFileRoute } from "@tanstack/react-router";
import { Bike } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/products/motorcycle")({
  head: () => ({
    meta: [
      { title: "Motorcycle Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Tailored two-wheel coverage for riders, sport bikes, cruisers, and touring machines." },
      { property: "og:title", content: "Motorcycle Insurance, Rising Lotus" },
      { property: "og:description", content: "Tailored two-wheel coverage for riders, sport bikes, cruisers, and touring machines." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80"
      icon={Bike}
      eyebrow="Motorcycle Insurance"
      title="Ride with freedom"
      scriptWord="freedom"
      intro="Tailored two-wheel coverage for riders, sport bikes, cruisers, and touring machines."
      description="Whether you ride weekends or commute daily, motorcycle insurance protects you, your bike, and your passengers. We cover everything from custom parts and accessories to safety apparel, and offer special discounts for safety course graduates."
      coverages={[
        { title: "Liability", desc: "Covers injury and property damage if you're at fault." },
        { title: "Collision", desc: "Repairs your bike after an accident regardless of fault." },
        { title: "Comprehensive", desc: "Covers theft, vandalism, and weather damage." },
        { title: "Uninsured Motorist", desc: "Protects you when other drivers lack insurance." },
        { title: "Custom Parts & Equipment", desc: "Coverage for aftermarket modifications." },
        { title: "Safety Apparel", desc: "Replaces helmet, jacket, and gear after a covered loss." },
      ]}
      benefits={[
        "Multi-bike discounts",
        "Safety course discounts",
        "Lay-up policies for off-season",
        "Roadside assistance available",
        "Trip interruption coverage",
        "Agreed value for classic bikes",
      ]}
    />
  );
}
