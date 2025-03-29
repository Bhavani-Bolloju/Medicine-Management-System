import React from 'react'

import { TableData } from './TableCell'

const tableData = ['neha', 'neha@gmail.com', '8234342343', 'Dec 23', 'Female']

function TableRow() {
  return (
    <tr>
      {tableData.map((name) => (
        <TableData key={name}>{name}</TableData>
      ))}
    </tr>
  )
}

export default TableRow
