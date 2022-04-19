import { escapeHTML } from "./utils"

class ImageRenderer {
  renderSVG = (label: string, remain: number, total: number) => {
    if (label === undefined || label === "") {
      return this._renderProgressBarOnly(remain, total)
    } else {
      return this._renderWithLabel(label, remain, total)
    }
  }

  private _renderProgressBarOnly = (remain: number, total: number) => {
    const percentage = (remain / total) * 100

    return `
    <section class="obsidian-badge_wrapper">
      <div class="obsidian-badge_text">
        <div class="obsidian-badge_value">
          ${percentage}% <span>(${remain}/${total})</span>
        </div>
      </div>
      <div class="obsidian-badge_progress-bar">
        <span class="obsidian-badge_progress-bar-fill" style="width: ${percentage}%;">
        </span>
      </div>
    </section>
    `
  }

  private _renderWithLabel = (label: string, remain: number, total: number) => {
    const escapedLabel = escapeHTML(label)

    const percentage = ((remain / total) * 100).toFixed(2)

    return `
    <section class="obsidian-badge_wrapper">
      <div class="obsidian-badge_text">
        <div class="obsidian-badge_label">
          ${escapedLabel}
        </div>
        <div class="obsidian-badge_value">
          ${percentage}% <span>(${remain}/${total})</span>
        </div>
      </div>
      <div class="obsidian-badge_progress-bar">
        <span class="obsidian-badge_progress-bar-fill" style="width: ${percentage}%;">
        </span>
      </div>
    </section>
    `
  }
}

export { ImageRenderer }
