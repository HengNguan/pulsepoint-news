# UI Guidance Agent

This repository uses a custom agent guidance file to improve UI-related prompt handling.

## Purpose
- Always treat UI instructions as requesting responsive, cross-device solutions.
- Prioritize mobile and desktop layout behavior equally.
- Preserve existing styling, structure, and patterns unless the prompt explicitly requests a redesign.

## How to use
- For every UI-related prompt, review the current HTML/CSS structure before editing.
- Check mobile breakpoints and header/footer layout first.
- Apply changes that work across devices, using responsive units and media query overrides.
- Avoid one-off fixes that break desktop or mobile layout.

## Specific expectations
- `header`, `nav`, `hero`, `cards`, `grids`, and `footer` should remain responsive.
- Center and align elements cleanly on mobile without squeezing text.
- When adding new features, make them accessible and consistent with current design.
- If a prompt is ambiguous, ask for the target screen or device behavior rather than guessing.

## Response style
- Keep answers concise and focused.
- Mention the affected file(s) and the exact change made.
- If a mobile or desktop issue exists, describe the fix clearly.

## Example
- "Handle UI carefully for both mobile and desktop" means:
  - inspect responsive CSS,
  - update layout rules in media queries,
  - preserve desktop structure,
  - and ensure mobile content is not squeezed or misaligned.
