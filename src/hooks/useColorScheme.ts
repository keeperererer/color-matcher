import { useMemo } from 'react'
import { getBrightness, hexToRgb } from '../utils'

function useColorScheme(inputColor: string) {
  const { backgroundColor, textColor } = useMemo(() => {
    const rgbColor = hexToRgb(inputColor)
    const brightness = getBrightness(rgbColor)
    const backgroundColor = brightness < 128 ? '#FFFFFF' : '#282c34'
    const textColor = brightness < 128 ? '#282c34' : '#FFFFFF'
    return { backgroundColor, textColor }
  }, [inputColor])

  return { backgroundColor, textColor }
}

export default useColorScheme
