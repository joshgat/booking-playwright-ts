/**
 * Date generation utilities for test automation
 */
export class DateGenerator {
  /**
   * Get future date based on days from today
   */
  static getFutureDate(daysFromToday: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date;
  }

  /**
   * Format date for aria-label matching in calendar components
   */
  static formatDateForAriaLabel(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Get tomorrow's date formatted for aria-label
   */
  static getTomorrowAriaLabel(): string {
    const tomorrow = this.getFutureDate(1);
    return this.formatDateForAriaLabel(tomorrow);
  }

  /**
   * Get check-out date (7 days after check-in) formatted for aria-label
   */
  static getCheckOutAriaLabel(): string {
    const checkOutDate = this.getFutureDate(8); // 1 day (check-in) + 7 days (duration)
    return this.formatDateForAriaLabel(checkOutDate);
  }

  /**
   * Get date range for booking
   */
  static getBookingDateRange(): { checkIn: Date; checkOut: Date; checkInLabel: string; checkOutLabel: string } {
    const checkIn = this.getFutureDate(1);
    const checkOut = this.getFutureDate(8);
    
    return {
      checkIn,
      checkOut,
      checkInLabel: this.formatDateForAriaLabel(checkIn),
      checkOutLabel: this.formatDateForAriaLabel(checkOut)
    };
  }

  /**
   * Format date for display
   */
  static formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
