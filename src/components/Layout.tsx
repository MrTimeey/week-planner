import './layout.css'
import React from 'react';
import Sidebar from "./Sidebar.tsx";
import SidebarItem from "./SidebarItem.tsx";
import {BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle} from "lucide-react";

type LayoutProps = {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="layout">
            <div className="sidebar">
                <Sidebar>
                    <SidebarItem icon={<LayoutDashboard size={20}/> } text="Dashboard" alert />
                    <SidebarItem icon={<BarChart3 size={20}/> } text="Statistics" active />
                    <SidebarItem icon={<UserCircle size={20}/> } text="Users" />
                    <SidebarItem icon={<Boxes size={20}/> } text="Inventory" />
                    <SidebarItem icon={<Package size={20}/> } text="Orders" alert />
                    <SidebarItem icon={<Receipt size={20}/> } text="Billings" />
                    <hr className="my-3" />
                    <SidebarItem icon={<Settings size={20}/> } text="Settings" />
                    <SidebarItem icon={<LifeBuoy size={20}/> } text="Help" />
                </Sidebar>
            </div>
            <div className="header" style={{ background: "darkblue"}}>
                <p>Header</p>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer" style={{ background: "darkgreen"}}>
                <p>Footer</p>
            </div>
        </div>
    )
}
