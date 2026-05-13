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
        "This is enforced by a repeating command-block check.",
        "Whether Elytra are usable inside the End at all is age-gated - see the Age-Gated page.",
        "**Reasoning:** Elytra collapse distance, trivialize fortifications, ruin the value of cavalry and ships, and make every conflict a flying duel.",
      ]},
      { type: "h2", text: "Maces (recipe disabled)" },
      { type: "ul", items: [
        "**The mace crafting recipe is disabled.** You cannot craft a mace.",
        "There is exactly **one World Mace** on the server. It is a Mythic-tier item obtainable through specific event mechanics (e.g., Trial Chambers or a special villager).",
        "The World Mace can be lost, stolen, or transferred, but never duplicated. If it is destroyed or voided, it stays gone.",
        "**Reasoning:** The mace at full enchantment trivializes PvP. One world-level mace creates story; uncapped maces ruin combat.",
      ]},
      { type: "h2", text: "End Crystals" },
      { type: "ul", items: [
        "**Reasoning:** Excessive destruction.",
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
        "Earlier-age players may not store or use higher-age materials, even if acquired through theft. Found Netherite during the Iron Age? Hold it. Don't equip it.",
      ]},
      { type: "h2", text: "Dimensions" },
      { type: "ul", items: [
        "**The Nether** is locked until the Copper+Nether Age. Until then, nether portals do not exist on the server (see the Magic Stations section).",
        "**The End** is locked until the Diamond+End Age. Until then, end portals are inert.",
        "After the End is unlocked, Elytra usage is permitted inside the End only - still kill-on-equip in the Overworld and Nether.",
      ]},
      { type: "h2", text: "Enchantments" },
      { type: "p", text: "Enchantments scale with the age. The exact caps are tuned by the team, but the general principle is:" },
      { type: "ul", items: [
        "**Power and Sharpness** are capped at lower tiers in earlier ages and rise as ages progress (e.g., Power 1 in Copper Age, Power 5 in Diamond Age).",
        "**Protection** is similarly capped; the team is considering making **Prot 5 with special effects** a treasure-only enchant rather than a regular one.",
        "**Mending** is allowed (it's acknowledged as basically required for the server to be playable), but the path to acquiring it is constrained - see the trade rules.",
        "**Riptide, Loyalty, and Channeling** are subject to age and Mythic restrictions - talk to a mod before assuming you can stack them.",
      ]},
      { type: "h2", text: "Magic Stations (the four restricted utility blocks)" },
      { type: "p", text: "These four items are tied to Location tiers and ages, not to individual crafting. Individual players cannot just craft and place these - they live at Locations and serve the Location's residents." },
      { type: "ul", items: [
        "**Enchanting Table** - unlocked at launch, but available as a Location magic station starting at Village tier and up. Limited number per Country.",
        "**Brewing Stand** - same: available as a Village-tier Location magic station from launch.",
        "**Nether Portal** - unlocked when the Nether Age begins. Available as a Location magic station from then on.",
        "**Ender Chest** - unlocked when the Nether Age begins. Available as a Location magic station. See the Tightly Controlled page for more.",
      ]},
    ],
  },

  "tightly-controlled": {
    title: "Tightly Controlled",
    status: "In Review",
    intro: "These items are available but come with strict rules about how, where, and when they can be used.",
    blocks: [
      { type: "h2", text: "Ender Chests" },
      { type: "ul", items: [
        "**Ender chests are not personal inventory.** They cannot be placed by individual players in their own bases.",
        "Ender chests are a **Location-level magic station** - a Location chooses to have an Ender Chest as one of its limited magic-station slots.",
        "**No ender chests during Battle Time.** Ender chest access is disabled during Battle Time to prevent off-site inventory swapping.",
        "Battle Banners cannot be placed in ender chests at any time.",
        "**Reasoning:** Ender chests fundamentally break loot, theft, and war - if everyone has portable infinite storage, the one-third rule and stealing rules become meaningless.",
      ]},
      { type: "h2", text: "Beacons" },
      { type: "ul", items: [
        "Beacons are not banned, but **building a beacon requires Wither-killing** - see the Wither section.",
        "Beacons in residential areas should be screened/covered - a visible beacon counts as a feature of the Location and is part of its lore.",
      ]},
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
        "In Bonkus 4, the team spawned two custom End Cities (without ships) somewhere in the world border. Whichever Nation controls that territory gets a **Shulker Spawner** as a Location reward.",
        "Expect a similar model in Bonkus 5: shulker access is geographic, not personal.",
        "Shulker boxes themselves are not banned - but they're subject to the same theft/looting rules as other containers.",
      ]},
      { type: "h2", text: "Chorus Fruit / End Stone" },
      { type: "ul", items: [
        "Chorus fruit is available only after the End is unlocked.",
        "Once unlocked, the team often makes **End Stone Spawners** available at controlling Locations - e.g., 32 End Stone for one popped chorus fruit.",
        "Chorus fruit teleportation is allowed during normal play but **disabled during Battle Time** (mechanism TBD).",
      ]},
    ],
  },

  "farms": {
    title: "Farms",
    status: "In Review",
    intro: "Farms sit at the intersection of grinding (which we don't want) and a functioning economy (which we do want). These rules clarify where the line is.",
    blocks: [
      { type: "h2", text: "Generally allowed" },
      { type: "ul", items: [
        "**Crop farms.** Wheat, carrots, potatoes, beetroot, etc. Build at any scale you want.",
        "**Animal farms.** Cows, pigs, chickens, sheep - the normal kind. No murder factories.",
        "**Tree farms.** Manual or simple semi-automatic.",
        "**Small mob farms** - a few drops a session, not industrial.",
      ]},
      { type: "h2", text: "Case by case (talk to a mod first)" },
      { type: "ul", items: [
        "**Iron farms.** Allowed in limited numbers - in Bonkus 4 there were two. The team tracks who has one; a third is usually denied.",
        "**Gold farms.** Likely allowed only when justified by lore (a Country has the Nether) and only if it can be defended in war - no AFK gold farms.",
        "**Guardian farms.** One has been approved in past play for prismarine supply. Future ones are case-by-case and must look nice (no eyesores).",
        "**XP farms.** Discouraged. The economy on Bonkus uses Enchanted Book Spawners at Locations rather than personal XP grinding.",
      ]},
      { type: "h2", text: "Banned outright" },
      { type: "ul", items: [
        "**AFK farms of any kind.** If the design intent is to leave it running while you sleep, it's not allowed.",
        "**TNT dupers** (banned for game-balance reasons - they can produce infinite gunpowder).",
        "**Slime/Honey-block flying machines** as freight or transit. They count as movement-mod-like.",
        "**Wither cage farms** - not for the wither skeleton skulls, not for the netherite.",
        "**Hostile mob farms in or under residential Locations.** These count as griefing.",
        "**Chunk loaders / world eaters / world-border exploit farms.**",
        "**Mob-stacking duplication exploits.**",
      ]},
      { type: "h2", text: "Farm approval process" },
      { type: "ol", items: [
        "Before building a farm that isn't obviously a crop/animal farm, post in [TBD: #questions or #council] with the design and reasoning.",
        "A moderator will approve, deny, or ask for modifications.",
        "Build the farm to look like part of the world - farms are visible Location features, not hidden machines. An ugly hidden farm gets torn down (with notice).",
      ]},
      { type: "h2", text: "Items that spawn in vs. items you farm" },
      { type: "p", text: "Some items the team will spawn in directly rather than have players farm. Practical examples from Bonkus 4:" },
      { type: "ul", items: [
        "**Prismarine** for a guardian-themed build - spawned in (until a guardian farm was built).",
        "**Stone in massive quantities** for monumental builds - spawned in at mod discretion, only if trading would take \"ages\" and no player is selling stone at that scale.",
        "**Specific custom items** - always spawned in by the team, never farmed.",
      ]},
      { type: "p", text: "Don't demand spawn-ins. The right path is: try to build it the normal way first, and if it's genuinely unreasonable, ask a mod." },
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
        "**Riptide tridents** in PvP are restricted - the team considers them a movement exploit similar to Elytra. Talk to a mod before building a Riptide-based build.",
      ]},
      { type: "h2", text: "Crossbows" },
      { type: "ul", items: [
        "Multishot and Piercing follow normal age caps.",
        "**Firework rockets used with crossbows are limited** - fireworks are \"more OP than expected\"; expect a damage nerf in Bonkus 5.",
      ]},
      { type: "h2", text: "Snowballs and Eggs" },
      { type: "ul", items: [
        "Allowed but cannot be the only weapon you use - spamming snowballs as a primary PvP strategy is a soft strike.",
      ]},
      { type: "h2", text: "Potions" },
      { type: "ul", items: [
        "Strength 2 splash and lingering potions are governed by the custom Alchemy system - see the Alchemy documentation.",
        "Combinations that exceed normal vanilla strength (custom alchemy results) require mod review.",
      ]},
      { type: "h2", text: "Pearls" },
      { type: "ul", items: [
        "Pearls are not a normal vanilla drop here - they're a custom unlockable item (overworld + watery biomes, primary or secondary specialization).",
        "**Enderdust** is the modified Ender Pearl mechanic - see custom items.",
        "No infinite-pearl exploits, including stasis chambers.",
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
        "**Multiple bases.** You can have bases in many places. You only get **one primary residence** per Location.",
        "**Trading with banned players' former Nations.** A Country can absorb a defunct Nation that previously belonged to a banned player. The Nation's items don't carry the ban.",
        "**Mythic theft.** Mythics can be stolen during legitimate war, with mod approval. See War & Conflict Rules.",
      ]},
      { type: "h2", text: "Server OP and admin tools (staff transparency note)" },
      { type: "p", text: "This is included for transparency:" },
      { type: "ul", items: [
        "Server OP should not be used for personal advantage. The team has discussed a shared \"Bonkus Dev MC\" account that holds OP, so individual mods aren't tempted to give themselves items, AFK in spectator, or otherwise use OP outside their duties.",
        "Image-frame permissions are set to \"everyone\" rather than OP-only - not an exploit, by design.",
        "Mods who use OP for personal play are subject to internal discipline.",
      ]},
      { type: "h2", text: "The final rule" },
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
