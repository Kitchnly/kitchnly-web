import { Gift, Tag, MessageCircle } from "lucide-react";

const perks = [
  {
    icon: Gift,
    text: "Free for the rest of 2026 — no fees, no commission.",
  },
  {
    icon: Tag,
    text: "Lock in early-bird pricing when paid plans launch in January 2027.",
  },
  {
    icon: MessageCircle,
    text: "Direct access to the founders — your feedback shapes the product.",
  },
];

export function FoundingCookPerks() {
  return (
    <section className="bg-surface-warm px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Founding cook perks
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join now and get exclusive benefits as an early supporter.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl bg-background p-6 shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-warm">
                <perk.icon className="size-5 text-primary" />
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                {perk.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
