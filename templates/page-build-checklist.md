# Page Build Checklist

Use this checklist whenever you turn the reusable shell into a real page.

## Before Writing Copy

- choose the target page slug
- confirm the primary topic, suburb and search intent
- choose the hero, about, coverage and final CTA images
- confirm the phone CTA format and destination

## SEO Pass

- set `{{PAGE_TITLE}}`
- set `{{META_DESCRIPTION}}`
- set `{{CANONICAL_URL}}`
- set `{{OG_TITLE}}`
- set `{{OG_DESCRIPTION}}`
- set `{{OG_IMAGE}}`
- add `{{JSON_LD_BLOCK}}` if the page needs schema

## Content Pass

- write a suburb-specific H1 and hero lead
- localise the four proof-strip points
- tailor the about copy to the page topic
- replace the six service cards with the actual service mix
- localise the route and coverage cards with relevant roads, landmarks or test-route context
- set the package pricing and bullets
- write FAQ answers for the actual suburb or service

## CTA Pass

- set the header link and button labels
- set the hero primary CTA href and label
- set the hero phone CTA href and label
- set the hero secondary CTA href and label
- set the about CTA hrefs
- set the final CTA hrefs and labels
- set the footer support href and label

## Consistency Rules

- keep the existing class names
- keep the existing section order unless there is a strong reason not to
- keep the `faq-item > button + .faq-panel` structure
- keep `js/main.js`
- keep the site header and footer shell
- do not redesign button shapes, heading styles or spacing per page

## Final Review

- check for leftover `{{TOKENS}}`
- check for old suburb names from the source page
- check that all image paths exist
- check that every CTA points to a real anchor, page or phone link
- check that the footer test centres match the page geography
