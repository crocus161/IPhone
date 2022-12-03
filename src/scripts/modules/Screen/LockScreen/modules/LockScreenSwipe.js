import SwipeLine from '../../../Shared/SwipeLine';
import CustomEvent from '../../../Shared/CustomEvent';
import { getElement } from '../../../../utils/getElement';
import LockScreenStore from '../store';

class LockScreenSwipe {
	constructor(root, lockScreen) {
		this.lockScreen = lockScreen;
		this.lockScreenWallpaper = getElement('.lock__wallpaper');
		this.lockScreenBackdrop = getElement('.lock__wallpaper-backdrop');

		new SwipeLine(this.lockScreen);
		CustomEvent.verticalSwipe(root, this.swipeStart.bind(this), this.swipeMove.bind(this), this.swipeEnd.bind(this));

		LockScreenStore.subscribe(this.observerCallback.bind(this));
	}

	observerCallback(state) {
		state.isShown ? this.show() : this.hide();
	}

	setAnimationValues(pixelProgress, percentageProgress) {
		this.lockScreen.style.bottom = `${pixelProgress}px`;
		this.lockScreenBackdrop.style.backdropFilter = `blur(${percentageProgress / 2}px)`;
		this.lockScreenWallpaper.style.transform = `translateY(${percentageProgress * 2}px)`;
	}

	swipeStart(event) {
		return event.srcElement.classList.contains('swipe__line');
	}

	swipeMove(pixelProgress, percentageProgress) {
		if(percentageProgress > 100 || percentageProgress < 0) return;
		this.setAnimationValues(pixelProgress, percentageProgress);
	}

	swipeEnd(_, percentageProgress) {
		const MIN_PROGRESS_TO_HIDE = 45;
		this.lockScreen.classList.add('open');

		percentageProgress > MIN_PROGRESS_TO_HIDE
			? LockScreenStore.changeShownStatus(false)
			: this.show();

		setTimeout(() => {
			this.lockScreen.classList.remove('open');
		}, 310);
	}

	hide() {
		this.lockScreen.style.bottom = '105%'
	}

	show() {
		this.setAnimationValues(0, 0);
	}
}

export default LockScreenSwipe;