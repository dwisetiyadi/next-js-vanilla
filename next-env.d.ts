/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '@components/*';
declare module '@config/*';
declare module '@pages/*';
declare module '@public/*';
declare module '@redux/*';
declare module '@styles/*';

declare module '@coreui/react';
declare module '@coreui/coreui-plugin-chartjs-custom-tooltips';
declare module '@coreui/coreui/dist/js/coreui-utilities';
declare module 'reactstrap/lib/utils';

declare module '@coreui/utils';

declare module 'coreui-next/dist/icon/coreui-icons/js/src/brand/index';
declare module 'coreui-next/dist/icon/coreui-icons/js/src/flag/index';
declare module 'coreui-next/dist/icon/coreui-icons/js/src/free/index';

// declare namespace NodeJS {
//   export interface Global {
//     REACTICONS: any;
//   }
// }
// declare let REACTICONS: any;

interface EventTarget {
  value(colName: any, value: any, arg2: string);
  /**
   * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
   *
   * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
   *
   * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
   *
   * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
   *
   * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
   *
   * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
   */
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void;
  /**
   * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
   */
  dispatchEvent(event: Event): boolean;
  /**
   * Removes the event listener in target's event listener list with the same type, callback, and options.
   */
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void;
}
