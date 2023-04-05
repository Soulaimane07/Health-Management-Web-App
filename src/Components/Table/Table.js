import React from 'react'
import { Link } from 'react-router-dom'

function Table(props) {
  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="tableHeader text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {props.header?.map((item,key)=>(
                        <th key={key} scope="col" className="px-6 py-3">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {props.data?.map((user,key)=>(
                <tr key={key} className="tableLine bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                       <Link to={`${user._id}`}>
                            {user._id}
                       </Link>
                    </th>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        {user.fname}
                    </td>
                    <td className="px-6 py-4">
                        {user.lname}
                    </td>
                    <td className="px-6 py-4">
                        {user.pass}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table