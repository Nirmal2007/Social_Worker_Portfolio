
import React, { useEffect } from 'react';
import { PROFILE_DATA } from '../data/profileData';

const SITE_URL = 'https://drsrinivasan.social/';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // Page title
    document.title =
      `${PROFILE_DATA.name} | Social Worker & Gender Specialist`;

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = SITE_URL;

    // Person structured data
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${SITE_URL}#person`,
      name: PROFILE_DATA.name,
      alternateName: PROFILE_DATA.officialName,
      url: SITE_URL,
      jobTitle: [
        'Social Worker',
        'Counselor',
        'Gender Specialist'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Peace Trust'
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'Annamalai University'
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Lectern Peace and Human Rights Academy'
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Techno Global University'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dindigul',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN'
      },
      knowsAbout: [
        'Social Work',
        'Community Development',
        'Child Protection',
        'Child Labour Eradication',
        'Prevention of Child Marriage',
        "Women's Empowerment",
        'Gender Equality',
        'Counseling',
        'Social Work Administration'
      ]
    };

    // Create or update one JSON-LD script
    let script = document.getElementById(
      'json-ld-schema'
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(personSchema);

    return () => {
      // Clean up only the schema inserted by this component
      script?.remove();
    };
  }, []);

  return null;
};
