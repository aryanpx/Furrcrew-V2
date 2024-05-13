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
          const maxLeft = (windowWidth - phoneWidth) / 2;
          const maxRight = maxLeft;
          if (windowWidth > 600) {
            const rotationAngle = Math.max(0, Math.min((scrollTop - phoneOffsetTop) * 0.1, 90)) * -1;
            const top = Math.abs(rotationAngle);
            const left = Math.min(22, Math.abs(rotationAngle) / 2);
            // const left = Math.min(maxLeft, Math.max(-maxRight, maxLeft - (maxLeft * scaleFactor) / 2));
            const opacity = 1 - Math.max(0, Math.min((scrollTop - phoneOffsetTop) / windowHeight, 1)) * 6;
            if (rotationAngle > -90) {
              $('.phone').css({
                transform: `rotate(${rotationAngle}deg) scale(${scaleFactor}) `,
                position: Math.abs(rotationAngle) > 0 ? 'fixed' : 'sticky',
                left: `${left}%`,
                top: `${top}px`,
              });
              $('.paragraph').css('opacity', opacity);
              $('.phone_side_containers').css({ opacity: 0 });
            } else {
              $('.phone').css({
                transform: `rotate(${rotationAngle}deg) scale(${scaleFactor})`,
                position: 'sticky',
                left: `${left}%`,
                top: `${top}px`,
              });
              $('.phone_side_containers').css({
                opacity: 1,
              });
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
                position: Math.abs(rotationAngle) > 0 ? 'fixed' : 'static',
                top: `${top}px`,
                right: `${right}px`,
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
