const steps = [
  {
    number: "1",
    title: "Set up your kitchen profile",
    description: "Add your dishes, tags, food restrictions.",
  },
  {
    number: "2",
    title: "Get discovered",
    description: "Customers near you find your listings and message you.",
  },
  {
    number: "3",
    title: "Cook and earn",
    description: "Take orders, chat with customers, get paid.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="font-heading text-xl text-foreground">
                {step.title}
              </h3>
              <p className="leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
