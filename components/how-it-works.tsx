const steps = [
  {
    number: "01",
    title: "Browse Local Menus",
    description:
      "Explore dishes from home cooks in your area. Filter by cuisine, dietary needs, or distance.",
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Order directly through the app. Pay securely and schedule pickup or delivery.",
  },
  {
    number: "03",
    title: "Enjoy Homemade Goodness",
    description:
      "Receive fresh, homemade food and leave a review to help the community discover great cooks.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Getting started with Kitchnly is simple
          </p>
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 size-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-border ml-7 mt-4 hidden sm:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
