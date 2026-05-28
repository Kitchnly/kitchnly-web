import { MapPin, DollarSign, Percent } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Reach local hungry neighbours",
    description:
      "Customers nearby discover your kitchen by location, tags, and food restrictions.",
  },
  {
    icon: DollarSign,
    title: "You set the menu and the price",
    description:
      "List daily specials, weekly menus, or take pre-orders. You're in charge.",
  },
  {
    icon: Percent,
    title: "Keep more of what you earn",
    description:
      "No commission until 2027. Founding cooks lock in early pricing.",
  },
];

export function Features() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Why Kitchnly
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-2xl bg-background p-6 shadow-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-surface-warm">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
