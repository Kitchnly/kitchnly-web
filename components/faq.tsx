import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Kitchnly?",
    answer:
      "Kitchnly is a mobile marketplace that connects local home cooks with hungry neighbors. We make it easy for talented cooks to share their homemade dishes with their community, and for food lovers to discover authentic, locally-made meals.",
  },
  {
    question: "Is it legal to sell homemade food?",
    answer:
      "Yes! Many states have cottage food laws that allow home cooks to sell certain types of food. Kitchnly helps you understand the regulations in your area and ensures all our cooks meet local food safety requirements.",
  },
  {
    question: "How do I become a cook on Kitchnly?",
    answer:
      "Join our waitlist and select \"Sell Food\" as your interest. Once we launch in your area, we'll guide you through our simple onboarding process, including food safety certification and setting up your menu.",
  },
  {
    question: "When will Kitchnly be available in my area?",
    answer:
      "We're launching in select cities in 2025. Join the waitlist with your zip code, and we'll notify you as soon as we're available near you. The more people who sign up from your area, the sooner we'll arrive!",
  },
  {
    question: "How much does it cost to use Kitchnly?",
    answer:
      "For buyers, there's no fee beyond the cost of your order. For cooks, we take a small percentage of each sale to cover payment processing and platform costs. Founding cooks get 0% fees for their first 6 months!",
  },
  {
    question: "How do you ensure food safety?",
    answer:
      "All cooks on Kitchnly must complete food safety training and certification. We also require cooks to follow local health guidelines and maintain high hygiene standards. Our review system helps maintain quality across the platform.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border border-border data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-heading text-lg hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
