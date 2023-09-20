import SwipeLine from '../../../Shared/SwipeLine';
import CustomEvent from '../../../Shared/CustomEvent';
import { getElement } from '../../../utils/getElement';
import LockScreenStore from '../store';

class LockScreenSwipe {
	constructor(root, lockScreen) {
		this.lockScreen = lockScreen;
		this.lockScreenWallpaper = getElement('.lock__wallpaper svg');
		this.lockScreenBackdrop = getElement('.lock__wallpaper-backdrop');

		this.percentageToHide = 35;
		this.percantageToShow = 75;

		this.percentageToAction = this.percentageToHide;

		new SwipeLine(this.lockScreen);
		CustomEvent.verticalSwipe(root, this.swipeStart.bind(this), this.swipeMove.bind(this), this.swipeEnd.bind(this));

		LockScreenStore.subscribe(this.observerCallback.bind(this));
	}

	observerCallback(state) {
		state.isShown ? this.show() : this.hide();
	}

	setAnimationValues(pixelProgress, percentageProgress) {
		this.lockScreen.style.bottom = `${pixelProgress}px`;
		this.lockScreen.style.opacity = `${120 - percentageProgress}%`;
		this.lockScreenBackdrop.style.backdropFilter = `blur(${percentageProgress / 3}px)`;
		this.lockScreenWallpaper.style.transform = `translateY(${percentageProgress * 2}px)`;
	}

	swipeStart(event) {
		return event.srcElement.classList.contains('swipe__line') || event.srcElement.classList.contains('lock__bottom');
	}

	swipeMove(pixelProgress, percentageProgress) {
		if (percentageProgress > 100 || percentageProgress < 0) return;
		this.setAnimationValues(pixelProgress, percentageProgress);
	}

	swipeEnd(_, percentageProgress) {
		this.lockScreen.classList.add('open');

		percentageProgress > this.percentageToAction
			? LockScreenStore.changeShownStatus(false)
			: this.show();

		setTimeout(() => {
			this.lockScreen.classList.remove('open');
		}, 310);
	}

	hide() {
		this.lockScreen.style.bottom = '100%';
		this.percentageToAction = this.percantageToShow;
	}

	show() {
		this.setAnimationValues(0, 0);
		this.percentageToAction = this.percentageToHide;
	}
}

export default LockScreenSwipe;