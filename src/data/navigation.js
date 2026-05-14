// Top-level tabs and the sub-pages each owns. The `slug` is used in the URL.
export const sections = [
  {
    slug: "start-here",
    title: "Start Here",
    tagline: "New to Bonkus? Read these in order.",
    pages: [
      { slug: "welcome",         title: "Welcome to Bonkus" },
      { slug: "what-is-bonkus",  title: "What is Bonkus?" },
      { slug: "how-to-join",     title: "How to Join" },
      { slug: "server-info",     title: "Server Info" },
      { slug: "first-steps",     title: "First Steps" },
    ],
  },
  {
    slug: "rules",
    title: "Rules",
    tagline: "You know what these are.",
    pages: [
      { slug: "code-of-conduct",     title: "Code of Conduct" },
      { slug: "roleplay-rules",      title: "Roleplay Rules" },
      { slug: "war-conflict-rules",  title: "War & Conflict Rules" },
      { slug: "stealing-rules",      title: "Stealing Rules" },
      { slug: "build-rules",         title: "Build Rules" },
      { slug: "strikes-punishments", title: "Strikes & Punishments" },
      { slug: "appeals",             title: "Appeals" },
    ],
  },
  {
    slug: "banned-items",
    title: "Banned & Restricted",
    tagline: "What you can't use/build, what's gated, and what's case-by-case.",
    pages: [
      { slug: "outright-banned",    title: "Outright Banned" },
      { slug: "disabled-in-game",   title: "Disabled in Game" },
      { slug: "age-gated",          title: "Age-Gated Items" },
      { slug: "tightly-controlled", title: "Tightly Controlled" },
      { slug: "farms",              title: "Farms" },
      { slug: "pvp-balance",        title: "PvP Balance Items" },
      { slug: "when-in-doubt",      title: "When in Doubt" },
    ],
  },
  {
    slug: "roleplay-guide",
    title: "Roleplay Guide",
    tagline: "Advice, not rules. How to play well.",
    pages: [
      { slug: "character-creation",       title: "Character Creation" },
      { slug: "playing-your-character",   title: "Playing Your Character" },
      { slug: "interacting-with-players", title: "Interacting with Other Players" },
      { slug: "character-death",          title: "Character Death" },
      { slug: "show-dont-tell",           title: "Show, Don’t Tell" },
    ],
  },
  {
    slug: "world",
    title: "The World",
    tagline: "How the world is structured, from locations, religions, and more.",
    pages: [
      { slug: "locations-tiers",     title: "Locations & Tiers" },
      { slug: "nations",             title: "Nations" },
      { slug: "countries",           title: "Countries" },
      { slug: "religions",           title: "Religions" },
      { slug: "other-organizations", title: "Other Organizations" },
      { slug: "tech-trees",          title: "Tech Trees" },
      { slug: "custom-items",        title: "Custom Items" },
    ],
  },
  {
    slug: "battles",
    title: "Battles",
    tagline: "How war works on Bonkus.",
    pages: [
      { slug: "battle-time-overview", title: "Battle Time Overview" },
      { slug: "schedule",             title: "Schedule & How It Starts" },
      { slug: "lives-spawning",       title: "Lives, Spawning, Building Rules" },
      { slug: "battle-banners",       title: "Battle Banners & Tiers" },
      { slug: "stealing-mechanics",    title: "Stealing Mechanics" },
      { slug: "setpiece-battles",     title: "Setpiece Battles" },
      { slug: "pve-defensive-mobs",   title: "PvE & Defensive Mobs" },
    ],
  },
  {
    slug: "staff-server-invites",
    title: "Staff, Server, & Gate Policy",
    tagline: "How the server is governed and managed.",
    pages: [
      { slug: "server-roles",      title: "Server Roles" },
      { slug: "gate-policy",       title: "Gate Policy & Invites" },
      { slug: "mod-team",          title: "The Mod Team" },
      { slug: "banned-list",       title: "Banned List" },
      { slug: "forms",             title: "Forms" },
      { slug: "changelog",         title: "Changelog / Recent Updates" },
    ],
  },
];

// Quick lookup helpers
export function findSection(sectionSlug) {
  return sections.find(s => s.slug === sectionSlug);
}
export function findPage(sectionSlug, pageSlug) {
  const s = findSection(sectionSlug);
  return s?.pages.find(p => p.slug === pageSlug);
}
