# Mobile Banking Release Operations Case Study

**Status:** Complete  
**Release:** Pinehaven Mobile Demo 1.1.0  
**Final build:** Build 18  
**Final decision:** Go for simulated release

## Live Project

- [Open the working Build 18 demo in Expo Snack](https://snack.expo.dev/@benitezb/pinehaven-mobile-demo---build-18)
- [View the release tracking board](https://github.com/users/brandonbenitezg-ux/projects/1/views/1)
- [Review the corrected Build 18 source](./App.js)

## Executive Summary

This project simulates the work of an entry-level Mobile App Operations Associate managing a fictional credit union app update from initial scope review through release readiness.

I reviewed an incomplete release request, documented the missing requirements, tested the initial build across multiple environments, identified five defects, issued a no-go recommendation, verified the corrected build, and prepared a client-facing guide for resolving an Apple developer-account agreement blocker.

The primary focus is operational execution, quality assurance, technical communication, issue tracking, and follow-through rather than software development.

## Results at a Glance

| Measure | Build 17 | Build 18 |
|---|---:|---:|
| Release decision | No-go | Go for simulated release |
| Initial test cases | 15 | Not applicable |
| Initial tests passed | 9 | Not applicable |
| Initial requirements failed | 6 | Not applicable |
| Defects open | 5 | 0 |
| Retests passed | Not applicable | 9 of 9 |
| New problems observed during regression | Not applicable | 0 |

## Release Story

1. Reviewed the release brief before testing.
2. Identified missing information about platform coverage, test data, acceptance criteria, approval authority, release method, and developer-account status.
3. Documented the clarified scope and measurable approval requirements.
4. Tested Build 17 using iOS and Android previews plus a physical iPhone through Expo Go.
5. Identified five defects affecting filtering, preference persistence, accessibility, text rendering, and Android safe areas.
6. Recommended no-go for Build 17 because four high-severity defects remained open.
7. Retested each correction in Build 18 and repeated the core regression checks.
8. Confirmed that all nine Build 18 retests passed with no newly observed problem.
9. Recommended Build 18 for simulated release while clearly documenting the remaining test limitations.

## Defects Identified in Build 17

| ID | Defect | Severity | Build 18 Result |
|---|---|---|---|
| DEF-001 | Deposit filter omitted Mobile Check Deposit | High | Closed after retest |
| DEF-002 | Notification preference reset after restart | High | Closed after retest |
| DEF-003 | Large text clipped Settings descriptions | High | Closed after retest |
| DEF-004 | Account masks and separators displayed corrupted characters | Medium | Closed after retest |
| DEF-005 | Android header and navigation overlapped system controls | High | Closed after retest |

## Testing Environments

| Platform | Environment | Coverage |
|---|---|---|
| iOS | Expo Snack preview | Functional, visual, accessibility, and persistence testing |
| Android | Expo Snack Pixel 11 Pro preview | Functional, visual, accessibility, and safe-area testing |
| iPhone | Physical device through Expo Go | Core navigation, filtering, accessibility, and persistence validation |

Physical Android hardware testing was not available. Android results are limited to the Expo Snack preview and are not represented as physical-device validation.

## Evidence and Documentation

### Release Planning

- [Mobile App Release Brief](./01-scenario/release-brief.md)
- [Release Scope Clarification Response](./01-scenario/scope-clarification-response.md)

### Quality Assurance

- [Build 17 Test Report and No-Go Decision](./02-quality-assurance/build-17-test-report.md)
- [Build 18 Retest and Release Readiness Report](./02-quality-assurance/build-18-retest-report.md)

### Client Guidance

- [Resolving an Updated Apple Developer Agreement](./03-client-guidance/apple-agreement-resolution-guide.md)

### Tracking and Application

- [GitHub Release Board](https://github.com/users/brandonbenitezg-ux/projects/1/views/1)
- [Build 18 Source](./App.js)
- [Live Build 18 Demo](https://snack.expo.dev/@benitezb/pinehaven-mobile-demo---build-18)

## Connection to Mobile App Operations Work

| Responsibility | Project Evidence |
|---|---|
| Review and organize release requirements | Release brief and clarification response |
| Track open work through resolution | Public GitHub Project board and issue history |
| Test app builds before release | Build 17 test report and supporting screenshots |
| Document defects clearly | Expected results, actual results, severity, environment, and release impact |
| Verify corrected builds | Build 18 defect retest and regression results |
| Make release-readiness decisions | Documented Build 17 no-go and Build 18 go recommendations |
| Explain account actions to a client | Apple developer-agreement resolution guide |
| Maintain accurate reference material | Structured repository documentation and source history |
| Communicate limitations honestly | Explicit physical-device and app-store access limitations |

## Tools Used

- Expo Snack
- Expo Go
- React Native
- GitHub repositories
- GitHub Issues and Projects
- iOS and Android preview environments
- Physical iPhone testing

## Project Limitations

- No paid Apple or Google developer account was used.
- App Store Connect and Google Play Console submission activities were not performed.
- Store submission, review, approval, and production release remain simulated.
- Physical Android testing was not performed.
- The app uses fictional local data and does not connect to real financial services.

A real production release would require signed builds, authorized developer-account access, platform compliance review, physical Android coverage, store submission, reviewer-response handling, and controlled production distribution.

## Disclaimer

Pinehaven Community Credit Union and every person, account, balance, transaction, communication, and release record in this repository are fictional. This independent portfolio project is not connected to a real financial institution, employer, client, Apple developer account, or Google Play developer account. It does not collect personal information or process financial transactions.
