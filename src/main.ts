import { Plugin } from 'obsidian';

import { BadgeProcessor } from './badge_processor';

export default class ProgressPlugin extends Plugin {
  onload() {
    // Load the processor
    const badgeProcessor = new BadgeProcessor()

    // Register the processor to Obsidian
    this.registerMarkdownCodeBlockProcessor("obsidian-badge", badgeProcessor.processor)
  }
}
