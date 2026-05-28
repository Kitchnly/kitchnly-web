import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When does Kitchnly launch?",
    answer:
      "We're onboarding cooks in waves through 2026 and opening to customers city-by-city. Join the waitlist to get access early.",
  },
  {
    question: "Do I need a food handler's permit or business license?",
    answer:
      "Requirements vary by province and city. We'll guide you through what's needed in your area when you're invited.",
  },
  {
    question: "How much can I earn?",
    answer:
      "You set your own prices. Through 2026 we take zero commission.",
  },
  {
    question: "What happens in January 2027?",
    answer:
      "We'll introduce paid plans. Founding cooks on the waitlist lock in early-bird pricing.",
  },
  {
    question: "How do customers find me?",
    answer:
      "Customers search by location, food category, tags, and dietary needs. Your kitchen profile is your storefront.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl bg-background px-6 border border-border data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-text-secondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
