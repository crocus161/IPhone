import SwipeLine from '../../../Shared/SwipeLine';
import CustomEvent from '../../../Shared/CustomEvent';

class LockScreenSwipe {
	constructor(root, lockScreen) {
		this.lockScreen = lockScreen;

		new SwipeLine(this.lockScreen);
		CustomEvent.swipeUp(root, this.swipeStart.bind(this), this.swipeMove.bind(this), this.swipeEnd.bind(this));
	}

	swipeStart(event) {
		return event.srcElement.classList.contains('swipe__line');
	}

	swipeMove(pixelProgress, animationProgress) {
		if(animationProgress > 100 || animationProgress < 0) return;
		this.lockScreen.style.bottom = `${pixelProgress}px`;
	}

	swipeEnd(_, animationProgress) {
		if(animationProgress > 45) {
			this.lockScreen.classList.add('open');
			this.lockScreen.style.bottom = '105%';
		} else {
			this.lockScreen.classList.add('open');
			this.lockScreen.style.bottom = '0%';
		}

		setTimeout(() => {
			this.lockScreen.classList.remove('open');
		}, 310);
	}

}

export default LockScreenSwipe;