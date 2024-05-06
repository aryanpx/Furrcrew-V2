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
        var windowHeight = $(window)?.height();
        var windowWidth = $(window)?.width();
        var phoneOffsetTop = $('.frame1')?.offset()?.top;
        var phoneWidth = $('.phone')?.width();
        var phoneHeight = $('.phone')?.height();
        if (phoneOffsetTop && scrollTop && windowHeight && phoneWidth && phoneHeight && windowWidth) {
          const scaleFactor = Math.max(0.67, Math.min(1, (windowHeight - scrollTop + phoneOffsetTop) / windowHeight));
          if (windowWidth > 600) {
            console.log('window greater than 600');
            const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.2, 90)) * -1;
            const top = Math.abs(rotationAngle);
            const left = Math.min(20, Math.abs(rotationAngle) / 5);
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
          } else if (windowWidth <= 600) {
            console.log('window width is less than 600');
            const phoneBottom = phoneOffsetTop + phoneHeight;
            console.log('🚀 ~ ScrollAnimationService ~ $ ~ scrollTop:', scrollTop);
            console.log('🚀 ~ ScrollAnimationService ~ $ ~ phoneBottom:', phoneBottom);
            console.log('🚀 ~ ScrollAnimationService ~ $ ~ phoneOffsetTop:', phoneOffsetTop);
            const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.2, 90)) * -1;
            const top = Math.abs(rotationAngle);
            const left = Math.min(20, Math.abs(rotationAngle) / 5);
            if (rotationAngle > -90) {
              console.log('🚀 ~ ScrollAnimationService ~ $ ~ rotationAngle:', rotationAngle);
              const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
              $('.phone').css({
                transform: `rotate(${rotationAngle}deg) `,
                position: Math.abs(rotationAngle) > 0 ? 'fixed' : 'static',
                top: `${top * 2.5}px`,
              });
              $('.paragraph').css('opacity', opacity);
            } else {
              console.log('scroll up');
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
}
