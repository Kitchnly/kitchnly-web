import { Star, BadgePercent, Megaphone, Gift } from "lucide-react";

const perks = [
  {
    icon: BadgePercent,
    title: "Zero Fees for 6 Months",
    description: "Keep 100% of your earnings during our founding period.",
  },
  {
    icon: Star,
    title: "Founding Cook Badge",
    description:
      "Stand out with an exclusive badge that shows you were here from the start.",
  },
  {
    icon: Megaphone,
    title: "Priority Promotion",
    description:
      "Get featured placement in our app and marketing materials at launch.",
  },
  {
    icon: Gift,
    title: "Starter Kit",
    description:
      "Receive branded packaging and supplies to help you hit the ground running.",
  },
];

export function FoundingCookPerks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="size-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Founding Cook Perks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Be among our first 100 home cooks and unlock exclusive benefits
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-background rounded-2xl p-6 flex gap-4 items-start border border-border hover:border-primary/30 transition-colors"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <perk.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">
                  {perk.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
