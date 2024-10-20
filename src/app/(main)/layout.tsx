import { Sidebar } from '@/components/ui/sidebar'
import React from 'react'


type Props = { children: React.ReactNode }
const Layout = (props: Props) => {
    const a = 3
    console.log(a)
    return (
        <div className="flex overflow-hidden h-screen">
            <Sidebar />
            <div className="w-full">
                {props.children}
            </div>
        </div>
    )
}

export default Layout