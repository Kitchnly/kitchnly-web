"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistFormState } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { ChefHat, Users, Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WaitlistForm() {
  const [state, formAction, isPending] = useActionState<
    WaitlistFormState | null,
    FormData
  >(joinWaitlist, null);

  if (state?.success) {
    return (
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-3xl p-8 sm:p-12 text-center border border-border">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="size-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
              You&apos;re on the list!
            </h2>
            <p className="text-muted-foreground">
              Thanks for joining! We&apos;ll be in touch soon with updates and your
              exclusive early access invite.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground text-pretty">
              Be the first to know when Kitchnly launches in your area
            </p>
          </div>

          <form action={formAction} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Zip Code
                </label>
                <Input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="12345"
                  required
                  maxLength={10}
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  I want to...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative">
                    <input
                      type="radio"
                      name="userType"
                      value="buyer"
                      required
                      className="peer sr-only"
                    />
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border bg-background cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50">
                      <Users className="size-6 text-muted-foreground peer-checked:text-primary" />
                      <span className="text-sm font-medium">Order Food</span>
                    </div>
                  </label>
                  <label className="relative">
                    <input
                      type="radio"
                      name="userType"
                      value="cook"
                      className="peer sr-only"
                    />
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-border bg-background cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50">
                      <ChefHat className="size-6 text-muted-foreground peer-checked:text-primary" />
                      <span className="text-sm font-medium">Sell Food</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {state?.message && !state.success && (
              <p className="text-sm text-destructive text-center">
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className={cn(
                "w-full h-12 bg-primary text-primary-foreground rounded-xl text-base font-medium transition-all shadow-lg shadow-primary/20",
                isPending
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary/90"
              )}
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Joining...
                </span>
              ) : (
                "Join the Waitlist"
              )}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
