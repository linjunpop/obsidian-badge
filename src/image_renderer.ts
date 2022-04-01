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
    let progressTotalWidth: number
    if (total <= 100) {
      progressTotalWidth = 100
    } else if (total > 200) {
      progressTotalWidth = 200
    } else {
      progressTotalWidth = total
    }

    const progressRemainWidth = progressTotalWidth * (remain / total)

    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${progressTotalWidth}" height="20" version="1.1" preserveAspectRatio="xMidYMid">
      <rect x="0" width="${progressTotalWidth}" height="20" fill="#555"/>
      <rect x="0" width="${progressRemainWidth}" height="20" fill="#7fc48b"/>
      
      <g fill="#fff" text-anchor="progress" font-family="sans-serif" font-size="11">
        <text x="${progressTotalWidth / 2}" y="14">
          ${remain}/${total}
        </text>
      </g>
    </svg>
    `
  }

  private _renderWithLabel = (label: string, remain: number, total: number) => {
    const escapedLabel = escapeHTML(label)

    let labelWidth = label.length * 7
    if (labelWidth < 30) {
      labelWidth = 30
    }

    let progressTotalWidth: number
    if (total <= 100) {
      progressTotalWidth = 100
    } else if (total > 250) {
      progressTotalWidth = 250
    } else {
      progressTotalWidth = total
    }

    const progressRemainWidth = progressTotalWidth * (remain / total)

    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${labelWidth + progressTotalWidth}" height="20" version="1.1" preserveAspectRatio="xMidYMid">
      <rect rx="0" x="0" width="${labelWidth}" height="20" fill="#427bca"/>
      <rect rx="0" x="${labelWidth}" width="${progressTotalWidth}" height="20" fill="#555"/>
      <rect rx="0" x="${labelWidth}" width="${progressRemainWidth}" height="20" fill="#7fc48b"/>
      
      <g fill="#fff" text-anchor="label" font-family="sans-serif" font-size="11">
        <text x="4" y="14" >
          ${escapedLabel}
        </text>
      </g>

      <g fill="#fff" text-anchor="progress" font-family="sans-serif" font-size="11">
        <text x="${labelWidth + (progressTotalWidth / 2.3)}" y="14">
          ${remain}/${total}
        </text>
      </g>
    </svg>
    `
  }
}

export { ImageRenderer }
