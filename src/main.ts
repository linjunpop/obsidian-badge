import { Plugin } from 'obsidian';

import { ProgressProcessor } from './progress_processor';

export default class ProgressPlugin extends Plugin {
  async onload() {
    // Load the processor
    const progressProcessor = new ProgressProcessor()

    // Register the processor to Obsidian
    this.registerMarkdownCodeBlockProcessor("progress", progressProcessor.processor)
  }
}
