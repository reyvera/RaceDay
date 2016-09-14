import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = (props) => {

	return (
		<div>
			<header>
				<h2>raceDay: The official athlete tracking app!</h2>
				<nav>
					<a href="/">Home</a>
					<a href="/map">Map</a>
					<AccountsUI />
				</nav>
			</header>
			<main>
				<div>{props.content(props)}</div>
			</main>
		</div>
	)
}
