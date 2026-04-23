# Redesign Website to Match Inspiration (Harry Dobbs Design)

This plan outlines the steps to completely overhaul the current Silhouette website's visual layout to exactly match the provided inspiration website (harrydobbs.com).

## User Review Required

> [!IMPORTANT]
> - **Navigation Buttons:** The inspiration uses "PROFILE" and "CONTACT" in the bottom-right. I plan to keep your existing sections ("ABOUT", "SERVICES", "PROJECTS", "TEAM") but move and style them exactly like the inspiration's buttons in the bottom-right corner.
> - **Slogan Text:** I will adapt your current words to match the inspiration's slogan style. Your current words: "ARCHITECTURE ENGINEERING LANDSCAPE by design." placed in the top right.
> - **Logo:** You mentioned a logo in the `images` folder (`logo.jpg`). I will place it in the top-left corner as per the inspiration.

## Proposed Changes

### Front-end Files

#### [MODIFY] [index.html](file:///c:/Users/USER/Desktop/Sir%20Masood/index.html)
- Remove the canvas particle background (`<canvas id="bg-canvas"></canvas>`).
- Add a new `<div id="slideshow-container">` containing the images from the `images/` folder.
- Restructure the main layout into four absolute positioned corners:
  - **Top-Left:** Logo (`images/logo.jpg`).
  - **Top-Right:** Slogan ("ARCHITECTURE ENGINEERING LANDSCAPE by design.").
  - **Bottom-Right:** Navigation buttons styled as minimalist bordered boxes.
  - **Bottom-Left:** Empty or contact info (similar to RIBA logo on inspiration).

#### [MODIFY] [styles.css](file:///c:/Users/USER/Desktop/Sir%20Masood/styles.css)
- Implement a full-screen, minimalist dark aesthetic.
- Add CSS animations for the background slideshow (smooth fades using `opacity` transitions).
- Style the typography to use clean, modern, white sans-serif fonts.
- Style the navigation buttons in the bottom-right as minimalist boxes with thin white borders, transparent backgrounds, and uppercase text.
- Position the logo and slogan in their respective top corners.

#### [MODIFY] [script.js](file:///c:/Users/USER/Desktop/Sir%20Masood/script.js)
- Remove the complex canvas drawing logic.
- Implement a simple slideshow script that cycles through the images in the `images/` folder every 4-5 seconds by toggling an `active` class on the image elements.
- Maintain the existing modal logic so the navigation buttons still open the content modals.

## Verification Plan

### Automated Tests
- N/A

### Manual Verification
- Open `index.html` in the browser to visually verify that:
  - The background images cycle smoothly with fade transitions.
  - The layout elements (logo, slogan, navigation) are pinned to their exact corners as described.
  - The fonts and minimalist aesthetic match the inspiration site.
  - Clicking the navigation buttons still opens the content overlays.
