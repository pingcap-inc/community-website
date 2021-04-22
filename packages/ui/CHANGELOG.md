# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), but the versionning is not strictly adhered to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2021-04-22

### Added

- Header's onNavClick accepts `isSelected` as the second argument
- Split nav data and data helpers into an independent package

### Fixed

- Fix the broken Header & Footer stories on Storybook

## [0.1.3] - 2021-04-18

### Fixed

- Declare `polish` as a peer dependency

## [0.1.2] - 2021-04-18

### Added

- Customize AntD's global CSS

### Changed

- Replace `rem` with `px` for the size unit

### Fixed

- The selected navItem will not trigger onNavClick on Header
- Fix the broken Header & Footer stories

## [0.1.1] - 2021-04-15

### Added

- Add `hasMargin` prop to control the gap on the Footer top
- Create a temporary i18n solution for Header & Footer
- `getData` is provided to remove URL prefix for current site for nav items

---

## [0.1.0] - 2021-04-12

### Added

- First release version, which includes Header, Footer components and basic UI elements
