import { startHere } from './startHere.js'
import { rules } from './rules.js'
import { bannedItems } from './bannedItems.js'
import { roleplayGuide } from './roleplayGuide.js'
import { world } from './world.js'
import { battles } from './battles.js'
import { staffServer } from './staffServer.js'

export const content = {
  "start-here":     startHere,
  "rules":          rules,
  "banned-items":   bannedItems,
  "roleplay-guide": roleplayGuide,
  "world":          world,
  "battles":        battles,
  "staff-server":   staffServer,
}

export function getPage(sectionSlug, pageSlug) {
  return content[sectionSlug]?.[pageSlug]
}
