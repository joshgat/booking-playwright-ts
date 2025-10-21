import { test, expect } from '../src/fixtures/testFixtures';

/**
 * Booking System Test Suite
 * Tests the complete end-to-end booking flow from search to confirmation
 */
test.describe('Booking System - Basic Flow', () => {
  
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHomePage();
  });

  /**
   * End-to-end booking test covering the complete user journey
   * @param homePage - Home page object for navigation and search
   * @param checkoutPage - Checkout page object for guest and payment details
   * @param bookingSummaryPage - Booking summary page for confirmation verification
   * @param testData - Test data containing guest and payment information
   */
  test('should navigate to home page and select booking dates @desktop', async ({ homePage, checkoutPage, bookingSummaryPage, testData }) => {
    await expect(homePage.calendarIcon).toBeVisible();
    await homePage.clickCalendarIcon();
    await homePage.performBookingSearch();
    
    await expect(homePage.page.getByText('Available', { exact: true })).toBeVisible();
    
    await homePage.clickSeePricesButton(testData.deluxeKing.roomItemId);
    await homePage.addBedAndBreakfastToCart(testData.deluxeKing.roomItemId, testData.bedAndBreakfast.name);
    
    await expect(homePage.page.getByTestId('cartContentComponent')).toBeVisible();
    await homePage.page.getByTestId('btnCheckoutOnCart').click();
    
    await expect(checkoutPage.completeReservationText).toBeVisible();
    await checkoutPage.page.waitForTimeout(5000);
    
    await checkoutPage.fillGuestDetails(testData.guestDetails);
    await checkoutPage.fillAddressAndSelect(testData.guestDetails.address);
    
    await expect(checkoutPage.getPayDepositButton()).toBeEnabled();
    await checkoutPage.clickPayDepositButton();
    
    await expect(checkoutPage.getPaymentContainer()).toBeVisible({ timeout: 10000 });
    await checkoutPage.fillPaymentForm(testData.cardDetails);
    await checkoutPage.clickPayButton();
    
    await expect(bookingSummaryPage.getBookingSuccessfulText()).toBeVisible({ timeout: 10000 });
  });
});
