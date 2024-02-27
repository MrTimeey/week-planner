import './layout.css'
import React from 'react';
import Sidebar from "./Sidebar.tsx";

type LayoutProps = {
    children: string | React.JSX.Element | React.JSX.Element[]
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="layout">
            <div className="sidebar">
                <Sidebar children={[]}/>
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
