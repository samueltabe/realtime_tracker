import { Link } from '@inertiajs/react'
import React from 'react'

export default function Table({items, columns, primary, action}) {
  return (
    <div className='relative overflow-x-auto border shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope="col" class="px-6 py-3">{primary}</th>
                    {columns.map((column) =>
                    <th key={column} scope='col' className='px-6 py-3'>{column}</th>
                    )}
                    <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) =>
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #{item.id}
                        </th>
                        {columns.map((column) =>
                        <td key={column} className="px-6 py-4">
                            {item[column]}
                        </td>
                        )}
                        <td className="px-6 py-4">
                            <Link href={route(action, item.id)} className='font-medium text-blue-600'>view details</Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

