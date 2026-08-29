export const staffServer = {

  "server-roles": {
    title: "Server Roles",
    status: "In Review",
    intro: "Bonkus 5 has a defined role hierarchy that governs permissions, moderation authority, and in-game access.",
    blocks: [
      { type: "h2", text: "Role overview" },
      { type: "p", text: "Every player on Bonkus has one or more roles. Roles are managed in Discord and are reflected in-game." },
      { type: "h2", text: "Player roles" },
      { type: "ul", items: [
        "**Whitelisted** - the base role for all approved players. Required to connect to the server.",
        "**Faction Leader** - players who hold an in-character leadership role within a country or major organization. Applied for through the mod team.",
        "**Veteran** - recognizes players who have completed at least 2 full seasons. No extra permissions, just a badge of honor.",
      ]},
      { type: "h2", text: "Staff roles" },
      { type: "ul", items: [
        "**Founder** - The highest ranking position. Has all administrator permissions and all the say in the direction and operation of the server.",
        "**Administrator** - handles appeals, datapacks, manages escalated investigations, and provides oversight for standard moderators. They are the backbone of the server's operations and mechanics.",
        "**Moderator** - has admin access to the Minecraft and Discord server. Can manage whitelists, plugins, and some infrastructure. Mostly in charge of enforcing rules.",
        "**Officers** - only has admin access to the Discord server. In charge of organizing the server, managing out of game communications, questions, and any other concerns related to the server.",
      ]},
      { type: "h2", text: "Special roles" },
      { type: "ul", items: [
        "**Historian** - a player-held role for those who manage the world's lore documentation on our Instagram, @the.history.of.bonkus. Not a moderation role, but carries mod-adjacent trust.",
        "**Cartographer** - maintains and updates the world map.",
        "**Event Host(s)** - trusted players who can run in-world events with mod supervision.",
      ]},
      { type: "h2", text: "How roles are assigned" },
      { type: "p", text: "Mod roles are assigned by the Admin and are not open applications. Player roles (Faction Leader, Veteran) are applied for or automatically assigned based on conditions. Contact the mod team in Discord if you believe you should have a role you don't." },
    ],
  },

  "gate-policy": {
    title: "Gate Policy & Invites",
    status: "In Review",
    intro: "Bonkus is a private server. This page explains exactly who can be invited, who controls the gate, and what the invite process looks like.",
    blocks: [
      { type: "h2", text: "The gate" },
      { type: "p", text: "The **gate** refers to the server's invite and whitelist system. Bonkus is not open to the public - entry is controlled by the mod team in consultation with faction leaders." },
      { type: "h2", text: "Who can invite" },
      { type: "ul", items: [
        "**Veteran players** - can refer 2 players at the beginning stage. Extra invites at a later date  will be up to moderators' discretion.",
        "**Moderators and above** - can invite at their discretion with Admin approval",
        "Standard players cannot formally invite - they can tell someone about the server and direct them to a veteran player or the mod team",
      ]},
      { type: "h2", text: "Invite requirements" },
      { type: "p", text: "Anyone referred must still complete the standard character application process. A referral does not guarantee acceptance - it just allows the application to be considered. The mod team can reject any application." },
      { type: "h2", text: "Gate limits" },
      { type: "p", text: "The server has a maximum player count. At full capacity, the gate closes - no new players are accepted until there is space, regardless of referrals. Current capacity and waitlist status will be posted in #server-info in Discord." },
      { type: "h2", text: "Mid-season invites" },
      { type: "p", text: "Mid-season invites are more restricted than season-start invites. New mid-season players must have a clear narrative hook for their arrival and must join an existing faction." },
      { type: "h2", text: "The ban list and the gate" },
      { type: "p", text: "Players on the **banned list** cannot be invited. Attempting to invite a banned player - even unknowingly - will result in the invite being revoked and may result in a review of the inviting player's standing." },
      { type: "callout", variant: "info", lead: "Why we're strict", text: "Bonkus works because of its community. Letting in the wrong player damages the whole experience. We'd rather have a smaller, high-quality community than scale up at the cost of culture." },
    ],
  },

  "mod-team": {
    title: "The Mod Team",
    status: "In Review",
    intro: "Who runs Bonkus 5, what they do, and how to contact them.",
    blocks: [
      { type: "h2", text: "Current mod team - Season 5" },
      { type: "p", text: "**Founder:** @yoodlenoodles" },
      { type: "p", text: "**Administrators:** @Dr_Bluebeard_M_H, @Pikaju04, and @Onikisuwu_" },
      { type: "p", text: "**Moderators:** @BlueDeathMage" },
      { type: "p", text: "**Officers:** @grenowich245" },
      { type: "h2", text: "What the mod team does" },
      { type: "ul", items: [
        "Review and approve character applications",
        "Enforce rules and issue strikes",
        "Investigate reports and conduct appeals reviews",
        "Schedule and run battle sessions",
        "Manage world events and lore",
        "Maintain server infrastructure and plugins",
        "Mediate disputes between players and factions",
        "Manage the whitelist and invite gate",
      ]},
      { type: "h2", text: "How to contact the mod team" },
      { type: "ul", items: [
        "**Routine questions** - post in #rules-questions in Discord",
        "**Reports** - DM any active moderator",
        "**Appeals** - submit the Appeals Form (see Forms page)",
        "**Urgent issues** - ping @Moderator in Discord",
        "**Admin** - DM directly only for issues that have gone unresolved through other channels",
      ]},
      { type: "h2", text: "Mod team conduct" },
      { type: "p", text: "Moderators are players too. They have characters and factions. We manage conflicts of interest by having moderators recuse themselves from investigations involving their own faction or close allies. If you believe a moderator is not being impartial, contact the Admins." },
      { type: "callout", variant: "warning", lead: "Don't mod-shop.", text: "Going to a different moderator because you didn't like the first one's answer is discouraged. The mod team confers - your attempt to get a different answer will be visible to all of them." },
    ],
  },

  "banned-list": {
    title: "Banned List",
    status: "In Review",
    intro: "Players who have been permanently banned from Bonkus 5. This list is maintained publicly for transparency.",
    blocks: [
      { type: "callout", variant: "info", lead: "Living document.", text: "This list is updated as bans are issued or lifted. It is posted here for transparency, not to shame individuals. Contact the Admin if you believe your ban was in error." },
      { type: "h2", text: "Current banned players" },
      { type: "p", text: "[TBD: Banned player list - Minecraft usernames and reason categories (no detailed personal information)]" },
      { type: "h2", text: "Ban categories" },
      { type: "p", text: "Bans are listed with a category reason, not a detailed account:" },
      { type: "ul", items: [
        "**Cheating** - use of forbidden mods or exploits",
        "**Harassment** - targeted harassment or hate speech",
        "**Grief** - large-scale or repeated grief after warnings",
        "**PK** - unauthorized player killing",
        "**Conduct** - serious out-of-character conduct violations",
        "**Security** - ban evasion, account sharing, or data integrity violations",
        "**Indefinite** - cases under ongoing review",
      ]},
      { type: "h2", text: "Appeals for banned players" },
      { type: "p", text: "Banned players may submit one appeal per season start. Appeals are reviewed by the Admin. Reinstated players return on probation and are subject to immediate re-ban for any rule violation." },
      { type: "p", text: "Ban Appeal Form: [TBD: Google Form link for ban appeal]" },
    ],
  },

  "forms": {
    title: "Forms",
    status: "In Review",
    intro: "All official Bonkus 5 forms in one place. Use these to submit applications, reports, requests, and more.",
    blocks: [
      { type: "h2", text: "Player forms" },
      { type: "ul", items: [
        "**Character Application** - [TBD: Google Form link for character application]",
      ]},
      { type: "h2", text: "Faction and political forms" },
      { type: "ul", items: [
        "**Land Claim Form** - [TBD: Google Form link for land claim]",
        "**Organization Proposal Form** - [TBD: Google Form link for organization proposal]",
      ]},
      { type: "h2", text: "Battle forms" },
      { type: "ul", items: [
        "**Tech Advancement Form** - [TBD: Google Form link for tech advancement]",
        "**Custom Item Request Form** - [TBD: Google Form link for custom item request]",
      ]},
      { type: "h2", text: "Moderation forms" },
      { type: "ul", items: [
        "**Player Report Form** - [TBD: Google Form link for player report]",
        "**Appeals Form** - [TBD: Google Form link for appeals]",
        "**Ban Appeal Form** - [TBD: Google Form link for ban appeal]",
      ]},
      { type: "callout", variant: "info", lead: "Can't find the form you need?", text: "If you need to submit something and there isn't a form for it, post in #questions in Discord and the mod team will create one or direct you to the right channel." },
    ],
  },

  "changelog": {
    title: "Changelog / Recent Updates",
    status: "In Review",
    intro: "A record of significant changes to Bonkus rules, systems, and world lore across Season 5.",
    blocks: [
      { type: "callout", variant: "info", lead: "Living document.", text: "This page is updated throughout the season. Check back after major announcements in Discord." },
      { type: "h2", text: "Season 5 launch - initial release" },
      { type: "p", text: "[TBD: Date of Season 5 launch]" },
      { type: "ul", items: [
        "???",
      ]},
      { type: "h2", text: "Updates and patches" },
      { type: "p", text: "[TBD: Ongoing changelog entries throughout Season 5 - each entry should include date, category (Rules / Systems / World / Meta), and a brief description of what changed and why]" },
      { type: "h2", text: "Planned changes" },
      { type: "p", text: "[TBD: Upcoming changes that have been announced but not yet implemented]" }

    ],
  },

}
