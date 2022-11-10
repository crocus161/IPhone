import SwipeLine from '../../../Shared/SwipeLine';
import CustomEvent from '../../../Shared/CustomEvent';
import { getElement } from '../../../../utils/getElement';

class LockScreenSwipe {
	constructor(root, lockScreen) {
		this.lockScreen = lockScreen;
		this.lockScreenWallpaper = getElement('.lock__wallpaper');
		this.lockScreenBackdrop = getElement('.lock__wallpaper-backdrop');

		new SwipeLine(this.lockScreen);
		CustomEvent.swipeUp(root, this.swipeStart.bind(this), this.swipeMove.bind(this), this.swipeEnd.bind(this));
	}

	setAnimationValues(pixelProgress, percentageProgress) {
		this.lockScreen.style.bottom = `${pixelProgress}px`;
		this.lockScreenBackdrop.style.backdropFilter = `blur(${percentageProgress / 2}px)`;
		this.lockScreenWallpaper.style.transform = `translateY(${percentageProgress * 2}px)`;
	}

	swipeStart(event) {
		console.log(event);
		return event.srcElement.classList.contains('swipe__line');
	}

	swipeMove(pixelProgress, percentageProgress) {
		if(percentageProgress > 100 || percentageProgress < 0) return;
		this.setAnimationValues(pixelProgress, percentageProgress);
	}

	swipeEnd(_, percentageProgress) {
		this.lockScreen.classList.add('open');

		percentageProgress > 45
			? this.lockScreen.style.bottom = '105%'
			: this.setAnimationValues(0, 0);

		setTimeout(() => {
			this.lockScreen.classList.remove('open');
		}, 310);
	}

}

export default LockScreenSwipe;