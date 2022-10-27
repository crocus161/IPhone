import { phoneIcon } from '../icons/phone';

export const phone = () => {
	return (`
		<div class="phone">
			<div class="phone__icon">${phoneIcon()}</div>
			<div class="phone__screen"></div>
			
			<button class="phone__power">
				<span class="phone__button"></span>
			</button>
					
			<button class="phone__volume phone__volume-up">
				<span class="phone__button"></span>
			</button>		
			
			<button class="phone__volume phone__volume-down">
				<span class="phone__button"></span>
			</button>
			
			<button class="phone__silent"></button>		
		</div>
	`);
}