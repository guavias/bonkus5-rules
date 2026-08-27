export const battles = {

  "battle-time-overview": {
    title: "Combat Phases: Unstructured PvP & Campaigns",
    status: "Published",
    intro: "Combat and conflict on Bonkus are split into two distinct phases: Unstructured PvP and Campaigns. Understanding the difference is key to surviving, expanding your nation, and keeping your loot safe.",
    blocks: [
      { type: "h2", text: "Unstructured PvP" },
      { type: "p", text: "This is the default state of the server whenever a Campaign is not actively running. The vibe is relaxed and roleplay-focused." },
      { type: "ul", items: [
        "**What you can do:** Engage in casual skirmishes, border scuffles to incite future wars, or even assassinate a friend's character for roleplay reasons.",
        "**What you CANNOT do:** You cannot steal items, blow things up, or destroy any blocks/property whatsoever. You should never feel 'on edge' during unstructured time."
      ]},
      { type: "h2", text: "The Campaign Phase" },
      { type: "p", text: "This is when you can conquer territory, hunt mobs, and raid other nations. When a Campaign begins, normal building and block-breaking are completely disabled, and you are immediately teleported to your home Nation's territory." },
      { type: "callout", variant: "warning", lead: "Binding Outcomes", text: "Whatever happens in a Campaign—territory lost, lives used, loot stolen—is binding. Territory shifts instantly upon a filled bossbar, and defeated nations become subjugated." },
    ],
  },

  "schedule": {
    title: "Campaign Schedule & Initiation",
    status: "Published",
    intro: "Campaigns do not happen randomly. They are highly coordinated to ensure maximum participation across the server.",
    blocks: [
      { type: "h2", text: "Scheduling" },
      { type: "p", text: "Campaigns occur **weekly during mod-designated hours**. To make sure everyone gets an opportunity to play, the mod team will set up server-wide votes to determine the best times for the Campaign phase to occur." },
      { type: "p", text: "Once the Campaign time officially begins, the server shifts phases. Normal building is locked, and players are ported to their territories to begin their defense or march on their enemies." },
    ],
  },

  "lives-spawning": {
    title: "Death, Lives, and Logging",
    status: "Published",
    intro: "Campaigns use a strict life system to prevent endless meat-grinder battles and ensure tactical gameplay.",
    blocks: [
      { type: "h2", text: "The 5-Life Rule" },
      { type: "p", text: "You start the Campaign with **5 lives** (subject to change). When you die, you keep your inventory, but you lose one life. **If you run out of lives and die again, you will drop all your items.**" },
      { type: "h2", text: "Respawning" },
      { type: "p", text: "During a Campaign, you do not wake up at your bed. Instead, you respawn on a **random block inside your Nation's territory**. If your territory was just conquered, you still respawn there, but you do so as a citizen of the newly ruling Country." },
      { type: "h2", text: "Late Joiners & Combat Logging" },
      { type: "ul", items: [
        "**Late Joiners:** If you log in after a Campaign has already started, you are teleported to your territory and given fewer lives, scaling proportionally with how much time is left in the Campaign.",
        "**Combat Logging:** Disconnecting during combat costs you one life automatically. When you log back in, you are teleported back to your home territory."
      ]},
      { type: "h2", text: "Building & Block Breaking" },
      { type: "p", text: "Normal building and block-breaking are **entirely disabled** during the Campaign phase. You cannot break blocks to access loot, nor can you build new fortifications on the fly." },
    ],
  },

  "battle-banners": {
    title: "Battle Banners & Territory Control",
    status: "Published",
    intro: "Battle Banners are the ultimate source of a Country's power. They dictate who captures territory, who defends it, and who holds governing authority.",
    blocks: [
      { type: "h2", text: "What is a Battle Banner?" },
      { type: "p", text: "A Battle Banner is granted to a player founding a Country. You craft a regular banner and ask a mod to convert it. You may split this banner into lower-tier banners by using **Nether Stars**." },
      { type: "h2", text: "Attacking & Equipping" },
      { type: "p", text: "To attack, you right-click the Battle Banner to place it in your **helmet slot**. **Once equipped, you cannot take the banner off until the Campaign time officially ends.** You must launch an attack by marching from your Nation's Territory into a foreign Territory." },
      { type: "h2", text: "Capturing Territory" },
      { type: "p", text: "Once inside enemy territory, a **bossbar** appears based on the territory's power. When it fills, the territory is conquered! Fortifying a territory by staying inside it after a capture increases the bossbar size, making it harder for enemies to retake." },
      { type: "p", text: "**Multi-Faction Wars:** If multiple countries attack simultaneously, multiple bossbars appear. They will capture at equal speeds if equidistant to the center, forcing players to fight each other for control." },
      { type: "h2", text: "Defending Territory" },
      { type: "p", text: "Wearing your Country's banner inside your own territory actively defends it. If both attackers and defenders are present, capture speed slows down." },
      { type: "ul", items: [
        "**Positioning:** The banner closest to the physical center of the territory captures/defends it the fastest.",
        "**Tiers:** Higher-tier banners capture the fastest.",
        "**Stacking:** Multiple banners from the same country do *not* speed up the capture."
      ]},
      { type: "h2", text: "Peacetime Banner Uses" },
      { type: "p", text: "Outside of Campaigns, the banner proves your governing power. Only players holding the ruling Country's banner can withdraw materials from controlled resource spawners." },
    ],
  },

  "stealing-mechanics": {
    title: "Stealing, Looting & Honor",
    status: "Published",
    intro: "Thievery is allowed during Campaigns, but it is heavily regulated by the Honor System to ensure fairness among players.",
    blocks: [
      { type: "h2", text: "The Rules of Thievery" },
      { type: "p", text: "You can steal items from chests, frames, armor stands, shelves, and paintings (stealing paintings is encouraged to retain their history!). However, you **cannot break blocks** to access loot, and players cannot hide loot in completely inaccessible, sealed rooms." },
      { type: "ul", items: [
        "**No Offline Raiding:** Offline raiding is strictly forbidden. Stealing must happen within active roleplay.",
        "**Ample Opportunity:** You must notify the target before you steal so they have time to physically stop you (e.g., hit you). Grabbing items and immediately escaping before a reaction is unfair play.",
        "**Looting the Dead:** You are fully allowed to loot dead players if they have run out of lives and dropped their inventory."
      ]},
      { type: "h2", text: "The Honor System & Signature Items" },
      { type: "p", text: "After stealing, you must tell the victim exactly what was taken. If you steal a specific item they really care about, they can ask for it back, and **you must acquiesce**. However, abusing the ability to ask for things back will result in losing your privilege to steal." },
      { type: "p", text: "**Signature Items:** You may NEVER take a player's Signature Item. These are special items given for building on the server, balanced specifically around their roleplay character." },
    ],
  },

  "setpiece-battles": {
    title: "Subjugation, Rebels & Becoming Nationless",
    status: "Published",
    intro: "When a nation falls, its people are subjugated by the victors. This section covers the political fallout of a conquered territory.",
    blocks: [
      { type: "h2", text: "Subjugation" },
      { type: "p", text: "If your Nation is conquered, you immediately become a citizen of the ruling Country. You can negotiate with your new rulers, or wait until the next Campaign session to raise your own Battle Banner and rebel! While subjugated, your Nation's resource spawners can only be accessed by the ruling Country's banner holder." },
      { type: "h2", text: "Exile by Force" },
      { type: "p", text: "If a Country leader is dealing with a rebellious player in a conquered nation, they can handle it by force. If the leader **kills the rebel while wearing a Battle Banner**, that player is stripped of their status and becomes **Nationless**." },
      { type: "h2", text: "The Nationless Experience" },
      { type: "p", text: "Nationless players can still fight and steal during Campaigns, but they **cannot wear Battle Banners** or conquer territory. They respawn in random locations in the unclaimed wilderness." },
      { type: "ul", items: [
        "**Redemption:** To rejoin a nation, you need explicit permission from both Server Mods and the ruling Country of that nation.",
        "**Starting Fresh:** Nationless players may build in the wilderness to establish a brand-new Nation, requiring no permission from anyone."
      ]},
    ],
  },

  "pve-defensive-mobs": {
    title: "Campaign Mobs & Point System Entities",
    status: "Published",
    intro: "Through the Building Points Economy, nations can purchase custom Mobs and Campaign elements to fortify their lands or assist in battle.",
    blocks: [
      { type: "h2", text: "Purchasing Defense" },
      { type: "p", text: "Points awarded for building (Residential, Military, Cultural, Economic) can be spent in the Point Shop to influence your Campaign defenses." },
      { type: "h2", text: "Custom Mobs" },
      { type: "p", text: "Nations can purchase Custom Mobs to populate their lands. There is a hard limit of 2 Passive and 2 Combat (Campaign) Custom Mobs per nation." },
      { type: "ul", items: [
        "**Passive Custom Mob:** Costs 5 Residential points.",
        "**Combat Custom Mob:** Costs 3 Military points."
      ]},
      { type: "h2", text: "Campaign Mob Spawns" },
      { type: "p", text: "You can purchase dedicated Campaign Mob Spawns to overwhelm attackers or defend key points. Prices may scale depending on the power of the mob requested." },
      { type: "ul", items: [
        "**Cost:** 1 Residential Point + 1 Military Point per spawn.",
        "**Limit:** Maximum of 50 Campaign Mob Spawns allowed."
      ]},
      { type: "h2", text: "Capture Timers" },
      { type: "p", text: "To give defenders a heavy advantage, you can spend **1 Military Point** to add **+1000** to your territory's Capture Timer (up to a limit of +100,000), making it incredibly tedious and difficult for an enemy to out-wait your defenses." },
    ],
  },

};