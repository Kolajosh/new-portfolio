export interface ExperienceItem {
  year: string;
  period: string;
  role: string;
  company: string;
  badgeText: string;
  badgeBg: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    year: "2025",
    period: "Nov 2025 - 2026",
    role: "Frontend Engineer",
    company: "Moniepoint MFB (Remote)",
    badgeText: "M",
    badgeBg: "linear-gradient(135deg, #0357EE 0%, #023E8A 100%)",
    highlights: [
      "Engineered merchant-facing financial dashboards and analytics reports (Modifiers Summary, Sales by Staff, Payment Methods) for Moniebook, powering operations across 4,500+ active business branches with a 54% Pro Plan adoption rate.",
      "Spearheaded the development of core checkout workflows, inventory modifier systems, and Web Register tools, driving >90% stock management adoption and facilitating 14M+ recorded sales transactions, exceeding the initial 12M goal.",
      "Architected high-precision data aggregation workflows, tailored filter configurations, and print-ready export previews for transactional reporting, powering systems that facilitated over ₦86.3B in processed volume across Moniepoint platforms.",
      "Refactored POS Web Register and Dashboard refund processing, resolving key computation discrepancies in subtotal calculations, unit-multiplier pricing structures, employee discounts, and cart state synchronization.",
      "Upgraded micro-frontend architecture to TypeScript v7 and Tailwind CSS v4, fixing React 19 compatibility issues while aligning core interface modules with modern design system guidelines.",
    ],
  },
  {
    year: "2022",
    period: "Nov 2022 - Nov 2025",
    role: "Frontend Developer",
    company: "ALAT, Wema Bank (Hybrid)",
    badgeText: "AL",
    badgeBg: "linear-gradient(135deg, #AE1B73 0%, #E1261C 100%)",
    highlights: [
      "Integrated real-time stock trading services from BAMBOO into the ALAT web application, enabling users to trade stocks in real-time seamlessly.",
      "Integrated an automated facial recognition system that significantly enhanced the onboarding experience on the ALAT web application, contributing to the successful onboarding of up to 1 million active customers.",
      "Developed an Insurance Manager Dashboard, enabling efficient insurance management for sale on ALAT WEB and ALAT MOBILE APP platforms.",
      "Developed a football group savings feature that enables users to save a particular amount of money whenever their favourite team scores.",
      "Developed a dashboard that empowers administrators to create custom spin-and-win games for specific events, allowing qualified users to participate and win items.",
      "Developed the Spin and Win web application game in which a user can play and win an item based on the spin outcome.",
    ],
  },
  {
    year: "2020",
    period: "Sep 2020 - Sep 2021",
    role: "Program Assistant",
    company: "Andela, New York (Remote)",
    badgeText: "A",
    badgeBg: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    highlights: [
      "Supported the facilitation of the Microsoft Azure Certification program to impact 1,000+ prospective engineers, organizing workshops to train candidates.",
      "Organised the coordination and monitoring of 50+ learning groups and 100+ prominent mentors for the Facebook 'Build for SDG' program, empowering engineers with various Facebook technologies.",
      "Provided technical support for nationwide training programs that impacted 1,000+ prospective software engineers and held virtual and physical workshops on Software Development.",
    ],
  },
];

