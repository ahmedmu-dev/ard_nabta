import type { Job } from "@/lib/types";

export const JOBS: Job[] = [
  {
    slug: "site-engineer",
    title: "Site Engineer",
    department: "Construction",
    location: "Hatta / Dubai sites",
    type: "Full-time",
    summary:
      "Own day-to-day technical control on villa and annex builds — drawings, inspections, and coordination with consultants and Dubai Municipality requirements.",
    responsibilities: [
      "Interpret structural and architectural drawings on site",
      "Coordinate trades and raise RFIs when details conflict",
      "Track quality, materials, and daily progress logs",
      "Support permit inspections and snag close-out",
    ],
    requirements: [
      "Degree or diploma in civil / construction engineering",
      "2+ years on residential or villa projects in the UAE",
      "Comfortable with DM site protocols and as-built notes",
      "Valid UAE driving licence preferred",
    ],
  },
  {
    slug: "site-supervisor",
    title: "Site Supervisor",
    department: "Construction",
    location: "Hatta / Dubai sites",
    type: "Full-time",
    summary:
      "Lead labour and subcontractors on active plots — safety, sequencing, and finishing quality through handover.",
    responsibilities: [
      "Plan daily work fronts with the site engineer",
      "Enforce site safety and PPE standards",
      "Supervise blockwork, casting, and finishing trades",
      "Report manpower, materials, and blockers to management",
    ],
    requirements: [
      "5+ years supervising residential construction in the UAE",
      "Strong Arabic and/or English on site",
      "Proven villa or annex delivery experience",
      "First-aid / safety training is an advantage",
    ],
  },
  {
    slug: "finishing-foreman",
    title: "Finishing Foreman",
    department: "Fit-Out",
    location: "Hatta / Dubai sites",
    type: "Full-time",
    summary:
      "Drive wet areas, ceilings, flooring, and joinery finishing to snag-free handover standard.",
    responsibilities: [
      "Coordinate tiling, painting, ceilings, and wet-area works",
      "Check levels, alignments, and finish quality before inspection",
      "Manage finishing subcontractors and material deliveries",
      "Close snag lists with the client walkthrough team",
    ],
    requirements: [
      "Hands-on finishing experience on villas or residential fit-out",
      "Ability to read finishing schedules and shop drawings",
      "Attention to detail on wet areas and joinery interfaces",
      "Willingness to work across active Hatta plots",
    ],
  },
  {
    slug: "quantity-surveyor",
    title: "Quantity Surveyor",
    department: "Commercial",
    location: "Dubai (site visits to Hatta)",
    type: "Full-time",
    summary:
      "Measure, cost, and control villa packages — from tender BOQs through variations and final accounts.",
    responsibilities: [
      "Prepare and update BOQs for new builds and modifications",
      "Track material quantities and subcontract valuations",
      "Support variation pricing and client cost reports",
      "Reconcile final accounts at handover",
    ],
    requirements: [
      "QS qualification or equivalent commercial experience",
      "Familiarity with UAE residential measurement practice",
      "Excel / cost-control discipline",
      "Site measurement experience preferred",
    ],
  },
  {
    slug: "project-coordinator",
    title: "Project Coordinator",
    department: "Operations",
    location: "Dubai",
    type: "Full-time",
    summary:
      "Keep permits, documents, and client communication moving so site teams can build without admin blockers.",
    responsibilities: [
      "Maintain permit and drawing registers",
      "Schedule consultant and DM inspection appointments",
      "Coordinate suppliers, deliveries, and site requests",
      "Prepare weekly status notes for management and clients",
    ],
    requirements: [
      "Strong organisation and written English",
      "Experience in contracting, real estate, or site admin",
      "Comfortable with WhatsApp/email client follow-up",
      "Arabic language skills are an advantage",
    ],
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Digital",
    location: "Dubai (hybrid)",
    type: "Full-time",
    summary:
      "Build and maintain the web tools that support Ard Nabta operations: public site, careers intake, and internal project workflows.",
    responsibilities: [
      "Ship and maintain Next.js features for the public website and careers flows",
      "Integrate forms, APIs, and simple back-office tooling for site teams",
      "Improve performance, accessibility, and deployment reliability",
      "Work with design and operations to turn site needs into working software",
    ],
    requirements: [
      "Strong TypeScript / React / Next.js experience",
      "Comfortable with Git, APIs, and production web deployments",
      "Clear written English for specs and handoff notes",
      "Interest in construction or operations tooling is an advantage",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Digital",
    location: "Dubai (hybrid)",
    type: "Full-time",
    summary:
      "Own the digital experience for Ard Nabta: site structure, careers flows, and clear interfaces for clients and site teams.",
    responsibilities: [
      "Design page layouts, component states, and application forms end to end",
      "Map client and applicant journeys into simple, high-contrast UI",
      "Produce handoff-ready specs that match the existing brutalist system",
      "Test mobile and desktop flows and refine based on real use",
    ],
    requirements: [
      "Portfolio showing web or product UI with strong visual hierarchy",
      "Fluent in Figma (or equivalent) and design systems",
      "Comfortable writing concise UX copy for forms and CTAs",
      "Experience with marketing sites or B2B services is preferred",
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    department: "Digital",
    location: "Dubai (hybrid)",
    type: "Full-time",
    summary:
      "Apply practical AI to contracting workflows: document assist, site photo organisation, and internal knowledge tools that save site-office time.",
    responsibilities: [
      "Prototype and ship AI features for document search, summarisation, and intake triage",
      "Build reliable pipelines for site photos, permits, and project notes",
      "Evaluate models and vendors for accuracy, cost, and UAE data handling",
      "Partner with software and operations to put AI into real daily use",
    ],
    requirements: [
      "Hands-on experience with LLMs, embeddings, or applied ML in products",
      "Strong Python and/or TypeScript for tooling and APIs",
      "Ability to ship small, measurable pilots (not research-only work)",
      "Familiarity with document or media workflows is an advantage",
    ],
  },
];
