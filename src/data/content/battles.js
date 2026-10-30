export const battles = {

  "campaign-overview": {
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
      { type: "p", text: "This is when you can conquer territory, hunt roaming minibosses, and raid other nations. When a Campaign begins, normal building and block-breaking are completely disabled, and you are immediately teleported to your home Nation's territory." },
      { type: "callout", variant: "warning", lead: "Binding Outcomes", text: "You ought to participate in Campaigns to gain territories and make more useful decisions." },
    ],
  },

  "schedule": {
    title: "Campaign Schedule & Initiation",
    status: "Published",
    intro: "Campaigns follow the current mod-announced schedule - **7pm CST on Tuesdays and Saturdays**.",
    blocks: [
      { type: "h2", text: "Scheduling" },
      { type: "p", text: "Once the Campaign time officially begins, the server shifts phases. Normal building is locked (see building and block breaking below) and players are automatically ported to their territories to begin their defense or march on their enemies. If you aren't on time, you don't get as many lives as you would if you were ready from the get-go." },
    ],
  },

  "lives-spawning": {
    title: "Lives",
    status: "Published",
    intro: "Campaigns use a per player number of lives.",
    blocks: [
      { type: "h2", text: "The 10-Life Rule" },
      { type: "p", text: "You start the Campaign with 10 lives. When you die, you keep your inventory, but you lose one life. **If you run out of lives, you can still play, but you'll drop all your items.**" },
      { type: "h2", text: "Respawning" },
      { type: "p", text: "During a Campaign, you do not wake up at your bed. Instead, you respawn on a **random block inside your Nation's territory**. If your territory was just conquered, you still respawn there, but you do so as a citizen of the newly ruling Country." },
      { type: "h2", text: "Late Joiners & Combat Logging" },
      { type: "ul", items: [
        "**Late Joiners:** If you log in after a Campaign has already started, you are teleported to your territory and given fewer lives, scaling proportionally with how much time is left in the Campaign.",
        "**Combat Logging:** Disconnecting during combat costs you one life automatically. When you log back in, you are teleported back to your home territory."
      ]},
      { type: "h2", text: "Building & Block Breaking" },
      { type: "p", text: "Normal building and block-breaking are **entirely disabled** during the Campaign phase. Scaffolding, Ladders, TNT, Water Buckets, Lava Buckets, and Boats are the exception to this. You may place unlimited ladders, 64 scaffolding, 1 TNT, 1 water bucket, 1 lava bucket, and 1 boat." },
    ],
  },

  "battle-banners": {
    title: "Battle Banners & Territory Control",
    status: "Published",
    intro: "Battle Banners are the ultimate source of a Country's power. They dictate who captures territory, who defends it, and who holds governing authority.",
    blocks: [
      { type: "h2", text: "What is a Battle Banner?" },
      { type: "p", text: "A Battle Banner is granted to a player founding a Country. You craft a regular banner and ask a moderator to convert it. You may split and recombine this banner into lower-tier banners by using different items with them in the crafting table. For now, **Diamonds**" },
      { type: "h2", text: "Attacking & Equipping" },
      { type: "p", text: "To attack, you right-click the Battle Banner to place it in your **helmet slot**. You can only do this in your nation's territory. **Once equipped, you cannot take the banner off until the Campaign time officially ends.** You must launch an attack by marching from your Nation's Territory into a foreign Territory." },
      { type: "h2", text: "Capturing Territory" },
      { type: "p", text: "Once inside enemy territory, a **bossbar** appears based on the territory's power. When it fills, the territory is conquered! Fortifying a territory by staying inside it after a capture increases the bossbar size, making it harder for enemies to retake." },
      { type: "p", text: "**Multi-Faction Wars:** If multiple countries attack simultaneously, multiple bossbars appear. Whoever is closest to the territory's center will capture fastest proportionally to the distance between them and other nations." },
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
    intro: "Thievery is allowed during Campaigns, but whoever you're stealing from needs to be online.",
    blocks: [
      { type: "h2", text: "The Rules of Thievery" },
      { type: "p", text: "You can steal items from chests, frames, armor stands, shelves, and paintings (stealing paintings is encouraged to retain their history!). However, you **cannot break blocks** to access loot, and players cannot hide loot in completely inaccessible, sealed rooms." },
      { type: "ul", items: [
        "**No Offline Raiding:** Offline raiding is strictly forbidden. Stealing must happen within active roleplay.",
        "**Blowing Up a Wall:** You can blow up a wall with permission.",
        "**Looting the Dead:** You are fully allowed to loot dead players if they have run out of lives and dropped their inventory. You must tell the dead person what you stole afterwards."
      ]},
      { type: "h2", text: "Trapped Chests and Snooping" },
      { type: "p", text: "Trapped chests are locked during normal gameplay. Only the players in that nation may open them or a player carrying that country's banner. During campaigns, they will be unlocked and you may steal from them." },
      { type: "h2", text: "Campaign Stealing Drawbacks" },
      { type: "p", text: "When you open a chest in a different nation's territory, it will log it and signal to the nation's players online." },
      { type: "p", text: "When stealing during the campaign, if you die, the items return to the chest." },
      { type: "p", text: "Stealing during the campaign will encumber you with slowness as you take more stuff." },
      { type: "h2", text: "The Honor System & Signature Items" },
      { type: "p", text: "After stealing, you must tell the victim exactly what was taken. If you steal a specific item they really care about, they can ask for it back out of roleplay, and **you must agree to return it**. However, abusing the ability to ask for things back will result in losing your privilege to steal." },
      { type: "p", text: "**Signature Items:** You may NEVER take a player's Signature Item, they are balanced specifically around their roleplay character." },
    ],
  },

  "campaigns": {
    title: "Being Conquered",
    status: "Published",
    intro: "When a nation falls, its people are subjugated by the victors. This section covers the political fallout of a conquered territory.",
    blocks: [
      { type: "h2", text: "Subjugation" },
      { type: "p", text: "If your Nation is conquered, you immediately become a citizen of the ruling Country. You can negotiate with your new rulers, or wait until the next Campaign session to raise your own Battle Banner and rebel! While subjugated, your Nation's resource spawners can only be accessed by the ruling Country's banner holder." },
      { type: "h2", text: "Exile by Force" },
      { type: "p", text: "If a Country leader is dealing with a rebellious player in a conquered nation, they can handle it by force. If the leader **kills the rebel while wearing a Battle Banner**, that player is stripped of their status and becomes **Nationless**." },
      { type: "h2", text: "The Nationless Experience" },
      { type: "p", text: "Nationless players can still fight during Campaigns, but they **cannot wear Battle Banners, steal or conquer territory.** They respawn in random locations in the unclaimed wilderness." },
      { type: "ul", items: [
        "**Redemption:** To rejoin a nation, the holder of the banner can send you an invite by using the command /invite <nation> <player>",
        "**Starting Fresh:** Nationless players may build in the wilderness to establish a brand-new Nation, requiring no permission from anyone."
      ]},
    ],
  },

  "point-shop": {
  title: "The Point Shop: Spendable Rewards",
  status: "Published",
  intro: "Through the Building Points Economy, nations can spend their accumulated points across Residential, Military, Cultural, and Economic categories to purchase specialized spawners, territorial buffs, custom items, and expansion privileges. Note: Points can only be spent within the nation's boundaries, and only the nation's banner holder has authority to spend them.",
  blocks: [
    { type: "h2", text: "Spawners & Production" },
    { type: "p", text: "Automate raw materials and enchanted items for your nation." },
    { type: "ul", items: [
      "**Resource Spawners:** Generates basic building blocks or raw ingredients (clay balls, bricks, sand, wood logs, etc.). *Note: Requires inputs of precious materials like copper, iron, gold, or diamond to function.* — **Cost:** 1 Economic + 2 Residential Point(s) | **Limit:** Max 3",
      "**Enchanted Book Spawner:** Produces enchanted books, with certain treasure enchants tied to your nation's theme (e.g., Fire/Nether themed books restricted to Nether nations). Books typically require fuel like a diamond block per book. — **Cost:** 2 Cultural + 2 Economic + 2 Residential Point(s) | **Limit:** Max 2"
    ]},

    { type: "h2", text: "Magic & Custom Items" },
    { type: "p", text: "Enhance your nation's magical repertoire and customize specialized gear." },
    { type: "ul", items: [
      "**Alchemical Precursor:** — **Cost:** 2 Cultural + 2 Economic Point(s) | **Limit:** Max 1",
      "**Spell Focus:** — **Cost:** 3 Cultural + 2 Economic + 1 Military Point(s) | **Limit:** Max 1",
      "**Combat Item:** Themed item for your area. Could be something like a Totem of Undying, a Happy Ghast, or a Creaking Heart, or custom equipment such as a Copper Shield or Soul Orb. — **Cost:** 1 Cultural + 2 Economic + 3 Military Point(s) | **Limit:** Max 1"
    ]},

    { type: "h2", text: "Cosmetics & Customizations" },
    { type: "p", text: "Express your nation's unique culture with customized art, music, equipment styling, and brewing." },
    { type: "ul", items: [
      "**Custom Painting:** — **Cost:** 1 Point (of any type) x Block Area (e.g., a 2x2 painting costs 4 Points of any type) | **Limit:** No Limit",
      "**Custom Disk:** — **Cost:** 1 Cultural Point per minute | **Limit:** No Limit",
      "**Alcohol:** — **Cost:** 1 Economic + 1 Cultural Point(s) | **Limit:** Max 3",
      "**Wax Seal:** — **Cost:** 1 of Cultural, Economic, or Military Point | **Limit:** No Limit",
      "**Custom Coin Die:** Allows minting national currency in Copper, Iron, Gold, or Netherite. Base cost is **3 Economic + 3 Cultural + 3 Military + 3 Residential Point(s)**. Additional material costs: +0 (Copper), +3 Residential (Iron), +3 Economic (Gold), or +3 Military (Netherite, Nether nations only). | **Limit:** Max 1",
      "**Trim Template:** Custom or specialized armor trim template for nation gear customization. — **Cost:** 3 Economic + 3 Cultural + 3 Military Point(s)",
      "**Trim Material:** Unique trim material palette/item for nation armor. — **Cost:** 3 Economic + 2 Cultural + 1 Military Point(s)"
    ]},

    { type: "h2", text: "Territory & Defense" },
    { type: "p", text: "Fortify your lands and raise campaign defenses against invaders." },
    { type: "ul", items: [
      "**+1000 Capture Timer:** Extends the time needed for enemy forces to capture your land. — **Cost:** 1 Military Point per +1000 | **Limit:** Max +20,000 total Capture Timer",
      "**Custom Mob:** Custom passively spawned or battle-oriented entities - **Cost:** (TALK TO DIANA/ANI FOR COST RELATIVE TO MOB)",
      "**Campaign Mob Spawns:** Dedicated spawners to fortify key locations or overwhelm attackers. — **Cost:** 1 Residential Point | **Limit:** (DEPENDS ON MOB, TALK TO DIANA/ANI)"
    ]},

    { type: "h2", text: "Nation Expansion & Special Features" },
    { type: "p", text: "Expand your population capacity or unlock specialized realm access." },
    { type: "ul", items: [
      "**+1 Player to Nation:** Expands member cap beyond the base of 3. — **Cost:** 15 Residential Point(s) | **Limit:** Max 2 extra (5 players total)",
      "**Nether Portal:** Grants an official Nether connection once the dimension opens. — **Cost:** 15 Cultural Point(s) | **Limit:** Max 1"
    ]}
  ]
},

};