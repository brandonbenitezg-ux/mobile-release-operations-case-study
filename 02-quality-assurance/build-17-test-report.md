# Build 17 Quality Assurance Test Report

## Report Information

| Field | Value |
|---|---|
| Release | Pinehaven Mobile Demo 1.1.0 |
| Build tested | Build 17 |
| Release ID | PCCU-MOBILE-2026-Q3 |
| Tester | Brandon Benitez |
| Test type | Smoke, functional, accessibility, persistence, and compatibility testing |
| Overall result | **FAILED - NOT READY FOR RELEASE** |

## Simulation Notice

Pinehaven Community Credit Union and all application data are fictional. This report is part of an independent portfolio work sample. No real financial institution, customer information, developer account, or app-store submission was used.

## Test Environments

| Environment | Method | Coverage |
|---|---|---|
| iOS | Expo Snack iOS preview | Full functional and visual pass |
| Android | Expo Snack, Pixel 11 Pro preview | Core functional, accessibility, and layout pass |
| Physical iPhone | Expo Go | Core navigation, filtering, accessibility, and persistence pass |

The physical iPhone model and operating-system version were not recorded during the initial execution. They will be recorded during the Build 18 retest. Physical Android testing was not performed; Android findings are limited to the Expo Snack preview environment.

## Summary

Build 17 successfully launched and supported the primary demonstration flows across the available environments. The correct fictional balances appeared, all primary screens opened, and the All and Withdrawals transaction views operated without crashes.

The build did not satisfy the release acceptance criteria. Testing identified six failed requirements across five defects, including incorrect deposit filtering, loss of a saved notification preference, accessibility text clipping, corrupted special characters, and Android content overlapping system interface areas.

## Test Results

| ID | Test | Expected Result | Actual Result | Environment | Status |
|---|---|---|---|---|---|
| QA-01 | Launch welcome screen | Welcome screen displays without an error | Screen displayed correctly | iOS preview | Pass |
| QA-02 | Enter demo experience | Continue as Demo Member opens the app | Demo member entered successfully | iOS preview and physical iPhone | Pass |
| QA-03 | Verify balances | Checking, savings, and total balances match the release data | All balances matched | iOS preview, Android preview, and physical iPhone | Pass |
| QA-04 | View all transactions | Six transactions appear | Six transactions appeared | iOS preview and Android preview | Pass |
| QA-05 | Filter deposits | Three deposits appear: Payroll Deposit, Mobile Check Deposit, and Account Dividend | Only two deposits appeared; Mobile Check Deposit was omitted | iOS preview, Android preview, and physical iPhone | **Fail** |
| QA-06 | Filter outgoing transactions | Outgoing transactions appear without a crash | Three outgoing transactions appeared | iOS preview and Android preview | Pass |
| QA-07 | Display account masks and separators | Masked account numbers and transaction separators display as readable characters | Corrupted characters such as `Ã¢` appeared | iOS preview, Android preview, and physical iPhone | **Fail** |
| QA-08 | Open Settings | Settings screen opens and controls are available | Settings opened correctly | All tested environments | Pass |
| QA-09 | Change notification setting | Notification switch changes from off to on | Switch changed successfully | iOS preview and physical iPhone | Pass |
| QA-10 | Retain notification setting | Enabled notification preference remains enabled after reload | Preference returned to off | iOS preview and physical iPhone | **Fail** |
| QA-11 | Enable large text | All settings text remains visible and readable | Descriptions under both settings were cut off | iOS preview, Android preview, and physical iPhone | **Fail** |
| QA-12 | Verify build information | Version 1.1.0 and Build 17 appear | Correct version and build appeared | iOS preview and Android preview | Pass |
| QA-13 | Respect Android top safe area | App header remains below the Android status area | Header overlapped the phone's top system interface | Android Pixel 11 Pro preview | **Fail** |
| QA-14 | Respect Android bottom safe area | App navigation remains separate from Android system navigation | App navigation overlapped system controls and caused accidental Home actions | Android Pixel 11 Pro preview | **Fail** |
| QA-15 | Physical iPhone core navigation | Home, Transactions, and Settings remain usable | Core navigation worked | Physical iPhone through Expo Go | Pass |

## Defects Identified

### DEF-001 - Deposit Filter Omits a Valid Deposit

- **Severity:** High
- **Affected environments:** iOS preview, Android preview, physical iPhone
- **Expected:** The Deposits filter displays all three transactions categorized as deposits.
- **Actual:** Mobile Check Deposit is omitted, leaving only two results.
- **Release impact:** A member could receive an incomplete view of deposit activity. The release cannot be approved until corrected.

### DEF-002 - Notification Preference Does Not Persist

- **Severity:** High
- **Affected environments:** iOS preview and physical iPhone
- **Expected:** After notification preferences are enabled, the setting remains enabled following an app reload.
- **Actual:** The setting returns to off after reload.
- **Release impact:** The app does not honor the member's saved preference. Retesting is required after persistent storage is implemented.

### DEF-003 - Large Text Causes Description Clipping

- **Severity:** High
- **Affected environments:** iOS preview, Android preview, physical iPhone
- **Expected:** All settings labels and descriptions remain fully readable when large text is enabled.
- **Actual:** The descriptions for Account notifications and Large text test mode are cut off.
- **Release impact:** The update fails its stated accessibility requirement and cannot be approved.

### DEF-004 - Special Characters Display Incorrectly

- **Severity:** Medium
- **Affected environments:** iOS preview, Android preview, physical iPhone
- **Expected:** Account numbers display a readable mask followed by the final four digits, and transaction metadata uses a readable separator.
- **Actual:** Corrupted characters appear in place of the mask and separator.
- **Release impact:** Financial information remains fictional and accurate, but the presentation appears broken and may confuse users.

### DEF-005 - Android Layout Overlaps System Interface

- **Severity:** High
- **Affected environment:** Android Pixel 11 Pro preview
- **Expected:** The app header and bottom navigation remain within safe content areas and do not interfere with Android system controls.
- **Actual:** The header overlaps the status area. The bottom navigation overlaps system navigation, causing accidental system Home actions when attempting to select app tabs.
- **Release impact:** Core navigation is unreliable on the tested Android configuration. Android release readiness cannot be recommended.

## Release Recommendation

**NO-GO. Build 17 is not ready for release.**

The following work is required before another release-readiness review:

1. Correct the deposit-filtering logic.
2. Store and restore notification preferences.
3. Remove fixed-height restrictions that clip enlarged text.
4. Replace or correctly encode the affected special characters.
5. Apply platform-safe spacing above the header and below the bottom navigation on Android.
6. Produce Build 18.
7. Retest every failed case and perform regression testing on the previously passing core flows.

## Evidence

Screenshots were captured from the iOS and Android preview environments showing transaction results, corrupted characters, large-text clipping, and Android system-interface overlap. Build 18 evidence will be captured using matching screens to support before-and-after comparison.
