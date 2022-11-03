import { mockWallpaper } from './mock-wallpaper';
import { lockIcon } from '../../../icons/lock';
import { flashlightIcon } from '../../../icons/flashlight';
import { cameraIcon } from '../../../icons/camera';

export const template = (time, date) => (`
	<div class="lock">
		<div class="lock__wallpaper">${mockWallpaper()}</div>

		<div class="lock__meta">
			<div class="lock__meta-icon">${lockIcon()}</div>
			<h1 class="lock__meta-time">${lockTime(time)}</h1>
			
			<p class="lock__meta-date">${lockDate(date)}</p>
		</div>
		
		<!--	Todo make notifications mechanizm and architecture	-->
		<div class="lock__notifications"></div>
		
		<div class="lock__actions">
			<div class="lock__actions-icon">${flashlightIcon()}</div>
			<div class="lock__actions-icon">${cameraIcon()}</div>
		</div>
	</div>
`);

export const lockTime = (time) => (`
	<p>${time.hours}</p>
	<p class="lock__meta-dots">:</p>
	<p>${time.minutes}</p>
`);

export const lockDate = (date) => (`${date.day}, ${date.date} ${date.month}`);