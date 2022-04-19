import { BadgeRenderer } from "./badge_renderer"

class BadgeProcessor {
  renderer: BadgeRenderer

  constructor() {
    this.renderer = new BadgeRenderer()
  }

  processor = (sourceString: string, el: HTMLElement) => {
    const rows = sourceString.trim().split("\n")

    return Promise.all(
      rows.map((row) => {
        return this._render(el, row)
      })
    )
  };

  // private
  private _render(el: HTMLElement, content: string) {
    const pattern = /(?<label>.+):\s*(?<value>(?<progressValue>(?<remain>\d+)\/(?<total>\d+))|(?<otherValue>\w+))/

    const matchResult = content.match(pattern)

    // container
    const container = document.createElement('div');

    if (matchResult) {
      const groups = matchResult.groups
      if (groups.progressValue !== undefined && groups.progressValue !== null && groups.progressValue !== "") {
        container.innerHTML = this.renderer.renderBadgeWithProgress(groups.label, +groups.remain, +groups.total)
      } else {
        container.innerHTML = this.renderer.renderBadge(groups.label, groups.otherValue)
      }
    } else {
      if (content !== "") {
        container.innerHTML = this.renderer.renderError(`Invalid badge format: ${content}`)
      }
    }

    // insert container into the DOM
    el.appendChild(container)
  }
}

export { BadgeProcessor }
