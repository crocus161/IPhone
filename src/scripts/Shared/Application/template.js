
export const template = ({ id, name, icon }) => (`
	<button id="${id}" class="application">
		<figure>
			<div class="application__icon">${icon()}</div>
			<figcaption class="application__name">${name}</figcaption>	
		</figure>
	</div>
`);