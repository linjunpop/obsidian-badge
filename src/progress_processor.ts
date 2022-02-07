import { ImageRenderer } from "./image_renderer"

class ProgressProcessor {
  progressBarRenderer: ImageRenderer

  constructor() {
    this.progressBarRenderer = new ImageRenderer()
  }

  processor = async (sourceString: string, el: HTMLElement) => {
    const rows = sourceString.trim().split("\n")

    return Promise.all(
      rows.map(async (row) => {
        return this._processProgressBar(el, row)
      })
    )
  };

  // private

  private async _processProgressBar(el: HTMLElement, content: string) {
    const pattern = /((?<label>.+):\s*)*(?<remain>\d+)\/(?<total>\d+)/

    const matchResult = content.match(pattern)

    if (matchResult) {
      const groups = matchResult.groups
      this._insertProgressBar(el, groups.label, +groups.remain, +groups.total)
    }
  }

  private async _insertProgressBar(el: HTMLElement, label: string, remain: number, total: number) {
    // container
    const container = document.createElement('div');

    // img
    const image = this.progressBarRenderer.renderSVG(label, remain, total)

    container.innerHTML = image

    // insert container into the DOM
    el.appendChild(container)
  }
}

export { ProgressProcessor }
