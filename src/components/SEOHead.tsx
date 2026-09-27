import React, { useEffect } from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Set Page Title
    document.title = `${PROFILE_DATA.name} | Senior Social Worker • Counselor • Gender Specialist`;

    // Person JSON-LD Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": PROFILE_DATA.name,
      "alternateName": PROFILE_DATA.officialName,
      "jobTitle": "Senior Social Worker & Gender Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "Peace Trust"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Annamalai University"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Lectern Peace and Human Rights Academy"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Techno Global University"
        }
      ],
      "email": PROFILE_DATA.contact.email,
      "telephone": PROFILE_DATA.contact.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": PROFILE_DATA.contact.address,
        "addressLocality": "Dindigul / Vedasandur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      },
      "knowsAbout": [
        "Child Protection",
        "Child Labour Eradication",
        "Prevention of Child Marriage",
        "Women's Empowerment",
        "Gender Equality",
        "Counseling Psychology",
        "Social Work Administration"
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-[#1E293B]-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(personSchema);
  }, []);

  return null;
};
