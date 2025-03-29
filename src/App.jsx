import React from 'react'

import TableRow from './assets/TableRow'

import TableFormRow from './assets/TableFormRow'

function App() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-5">Medicine management system</h1>
        <button className="hover:cursor-pointer border px-2">add new</button>
      </div>
      <table className="table-auto border-collapse w-full text-center p-5">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 py-3">Full Name</th>
            <th className="border border-gray-300">Email address</th>
            <th className="border border-gray-300">phone number</th>
            <th className="border border-gray-300">Date of Birth</th>
            <th className="border border-gray-300">Gender</th>
            <th className="border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableFormRow></TableFormRow>
          <TableRow />
        </tbody>
      </table>
    </div>
  )
}

export default App
