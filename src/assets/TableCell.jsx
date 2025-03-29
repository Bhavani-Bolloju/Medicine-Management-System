import React from 'react'

// export function TableHead({ text }) {
//   return <th className="border border-gray-300 py-3">{text}</th>
// }

export function TableData({ children }) {
  return <td className="border  min-w-10 border-gray-300 py-3">{children}</td>
}
