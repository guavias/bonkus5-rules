export const battles = {

  "battle-time-overview": {
    title: "Battle Time Overview",
    status: "In Review",
    intro: "Battle Time is Bonkus 5's organized war system. This page gives the high-level summary; subsequent pages cover each aspect in detail.",
    blocks: [
      { type: "h2", text: "What is Battle Time?" },
      { type: "p", text: "**Battle Time** is a scheduled, unstructured PvP event between the entire server in a declared war. It is distinct from raids. Battle Time is the primary mechanism by which territory is conquered and wars are decided." },
      { type: "p", text: "Battle Time is not spontaneous - it is **scheduled in advance**, uses **defined rules**, and has **binding outcomes**. Participating in Battle Time means accepting those outcomes." },
      { type: "h2", text: "The battle session structure" },
      { type: "ul", items: [
        "**first bullet point** info 1",
        "**second bullet point** info 2",
        "**singma bals** ehehehehhe",
      ]},
      { type: "h2", text: "What can be won and lost" },
      { type: "ul", items: [
        "**Territory** - chunks can be captured and transferred to the winning nation",
        "**Resources** - the losing side's battle chest is looted by winners (see Stealing Mechanics)",
        "**Banners** - capturing an enemy banner is a symbolic victory with narrative weight",
        "**Peace terms** - a decisive loss may force a nation to accept a peace treaty",
      ]},
      { type: "h2", text: "Who can participate" },
      { type: "p", text: "Any whitelisted player may join their side's battle. There is no spectator mode during active battle - if you are on the server during a battle, you must be participating or logged out." },
      { type: "h2", text: "Battle fairness" },
      { type: "p", text: "The mod team actively monitors Battle Time for rule violations, exploits, and fairness issues. Moderators may pause or restart a battle if a technical issue or violation is discovered mid-session." },
      { type: "callout", variant: "warning", lead: "Battle Time is binding.", text: "Whatever happens in a Battle Time session - territory lost, banners captured, lives used - is binding. You cannot appeal the outcome because you 'didn't play well.' You can only appeal if a rules violation occurred." },
    ],
  },

  "schedule": {
    title: "Schedule & How It Starts (PLEASE FILL OUT)",
    status: "In Review",
    intro: "Battle Time follows a defined scheduling process. Nothing happens without coordination. This page explains the process from war declaration to first battle.",
    blocks: [
      { type: "h2", text: "Scheduling" },
      { type: "p", text: "We will have 3 scheduled battle times during the week. 2 of those times will be determined based on how many players can make it. The third will be based on how many players **cannot** make the other two battle times."},
    ],
  },

  "lives-spawning": {
    title: "Lives, Spawning & Building Rules",
    status: "In Review",
    intro: "During Battle Time, special rules replace normal survival mechanics. This page details how lives, respawning, and building work in battle.",
    blocks: [
      { type: "h2", text: "The lives system" },
      { type: "p", text: "Each player in a battle session has a **limited number of lives**. When you run out of lives, you may still fight, but you drop your inventory upon death (meaning other players can loot you)." },
      { type: "ul", items: ["In a **setpiece battle**: 5 lives are given per player"] },
      { type: "h2", text: "Respawning" },
      { type: "p", text: "When you die in battle (and still have lives remaining), you respawn at a safe point in your location's nation borders. You maintain with your pre-battle loadout assuming you did not lose all lives during battle (you keep your inventory on death)"},
      { type: "h2", text: "Gear and loadout" },
      { type: "p", text: "Before the battle, each player prepares a loadout from their faction's resources. Your loadout is your responsibility. Gear is **not provided by the mod team**." },
      { type: "p", text: "We are considering limiting certain items for battles. New information to come. We welcome any questions or ideas regarding this." },
      { type: "h2", text: "Building during battle" },
      { type: "p", text: "Building during a battle is **permitted but restricted**:" },
      { type: "ul", items: [
        "You may **bridge, pillar, or barrier** using **SCAFFOLDING** and/or **LADDERS** ONLY.",
        "You may **repair** your team's structures during the battle. Keep in mind that this may not be possible due to time restrictions.",
        "You may NOT build new major structures (fortifications, walls larger than 10 blocks) during the active battle phase",
        "You may NOT use lava, or water buckets offensively",
        "Enemy-built barriers and bridges may be destroyed",
      ]},
      { type: "h2", text: "Going offline during battle and joining late" },
      { type: "p", text: "Logging off during an active battle session counts as using one of your lives. Disconnects due to server issues are exempt - contact a mod if you have a disconnect and wish to rejoin." },
      { type: "p", text: "If you are joining a battle late, you are subject to starting with less lives than normal." },

    ],
  },

"battle-banners": {
    title: "Battle Banners & Tiers",
    status: "In Review",
    intro: "Battle banners are the seat of a country's power on the map. They capture territory in battle and collect resources in peacetime.",
    blocks: [
      { type: "h2", text: "What is a battle banner?" },
      { type: "p", text: "A **battle banner** is a custom country item that has two jobs. In battle, it lets you capture enemy territory. Out of battle, it acts as a resource collectoor **ONLY** in territory you have already conquered." },
      { type: "p", text: "Every country gets a battle banner when it is founded. The banner can be split into weaker copies with a **nether star**, and weaker copies can be rejoined back into stronger ones, so a country can have several banners on the map at once at different strengths." },

      { type: "h2", text: "In battle: conquest" },
      { type: "p", text: "While wearing your country's battle banner during battle time:" },
      { type: "ul", items: [
        "You are **slowed down**. Banner-bearing is dangerous and conspicuous.",
        "You can stand inside an enemy territory's borders to **tick up an occupation timer** against that territory.",
        "If your occupation timer reaches the territory's threshold and is the highest of any country contesting it, the territory is captured and changes hands.",
      ]},
      { type: "p", text: "Occupation timers persist between battle times. Conquest is incremental - you don't have to capture a territory in a single session." },

      { type: "h2", text: "Out of battle: resource collection" },
      { type: "p", text: "Outside of battle time, a battle banner can be used as a **resource collector** - but **only in territory your country has already conquered.** You cannot resource-collect with a banner in neutral or enemy territory." },
      { type: "p", text: "This gives banners a peacetime purpose and rewards countries that hold their conquered territory long-term." },

      { type: "h2", text: "Banner tiers (0–2)" },
      { type: "p", text: "Banners have a tier from **0 to 2**. **Tier 0 is the strongest.** A country starts with one tier 0 banner." },
      { type: "ul", items: [
        "**Tier 0 (Strongest)** - full contribution to occupation timer. The original banner.",
        "**Tier 1** - partial contribution to occupation timer. A weaker copy.",
        "**Tier 2 (Weakest)** - minimal contribution to occupation timer. The weakest split.",
      ]},
      { type: "p", text: "Lower tier numbers mean a stronger banner. The exact contribution math is on the Capture Mechanics page." },

      { type: "h2", text: "Splitting and rejoining banners" },
      { type: "p", text: "Battle banners can be **split** into multiple weaker banners and **rejoined** back into stronger ones. This lets a country choose between concentrating force in one place or spreading presence across many." },
      { type: "ul", items: [
        "Splitting a tier 0 banner produces tier 1 banners.",
        "Splitting a tier 1 banner produces tier 2 banners.",
        "Tier 2 banners cannot be split further.",
        "Rejoining is the reverse - combine matching-tier banners to step up one tier.",
      ]},
      { type: "p", text: "[Under review] The original plan was to use **nether stars** for splitting/rejoining. The team is considering **diamonds** instead. Final mechanic to be confirmed before launch." },

      { type: "h2", text: "Defensive positioning" },
      { type: "p", text: "You don't have to wait for an attack to use your banner. **Wearing your banner in your own territory builds up an occupation lead** before attackers arrive. This is the defender's biggest advantage." },
      { type: "p", text: "When an attacker shows up, your existing lead has to be overcome before they can capture. The further they are from the center of your territory and the higher their banner's tier number (the weaker their banner), the slower they tick." },
      { type: "p", text: "Two positioning factors matter for who wins an occupation contest:" },
      { type: "ul", items: [
        "**Distance from the territory's center.** Closer = stronger contribution per tick. A banner-bearer at the throne contributes more than one at the city wall.",
        "**Banner tier.** Lower tier number = stronger contribution per tick. A tier 0 banner at the wall may still outpace a tier 2 banner at the center.",
      ]},

      { type: "h2", text: "How to stop a conquest" },
      { type: "p", text: "If an enemy is wearing a banner inside your territory and ticking up their occupation timer, you have three options:" },
      { type: "ul", items: [
        "**Kill the banner-wearer.** The slow effect makes them easier to catch.",
        "**Knock them out of the territory's borders.** They can't tick from outside the border - use knockback, push them with snowballs, anything that gets them across the line.",
        "**Out-position them.** Wear your own banner closer to the center, ideally with a lower tier, so your tick rate exceeds theirs and you out-occupy them.",
      ]},

      { type: "h2", text: "Banner rules" },
      { type: "ul", items: [
        "Banners can only be worn in the head slot. They cannot be placed as a block.",
        "Banners cannot despawn or be destroyed by fire, lava, cactus, or explosion.",
        "The only way to destroy a banner is to drop it into the void.",
        "If a banner-wearer dies, the banner stays in their inventory - it does not drop.",
        "Battle banners cannot be placed in ender chests.",
        "If a country loses all its banners, it cannot exercise its banner powers until it splits, recovers, or replaces one.",
      ]},
    ],
  },

  "stealing-mechanics": {
    title: "Stealing Mechanics",
    status: "In Review",
    intro: "How stealing works during and after battle, and what happens to the resources in a captured zone.",
    blocks: [
      { type: "h2", text: "Capturing territory" },
      { type: "p", text: "Winning a battle session captures the battle's **contested zone** - the area of map defined for that session. The captured zone transfers to the winning nation's control after the session ends." },
      { type: "h2", text: "What can be looted" },
      { type: "p", text: "After a successful capture, the winning faction may loot the **battle chest** - a designated chest placed by the losing faction before the battle begins. The battle chest must contain:" },
      { type: "ul", items: [
        "A minimum 25% of the losing faction's total stored resources (verified by mod team before battle)",
        "Any custom items the losing faction declared as stake items",
        "The losing faction's supply chest contents from the battle arena",
      ]},
      { type: "h2", text: "The battle chest" },
      { type: "p", text: "Before every battle session, **each faction deposits a battle chest** in a designated, sealed location. The mod team holds both chests in escrow during the battle. The winner receives the loser's battle chest. The loser retains their own." },
      { type: "callout", variant: "warning", lead: "Underfilling the battle chest", text: "Intentionally underfilling your battle chest (putting fewer resources than required) is a form of cheating. The mod team verifies chest contents. Violations result in a strike and forfeiture of additional resources." },
      { type: "h2", text: "Capturing the hub" },
      { type: "p", text: "The world hub cannot be captured - it remains neutral international territory for the entire season. Any war that reaches the hub border triggers an automatic ceasefire and mandatory peace talks mediated by the mod team." },
      { type: "h2", text: "Settlement captures" },
      { type: "p", text: "If a nation captures a **settlement** (a country's primary base), additional consequences apply:" },
      { type: "ul", items: [
        "The captured country must submit to the victor's terms for the remainder of the season OR join the war on the defender's side to retake it",
        "The victor may install a **puppet leader** in the captured country",
        "The captured country retains 50% of its resources - the victor takes the rest",
        "Mod team facilitates the transition and ensures no player is left without any resources",
      ]},
    ],
  },

  "setpiece-battles": {
    title: "Setpiece Battles",
    status: "In Review",
    intro: "Setpiece battles are the climactic, high-stakes engagements that decide wars. They follow special rules and have binding, season-altering outcomes.",
    blocks: [
      { type: "h2", text: "What is a setpiece battle?" },
      { type: "p", text: "A **setpiece battle** is the **deciding engagement** in a war (add more here)" },
      { type: "h2", text: "When setpiece battles happen" },
      { type: "ul", items: [
        "first bullet",
        "second)",
        "third",
      ]},
      { type: "h2", text: "Setpiece battle rules" },
      { type: "p", text: "Setpiece battles differ from standard sessions in the following ways:" },
      { type: "ul", items: [
        "**item 1** - basdnhfjk",
        "**item 2** pedfgh",
        "**item 3** -blehs",
      ]},
      { type: "h2", text: "Setpiece narrative" },
      { type: "p", text: "Setpiece battles are expected to be **documented and narrated**. Both factions are encouraged to write a post-battle summary from their perspective. The mod team will compile an official historical record of each setpiece battle on the official @history.of.bonkus Instagamm acco8tn." },
      { type: "h2", text: "Outcome weight" },
      { type: "p", text: "A setpiece battle win is a decisive victory. The losing nation cannot declare another war for **temproary period of itme** after losing a setpiece. They must accept the winner's peace terms (mod team ensures terms are not impossibly punishing)." },
    ],
  },

  "pve-defensive-mobs": {
    title: "PvE & Defensive Mobs",
    status: "In Review",
    intro: "Battle Time isn't purely PvP. Defensive mob systems and PvE elements add depth and danger to both standard and setpiece battles.",
    blocks: [
      { type: "h2", text: "PvE in battles" },
      { type: "p", text: "Certain battle arenas include active PvE elements - mobs that spawn naturally or are placed by the mod team as part of the battle design. These mobs affect both sides equally and must be managed alongside enemy players." },
      { type: "h2", text: "Natural mob spawning" },
      { type: "p", text: "Natural mob spawning is **enabled** during all battle sessions unless the mod team specifies otherwise. Mobs spawn at their standard conditions (darkness, night). Battles that stretch into the in-game night become more dangerous." },
      { type: "p", text: "**Strategy note:** Controlling the night - whether through lighting your spawn point or using mob behavior to push enemies toward spawning mobs - is a legitimate tactic." },
      { type: "h2", text: "Boss events" },
      { type: "p", text: "Certain setpiece battles feature a **boss event** - a mod-spawned or enhanced boss mob that both sides must deal with as part of the battle objectives. Boss events are announced as part of the battle's special objectives when the session is scheduled." },
    ],
  },

}
