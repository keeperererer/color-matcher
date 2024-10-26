import { TableDataA, TableDataB, TableDataC, TableDataD, TableDataE, TableDataF, TableDataG, TableDataH, TableDataM } from "./doc";
import { TableDataRow, TransformedData } from "./interface";

// 内置颜色列表（十六进制格式）
// export const colors = [
//   { hex: '#FF0000', name: 'Red A1' },
//   { hex: '#00FF00', name: 'Green' },
//   { hex: '#0000FF', name: 'Blue' },
//   { hex: '#FFFF00', name: 'Yellow' },
//   { hex: '#00FFFF', name: 'Cyan' },
//   { hex: '#FF00FF', name: 'Magenta' },
//   { hex: '#FFFFFF', name: 'White' },
//   { hex: '#000000', name: 'Black' },
// ]

function transformTableData(tableData: TableDataRow[]): TransformedData[] {
  return tableData.map(row => ({
    hex: row[0],
    MARD: row[1],
    漫漫: row[2],
    小舞: row[3],
    盼盼: row[4],
    咪小窝: row[5],
    黄豆豆: row[6],
    coco: row[7]
  }));
}

const Data = [...TableDataA, ...TableDataB, ...TableDataC, ...TableDataD, ...TableDataE, ...TableDataF, ...TableDataG, ...TableDataH, ...TableDataM]


export const colors = transformTableData(Data);