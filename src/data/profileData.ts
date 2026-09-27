export interface AcademicQualification {
  degree: string;
  institution: string;
  year: string;
  category: 'Doctorate' | 'Master' | 'Bachelor' | 'Diploma';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SocialWorkArea {
  id: string;
  title: string;
  iconName: string;
  description: string;
  keyAspects: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  location: string;
  focusArea: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  activities: string[];
  role: string;
  stakeholders: string[];
  image: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  type: 'Education' | 'Experience' | 'Initiative' | 'Recognition';
  description: string;
}

export interface PhotoGalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Field Work' | 'Workshops' | 'Community' | 'Events';
  alt: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
}

export const PROFILE_DATA = {
  name: "Dr. A. Srinivasan",
  officialName: "SRINIVASAN A",
  title: "Senior Social Worker • Counselor / Gender Specialist",
  subTitle: "Child Protection & Community Development Professional",
  tagline: "Serving communities. Protecting children. Empowering women. Building stronger societies.",
  summary: "Dedicated and compassionate Senior Social Worker and Gender Specialist with 20 years of experience in community development, counseling, and social protection. Proven expertise in managing large-scale projects focused on child protection, gender equality, and vulnerable community empowerment. Skilled in stakeholder engagement, program management, and policy advocacy, committed to driving sustainable social impact and fostering inclusive, safe environments.",
  
  contact: {
    phone: "+91 97889 38158",
    email: "socialsrinivasan@gmail.com",
    address: "5/386, West Mathinipatti",
    location: "Vedasandur / Dindigul, Tamil Nadu, India",
    fatherName: "Late K. Arumugam",
    languages: ["Tamil (Fluent: Read, Write, Speak)", "English (Fluent: Read, Write, Speak)"]
  },

  personalDetails: {
    dob: "26.10.1981",
    age: "43",
    gender: "Male",
    maritalStatus: "Married",
    religion: "Hindu",
    nationality: "Indian",
    bloodGroup: "O +ve"
  },

  coreSkills: [
    "Counseling & Psychological Support",
    "Gender Equality & Advocacy",
    "Project Management & Planning",
    "Community Mobilization & Capacity Building",
    "Child Protection & Safeguarding",
    "Stakeholder Engagement",
    "Training & Workshop Facilitation",
    "Policy Advocacy & Research"
  ],

  academics: [
    {
      degree: "PhD in Social Welfare",
      institution: "Lectern Peace and Human Rights Academy, Tamil Nadu",
      year: "2020 – 2025",
      category: "Doctorate"
    },
    {
      degree: "Master of Social Work (MSW)",
      institution: "Techno Global University / Accvi Educational Research Institution, Tamil Nadu",
      year: "2018 – 2020",
      category: "Master"
    },
    {
      degree: "Honorary Doctorate",
      institution: "The Universal Tamil University",
      year: "2021",
      category: "Doctorate"
    },
    {
      degree: "Diploma in Human Resource Management (DHRM)",
      institution: "Shaheed Bhagat Singh Education University",
      year: "2023",
      category: "Diploma"
    },
    {
      degree: "Diploma in Labour Laws (DLL)",
      institution: "Shaheed Bhagat Singh Education University / Accvi Educational Research Institution",
      year: "2018 – 2019",
      category: "Diploma"
    },
    {
      degree: "Diploma in Counseling Psychology",
      institution: "ICS Madurai",
      year: "2023",
      category: "Diploma"
    },
    {
      degree: "Diploma in Social Work (DSW)",
      institution: "Bharat Technology",
      year: "2024",
      category: "Diploma"
    },
    {
      degree: "Bachelor of Arts (Sociology)",
      institution: "Annamalai University",
      year: "2006",
      category: "Bachelor"
    },
    {
      degree: "Master of Arts in Political Science",
      institution: "Annamalai University",
      year: "2008",
      category: "Master"
    }
  ] as AcademicQualification[],

  experiences: [
    {
      role: "Project Manager",
      organization: "Peace Trust",
      period: "Sep 2015 – May 2025",
      location: "Tamil Nadu, India",
      highlights: [
        "Led Peace Trust initiatives for 20 years, managing BAT Projects & APF Project on child protection and community empowerment.",
        "Directed programs supporting Adolescent Girls & Boys Groups, Community Support Groups, and Self-Help Groups to strengthen grassroots capacity on child protection, child labor, child marriage, child trafficking, and child sexual abuse.",
        "Coordinated with government bodies, Panchayat leaders, schools, Anganwadi workers, and Child Welfare Committees to link vulnerable families to social protection schemes and improve household resilience.",
        "Managed Community Resource Centres to enhance education quality, information dissemination, and support services for children; built partnerships with local stakeholders to promote coordinated response to child protection issues."
      ]
    }
  ] as ExperienceItem[],

  socialWorkAreas: [
    {
      id: "child-protection",
      title: "Child Protection & Safeguarding",
      iconName: "Shield",
      description: "Grassroots safeguarding interventions against child abuse, exploitation, and child labor through community vigilance.",
      keyAspects: ["Child Rights Defense", "Safety Awareness", "Community Vigilance Committees"]
    },
    {
      id: "child-labour",
      title: "Child Labour Prevention & Rescue",
      iconName: "UserX",
      description: "Systematic outreach to identify vulnerable children, prevent dropouts, and eradicate child labor practices.",
      keyAspects: ["School Re-enrollment", "Workplace Inspections", "Family Support Linkage"]
    },
    {
      id: "child-marriage",
      title: "Prevention of Child Marriage",
      iconName: "HeartHandshake",
      description: "Community counseling and adolescent group mobilization to prevent early child marriages in rural areas.",
      keyAspects: ["Adolescent Education", "Legal Awareness", "Stakeholder Intervention"]
    },
    {
      id: "women-empowerment",
      title: "Women's Empowerment & SHGs",
      iconName: "Users",
      description: "Strengthening Self-Help Groups (SHGs) and empowering women with financial literacy, safety, and leadership.",
      keyAspects: ["Self-Help Groups", "Financial Inclusion", "Leadership Development"]
    },
    {
      id: "gender-equality",
      title: "Gender Equality & Safety",
      iconName: "Scale",
      description: "Advocacy and sensitization programs aimed at eliminating gender-based violence and workplace harassment.",
      keyAspects: ["Gender Sensitization", "Workplace Safety", "Rights Advocacy"]
    },
    {
      id: "mental-health",
      title: "Mental Health & Counseling Support",
      iconName: "HeartPulse",
      description: "Providing compassionate psychological counseling for adolescents, families, and trauma survivors.",
      keyAspects: ["Psychological First Aid", "Adolescent Guidance", "Family Counseling"]
    },
    {
      id: "labour-welfare",
      title: "Labour Welfare & Rights",
      iconName: "Briefcase",
      description: "Promoting decent working conditions, labor rights awareness, and legal safety for unorganized workers.",
      keyAspects: ["Labour Law Education", "Unorganized Sector Rights", "Worker Welfare"]
    },
    {
      id: "community-centres",
      title: "Community Resource Centres",
      iconName: "Building2",
      description: "Establishing local resource nodes to improve education quality, guidance, and social welfare scheme delivery.",
      keyAspects: ["Educational Support", "Information Dissemination", "Rural Node Management"]
    },
    {
      id: "youth-development",
      title: "Adolescent Group Mobilization",
      iconName: "Sparkles",
      description: "Organizing Adolescent Girls & Boys Groups to foster life skills, rights education, and peer leadership.",
      keyAspects: ["Adolescent Clubs", "Peer Mentorship", "Life Skills Training"]
    },
    {
      id: "government-schemes",
      title: "Government Welfare Scheme Awareness",
      iconName: "FileCheck",
      description: "Linking underprivileged households with central and state government social protection benefits.",
      keyAspects: ["Scheme Enrollment", "Administrative Facilitation", "Resource Linking"]
    },
    {
      id: "capacity-building",
      title: "Capacity Building & Training",
      iconName: "GraduationCap",
      description: "Training Panchayat leaders, Anganwadi workers, teachers, and field staff on child protection and social laws.",
      keyAspects: ["Panchayat Training", "Anganwadi Workshops", "Institutional Mentorship"]
    },
    {
      id: "policy-advocacy",
      title: "Policy Advocacy & Stakeholder Coordination",
      iconName: "Network",
      description: "Building multi-stakeholder partnerships between civil society, Child Welfare Committees, and legal bodies.",
      keyAspects: ["CWC Coordination", "Multi-Agency Alignment", "Social Policy Input"]
    }
  ] as SocialWorkArea[],

  projects: [
    {
      id: "apf-child-protection",
      title: "APF Project on Child Protection & Community Empowerment",
      category: "Child Protection",
      period: "2015 – 2025",
      location: "Tamil Nadu",
      focusArea: "Child Protection, Anti-Trafficking & Prevention of Child Marriage",
      shortDescription: "Comprehensive community intervention project under Peace Trust empowering adolescent groups and community support committees to protect child rights.",
      overview: "The APF Project was executed under Peace Trust to build resilient grassroots mechanisms for preventing child labor, child marriage, trafficking, and child sexual abuse across vulnerable rural communities.",
      challenge: "Rural communities faced persistent socio-economic challenges, leading to school dropouts, child marriage pressure on adolescent girls, and vulnerability to exploitative child labor.",
      approach: "Mobilized communities through multi-tier committees—Adolescent Girls Groups, Adolescent Boys Groups, Self-Help Groups, and Community Support Groups—integrated with Panchayat leadership and local schools.",
      activities: [
        "Formed and mentored Adolescent Girls & Boys Groups to educate youth on personal safety and rights.",
        "Organized community support meetings with Panchayat leaders, Anganwadi workers, and teachers.",
        "Linked vulnerable families directly to government welfare schemes to alleviate financial distress.",
        "Conducted emergency interventions in coordination with Child Welfare Committees (CWC)."
      ],
      role: "Project Manager — Overall planning, community mobilization, stakeholder alignment, and field monitoring.",
      stakeholders: ["Peace Trust", "Child Welfare Committees", "Panchayat Leaders", "Anganwadi Workers", "Local Schools"],
      image: "/images/photo_115.jpg"
    },
    {
      id: "bat-grassroots-capacity",
      title: "BAT Project on Grassroots Capacity Building & Education",
      category: "Community Development",
      period: "2015 – 2025",
      location: "Tamil Nadu",
      focusArea: "Education Quality, Resource Centres & Capacity Building",
      shortDescription: "Managing Community Resource Centres to enhance education quality, information dissemination, and support services for rural children.",
      overview: "Under the BAT Project, Dr. Srinivasan managed Community Resource Centres designed to bridge educational gaps and provide safe spaces for children and youth.",
      challenge: "Lack of access to quality educational support, career guidance, and social protection information in remote villages.",
      approach: "Established Community Resource Centres as accessible hubs offering remedial learning, child protection guidance, and government scheme support.",
      activities: [
        "Managed day-to-day operations of Community Resource Centres in target villages.",
        "Facilitated educational enhancement and digital literacy sessions for children.",
        "Held legal and social protection awareness workshops for local parents and self-help groups.",
        "Fostered institutional partnerships with government bodies and district social welfare departments."
      ],
      role: "Project Manager — Resource management, curriculum design, local stakeholder engagement, and team leadership.",
      stakeholders: ["Peace Trust", "Village Communities", "District Social Welfare Dept", "Youth Volunteers"],
      image: "/images/photo_120.jpg"
    },
    {
      id: "adolescent-empowerment-groups",
      title: "Adolescent Girls & Boys Group Empowerment Initiative",
      category: "Youth Empowerment",
      period: "Multi-Year Focus",
      location: "Tamil Nadu",
      focusArea: "Adolescent Rights, Life Skills & Peer Leadership",
      shortDescription: "Structured empowerment programs fostering confidence, self-protection, rights awareness, and leadership among rural youth.",
      overview: "A specialized initiative to build peer-led protection networks where adolescents can voice their concerns, report child rights violations, and pursue higher education.",
      challenge: "High vulnerability of adolescent girls to early marriage and high risk of adolescent boys dropping out of secondary school for informal labor.",
      approach: "Created safe space clubs where adolescents receive guidance on bodily autonomy, legal rights, reproductive health, and skill training.",
      activities: [
        "Conducted interactive life skills and rights education workshops.",
        "Established peer reporting systems for early detection of child marriage attempts.",
        "Provided psychological counseling for stress, family issues, and career planning.",
        "Organized youth leadership summits and community advocacy rallies."
      ],
      role: "Senior Counselor & Master Trainer — Facilitated awareness modules, peer training, and personal counseling.",
      stakeholders: ["Adolescent Groups", "School Headmasters", "Local Communities", "Peace Trust"],
      image: "/images/photo_54.jpg"
    },
    {
      id: "women-shg-safeguards",
      title: "Women's Self-Help Group (SHG) Mobilization & Protection Network",
      category: "Women's Empowerment",
      period: "Multi-Year Initiative",
      location: "Tamil Nadu",
      focusArea: "Gender Equality, Financial Inclusion & Community Safety",
      shortDescription: "Engaging women's self-help groups as active guardians against domestic violence, gender bias, and child exploitation.",
      overview: "Empowering rural women through structured group dynamics, enabling them to act as financial pillars for their households and vigilance champions for community safety.",
      challenge: "Gender inequality, economic dependence, and limited awareness among rural women regarding legal safety provisions and government credit schemes.",
      approach: "Integrated social protection training into SHG financial meetings, transforming self-help groups into community safety networks.",
      activities: [
        "Facilitated gender sensitization and legal safety workshops for SHG members.",
        "Assisted SHGs in accessing government economic welfare schemes and micro-finance.",
        "Trained women leaders to identify and report domestic violence and child protection risks.",
        "Organized community rallies on women's safety and gender equality."
      ],
      role: "Gender Specialist & Trainer — Module development, SHG mentorship, and grievance support.",
      stakeholders: ["Self-Help Groups", "Panchayat Level Federations", "Women Welfare Officials"],
      image: "/images/photo_14.jpg"
    }
  ] as ProjectItem[],

  timeline: [
    {
      year: "2006",
      title: "Bachelor of Arts in Sociology",
      organization: "Annamalai University",
      type: "Education",
      description: "Graduated with foundational knowledge in sociology, community structures, and social dynamics."
    },
    {
      year: "2008",
      title: "Master of Arts in Political Science",
      organization: "Annamalai University",
      type: "Education",
      description: "Advanced study of political science, public administration, rights, and governance systems."
    },
    {
      year: "2015",
      title: "Appointed Project Manager",
      organization: "Peace Trust",
      type: "Experience",
      description: "Assumed leadership of large-scale BAT & APF Projects focusing on child protection and community development."
    },
    {
      year: "2018 – 2019",
      title: "Diploma in Labour Laws (DLL)",
      organization: "Shaheed Bhagat Singh Education University / Accvi Educational Research Institution",
      type: "Education",
      description: "Specialized qualification in labor laws, worker welfare regulations, and workplace standards."
    },
    {
      year: "2018 – 2020",
      title: "Master of Social Work (MSW)",
      organization: "Techno Global University / Accvi Educational Research Institution",
      type: "Education",
      description: "Professional Master's degree in Social Work, enhancing field methodology, counseling, and social administration."
    },
    {
      year: "2021",
      title: "Honorary Doctorate",
      organization: "The Universal Tamil University",
      type: "Recognition",
      description: "Conferred Honorary Doctorate for exemplary contributions to social service and community welfare."
    },
    {
      year: "2023",
      title: "Diploma in HRM & Diploma in Counseling Psychology",
      organization: "Shaheed Bhagat Singh Education University / ICS Madurai",
      type: "Education",
      description: "Dual specializations in Human Resource Management and Counseling Psychology."
    },
    {
      year: "2024",
      title: "Diploma in Social Work (DSW)",
      organization: "Bharat Technology",
      type: "Education",
      description: "Diploma certification in social work practice and intervention strategies."
    },
    {
      year: "2020 – 2025",
      title: "PhD in Social Welfare",
      organization: "Lectern Peace and Human Rights Academy, Tamil Nadu",
      type: "Education",
      description: "Doctoral research and degree in Social Welfare, cementing academic and field expertise."
    },
    {
      year: "May 2025",
      title: "Completed Decade of Peace Trust Project Management",
      organization: "Peace Trust",
      type: "Experience",
      description: "Successfully concluded 10-year tenure as Project Manager (2015-2025) leading community protection projects."
    }
  ] as TimelineMilestone[],

  galleryPhotos: [
    { id: "g1", url: "/images/photo_1.jpg", title: "Social Welfare Campaign Launch", category: "Events", alt: "Social Welfare Campaign Launch" },
    { id: "g2", url: "/images/photo_42.jpg", title: "Media Coverage: Anganwadi Workers Training", category: "Workshops", alt: "Media coverage Anganwadi" },
    { id: "g3", url: "/images/photo_70.jpg", title: "Media Coverage: Legal Awareness Camp", category: "Community", alt: "Media coverage Legal Awareness" },
    { id: "g4", url: "/images/photo_2.jpg", title: "World Excellence Book of Records", category: "Events", alt: "World Excellence Book of Records" },
    { id: "g5", url: "/images/photo_105.jpg", title: "Facilitator Award Ceremony", category: "Events", alt: "Award Ceremony" },
    { id: "g6", url: "/images/photo_68.jpg", title: "Media Coverage: Women and Children Protection Help Board", category: "Community", alt: "Protection Help Board Unveiling" },
    { id: "g7", url: "/images/photo_118.jpg", title: "District Police Station Consultation", category: "Field Work", alt: "Police station consultation" },
    { id: "g8", url: "/images/photo_126.jpg", title: "Joy of Service Award Recognition", category: "Events", alt: "Joy of Service Award" },
    { id: "g9", url: "/images/photo_130.jpg", title: "Media Coverage: Child Labour Eradication Rally", category: "Community", alt: "Child Labour Eradication" },
    { id: "g10", url: "/images/photo_13.jpg", title: "Gender Sensitization & Safety Workshop", category: "Workshops", alt: "Gender sensitization workshop" },
    { id: "g11", url: "/images/photo_74.jpg", title: "Media Coverage: Child Labour Inspection", category: "Field Work", alt: "Child Labour Inspection" },
    { id: "g12", url: "/images/photo_80.jpg", title: "Adolescent Life Skills Training Session", category: "Workshops", alt: "Adolescent Life Skills" },
    { id: "g13", url: "/images/photo_94.jpg", title: "Field Interaction with Beneficiaries", category: "Field Work", alt: "Field interaction" },
    { id: "g14", url: "/images/photo_60.jpg", title: "Awareness Campaign Event", category: "Events", alt: "Awareness campaign" },
    { id: "g15", url: "/images/photo_72.jpg", title: "Local Administration Meeting", category: "Events", alt: "Administration meeting" },
    { id: "g16", url: "/images/photo_82.jpg", title: "Community Welfare Drive", category: "Community", alt: "Welfare Drive" },
    { id: "g17", url: "/images/photo_85.jpg", title: "Panchayat Coordination Meeting", category: "Workshops", alt: "Panchayat Coordination" },
    { id: "g18", url: "/images/photo_87.jpg", title: "Self Help Group Mobilization", category: "Community", alt: "SHG Mobilization" },
    { id: "g19", url: "/images/photo_59.jpg", title: "Child Labour Eradication Program", category: "Field Work", alt: "Child labour eradication" },
    { id: "g20", url: "/images/photo_69.jpg", title: "Stakeholder Meeting", category: "Workshops", alt: "Stakeholder Meeting" }
  ] as PhotoGalleryItem[],

  articles: [
    {
      id: "child-protection-safeguards",
      title: "Building Community-Led Child Protection Mechanisms in Rural Tamil Nadu",
      category: "Child Protection",
      readTime: "5 min read",
      summary: "An exploration of how grassroots support groups and adolescent clubs create sustainable defense systems against child labor and early marriage.",
      content: [
        "Child protection in rural environments requires more than formal statutory intervention; it demands active, watchful, and educated communities.",
        "Over two decades of field experience with Peace Trust demonstrated that forming Adolescent Girls and Boys Groups empowers youth to become active agents of their own safety. When teenagers recognize child rights violations, they act as an early-warning system.",
        "Furthermore, linking Anganwadi workers, Panchayat leaders, and school headmasters into a unified Community Support Group ensures that vulnerable children facing family poverty receive rapid support before dropping out into child labor.",
        "By establishing Community Resource Centres, villages gain accessible information channels where parents learn about government welfare schemes that directly offset financial vulnerabilities."
      ],
      tags: ["Child Protection", "Adolescent Groups", "Community Mobilization", "Peace Trust"]
    },
    {
      id: "gender-equality-shg",
      title: "Empowering Women's Self-Help Groups as Champions of Gender Safety",
      category: "Gender & Safety",
      readTime: "6 min read",
      summary: "How integrating gender sensitization and legal rights training into Self-Help Groups transforms economic groups into vigilance committees.",
      content: [
        "Self-Help Groups (SHGs) have long been recognized for micro-finance and thrift. However, their true transformative potential lies in social empowerment.",
        "When gender equality and safety training are embedded into monthly SHG meetings, women gain both the vocabulary and confidence to address domestic violence, workplace harassment, and gender discrimination.",
        "Educating SHG members on workplace safety, labor rights, and legal protection provisions creates a protective umbrella over entire villages. Women become advocate leaders who ensure that young girls remain in school and protected from child marriage.",
        "Sustainable social change occurs when economic independence goes hand in hand with legal literacy and community solidarity."
      ],
      tags: ["Women Empowerment", "Gender Equality", "SHG", "Workplace Safety"]
    }
  ] as ArticleItem[]
};
