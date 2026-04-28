/* ============================= */
/* CONTENT BLOCK TYPES */
/* ============================= */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

/* ============================= */
/* POST TYPE */
/* ============================= */

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: ContentBlock[];
  category: string; // MUST match category slug
  publishedAt: string;
  readTime: string;
  coverImage: string;
  seo?: {
    title?: string;
    description?: string;
  };
};

/* ============================= */
/* CATEGORIES */
/* ============================= */

export const categories = [
  { title: "All", slug: "all" },
  { title: "AV Design", slug: "av-design" },
  { title: "Engineering", slug: "engineering" },
  { title: "Consulting", slug: "consulting" },
];

/* ============================= */
/* POSTS (ONLY DECLARE ONCE!) */
/* ============================= */

export const posts: Post[] = [
  {
    id: "1",
    slug: "designing-av-systems-modern-homes",
    title: "Designing AV Systems for Modern Homes",
    excerpt:
      "How to define audiovisual systems early in residential projects.",
    
    // ⚠️ MUST MATCH category.slug
    category: "av-design",

    publishedAt: "2025-02-12",
    readTime: "5 min read",
    coverImage: "/images/projects/av1.jpg",

    seo: {
      title: "Designing AV Systems for Modern Homes | CED Africa",
      description:
        "Learn how to define AV systems early in modern residential projects.",
    },

    content: [
      {
        type: "paragraph",
        text: "In modern residential projects, audiovisual systems are no longer optional—they define how a space is experienced. Yet, they are often introduced too late, limiting their potential.",
      },
      {
        type: "heading",
        text: "The Problem",
      },
      {
        type: "list",
        items: [
          "AV is introduced after construction",
          "No coordination with architecture",
          "Performance and aesthetics suffer",
        ],
      },
      {
        type: "paragraph",
        text: "When systems are forced into completed spaces, compromises become inevitable. This affects not just performance, but the overall experience of the home.",
      },
      {
        type: "heading",
        text: "The Approach",
      },
      {
        type: "list",
        items: [
          "Define AV systems early",
          "Coordinate with all disciplines",
          "Align with lifestyle and spatial intent",
        ],
      },
      {
        type: "quote",
        text: "Technology should elevate a space, not compete with it.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Early planning is critical",
          "Integration drives quality",
          "Design and technology must work together",
        ],
      },
    ],
  },
  {
  id: "2",
  slug: "pitfalls-to-avoid-when-building-a-home-cinema",
  title: "Pitfalls to Avoid When Building a Home Cinema",
  excerpt:
    "Common mistakes that compromise performance, experience, and long-term value in home cinema projects.",

  // MUST match category slug
  category: "av-design",

  publishedAt: "2025-03-05",
  readTime: "6 min read",
  coverImage: "/images/projects/work.jpg",

  seo: {
    title: "Pitfalls to Avoid When Building a Home Cinema | CED Africa",
    description:
      "Avoid costly mistakes when designing a home cinema. Learn key pitfalls and how to build a truly immersive experience.",
  },

  content: [
    {
      type: "paragraph",
      text: "A home cinema is one of the most immersive spaces you can create in a residence. However, achieving a true cinematic experience requires more than just installing a large screen and powerful speakers. Many projects fall short due to avoidable mistakes made early in the process.",
    },

    {
      type: "heading",
      text: "Ignoring Acoustics",
    },
    {
      type: "paragraph",
      text: "One of the most common mistakes is neglecting room acoustics. Without proper acoustic treatment, even the best equipment will underperform. Reflections, echoes, and poor sound distribution can significantly reduce clarity and impact.",
    },

    {
      type: "heading",
      text: "Poor Speaker Placement",
    },
    {
      type: "list",
      items: [
        "Incorrect speaker positioning",
        "Lack of alignment with seating layout",
        "Ignoring surround sound principles",
      ],
    },

    {
      type: "paragraph",
      text: "Speaker placement is critical to achieving immersive sound. When done incorrectly, it creates an unbalanced and disconnected listening experience.",
    },

    {
      type: "heading",
      text: "Lighting Oversights",
    },
    {
      type: "paragraph",
      text: "Lighting is often overlooked, yet it plays a major role in visual performance. Excess ambient light can wash out the screen and reduce contrast, diminishing the cinematic effect.",
    },

    {
      type: "heading",
      text: "Lack of Early Planning",
    },
    {
      type: "list",
      items: [
        "No coordination with architecture",
        "Insufficient space allocation",
        "Improper cable and infrastructure planning",
      ],
    },

    {
      type: "quote",
      text: "A great home cinema is designed, not installed.",
    },

    {
      type: "heading",
      text: "Key Takeaways",
    },
    {
      type: "list",
      items: [
        "Prioritize acoustics from the start",
        "Align speaker layout with room design",
        "Control lighting for optimal visuals",
        "Plan early to avoid costly compromises",
      ],
    },
  ],
}
];