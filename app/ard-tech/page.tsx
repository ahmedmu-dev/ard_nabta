import type { Metadata } from "next";
import ArdTechComingSoon from "@/components/ard-tech/ArdTechComingSoon";

export const metadata: Metadata = {
  title: "Ard Tech",
  description:
    "Ard Tech is coming soon: AI-assisted construction evidence and quality records from Ard Nabta.",
  openGraph: {
    title: "Ard Tech | Coming Soon",
    description:
      "AI-assisted construction evidence and quality records. Coming soon from Ard Nabta.",
  },
};

export default function ArdTechPage() {
  return <ArdTechComingSoon />;
}
