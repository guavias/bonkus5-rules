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
        "**Unwhitelisted** - a role for new players who have just joined the server. They get whitelisted by completing the form, and the mods vote to accept them.",
        "**Bonkus Player** - the base role for all approved players. Required to connect to the server.",
        "**Bonkus VIP** - VIP players who have proven themselves in gameplay or socially. This role is required to be able to invite players.",
      ]},
      { type: "h2", text: "Staff roles" },
      { type: "ul", items: [
        "**Founder** - The highest ranking position. Has all administrator permissions and all the say in the direction and operation of the server.",
        "**Administrator** - handles appeals, datapacks, manages escalated investigations, and provides oversight for standard moderators. They are the backbone of the server's operations and mechanics.",
        "**Moderator** - has admin access to the Minecraft and Discord server. Can manage whitelists, plugins, and some infrastructure. Mostly in charge of enforcing rules.",
        "**Officers** - only has admin access to the Discord server. In charge of organizing the server, managing out of game communications, questions, and any other concerns related to the server.",
      ]},
      { type: "h2", text: "How roles are assigned" },
      { type: "p", text: "Mod roles are assigned by the Admin and are not open applications. VIPs are chosen by a mod and sent the VIP form, then can become a VIP based on their answers. Contact the mod team in Discord if you believe you should have a role you don't. VIP form: https://docs.google.com/forms/d/e/1FAIpQLSe0sEcmTq6ninSRy4qEJ5ndz-Gw9JakM4GZRWICYfoWDmkg3w/viewform" },
    ],
  },

  "gate-policy": {
    title: "Gate Policy & Invites",
    status: "In Review",
    intro: "Bonkus is a private server. This page explains exactly who can be invited, who controls the gate, and what the invite process looks like.",
    blocks: [
      { type: "h2", text: "The gate" },
      { type: "p", text: "The **gate** refers to the server's invite and whitelist system. Bonkus is not open to the public - entry is controlled by the mod team in consultation with Bonkus VIPs." },
      { type: "h2", text: "Who can invite" },
      { type: "ul", items: [
        "**Bonkus VIPs** - can refer 2 players at the beginning stage. Extra invites at a later date will be up to moderators' discretion.",
        "**Moderators and above** - also only have 2 invites. Everyone follows the same rules.",
        "**Bonkus Players** cannot formally invite - they can tell someone about the server and direct them to a veteran player or the mod team who is willing to vouch.",
        "When you invite a player, you are responsible for them, and if they receive a punishment, you will as well."
      ]},
      { type: "h2", text: "Invite requirements" },
      { type: "p", text: "Anyone referred must still complete the standard whitelist form. A referral does not guarantee acceptance - it just allows the application to be considered. The mod team can reject any application." },
      { type: "h2", text: "The ban list and the gate" },
      { type: "p", text: "Players who have been banned previously MAY be invited back, however they must fill out an unban form, with their fate decided by the Council." },
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
        "**Routine questions** - post in <#questions> in Discord",
        "**Reports** - DM any active council member",
        "**Appeals** - submit the Appeals Form (TBD)",
        "**Urgent issues** - ping @The Council in Discord",
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
    intro: "The banned list is currently blank while the Council finalizes and updates entries.",
    blocks: [
      { type: "callout", variant: "info", lead: "Currently blank.", text: "This section will be updated as bans and unbans are finalized by the Council. For now, the list is intentionally left empty while the process is being refreshed." },
    ],
  },

}
