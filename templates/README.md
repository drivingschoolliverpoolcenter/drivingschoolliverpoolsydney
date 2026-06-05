# Reusable Page Template

Use [reusable-page-template.html](/C:/Users/digit/OneDrive/Documents/GitHub/drivingschoolliverpoolsydney/templates/reusable-page-template.html) as the default shell for future suburb pages, service pages and landing pages.

## What This Solves

This template removes the need to redesign every new page from scratch. It keeps:

- the same header and footer shell
- the same colour palette, typography and spacing rhythm
- the same button system and CTA placement
- the same split layouts, service cards and pricing blocks
- the same FAQ accordion structure used by `js/main.js`

Future pages should be built by replacing content, images, SEO data and local references only.

## Page Creation Workflow

1. Duplicate `templates/reusable-page-template.html`.
2. Create a dedicated folder for the page slug, for example `driving-school-moorebank/`.
3. Save the copied file as `driving-school-moorebank/index.html`.
4. Replace the `{{TOKENS}}`.
5. Swap in suburb-specific copy, routes, images, packages, FAQs and test centres.
6. Keep the class names, section ids and `../js/main.js` include.
7. Remove a whole optional section only if the page genuinely does not need it.

## Template Structure

The shell is already laid out in the recommended order:

1. Hero
2. Proof strip
3. About or local context split
4. Services grid
5. Coverage or route context split
6. Packages or offers
7. FAQ
8. Final CTA
9. Shared footer

## Required Token Groups

Replace these on every page:

- SEO: `{{PAGE_TITLE}}`, `{{META_DESCRIPTION}}`, `{{CANONICAL_URL}}`, `{{OG_TITLE}}`, `{{OG_DESCRIPTION}}`, `{{OG_IMAGE}}`, `{{JSON_LD_BLOCK}}`
- Brand and contact: `{{BUSINESS_NAME}}`, `{{PRIMARY_PHONE_DISPLAY}}`, `{{PHONE_CTA_HREF}}`, `{{PHONE_CTA_LABEL}}`
- Header CTA: `{{HEADER_LINK_HREF}}`, `{{HEADER_LINK_LABEL}}`, `{{HEADER_BUTTON_HREF}}`, `{{HEADER_BUTTON_LABEL}}`
- Hero: `{{HERO_*}}`, `{{PRIMARY_CTA_*}}`, `{{PHONE_CTA_*}}`, `{{SECONDARY_CTA_*}}`
- Proof strip: `{{STAT_*}}`
- About block: `{{ABOUT_*}}`
- Services grid: `{{SERVICES_*}}`, `{{SERVICE_ONE_*}}` through `{{SERVICE_SIX_*}}`
- Coverage block: `{{COVERAGE_*}}`, `{{ROUTE_CARD_ONE_*}}` through `{{ROUTE_CARD_FOUR_*}}`
- Packages: `{{PACKAGES_*}}`, `{{PACKAGE_ONE_*}}` through `{{PACKAGE_FOUR_*}}`
- FAQ: `{{FAQ_*}}`
- Final CTA: `{{FINAL_CTA_*}}`
- Footer local details: `{{FOOTER_CONTACT_*}}`, `{{FOOTER_SUPPORT_*}}`, `{{TEST_CENTRE_ONE}}` through `{{TEST_CENTRE_FOUR}}`

## Reusable Section System

The page template relies on the shared CSS already in [css/main.css](/C:/Users/digit/OneDrive/Documents/GitHub/drivingschoolliverpoolsydney/css/main.css):

- `page-hero`
- `page-hero__layout`
- `page-shell-grid`
- `page-shell-grid--reverse`
- `page-shell-points`
- `stat-strip`
- `topic-grid`
- `route-grid`
- `pricing-grid`
- `faq-layout`
- `final-cta__panel`
- `site-footer`

These classes are the reusable design system. Do not fork them per page unless the entire site design changes.

## Rules For Future Pages

- Keep `#faq` and the `faq-item > button + .faq-panel` structure or the accordion JS will break.
- Keep `#final-cta` if hero and header buttons need a consistent close target.
- Keep the site font stack and site palette from `css/main.css`.
- Reuse existing button classes instead of inventing one-off button styles.
- Duplicate or remove repeated cards only inside existing grids, not by redesigning the section shell.
- Change page topic, suburb, service details, route details, test centres, image choices and SEO only.

## Optional Sections

The template is intentionally modular. You can keep or remove:

- proof strip
- coverage split
- packages section

You can also insert these without redesigning the overall shell:

- video testimonials
- accreditation section
- map block
- suburb card grid
- review cards
- service-area list

When adding extra content, prefer existing classes in `css/main.css` before creating new patterns.
