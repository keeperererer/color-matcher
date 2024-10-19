declare module 'color-diff' {
  interface RGBColor {
    R: number
    G: number
    B: number
  }

  function closest(target: RGBColor, colors: RGBColor[]): RGBColor

  export { closest, RGBColor }
}
