# Build 18 Retest and Release Readiness Report

## Report Information

| Field | Value |
|---|---|
| Release | Pinehaven Mobile Demo 1.1.0 |
| Build tested | Build 18 |
| Previous build | Build 17 |
| Release ID | PCCU-MOBILE-2026-Q3 |
| Tester | Brandon Benitez |
| Test type | Defect verification and regression testing |
| Overall result | **PASSED - READY FOR SIMULATED RELEASE** |

## Simulation Notice

Pinehaven Community Credit Union and all application data are fictional. This report is part of an independent portfolio work sample. No real financial institution, customer information, developer account, or app-store submission was used.

## Objective

Build 18 was produced after Build 17 failed its release-readiness review. The purpose of this test cycle was to verify corrections for all five documented defects and confirm that the previously working core functionality was not damaged by the changes.

## Test Environments

| Environment | Method | Coverage |
|---|---|---|
| iOS | Expo Snack iOS preview | Defect verification and core regression testing |
| Android | Expo Snack Pixel 11 Pro preview | Defect verification, safe-area testing, and core regression testing |
| Physical iPhone | Expo Go | Filtering, accessibility, preference persistence, and core navigation |

Physical Android hardware was not available. Android results are limited to the Expo Snack preview environment and should not be represented as physical-device validation.

## Retest Results

| ID | Retest | Expected Result | Build 18 Result | Status |
|---|---|---|---|---|
| RT-01 | Deposit filtering | Three valid deposits appear | All three deposits displayed | Pass |
| RT-02 | Special-character rendering | Account masks and separators are readable | Corrupted characters no longer appeared | Pass |
| RT-03 | Large-text accessibility | Settings descriptions remain completely visible | Both descriptions remained visible | Pass |
| RT-04 | Notification persistence | Enabled preference remains on after restart | Preference remained enabled | Pass |
| RT-05 | Android top safe area | Header remains below system status elements | Overlap was removed | Pass |
| RT-06 | Android bottom safe area | App navigation remains above system controls | Overlap and accidental Home actions were removed | Pass |
| RT-07 | Core navigation regression | Home, Transactions, and Settings continue working | All primary navigation worked | Pass |
| RT-08 | Balance regression | Fictional account balances remain accurate | All balances remained correct | Pass |
| RT-09 | Physical iPhone validation | Corrected functionality works through Expo Go | Physical iPhone retest passed | Pass |

## Defect Disposition

| Defect | Build 17 Severity | Build 18 Status |
|---|---|---|
| DEF-001 - Deposit filter omitted a valid deposit | High | Closed after successful retest |
| DEF-002 - Notification preference did not persist | High | Closed after successful retest |
| DEF-003 - Large text clipped descriptions | High | Closed after successful retest |
| DEF-004 - Special characters displayed incorrectly | Medium | Closed after successful retest |
| DEF-005 - Android layout overlapped system interface | High | Closed after successful retest |

## Regression Result

The corrections did not produce a newly observed problem within the tested scope. Build 18 continued to display the correct fictional balances, provided access to all primary screens, and supported the core demonstration flows.

## Remaining Limitations

- Physical Android hardware testing was not performed.
- Testing occurred through Expo Snack and Expo Go rather than signed production builds.
- Apple App Store Connect and Google Play Console were not accessed.
- Store review, approval, and production distribution remain simulated.
- The application uses fictional local demonstration data and does not test real financial integrations.

These limitations must remain visible in the final case study and would require additional testing before a real production release.

## Final Recommendation

**GO FOR SIMULATED RELEASE.**

Build 18 satisfies the acceptance criteria within the defined portfolio test environment. All five Build 17 defects passed verification, the core regression checks passed, and no new issue was observed.

This recommendation applies only to the simulated portfolio release. It is not approval for an actual App Store or Google Play production release.
