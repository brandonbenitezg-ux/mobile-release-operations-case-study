# Release Scope Clarification Response

## Document Information

| Field | Information |
|---|---|
| Release ID | PCCU-MOBILE-2026-Q3 |
| Application | Pinehaven Mobile Demo |
| Release Version | 1.1.0 |
| Response Date | September 5, 2026 |
| Simulated Respondent | Jordan Blake, Product Manager |
| Release Owner | Brandon Benitez |
| Document Type | Simulated scope clarification |

## Simulation Notice

This document is part of a fictional portfolio work sample.

Jordan Blake, Pinehaven Community Credit Union, and all information contained in this response are fictional. This document does not represent communication from a real person, employer, client, or financial institution.

## Purpose

This response addresses the questions identified during the initial review of the version 1.1.0 release brief.

The clarified information will be used to create the quality assurance test plan and determine whether the release is ready to proceed.

## Clarification 1: Supported Operating Systems

The demonstration application should support:

- iOS 16 or later
- Android 11 or later

Testing should record the exact operating system used on each physical device.

If a required platform cannot be tested, that limitation must be documented in the final release-readiness decision.

## Clarification 2: Required Device Coverage

The minimum testing coverage is:

- One physical iPhone
- One physical Android phone
- One small-screen responsive-layout check
- One large-screen responsive-layout check

The physical Android device may be borrowed for testing. No personal information belonging to the device owner should be entered into the demonstration application.

Browser-based responsive testing may supplement physical-device testing, but it should not be described as a physical-device test.

## Clarification 3: Test Access and Data

The application will not connect to a real authentication system.

Testers will select a button labeled `Continue as Demo Member`. No real username, password, account number, or personal information is required.

The application will display fictional information, including:

- Demo member name: Taylor Morgan
- Fictional checking balance: $2,850.47
- Fictional savings balance: $8,420.12
- Fictional transaction history
- Fictional notification preferences

Every app screen must indicate that the information is demonstration data.

## Clarification 4: Navigation and Reliability Requirements

General navigation and reliability will be considered acceptable when:

- The application launches without crashing
- Every primary navigation button opens the expected screen
- The user can return to the previous screen
- Transaction filters show the correct transaction types
- Notification selections remain saved after restarting the app
- Enlarged text remains readable without important information being cut off
- No critical or high-severity defect remains unresolved
- All required test cases have a recorded result
- Previously failed tests pass on the corrected build

## Clarification 5: Final Release Approval

Brandon Benitez, acting as the simulated Mobile App Operations Associate, will prepare the release-readiness recommendation.

Jordan Blake, acting as the fictional Product Manager, has authority to provide the final go/no-go approval after reviewing:

- Test results
- Open defects
- Retest evidence
- Known limitations
- Account-level blockers
- Release documentation

Brandon may recommend release approval but may not represent that recommendation as final client authorization.

## Clarification 6: Release Method

The planned release method is a manually scheduled release.

If approved, the fictional release is scheduled for:

**September 18, 2026 at 10:00 a.m. Eastern Time**

The release should not be represented as approved or available before final authorization is documented.

## Clarification 7: Developer-Account Status

The simulated Google Play developer account has no known blocking items.

The simulated Apple developer account has one outstanding item:

**The updated Apple Developer Program License Agreement requires acceptance by the fictional Account Holder.**

This item does not prevent quality assurance testing, but it must be resolved before the simulated submission can be considered ready.

The Mobile App Operations Associate must:

1. Notify the fictional credit union contact
2. Explain who must complete the action
3. Provide clear resolution instructions
4. Establish a requested completion date
5. Track the item through simulated resolution
6. Escalate it if the requested date is missed

No actual Apple or Google developer account was accessed during this portfolio project.

## Approved Release Scope

Based on these clarifications, quality assurance planning may begin.

The initial release scope includes:

- Transaction filtering
- Notification preference persistence
- Enlarged-text accessibility
- Primary navigation
- App launch and restart behavior
- Version and build information
- Regression testing of existing demonstration features

Changes outside this list require a documented scope update before being added to the release.
