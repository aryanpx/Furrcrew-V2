import { Injectable } from '@angular/core';
import $ from 'jquery';
@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  constructor() {}
  private lastScrollTop = 0;

  initScrollAnimation(): void {
    $(window).scroll(() => {
      var scrollTop = $(window)?.scrollTop();
      console.log('🚀 ~ ScrollAnimationService ~ $ ~ scrollTop:', scrollTop);
      var phoneOffsetTop = $('.phone')?.offset()?.top;
      console.log('🚀 ~ ScrollAnimationService ~ $ ~ phoneOffsetTop:', phoneOffsetTop);
      var windowHeight = $(window)?.height();
      var phoneWidth = $('.phone')?.width();
      // Check if phone image is in viewport
      if (phoneOffsetTop && scrollTop && windowHeight && phoneWidth) {
        let rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.1, 90)) * -1;
        console.log('🚀 ~ ScrollAnimationService ~ $ ~ rotationAngle:', rotationAngle);
        if (0 > rotationAngle && rotationAngle > -90) {
          let opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
          console.log('🚀 ~ ScrollAnimationService ~ $ ~ opacity:', opacity);
          let translateX = (rotationAngle / 90) * (window.innerWidth / 2 - phoneWidth / 2) * -1;
          console.log('🚀 ~ ScrollAnimationService ~ $ ~ translateX:', translateX);
          let translateY = Math.max(0, scrollTop - phoneOffsetTop);
          console.log('🚀 ~ ScrollAnimationService ~ $ ~ translateY:', translateY);
          if (phoneOffsetTop < scrollTop) {
            // Apply rotation and fading animations
            $('.phone').css('transform', `translate(${translateX}px, ${translateY}px) rotate(${rotationAngle}deg)`);
            $('.paragraph').css('opacity', opacity);
            $('.phone').removeClass('half-size');
          } else {
            if (scrollTop < this.lastScrollTop && scrollTop < phoneOffsetTop) {
              $('.phone').css('transform', `translate(${translateX}px, ${translateY}px) rotate(${rotationAngle}deg)`);
              $('.paragraph').css('opacity', opacity);
              $('.phone').addClass('half-size');
            }
          }
        }
        // Update last scroll top position
        this.lastScrollTop = scrollTop;
      }
    });
  }
}
