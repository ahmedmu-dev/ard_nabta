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
];
