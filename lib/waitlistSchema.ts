import { z } from 'zod';

export const PROVINCES = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon',
] as const;

export const HEAR_ABOUT_OPTIONS = [
  'WhatsApp group',
  'Facebook ad',
  'Facebook group',
  'Instagram',
  'Friend or family',
  'Google search',
  'Community event',
  'Other',
] as const;

export const CUISINE_OTHER_VALUE = 'Other';

export const CUISINE_OPTIONS = [
  'South Asian (Indian, Pakistani, Sri Lankan, Bangladeshi)',
  'East & Southeast Asian (Chinese, Filipino, Vietnamese, Korean, Thai)',
  'Middle Eastern & Mediterranean',
  'Caribbean & Afro-Caribbean',
  'African',
  'Latin American',
  'European',
  'North American comfort food',
  'Baking, breads & desserts',
  'Healthy & specialty (millets, vegan, gluten-free)',
  'Snacks, chaat & street food',
  'Drinks (chai, smoothies, juices)',
  CUISINE_OTHER_VALUE,
] as const;

export const MONTHLY_WTP_OPTIONS = [
  "I'd only stay if it's free",
  'Up to $5 / month',
  '$5 – $10 / month',
  '$10 – $20 / month',
  '$20 – $40 / month',
  'More than $40 / month',
] as const;

export const waitlistSchema = z
  .object({
    name: z.string().trim().min(2, 'Please enter your full name'),
    email: z.string().trim().toLowerCase().email('Please enter a valid email'),
    phone: z
      .string()
      .trim()
      .max(40, 'Phone looks too long')
      .optional()
      .or(z.literal('')),
    city: z.string().trim().min(2, 'Please enter your city'),
    province: z.enum(PROVINCES, { message: 'Please select your province' }),
    hear_about_us: z.enum(HEAR_ABOUT_OPTIONS, {
      message: 'Please tell us how you heard about Kitchnly',
    }),
    cuisines: z
      .array(z.enum(CUISINE_OPTIONS))
      .min(1, 'Please pick at least one — what do you cook most?'),
    cuisine_other: z
      .string()
      .trim()
      .max(300, 'Please keep this under 300 characters')
      .optional()
      .or(z.literal('')),
    monthly_wtp: z.enum(MONTHLY_WTP_OPTIONS, {
      message: 'Please pick the option that feels closest',
    }),
    notes: z
      .string()
      .trim()
      .max(1000, 'Please keep this under 1000 characters')
      .optional()
      .or(z.literal('')),
    company: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (
      val.cuisines.includes(CUISINE_OTHER_VALUE) &&
      (!val.cuisine_other || val.cuisine_other.trim().length < 2)
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['cuisine_other'],
        message: 'Tell us what you cook (a few words is fine).',
      });
    }
  });

export type WaitlistInput = z.infer<typeof waitlistSchema>;
