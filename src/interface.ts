import { RGBColor } from 'color-diff'

export type TargetColorItem =
  | (RGBColor & { name: string; hex: string })
  | undefined

export type TableDataRow = [
  string,
  string,
  string,
  string,
  number | string,
  number | string,
  string,
  string
]

export type TransformedData = {
  hex: string
  MARD: string
  漫漫: string
  小舞: string
  盼盼: number | string
  咪小窝: number | string
  黄豆豆: string
  coco: string
}
