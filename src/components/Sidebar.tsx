import {ChevronFirst, MoreVertical} from "lucide-react";
import React from "react";

type SidebarProps = {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Sidebar({children}: SidebarProps) {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        className="overflow-hidden transition-all"
                        alt=""
                    />
                    <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst/>
                    </button>
                </div>
                <ul className="flex-1 px-3">{children}</ul>
                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
              flex justify-between items-center
              w-52 ml-3
          `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>

        </aside>
    )
}
