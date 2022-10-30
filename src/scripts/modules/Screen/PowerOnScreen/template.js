import { apple } from '../../../app/icons/apple';
import { COLORS } from '../../../constants/colors';

export const screen = (isPowerOn) => (`
	<div class="power__on">
	
		<div class="power__on-icon">
			${apple(COLORS.WHITE)}
		</div>
		
	</div>
`);