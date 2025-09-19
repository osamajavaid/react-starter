import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "@/lib/constants/constants";

export default function PrimaryLayout({children}) {
	return (
		<main className="h-screen">
			<header className="bg-primary font-cairo flex h-[10vh] items-center justify-center gap-x-4 py-8">
				<Link to={ROUTES.HOME} className="text-white">
					Home
				</Link>
				<Link to={ROUTES.SERVICES} className="text-white">
					Services
				</Link>
				<Link to={ROUTES.CONTACT} className="text-white">
					Contact Us
				</Link>
			</header>
			<main className="grid h-[50vh] place-items-center">{children}</main>
			<footer className="h-[40vh] bg-red-500">footer</footer>
		</main>
	);
}
