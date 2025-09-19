import React, {lazy} from "react";
import {ROUTES} from "./constants";

// ================================================================================================
// export routes directly with inline lazy
// ================================================================================================

export const routes = [
	{
		path: ROUTES.HOME,
		element: React.createElement(lazy(() => import("@pages/home"))),
		isPrivate: false,
	},
	{
		path: ROUTES.SERVICES,
		element: React.createElement(lazy(() => import("@pages/services"))),
		isPrivate: false,
	},
	{
		path: ROUTES.CONTACT,
		element: React.createElement(lazy(() => import("@pages/contact-us"))),
		isPrivate: false,
	},
];
