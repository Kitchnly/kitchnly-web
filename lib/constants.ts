export const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
] as const;

export const HEAR_ABOUT_US_OPTIONS = [
  "WhatsApp group",
  "Facebook ad",
  "Facebook group",
  "Instagram",
  "Friend or family",
  "Google search",
  "Community event",
  "Other",
] as const;

export const MONTHLY_WTP_OPTIONS = [
  "I'd only stay if it's free",
  "Up to $5 / month",
  "$5 – $10 / month",
  "$10 – $20 / month",
  "$20 – $40 / month",
  "More than $40 / month",
] as const;

export type Province = (typeof PROVINCES)[number];
export type HearAboutUsOption = (typeof HEAR_ABOUT_US_OPTIONS)[number];
export type MonthlyWtpOption = (typeof MONTHLY_WTP_OPTIONS)[number];
