import { createFileRoute } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { InsuranceDetail } from "@/components/InsuranceDetail";

export const Route = createFileRoute("/insurance/auto")({
  head: () => ({
    meta: [
      { title: "Auto Insurance, Rising Lotus Insurance" },
      { name: "description", content: "Comprehensive auto insurance with liability, collision, and roadside assistance. Get a personalized quote today." },
      { property: "og:title", content: "Auto Insurance, Rising Lotus" },
      { property: "og:description", content: "Drive with confidence. Tailored auto coverage for every driver." },
    ],
  }),
  component: AutoPage,
});

function AutoPage() {
  return (
    <InsuranceDetail
      heroImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
      icon={Car}
      eyebrow="Auto Insurance"
      title="Drive with confidence"
      scriptWord="confidence"
      intro="Reliable auto coverage that protects you, your passengers, and your vehicle on every road you take."
      description="Whether you commute daily, drive across the country, or have a family fleet, our auto insurance plans flex to fit your lifestyle and budget. We compare top-rated carriers to find you the best blend of price and coverage, and we're always one call away when you need to file a claim."
      coverages={[
        { title: "Liability Coverage", desc: "Bodily injury and property damage protection if you're at fault in an accident." },
        { title: "Collision", desc: "Repairs or replaces your car after a collision, regardless of fault." },
        { title: "Comprehensive", desc: "Covers theft, vandalism, weather damage, and other non-collision losses." },
        { title: "Uninsured Motorist", desc: "Protects you when the at-fault driver has no or insufficient insurance." },
        { title: "Medical Payments", desc: "Covers medical bills for you and your passengers after an accident." },
        { title: "Roadside Assistance", desc: "24/7 towing, jump-starts, lockouts, and flat tire help." },
      ]}
      benefits={[
        "Multi-vehicle and bundling discounts",
        "Flexible deductibles and payment plans",
        "Rental car reimbursement options",
        "Safe driver and good student discounts",
        "Fast online claims and live support",
      ]}
    />
  );
}