export const bannedItems = {

  "outright-banned": {
    title: "Outright Banned",
    status: "In Review",
    intro: "These are forbidden at all times in all places. Using or owning any of these is a strike, and may escalate depending on severity.",
    blocks: [
      { type: "callout", variant: "danger", lead: "No exceptions.", text: "These apply in every context - during Battle Time, during raids, during normal play. There is no circumstance where these are permitted." },
      { type: "h2", text: "Client-side cheats" },
      { type: "ul", items: [
        "**X-ray** - in any form (mods, resource packs, shaders that simulate it). At least one previous Bonkus player has been permanently banned for x-raying.",
        "**Kill aura.**",
        "**Autoclickers and macros** that automate combat or interaction.",
        "**Reach mods, fly mods, no-fall, scaffold mods,** or any client that modifies what your client can normally do.",
        "**Auto-fishing** mods.",
        "**Schematica** print mode or any tool that places blocks for you.",
      ]},
      { type: "p", text: "Cosmetic mods, performance mods (Sodium, Lithium, OptiFine), shaders that just look pretty, and informational mods (minimaps without entity radar, lighting overlays) are fine. **When in doubt, ask before installing.**" },
      { type: "h2", text: "Alt accounts" },
      { type: "ul", items: [
        "No alt accounts without explicit prior staff approval.",
        "Alt accounts of banned players are themselves bannable on sight.",
      ]},
      { type: "h2", text: "Exploits and game bugs" },
      { type: "ul", items: [
        "No deliberate exploitation of server bugs, plugin glitches, or datapack edge cases for advantage.",
        "If you find one, report it. We will not strike you for reporting in good faith.",
      ]},
      { type: "h2", text: "Schematic copying" },
      { type: "ul", items: [
        "Importing builds via WorldEdit schematics or printing tools is not allowed.",
        "You may use schematic *viewers* for personal reference, but blocks must be placed by hand.",
      ]},
    ],
  },

  "disabled-in-game": {
    title: "Disabled in Game",
    status: "In Review",
    intro: "These items technically exist in Minecraft but are server-disabled or kill-on-use. They are mechanic-level bans, not just rule bans.",
    blocks: [
      { type: "h2", text: "Elytra" },
      { type: "ul", items: [
        "**Elytra cannot be worn in the Overworld or the Nether.** Putting one on outside the End kills you instantly.",
        "This is enforced via a datapack.",
        "Whether Elytra are usable inside the End at all is age-gated - see the Age-Gated page.",
        "**Reasoning:** Elytra collapse distance, trivialize fortifications, ruin the value of cavalry and ships, and make every conflict a flying duel.",
      ]},
      { type: "h2", text: "Maces (disabled)" },
      { type: "ul", items: [
        "**Maces are disabled.** The crafting recipe does not exist on this server.",
        "**Reasoning:** The mace at full enchantment trivializes PvP.",
      ]},
      { type: "h2", text: "End Crystals" },
      { type: "ul", items: [
        "**Reasoning:** Excessive destruction.",
      ]},
      { type: "h2", text: "Ender Chests" },
      { type: "ul", items: [
        "**Reasoning:** All items should theoretically be stealable.",
      ]},
      { type: "h2", text: "Respawn Anchors (in overworld combat and traps)" },
      { type: "ul", items: [
        "**Reasoning:** Excessive destruction.",
      ]},
      { type: "h2", text: "Lava Buckets (in combat and traps)" },
      { type: "ul", items: [
        "**Reasoning:** Excessive destruction.",
      ]},
      { type: "h2", text: "Ender eyes (TEMPORARILY)" },
      { type: "ul", items: [
        "**Reasoning:** To prevent unauthorized End accesss.",
      ]},
      { type: "h2", text: "Beacons" },
      { type: "ul", items: [
        "Beacons are not banned, but **building a beacon requires Wither-killing** - see the Wither section.",
        "Beacons in residential areas should be screened/covered - a visible beacon counts as a feature of the Location and is part of its lore.",
      ]},
      { type: "h2", text: "Trade rebalance items" },
      { type: "ul", items: [
        "The previous \"trade rebalance\" experiment is **rolled back.** Op villager trades are removed.",
        "Mending books obtained through trading are still available but capped through new datapack-based trade rules.",
        "**Reasoning:** The trade rebalance made grinding the only viable path to gear, which is exactly the playstyle Bonkus doesn't want.",
      ]},
    ],
  },

  "age-gated": {
    title: "Age-Gated Items",
    status: "In Review",
    intro: "Bonkus 5 progresses through ages: Stone → Copper → Copper+Nether → Iron → Diamond → Diamond+End → Netherite. Some items, materials, and mechanics are locked until their corresponding age is reached.",
    blocks: [
      { type: "h2", text: "Materials" },
      { type: "ul", items: [
        "**Copper** - Copper Age and later.",
        "**Iron** - Iron Age and later.",
        "**Diamond** - Diamond Age and later.",
        "**Netherite** - Netherite Age (final age).",
        "Players may not craft higher-age materials (blocked by datapack). If acquired randomly through loot they may use it.",
      ]},
      { type: "h2", text: "Dimensions" },
      { type: "ul", items: [
        "**The Nether** is locked until lore/timeline permits . Until then, nether ruins cannot be activated (see the Magic Stations section).",
        "**The End** is also locked until the lore/timeline permits. Until then, end portals cannot be activated.",
        "After the End is unlocked, Elytra usage is permitted inside the End only - still kill-on-equip in the Overworld and Nether.",
      ]},
      { type: "h2", text: "Enchantments (NEEDS HEAVY REVIEW" },
      { type: "p", text: "Enchantments scale with the age. The exact caps are tuned by the team, but the general principle is:" },
      { type: "ul", items: [
        "**Power and Sharpness** are capped at lower tiers in earlier ages and rise as ages progress (e.g., Power 1 in Copper Age, Power 5 in Diamond Age).",
        "**Protection** is similarly capped; the team is considering making **Prot 4 with special effects** a treasure-only enchant rather than a regular one.",
        "**Mending** is allowed (it's acknowledged as basically required for the server to be playable), but the path to acquiring it is constrained - see the trade rules.",
        "**Riptide, Loyalty, and Channeling** are subject to age and Mythic restrictions - talk to a mod before assuming you can stack them.",
      ]},
    ],
  },

  "tightly-controlled": {
    title: "Tightly Controlled",
    status: "In Review",
    intro: "These items are available but come with strict rules about how, where, and when they can be used.",
    blocks: [
      { type: "h2", text: "The Wither" },
      { type: "ul", items: [
        "You may summon the Wither, but doing so in or near a residential area without warning is treated as **griefing**, not \"PvE.\"",
        "Wither summons outside Battle Time that damage another player's build are a strike.",
        "Wither summons inside Battle Time follow normal Battle Time rules - you cannot break blocks except permitted scaffolding/ladders/limited TNT, and a Wither will absolutely break blocks. Summoning a Wither during Battle Time is therefore effectively prohibited.",
      ]},
      { type: "h2", text: "TNT" },
      { type: "ul", items: [
        "Outside Battle Time: TNT is restricted to **non-griefing uses only** (terrain shaping in unclaimed Wilderness, demolition of your own builds). TNT used to damage another player's property outside Battle Time is a strike.",
        "During Battle Time: TNT is limited to **one block per life** (or one block per Battle Time - final ruling pending early-season testing).",
        "The mod team reserves the right to revoke the TNT exception entirely if it is exploited.",
      ]},
      { type: "h2", text: "Shulker shells / Shulker boxes" },
      { type: "ul", items: [
        "Shulker shells are obtainable but **restricted**. Shulker farms are not permitted by default - they tend to be controlled by one Nation, which is fine if it happens organically.",
        "In Bonkus 4, the team spawned two custom End Cities (with ships, but without elytra) somewhere in the world border. Whichever Nation controls that territory gets a **Shulker Spawner** as a Location reward.",
        "Expect a similar model in Bonkus 5: shulker access is geographic, not personal.",
        "Shulker boxes themselves are not banned - but they're subject to the same theft/looting rules as other containers.",
      ]},
    ],
  },

  "farms": {
    title: "Farms",
    status: "In Review",
    intro: "You can build whatever farms you want. Specific mechanics that would break game balance are simply disabled at the datapack level — they won't function, no rule needed.",
    blocks: [
      { type: "h2", text: "General policy" },
      { type: "p", text: "Farm building is unrestricted by rule. If a farm type is prohibited, the datapack prevents it from functioning rather than relying on a written rule. If your farm doesn't work, that's intentional — ask a mod if you're unsure why." },
      { type: "h2", text: "Disabled by datapack (not rule violations)" },
      { type: "p", text: "The following farm mechanics are blocked at the server level and simply won't work:" },
      { type: "ul", items: [
        "**TNT dupers** — disabled; they can produce infinite gunpowder which breaks war economics",
        "**Mob-stacking duplication exploits** — disabled",
        "**Chunk loaders and world-border exploit farms** — disabled for performance and balance reasons.",
        "[TBD: Additional datapack-blocked farm types to be confirmed before launch]",
      ]},
      { type: "h2", text: "Build standards" },
      { type: "ul", items: [
        "Farms should look like part of the world — visible Location features, not hidden industrial machines",
        "Hostile mob farms built in or under residential Locations are treated as griefing regardless of whether they function",
        "If you're unsure whether your farm design is appropriate for its location, ask a mod before building",
      ]},
      { type: "h2", text: "Items that spawn in vs. items you farm" },
      { type: "p", text: "Some items the team will spawn in directly rather than have players farm. Practical examples from Bonkus 4:" },
      { type: "ul", items: [
        "**Prismarine** for a guardian-themed build — spawned in (until a guardian farm was built)",
        "**Stone in massive quantities** for monumental builds — spawned in at mod discretion, only if trading would take an unreasonable amount of time and no player is selling at that scale",
        "**Specific custom items** — always spawned in by the team, never farmed",
      ]},
      { type: "p", text: "Don't demand spawn-ins. Try to build it the normal way first, and if it's genuinely unreasonable, ask a mod." },
    ],
  },

  "pvp-balance": {
    title: "PvP Balance Items",
    status: "In Review",
    intro: "These items are allowed but come with specific restrictions to keep PvP fair and narrative-driven.",
    blocks: [
      { type: "h2", text: "Bows and Tridents" },
      { type: "ul", items: [
        "Power and similar enchantments are age-gated as described in Age-Gated Items.",
        "Infinity bows and Mending bows allowed but subject to age caps.",
        "**Riptide tridents** are datapack-limited. Nations with a water specialization may have expanded access. Exact cap subject to change during early-season testing.",
      ]},
      { type: "h2", text: "Crossbows" },
      { type: "ul", items: [
        "Multishot and Piercing follow normal age caps.",
        "**Firework rockets used with crossbows** are quantity-limited at ages below Diamond. At Diamond age and above they are not a major concern and no damage nerf is planned.",
      ]},
      { type: "h2", text: "Potions" },
      { type: "ul", items: [
        "Strength 2 splash and lingering potions are governed by the custom Alchemy system - see the Alchemy documentation.",
        "Combinations that exceed normal vanilla strength (custom alchemy results) require mod review.",
      ]},
      { type: "h2", text: "Pearls" },
      { type: "ul", items: [
        "Pearls are not a normal vanilla drop here - they're a custom unlockable item (overworld + watery biomes, primary or secondary specialization).",
        "**Enderorb** is the modified Ender Pearl mechanic - see custom items.",
        "**Pearl stasis chambers are allowed.** Pearls are harder to obtain on this server (endermen and villagers do not drop/trade them normally), and stasis chambers only function while the throwing player is online — they are not a persistent resource drain.",
      ]},
    ],
  },

  "when-in-doubt": {
    title: "When in Doubt",
    status: "In Review",
    intro: "A few things that are allowed that you might expect to be banned - and the final word on what to do when you're unsure.",
    blocks: [
      { type: "h2", text: "Things that ARE allowed (that you might expect to be banned)" },
      { type: "ul", items: [
        "**PvP outside Battle Time.** Yes, this is fine. Killing other players in legitimate roleplay context is allowed. Conquest isn't.",
        "**Building anywhere in Wilderness.** As long as you're 20+ blocks from any existing Location, build whatever.",
        "**Multiple bases.** You can have bases in many places. You only get **one primary residence** per Location (idek if this is even true).",
        "**Mythic theft.** Mythics can be stolen during legitimate war, with mod approval. See War & Conflict Rules.",
      ]},
      { type: "h2", text: "Server OP and admin tools (staff transparency note)" },
      { type: "p", text: "This is included for transparency:" },
      { type: "ul", items: [
        "Server OP should not be used for personal advantage. The team has discussed a shared \"Bonkus Dev MC\" account that holds OP, so individual mods aren't tempted to give themselves items, AFK in spectator, or otherwise use OP outside their duties.",
        "Image-frame permissions are set to \"everyone\" rather than OP-only - not an exploit, by design.",
        "Mods who use OP for personal play are subject to internal discipline.",
      ]},
      { type: "h2", text: "The final rule if you are unsure" },
      { type: "ul", items: [
        "Ask in #questions before you build it.",
        "Ask a moderator before you install it.",
        "Ask a moderator before you trade for it.",
        "\"I didn't know it was banned\" is not a defense, but admitting it *before* the fact is much better than after.",
      ]},
      { type: "callout", variant: "warning", lead: "Living document.", text: "This list will be updated as new mechanics come up. The most current version of this page is the binding one - not the version that was here when you joined." },
    ],
  },

}
