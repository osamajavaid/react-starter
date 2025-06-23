import React, { Fragment } from 'react'
import { ROUTES } from '@utils/constants'
import { Link } from 'react-router-dom'

export default function PrimaryLayout({ children }) {
    return (
        <Fragment>
            <header className='flex gap-x-4 bg-primary items-center justify-center py-8 font-cairo'>
                <Link to={ROUTES.HOME} className="text-white">Home</Link>
                <Link to={ROUTES.SERVICES} className="text-white">Services</Link>
                <Link to={ROUTES.CONTACT} className="text-white">Contact Us</Link>
            </header>
            <main>{children}</main>
            <footer>footer</footer>
        </Fragment>
    )
}
