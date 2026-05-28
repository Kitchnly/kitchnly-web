"use server";

export interface WaitlistFormState {
  success: boolean;
  message: string;
}

export async function joinWaitlist(
  prevState: WaitlistFormState | null,
  formData: FormData
): Promise<WaitlistFormState> {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const userType = formData.get("userType") as string;
  const zipCode = formData.get("zipCode") as string;

  // Validate required fields
  if (!email || !name || !userType || !zipCode) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Validate zip code (US format)
  const zipRegex = /^\d{5}(-\d{4})?$/;
  if (!zipRegex.test(zipCode)) {
    return {
      success: false,
      message: "Please enter a valid US zip code.",
    };
  }

  // TODO: Connect to Supabase when integration is added
  // For now, log the submission
  console.log("[Kitchnly Waitlist]", { email, name, userType, zipCode });

  // Simulate a small delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "You're on the list! We'll be in touch soon.",
  };
}
