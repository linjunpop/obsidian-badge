import { escapeHTML } from "./utils"

class BadgeRenderer {
  renderBadge = (label: string, otherValue: string) => {
    const escapedLabel = escapeHTML(label)

    return `
    <section class="obsidian-badge_wrapper">
      <div class="obsidian-badge_text">
        <div class="obsidian-badge_label">
          ${escapedLabel}
        </div>
        <div class="obsidian-badge_value">
          ${otherValue}
        </div>
      </div>
    </section>
    `
  }

  renderBadgeWithProgress = (label: string, remain: number, total: number) => {
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

  renderError = (message: string) => {
    return `
    <section class="obsidian-badge_error">
      ${message}
    </section>
    `
  }
}

export { BadgeRenderer }
