import { closest, RGBColor } from 'color-diff'
import { colors } from './constants'
import { TargetColorItem } from './interface'
// 将十六进制颜色转换为 RGB 对象
export function hexToRgb(hex: string): RGBColor {
  const bigint = parseInt(hex.slice(1), 16)
  return {
    R: (bigint >> 16) & 255,
    G: (bigint >> 8) & 255,
    B: bigint & 255,
  }
}

// 找到最接近的颜色
export function findClosestColor(inputColor: string): TargetColorItem {
  const rgbColor = hexToRgb(inputColor)
  const rgbColors = colors.map((color) => ({
    ...hexToRgb(color.hex),
    name: color['小舞'],
    hex: color.hex,
  }))
  const closestColor = closest(rgbColor, rgbColors)
  return rgbColors.find(
    (color) =>
      color.R === closestColor.R &&
      color.G === closestColor.G &&
      color.B === closestColor.B
  )
}

// 计算颜色的亮度
export function getBrightness({ R, G, B }: RGBColor): number {
  return (R * 299 + G * 587 + B * 114) / 1000
}
