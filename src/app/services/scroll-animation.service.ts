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
      var phoneOffsetTop = $('.frame1')?.offset()?.top;
      var windowHeight = $(window)?.height();
      var phoneWidth = $('.phone')?.width();
      // Check if phone image is in viewport
      if (phoneOffsetTop && scrollTop && windowHeight && phoneWidth) {
        const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.1, 90)) * -1;
        const left = Math.min(20, Math.abs(rotationAngle) / 5);
        const top = left > 7 ? (Math.max(150, Math.abs(rotationAngle))) : 30;
        if (rotationAngle > -90) {
          const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
          $('.phone').css({
            'transform': `rotate(${rotationAngle}deg)`,
            'left': `${left}%`,
            'top': `${top}px`,
            'position': Math.abs(rotationAngle) > 0 ? 'fixed' : 'static'
          });
          $('.paragraph').css('opacity', opacity);
        } else {
          $('.phone').css({ 
            'transform': `rotate(${rotationAngle}deg)`,
            'position': 'sticky',
            'left': `${left}%`,
            'top': `${top}px`
          });
          if (scrollTop > this.lastScrollTop) {
            if (phoneOffsetTop < scrollTop) {
              console.log('scroll up');
              // $('.paragraph').addClass('fade-out');
              // $('.phone').removeClass('half-size');
            } else {
              if (scrollTop < phoneOffsetTop) {
                console.log('scroll down');
                // $('.paragraph').removeClass('fade-out');
                // $('.phone').addClass('half-size');
              }
            }
          }
        }
        this.lastScrollTop = scrollTop;
        // console.log('🚀 ~ ScrollAnimationService ~ $ ~ this.lastScrollTop:', this.lastScrollTop);
      }
    });
  }
}
