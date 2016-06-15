import React from 'react';

export const MainLayout = ({content}) => (
	<div>
		<header>
			<h2>raceDay: The official athlete tracking app!</h2>
			<nav>
				<a href="/">Map</a>
			</nav>
		</header>
		<main>
			{content}
		</main>
	</div>
)
