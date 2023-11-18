import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from "../../components/Directory"

export default function Home({ categories }) {

    return (
        <div>
            <Directory categories={categories} />
            <Outlet />

        </div>
    )

}
