export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nganmedjio Jean Claude",
    alternateName: "N. Jean Claude",
    url: "https://medjio.me",
    image:
      "https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704556507/zewudixqzlomjvhiwkmm.jpg",
    sameAs: [
      "https://www.behance.net/njean",
      "https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/",
      "https://www.instagram.com/nganmedjio_jean/",
      "https://twitter.com/nganmedjio_jean",
    ],
    jobTitle: "Freelance UX/UI Designer & Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Designer UX/UI et développeur frontend freelance avec plus de 8 ans d'expérience. Spécialisé en Next.js, React, et Tailwind CSS.",
    knowsAbout: [
      "UX Design",
      "UI Design",
      "Frontend Development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Figma",
      "Web Design",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Design & Development",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
