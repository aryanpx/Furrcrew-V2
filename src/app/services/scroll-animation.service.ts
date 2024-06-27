import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import $ from 'jquery';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  initScrollAnimation(): void {
    if (typeof window !== 'undefined') {
      $(window).scroll(() => {
        var scrollTop = $(window)?.scrollTop();
        var windowHeight = $(window)?.height();
        var windowWidth = $(window)?.width();
        var phoneOffsetTop = $('.frame1')?.offset()?.top;
        var phoneWidth = $('.phone')?.width();
        var phoneHeight = $('.phone')?.height();
        if (phoneOffsetTop && scrollTop && windowHeight && phoneWidth && phoneHeight && windowWidth) {
          const scaleFactor = Math.max(0.67, Math.min(1, (windowHeight - scrollTop + phoneOffsetTop) / windowHeight));
          const maxLeft = (windowWidth - phoneWidth) / 2;
          const maxRight = maxLeft;
          if (windowWidth > 600) {
            const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.2, 90)) * -1;
            const top = Math.abs(rotationAngle);
            const left = Math.min(20, -4 + Math.abs(rotationAngle) / 2);
            // const left = Math.min(maxLeft, Math.max(-maxRight, maxLeft - (maxLeft * scaleFactor) / 2));
            const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
            if (rotationAngle > -90) {
              $('.phone').css({
                // transform: `rotate(${rotationAngle}deg) scale(${scaleFactor}) `,
                position: 'absolute',
                // left: `${left}%`,
                // top: `${top}px`,
              });
              // $('.paragraph').css('opacity', opacity);
              // $('.phone_side_containers').css({ opacity: 0 });
            } else {
              $('.phone').css({
                // transform: `rotate(${rotationAngle}deg) scale(${scaleFactor})`,
                position: 'sticky',
                // left: `${left}%`,
                // top: `${top}px`,
              });
              // $('.phone_side_containers').css({ opacity: 1 });
            }
          } else if (windowWidth <= 600) {
            const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.2, 90)) * -1;
            const top = Math.abs(rotationAngle);
            // const right = Math.min(maxRight, Math.abs(rotationAngle) / 5);
            const right = Math.min(maxRight, Math.max(-maxLeft, maxRight - (maxRight * scaleFactor) / 2));
            if (rotationAngle > -90) {
              const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
              $('.phone').css({
                transform: `rotate(${rotationAngle}deg) `,
                position: Math.abs(rotationAngle) > 0 ? 'sticky' : 'sticky',
                bottom: `${top + 100}px`,
                right: `${right}px`,
              });
              // $('.paragraph').css('opacity', opacity);
            } else {
              // console.log('scroll up');
              $('.phone').css({
                transform: `rotate(${rotationAngle}deg) scale(${scaleFactor})`,
                position: 'sticky',
              });
            }
          }
        }
      });
    }
  }
  gsapScrollAnimation(): void {
    this.hideComponents()
    gsap.registerPlugin(ScrollTrigger)
    if (isPlatformBrowser(this.platformId)) {
      gsap.set(".phone", {
        xPercent: -20,
        rotate: 0,
      });
      gsap.to(".phone", {
        top: '50%',
        rotate: -90,
        xPercent: 20,
        markers: { startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 },
        // yPercent: 100,
        ease: "power4.out",
        delay: 0.5,
        duration: 0.5,
        scale: 0.65,
        fastScrollEnd: 100,
        scrollTrigger: {
          trigger: ".trigger-div",
          scrub: true,
          start: "bottom 50%+=100px",
          // onUpdate: (self) => { if (self.progress > 0.5) { this.showComponents(); } else if (self.progress < 0.5) { this.hideComponents(); } },
          onEnter: () => this.showComponents(),
          onLeaveBack: () => this.hideComponents(),
        },
      });
    }
  }

  // Function to show components with animations
  showComponents() {
    gsap.fromTo(".c", { x: -300, opacity: 0, }, { x: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".v", { y: 300, opacity: 0, }, { y: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".g", { x: 100, opacity: 0, }, { x: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".n", { x: 150, opacity: 0, }, { x: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".a", { x: 200, opacity: 0, }, { x: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".p", { y: -300, opacity: 0, }, { y: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".vs", { x: 200, opacity: 0, }, { x: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".t", { y: 300, opacity: 0, }, { y: 0, opacity: 1, duration: 2 });
  }

  // Function to hide components with animations
  hideComponents() {
    gsap.to(".c, .v, .g, .n, .a, .p, .vs, .t", { opacity: 0, duration: 0.1 });
  }
}
