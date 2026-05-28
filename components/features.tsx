import { MapPin, Shield, Heart, Clock } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Hyper-Local Discovery",
    description:
      "Find home cooks within walking distance. Fresh food from your neighbors, delivered warm to your door.",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description:
      "Every cook is verified and reviewed. We ensure food safety standards so you can order with confidence.",
  },
  {
    icon: Heart,
    title: "Support Your Community",
    description:
      "Every purchase directly supports local home cooks pursuing their passion for food.",
  },
  {
    icon: Clock,
    title: "Fresh, Never Frozen",
    description:
      "Made to order, not mass-produced. Enjoy meals prepared with care just hours before delivery.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Why Kitchnly?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We&apos;re building the future of local food, one homemade meal at a time.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
