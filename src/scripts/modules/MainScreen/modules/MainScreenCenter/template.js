import { mockAppIcon } from '../../../../icons/mock-app';

export const template = () => (`
	<div class="main__center screen">
		<div id="mainApps" class="main__center-slider">
			<h1>Hello world</h1>
		</div>
		
		<div class="main__center-indicator"></div>
		
		<div class="main__center-navbar">
			${mockAppIcon()}
			${mockAppIcon()}
			${mockAppIcon()}
			${mockAppIcon()}
		</div>
	</div>	
`);