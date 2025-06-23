import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/common/scroll-to-top";
import PrimaryLayout from "./layouts/primary-layout";
import NotFound from "./pages/not-found";
import {ROUTES} from "./utils/constants";
import {routes} from "./utils/routes";

export default function App() {
	const isAuthenticated = true;
	const renderRoute = (route, isAuthenticated) => {
		if (route.isPrivate || isAuthenticated) {
			return route.element;
		}
	};
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ScrollToTop />
			<Routes>
				{routes.map((route, key) => (
					<Route
						key={key}
						path={route.path}
						element={
							<PrimaryLayout>
								<Suspense fallback={<div>Loading...</div>}>
									{renderRoute(route, isAuthenticated)}
								</Suspense>
							</PrimaryLayout>
						}
					/>
				))}
				<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
