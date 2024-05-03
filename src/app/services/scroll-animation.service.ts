import { Injectable } from '@angular/core';
import $ from 'jquery';
@Injectable({
  providedIn: 'root',
})
export class ScrollAnimationService {
  constructor() {}

  initScrollAnimation(): void {
    if (typeof window !== 'undefined') {
      $(window).scroll(() => {
        var scrollTop = $(window)?.scrollTop();
        var phoneOffsetTop = $('.frame1')?.offset()?.top;
        var windowHeight = $(window)?.height();
        var phoneWidth = $('.phone')?.width();
        var phoneHeight = $('.phone')?.height();
        if (phoneOffsetTop && scrollTop && windowHeight && phoneWidth && phoneHeight) {
          const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.15, 90)) * -1;
          const scaleFactor = Math.max(0.67, Math.min(1, (windowHeight - scrollTop + phoneOffsetTop) / windowHeight));
          const left = Math.min(20, Math.abs(rotationAngle) / 5);
          const top = Math.abs(rotationAngle);
          if (rotationAngle > -90) {
            const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
            $('.phone').css({
              transform: `rotate(${rotationAngle}deg) scale(${scaleFactor})`,
              position: Math.abs(rotationAngle) > 0 ? 'fixed' : 'static',
              left: `${left}%`,
              top: `${top}px`,
            });
            $('.paragraph').css('opacity', opacity);
          } else {
            $('.phone').css({
              transform: `rotate(${rotationAngle}deg) scale(${scaleFactor})`,
              position: 'sticky',
              left: `${left}%`,
              top: `${top}px`,
            });
            console.log('scroll up');
          }
        }
      });
    }
  }
}
