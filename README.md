# Booking Playwright TypeScript Framework

A comprehensive test automation framework for the booking system built with Playwright and TypeScript, following Page Object Model (POM) design pattern and best practices.

## 🚀 Features

- **Page Object Model (POM)** - Clean, maintainable test structure
- **TypeScript Support** - Full type safety and IntelliSense
- **Multi-Device Testing** - Desktop, tablet, and mobile browser support
- **Custom Fixtures** - Reusable test fixtures for better organization
- **CI/CD Ready** - GitHub Actions workflow for automated testing
- **Cross-Browser Testing** - Chrome, Firefox, Safari support
- **Test Data Management** - Centralized test data utilities
- **Screenshot & Video Capture** - Automatic failure documentation

## 📁 Project Structure

```
booking-playwright-ts/
├── src/
│   ├── pages/           # Page Object Models
│   │   └── HomePage.ts
│   ├── fixtures/        # Custom test fixtures
│   │   └── testFixtures.ts
│   └── utils/           # Utility functions
│       ├── testData.ts
│       └── helpers.ts
├── tests/               # Test specifications
│   └── example.spec.ts
├── .github/workflows/   # CI/CD pipelines
│   └── playwright.yml
├── playwright.config.ts # Playwright configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd booking-playwright-ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npm run install:browsers
   ```

## 🧪 Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests with debug mode
npm run test:debug

# Run tests with UI mode
npm run test:ui

# Generate test report
npm run test:report
```

### Browser-Specific Tests

```bash
# Run on specific browser
npm run test:chrome
npm run test:firefox
npm run test:safari

# Run all browsers
npm run test:all
```

### Device-Specific Tests

```bash
# Run mobile tests only
npm run test:mobile

# Run desktop tests only
npm run test:desktop
```

## 📱 Supported Devices & Browsers

### Desktop Browsers
- **Chrome** (Chromium)
- **Firefox**
- **Safari** (WebKit)

### Mobile Browsers
- **Mobile Chrome** (Pixel 5)
- **Mobile Safari** (iPhone 12)

### Tablets
- **iPad Pro**

## 🎯 Test Scenarios

The framework includes comprehensive test scenarios for:

- ✅ **Page Element Verification** - Validate all booking page elements
- ✅ **Date Selection** - Select future check-in and check-out dates
- ✅ **Guest Selection** - Configure number of guests
- ✅ **Promo Code Entry** - Test promotional code functionality
- ✅ **Search Functionality** - Complete booking search flow
- ✅ **Cart Management** - Verify cart state and functionality
- ✅ **Multi-Device Testing** - Cross-platform compatibility

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.ts` file includes:

- **Multi-browser setup** (Chrome, Firefox, Safari)
- **Mobile device emulation**
- **Parallel test execution**
- **Automatic retry on failure**
- **Screenshot and video capture on failure**
- **HTML and JSON reporting**

### Test Data Management

Test data is centralized in `src/utils/testData.ts`:

```typescript
// Example test data configurations
TestData.defaultSearch      // Standard booking
TestData.weekendSearch      // Weekend booking
TestData.familySearch       // Family booking with children
TestData.businessSearch     // Business trip with promo code
TestData.extendedStaySearch // Extended stay booking
```

## 🚀 CI/CD Integration

### GitHub Actions

The framework includes a comprehensive GitHub Actions workflow (`.github/workflows/playwright.yml`) that:

- **Runs on multiple browsers** (Chrome, Firefox, Safari)
- **Tests mobile devices** (Mobile Chrome, Mobile Safari)
- **Parallel execution** for faster feedback
- **Artifact upload** for test reports and screenshots
- **Automatic retry** on transient failures

### Workflow Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` branch

## 📊 Reporting

The framework generates multiple report formats:

- **HTML Report** - Interactive test results with screenshots
- **JSON Report** - Machine-readable test results
- **JUnit XML** - CI/CD integration format
- **Screenshots** - Automatic capture on test failures
- **Videos** - Recorded test execution on failures

## 🛡️ Best Practices Implemented

### Page Object Model (POM)
- **HomePage** - Main page interactions and elements for the booking system
- **Reusable methods** - Encapsulated page interactions

### Test Fixtures
- **Custom fixtures** - Enhanced test context with utilities
- **Device detection** - Automatic mobile/tablet/desktop detection
- **Browser management** - Optimized browser configuration

### Error Handling
- **Automatic retries** - Handle flaky tests
- **Timeout management** - Configurable timeouts per action
- **Graceful failures** - Proper error reporting and cleanup

## 🔍 Debugging

### Debug Mode
```bash
npm run test:debug
```

### Code Generation
```bash
npm run test:codegen
```

### Trace Viewer
Test traces are automatically captured and can be viewed with:
```bash
npx playwright show-trace trace.zip
```

## 📝 Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '../src/fixtures/testFixtures';
import { TestData } from '../src/utils/testData';

test.describe('Booking System Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHomePage();
  });

  test('should perform booking search @desktop', async ({ homePage }) => {
    const searchData = TestData.defaultSearch;
    
    await homePage.performSearch(
      searchData.dates.checkInDays,
      searchData.dates.checkOutDaysAfterCheckIn,
      searchData.guests.total
    );
    
    // Add assertions here
  });
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests following the existing patterns
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

1. Check existing issues in the repository
2. Create a new issue with detailed information
3. Include test logs and screenshots if applicable

---

**Happy Testing! 🎉**
