/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/react/outline'

const stats = [
    { id: 1, name: 'Images Created', stat: '120', icon: UsersIcon, change: '32', changeType: 'increase', time: 'in 2 days' },
    { id: 2, name: 'Impressions', stat: '1200', icon: MailOpenIcon, change: '122', changeType: 'increase', time: 'in last 24 hours' },
    { id: 3, name: 'Clicks/Conversions', stat: '71,897', icon: CursorClickIcon, change: '0.32%', changeType: 'decrease', time: 'going down' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div>

            <dl className="mt-5  grid-cols-1 grid gap-2 justify-between sm:grid-cols-2 lg:grid-cols-3" >
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                    >
                        <dt>

                            <p className="ml-14 text-sm font-medium text-gray95 truncate">{item.name}</p>
                        </dt>
                        <dd className="ml-14 pb-6 flex flex-col items-baseline sm:pb-7">

                            <p className="text-2xl font-semibold text-gray900">{item.stat}</p>
                            <div className="flex flex-row">
                                <p
                                    className={classNames(
                                        item.changeType === 'increase' ? 'text-green500' : 'text-red600',
                                        ' flex items-center align-middle text-sm font-semibold'
                                    )}
                                >
                                    {item.changeType === 'increase' ? (
                                        <ArrowSmUpIcon className="self-left  items-center align-middle flex-shrink-0 h-5 w-5 text-green500" aria-hidden="true" />
                                    ) : (
                                        <ArrowSmDownIcon className="self-left flex-shrink-0 h-5 w-5 text-red600" aria-hidden="true" />
                                    )}
                                    <span className=" sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                    {item.change}
                                </p>
                                <p className="text-sm font-semibold text-gray95 ml-1">
                                    {item.time}
                                </p>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 bg-jacksonsGray px-4 py-4 sm:px-6">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo600 hover:text-indigo-500">
                                        {' '}
                                        View all<span className="sr-only"> {item.name} stats</span>
                                    </a>
                                </div>
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
