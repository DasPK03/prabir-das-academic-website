// ─────────────────────────────────────────────────────────────────────────────
// STATIC, MANUALLY-MAINTAINED PUBLICATION STATISTICS
//
// These numbers are FIXED and are the ONLY source of truth for the homepage
// statistics band. They are intentionally DECOUPLED from publications.ts.
//
// They are never derived, counted, or recalculated from the publication list.
// Adding or removing a paper in publications.ts does NOT change these values.
// Update them ONLY by editing the numbers below by hand.
// ─────────────────────────────────────────────────────────────────────────────

export const publicationStats = {
  totalConferencePapers: 12,
  published: 1,
  presented: 5,
  accepted: 6,
  registeredDesigns: 1,
} as const;

export type PublicationStats = typeof publicationStats;
