/**
 * Homepage supporting content drawn from delivered Hatta work.
 * Owner names stay off public copy.
 */

export const SITE_PHOTOS = [
  {
    src: "/images/samples/project-02/03-photo-2026-09-10-15-41-38.jpg",
    alt: "Private villa stone cladding near completion",
    caption: "New build envelope",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/samples/project-01/03-photo-2026-09-10-15-36-14.jpg",
    alt: "White villa modification exterior",
    caption: "Modification",
    className: "",
  },
  {
    src: "/images/samples/project-04/02-photo-2026-09-10-14-10-33.jpg",
    alt: "Completed family annex and gate",
    caption: "Annex handover",
    className: "",
  },
  {
    src: "/images/samples/project-03/03-photo-2026-09-10-14-17-52-4.jpg",
    alt: "Ard Nabta contractor site board in Hatta",
    caption: "Licensed on site",
    className: "md:col-span-2",
  },
] as const;

export const SITE_COMMITMENTS = [
  {
    title: "One licensed contractor",
    body: "Dubai Municipality license 1151140 covers the programme end to end. You deal with Ard Nabta, not a chain of informal trades.",
  },
  {
    title: "Drawings before ground breaks",
    body: "We coordinate with licensed consultants, review the package, and push permit submissions so the site starts with approved papers.",
  },
  {
    title: "Structure through keys",
    body: "Blockwork, envelope, wet areas, ceilings, AC finishing, walls, and gates stay on one programme with one site point of contact.",
  },
  {
    title: "Completion paperwork included",
    body: "Snag close-out and Dubai Municipality completion or modification certificates are part of the job, not an afterthought.",
  },
  {
    title: "Hatta corridor focus",
    body: "Delivered and active plots are concentrated in Hatta and the Dubai mountain corridor, where we already know the site conditions.",
  },
] as const;

export const BUILD_TYPES = [
  {
    label: "New villa",
    detail: "G+1 / G+2 structure, envelope, fit-out, completion cert",
  },
  {
    label: "Majlis & annex",
    detail: "Guest halls, family annexes, services tied to the main villa",
  },
  {
    label: "Extension & wall",
    detail: "Approved modifications, boundary walls, external hardscape",
  },
  {
    label: "Fit-out finish",
    detail: "Ceilings, wet areas, AC, joinery coordination to move-in",
  },
] as const;
