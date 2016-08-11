import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
	<div>
		<header>
			<h2>raceDay: The official athlete tracking app!</h2>
			<nav>
				<a href="/">Map</a>
				<AccountsUI />
			</nav>
		</header>
		<main>
			{content}
		</main>
	</div>
)
