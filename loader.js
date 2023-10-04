const wiggleId = "MuteBtn-wiggle";
const wiggleDuration = 5;
const wiggles = 40;
const wiggleStagger = wiggleDuration / wiggles;
const maxScale = 0.8;
const delaySlowDownLoop = 5;
const audios = document.querySelector("#myaudio");

class Bar {
  constructor(rootElement) {
    this._root = rootElement;
    this._wiggle = 0;
  }
  get root() {
    return this._root;
  }
  get wiggle() {
    return this._wiggle;
  }
  set wiggle(wiggle) {
    const wiggleMultiplier = (wiggle + 1) / 2;
    const scaleY = maxScale * wiggleMultiplier + 1 - maxScale;
    TweenMax.set(this.root, { scaleY: scaleY, transformOrigin: "50% 100%" });
    this._wiggle = wiggle;
  }
}

class MuteBtn {
  constructor(rootElement) {
    this.root = rootElement;
    this.init();
    this.barScales = [];
    this.muted = true;
    this.unmute();
  }

  init() {
    const barElements = Array.from(this.root.querySelectorAll("rect"));
    const numBars = barElements.length;
    const bars = [];
    const timeline = new TimelineMax().pause();
    barElements.forEach((barElement, barIndex) => {
      const bar = new Bar(barElement);
      const wiggle = CustomWiggle.create(wiggleId, {
        type: "random",
        wiggles: wiggles
      });

      timeline.to(
        bar,
        wiggleDuration,
        {
          wiggle: 1,
          repeat: -1,
          ease: wiggle
        },
        wiggleStagger * barIndex / numBars
      );

      bars.push(bar);
    });
    timeline.time(wiggleDuration);
    this.loopAnimation = timeline;
    this.bars = bars;
  }

  mute() {
    if (!this.muted) {
      this.muted = true;
      this.loopAnimation.pause();
      this.bars.forEach((bar, barIndex) => {
        const scale = bar.root._gsTransform.scaleY;
        this.barScales[barIndex] = scale;
      });
      const timeline = new TimelineMax();
      setTimeout(() => {
        this.bars.forEach((bar, barIndex) => {
          timeline.to(
            bar.root,
            0.3,
            {
              scaleY: 0.1,
              ease: Power2.easeOut
            },
            0
          );
        });
      });
      if (this.transitionAnimation) {
        this.transitionAnimation.pause();
        this.transitionAnimation.kill();
      }
      this.transitionAnimation = timeline;
    }
  }

  unmute() {
    if (this.muted) {
      this.muted = false;
      if (this.barScales && this.barScales.length) {
        TweenMax.killTweensOf(this.loopAnimation);
        this.loopAnimation.timeScale(1);

        const timeline = new TimelineMax({
          onComplete: () => {
            this.loopAnimation.play();
            this.startSlowDownCountdown();
          },
          onCompleteScope: this
        });

        this.bars.forEach((bar, barIndex) => {
          timeline.to(
            bar.root,
            0.3,
            {
              scaleY: this.barScales[barIndex],
              ease: Power2.easeIn
            },
            0
          );

        });
        if (this.transitionAnimation) {
          this.transitionAnimation.pause();
          this.transitionAnimation.kill();
        }
        this.transitionAnimation = timeline;
      } else {
        this.loopAnimation.play();
        this.startSlowDownCountdown();
      }
    }
  }

  toggleMute() {
    if (this.muted) {
      this.unmute();
      audios.play();
    } else {
      this.mute();
      audios.pause();
    }
  }

  startSlowDownCountdown() {
    TweenMax.to(this.loopAnimation, 5, {
      timeScale: 0.1,
      ease: Power2.easeIn,
      delay: delaySlowDownLoop });

  }}


const btn = new MuteBtn(document.getElementById("btn"));

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    btn.toggleMute();
  }
});