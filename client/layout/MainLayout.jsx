import React from 'react';

export const MainLayout = ({content}) => (
	<div>
		<header>
			<h2>Meact: The Meteor-React Boilerplate</h2>
			<nav>
				<a href="/">Map</a>
			</nav>
		</header>
		<main>
			{content}
		</main>
	</div>
)
