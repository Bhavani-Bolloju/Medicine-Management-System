import React from 'react'
import { TableData } from './TableCell'

function TableFormRow() {
  return (
    <tr>
      <TableData>
        <input type="text" placeholder="full name" />
      </TableData>
      <TableData>
        <input type="email" placeholder="Email address" />
      </TableData>
      <TableData>
        <input type="tel" placeholder="Phone number" />
      </TableData>
      <TableData>
        <input type="date" />
      </TableData>
      <TableData>
        <select name="" id="">
          <option value="">Female</option>
          <option value="">Male</option>
        </select>
      </TableData>
      <TableData>
        <button className="hover:cursor-pointer">Submit</button>
      </TableData>
    </tr>
  )
}

export default TableFormRow
