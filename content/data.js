/* Doronax Holdings — single source of truth for site content.
   The build script (build/build.js) reads this file and generates every
   HTML page. Edit content here; page markup is generated, not hand-written. */

let lock = 1;
function img(keywords, w = 900, h = 650) {
  return `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock++}`;
}

const SITE = {
  name: "Doronax Albion Holdings",
  tagline: "A collective of businesses built on craft, trust, and growth.",
  email: "info@doronaxholdings.com",
  // Web3Forms access key for info@doronaxholdings.com — get one free at
  // https://web3forms.com (enter the email above, verify it, copy the key here).
  web3formsKey: "cb431482-d7ac-4451-83cd-e126d42b4da5",
  heroImage: "assets/images/doronax-home-hero.png",
  stats: [
    { key: "sectors", value: "5", label: "sectors" },
    { key: "services", value: "25+", label: "services" },
    { key: "hq", value: "UK", label: "headquartered" },
  ],
  aboutParagraphs: [
    "Doronax Holdings Group is a UK-based collective of businesses spanning advertising, consultancy, furniture, hospitality, and sport and wellness. Each sub-group operates independently, with its own leadership and specialism, while drawing on the strength and resources of the wider group.",
    "We back businesses built on genuine craft and long-term thinking rather than short-term returns. Our approach is hands-on where it counts and hands-off where it doesn't — giving each business the room to grow on its own terms.",
  ],
  aboutImage: img("office,building", 900, 1100),
  aboutImageSecondary: img("team,meeting", 700, 900),
};

const SECTORS = [
  {
    slug: "advertising",
    name: "Doranax Advertising Group",
    tileImage: img("billboard,advertising"),
    heroImage: img("advertising,agency", 1600, 700),
    intro: "Doronax Advertising delivers integrated campaigns across print, digital, and direct channels, helping brands reach the right audience with measurable impact. From concept through execution, our teams combine creative craft with performance-driven strategy.",
    services: [
      {
        slug: "print",
        name: "Print",
        heroImage: img("printing,press", 1400, 600),
        intro: "We produce large-format, packaging, and commercial print work to exacting brand standards, from initial proofing through to final delivery. Our press partnerships mean fast turnaround without compromising on colour accuracy or finish.",
        gallery: [img("print,shop"), img("printer,ink")],
      },
      {
        slug: "graphic-design",
        name: "Graphic Design",
        heroImage: img("design,studio", 1400, 600),
        intro: "Our design studio builds visual identities, brand guidelines, and campaign assets that hold up across every touchpoint. We work closely with clients to ensure design decisions serve business goals, not just aesthetics.",
        gallery: [img("graphicdesign,laptop"), img("branding,design")],
      },
      {
        slug: "digital-marketing",
        name: "Digital Marketing",
        heroImage: img("digitalmarketing,laptop", 1400, 600),
        intro: "We plan and run paid, organic, and social campaigns backed by clear reporting and iterative optimisation. Our approach prioritises measurable return over vanity metrics.",
        gallery: [img("socialmedia,marketing"), img("analytics,screen")],
      },
      {
        slug: "door-to-door-marketing",
        name: "Door to Door Marketing",
        heroImage: img("doorstep,delivery", 1400, 600),
        intro: "Our field teams deliver targeted door-to-door campaigns for clients who need direct, local engagement with prospective customers. Every route is planned using demographic and geographic data to maximise conversion.",
        gallery: [img("neighborhood,street"), img("flyers,marketing")],
      },
    ],
  },
  {
    slug: "consultancy",
    name: "Doranax Consultancy Group",
    tileImage: img("office,meeting"),
    heroImage: img("consulting,business", 1600, 700),
    intro: "Doronax Consultancy provides strategic and operational advisory services to businesses navigating growth, change, and international expansion. Our consultants bring hands-on sector experience rather than theoretical frameworks alone.",
    services: [
      {
        slug: "software",
        name: "Software",
        heroImage: img("coding,software", 1400, 600),
        intro: "We advise on and deliver bespoke software solutions, from systems architecture through to implementation and support. Our focus is on practical tools that solve real operational bottlenecks.",
        gallery: [img("developer,computer"), img("code,screen")],
      },
      {
        slug: "management-consultancy",
        name: "Management Consultancy",
        heroImage: img("boardroom,meeting", 1400, 600),
        intro: "We work alongside leadership teams to diagnose operational inefficiencies and implement structural change that sticks. Engagements are scoped around measurable outcomes, not lengthy reports.",
        gallery: [img("businessmeeting,office"), img("strategy,whiteboard")],
      },
      {
        slug: "recruitment",
        name: "Recruitment",
        heroImage: img("interview,office", 1400, 600),
        intro: "Our recruitment arm sources and places talent across executive, technical, and operational roles for clients in the UK and abroad. We prioritise long-term fit over speed of placement.",
        gallery: [img("handshake,business"), img("teamwork,office")],
      },
      {
        slug: "export-import",
        name: "Export/Import",
        heroImage: img("shippingport,cargo", 1400, 600),
        intro: "We manage the logistics, compliance, and supplier relationships required to move goods across borders efficiently. Clients rely on us to navigate customs and documentation with minimal disruption to their operations.",
        gallery: [img("container,ship"), img("logistics,warehouse")],
      },
    ],
    // Rendered as sections on the sector page, not linked to their own pages.
    additionalServices: [
      {
        name: "Concierge",
        description: "A dedicated concierge service for clients requiring bespoke arrangements — from travel and accommodation to specialist procurement — handled discreetly and efficiently.",
        image: img("concierge,hotel"),
      },
      {
        name: "China",
        description: "Our China desk supports clients sourcing, manufacturing, or expanding into the Chinese market, with on-the-ground relationships and language capability built in.",
        image: img("shanghai,china"),
      },
    ],
  },
  {
    slug: "furniture",
    name: "Doranax Design & Furniture Group",
    tileImage: img("furniture,interior"),
    heroImage: img("furniture,showroom", 1600, 700),
    intro: "Doronax Furniture designs, sources, and manufactures pieces and materials for residential and commercial interiors. We work with natural materials and skilled makers to deliver furnishings built to last.",
    services: [
      {
        slug: "natural-stone",
        name: "Natural Stone",
        heroImage: img("marble,stone", 1400, 600),
        intro: "We supply natural stone for flooring, worktops, and architectural features, sourced from quarries we've worked with for years. Each slab is selected for consistency of grain and finish.",
        gallery: [img("granite,quarry"), img("stonework,texture")],
      },
      {
        slug: "lighting",
        name: "Lighting",
        heroImage: img("lamp,lighting", 1400, 600),
        intro: "Our lighting range spans statement fixtures to functional task lighting, specified to suit both residential and commercial interiors. We work with clients from concept through installation.",
        gallery: [img("chandelier,interior"), img("pendant,light")],
      },
      {
        slug: "interior-design",
        name: "Interior Design",
        heroImage: img("interiordesign,livingroom", 1400, 600),
        intro: "Our interior design team delivers full-scheme design for residential and commercial spaces, from spatial planning through to final styling. We manage the process end-to-end, including trade sourcing.",
        gallery: [img("modernhome,interior"), img("design,decor")],
      },
      {
        slug: "flooring",
        name: "Flooring",
        heroImage: img("hardwoodfloor,flooring", 1400, 600),
        intro: "We supply and install flooring across timber, stone, and engineered materials, matched to the demands of each space. Our installation teams are trained to the same standard as our design specifications.",
        gallery: [img("woodfloor,interior"), img("tile,flooring")],
      },
      {
        slug: "decor-wall",
        name: "Decor Wall",
        heroImage: img("wallpanel,decor", 1400, 600),
        intro: "Our decorative wall solutions — panelling, cladding, and feature finishes — are designed to add texture and character to interiors without compromising on durability.",
        gallery: [img("texturewall,interior"), img("cladding,wall")],
      },
      {
        slug: "custom-pieces",
        name: "Custom Pieces",
        heroImage: img("woodworking,carpenter", 1400, 600),
        intro: "We design and manufacture bespoke furniture and objects — coffee tables, wooden boxes, bronze fittings — built to client specification. Every piece is made by hand in small batches.",
        gallery: [img("handmade,furniture"), img("bronze,craft")],
      },
    ],
  },
  {
    slug: "hospitality-events",
    name: "Doranax Hospitality and Events Group",
    tileImage: img("event,hospitality"),
    heroImage: img("hotel,event", 1600, 700),
    intro: "Doronax Hospitality & Events operates across property, food & beverage, and live event production, delivering experiences that meet a consistently high standard. We manage every layer of an event or venue, from planning through to delivery.",
    services: [
      {
        slug: "property",
        name: "Property",
        heroImage: img("realestate,building", 1400, 600),
        intro: "We manage and develop hospitality properties, from acquisition through to day-to-day operation, with a focus on guest experience and long-term asset value.",
        gallery: [img("hotel,lobby"), img("architecture,building")],
      },
      {
        slug: "food-beverage",
        name: "Food & Beverage",
        heroImage: img("restaurant,dining", 1400, 600),
        intro: "Our F&B division designs and operates dining concepts, from menu development through to service standards, for venues and events alike.",
        gallery: [img("chef,kitchen"), img("cocktail,bar")],
      },
      {
        slug: "events",
        name: "Events",
        heroImage: img("conference,event", 1400, 600),
        intro: "We plan and produce corporate and private events end-to-end — venue, logistics, production, and on-the-day delivery — for clients who need it done right the first time.",
        gallery: [img("wedding,event"), img("stage,concert")],
      },
      {
        slug: "workwear",
        name: "Workwear",
        heroImage: img("uniform,staff", 1400, 600),
        intro: "We supply branded and functional workwear for hospitality teams, balancing durability with a presentation standard that reflects the venues we serve.",
        gallery: [img("chef,uniform"), img("hotelstaff,waiter")],
      },
    ],
  },
  {
    slug: "sports-wellness",
    name: "Doranax Sports & Wellness Group",
    tileImage: img("yoga,wellness"),
    heroImage: img("yoga,fitness", 1600, 700),
    intro: "Doronax Sports & Wellness brings together movement, nutrition, and self-care under one roof, built around a genuine wellbeing philosophy rather than a fitness trend. Our offering spans practice, product, and retreat experiences.",
    services: [
      {
        slug: "yoga",
        name: "Yoga",
        heroImage: img("yoga,studio", 1400, 600),
        intro: "We run yoga classes and teacher training across a range of styles and levels, led by instructors with years of teaching experience. Sessions are designed to be accessible without diluting the practice.",
        gallery: [img("yogamat,meditation"), img("stretching,fitness")],
      },
      {
        slug: "textiles-merch",
        name: "Textiles/Merch",
        heroImage: img("activewear,fashion", 1400, 600),
        intro: "Our textiles line produces performance and lifestyle apparel designed for movement, made from sustainably sourced materials wherever possible.",
        gallery: [img("fabric,textile"), img("sportswear,clothing")],
      },
      {
        slug: "skincare",
        name: "Skincare",
        heroImage: img("skincare,cosmetics", 1400, 600),
        intro: "Our skincare range is formulated around clean, effective ingredients suited to daily use, developed in partnership with formulation specialists.",
        gallery: [img("spa,beauty"), img("serum,skincare")],
      },
      {
        slug: "protein",
        name: "Protein",
        heroImage: img("proteinpowder,nutrition", 1400, 600),
        intro: "We produce protein and nutrition products aimed at supporting an active lifestyle, with a focus on ingredient transparency and taste.",
        gallery: [img("smoothie,health"), img("gym,fitness")],
      },
      {
        slug: "retreat",
        name: "Retreat",
        heroImage: img("retreat,nature", 1400, 600),
        intro: "We host wellness retreats that combine movement, rest, and nutrition in a small-group setting, designed for genuine recovery rather than a packed itinerary.",
        gallery: [img("mountains,retreat"), img("meditation,nature")],
      },
    ],
  },
];

// Expanded service content from the July 2026 content handoff. All wording
// below is original to this site; third-party reference copy is intentionally
// not reproduced.
const bySlug = (sectorSlug, serviceSlug) => {
  const sector = SECTORS.find((item) => item.slug === sectorSlug);
  return serviceSlug ? sector.services.find((item) => item.slug === serviceSlug) : sector;
};

Object.assign(bySlug("advertising", "print"), {
  intro: "From everyday stationery to high-impact display graphics, we coordinate print production around the format, finish and quantity each campaign needs. Artwork is checked before production and every item is prepared for a consistent brand result.",
  offerings: [
    ["Business Cards", "Professionally finished cards in practical stocks and formats for teams of every size."],
    ["Flyers & Cards", "Campaign flyers, postcards and promotional cards prepared for clear, effective distribution."],
    ["Folded Cards", "Menus, invitations and information pieces with considered folds and accurate finishing."],
    ["PVC Banners", "Durable large-format banners for launches, venues, construction sites and outdoor campaigns."],
    ["Window Vinyl", "Cut lettering and printed window graphics designed around the dimensions of each site."],
    ["Fabric Display Stands", "Portable stretch-fabric displays that create a clean branded backdrop at events."],
    ["Water-Base Signs", "Stable, reusable pavement signage for changing messages and busy public settings."],
    ["A-Board Signs", "Straightforward street-level promotion for retail, hospitality and events."],
  ],
});

Object.assign(bySlug("sports-wellness", "yoga"), { kind: "product", offerings: [["Yoga Mats", "Practice mats selected for grip, comfort and everyday studio use."], ["Yoga Blocks", "Supportive blocks for alignment, balance and accessible practice."], ["Tote Bags", "Practical branded carry bags for classes, travel and daily use."]] });
Object.assign(bySlug("sports-wellness", "textiles-merch"), { kind: "product", offerings: [["T-Shirts", "Doranax Athletics apparel designed for training and everyday movement."], ["Hoodies", "Comfortable layers for warm-ups, travel and recovery."], ["Travel Mugs", "Reusable drinkware for active routines and life on the move."], ["Drink Bottles", "Durable hydration bottles for training, retreat and daily use."], ["Caps", "Branded headwear in practical lightweight silhouettes."]] });
Object.assign(bySlug("sports-wellness", "skincare"), { offerings: [["Daily Skincare", "Straightforward products designed to support consistent everyday care."], ["Body Care", "Body-focused formulas for post-training and restorative routines."]] });
Object.assign(bySlug("sports-wellness", "protein"), { offerings: [["Protein Powder", "Nutrition products developed around clear ingredients, taste and active lifestyles."]] });
Object.assign(bySlug("sports-wellness", "retreat"), { offerings: [["Morocco Retreats", "Movement, rest and nourishment in a considered small-group setting."], ["Türkiye Retreats", "Wellbeing experiences shaped around place, pace and genuine recovery."]] });
Object.assign(bySlug("sports-wellness", "protein"), { kind: "product", intro: "Recovery is where the real gains happen. Doranax Athletics Whey Protein is formulated to support muscle repair after demanding sessions, with a smooth mix in water or milk and no unnecessary fillers. Train hard, recover harder.", offerings: [["Doranax Athletics Whey Protein", "A high-quality protein blend designed for smooth mixing, practical recovery and consistent training support."]] });
Object.assign(bySlug("sports-wellness", "skincare"), { kind: "products-and-services", intro: "We partner with purpose-driven skincare brands built around natural, ethical and sustainable formulations that genuinely work. Our professional distribution model supports salons, skin clinics and spas with training, marketing and brand assets.", offerings: [["Professional Skincare Distribution", "Carefully selected brands represented through trusted professional partners across the UK."], ["Training & Brand Support", "Ongoing education, marketing assets and practical support for partner teams."], ["FLOW Partnership Scheme", "A tailored, brand-by-brand approach designed to support sustainable growth."]] });
Object.assign(bySlug("sports-wellness", "retreat"), { intro: "Doranax Athletics retreats bring together movement, recovery and community in carefully chosen locations. Each retreat blends strength and conditioning, yoga and mobility with genuine downtime, nourishing food and small-group connection. Come as you are, leave stronger." });
Object.assign(bySlug("sports-wellness", "yoga"), { offerings: [["Yoga Mats", "High-density non-slip PVC mats with dependable grip, supportive cushioning and a signature wolf shield."], ["Yoga Mat Colours & Bundles", "Green, blue and purple mats plus multi-colour and cool-tone bundles for individual practice or studios."], ["Yoga Blocks", "Sustainably sourced cork blocks for alignment, balance, deeper stretches and restorative practice."], ["Tote Bags", "Practical branded carry bags for classes, travel and daily use."]] });

Object.assign(bySlug("advertising", "graphic-design"), {
  intro: "We turn brand ideas into clear, usable visual systems across vehicles, windows, fleets and campaign touchpoints. Our design work is built to communicate consistently wherever your audience encounters it.",
  offerings: [
    ["Custom Vehicle Wraps", "Full and partial wraps for cars, vans and trucks that showcase a brand or personality."],
    ["Van Graphics", "Custom van graphics designed to make a working vehicle stand out and communicate clearly."],
    ["Logo & Branding Design", "Brand identity work that ensures a logo and message are communicated consistently."],
    ["Window Graphics", "Vehicle and site graphics that add visibility and character while respecting sightlines."],
    ["Fleet Graphics", "Cohesive designs that reinforce a recognisable brand across multiple vehicles."],
  ],
});

Object.assign(bySlug("advertising", "door-to-door-marketing"), {
  offerings: [
    ["Territory Mapping", "Campaign areas planned around audience, geography and practical route coverage."],
    ["Field Campaigns", "Coordinated local activity with clear briefing and accountable delivery."],
    ["Data Capture", "Structured collection of agreed campaign information, handled with privacy in mind."],
    ["Reporting", "Concise delivery summaries that turn field activity into useful next steps."],
  ],
});

Object.assign(bySlug("advertising", "digital-marketing"), {
  offerings: [["Campaign Strategy", "Channel planning tied to a defined audience, objective and budget."], ["Paid Media", "Search and social campaigns managed around useful commercial outcomes."], ["Organic & SEO", "Content and technical priorities that improve long-term discoverability."], ["Measurement", "Clear reporting with practical interpretation and next-step recommendations."]],
});

bySlug("advertising").services.push(
  {
    slug: "content-writing",
    name: "Content Writing",
    heroImage: img("copywriting,notebook", 1400, 600),
    intro: "We create useful, brand-aligned writing that gives each channel a clear purpose and a consistent voice.",
    gallery: [img("writer,laptop"), img("editorial,desk")],
    offerings: [
      ["Website Copy", "Clear page journeys and conversion-focused copy shaped around real customer questions."],
      ["Blogs & Articles", "Well-structured editorial content for expertise, education and regular publishing."],
      ["SEO Content", "Search-aware writing built for people first, with considered topics and page structure."],
      ["Email & Newsletters", "Campaign and lifecycle messages that are concise, relevant and easy to act on."],
      ["Ads & Social Copy", "Short-form campaign writing adapted to the audience and placement."],
      ["Product Descriptions", "Accurate, distinctive product copy that supports confident buying decisions."],
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    heroImage: img("socialmedia,content", 1400, 600),
    intro: "We bring planning, publishing and audience care into one practical social media programme.",
    gallery: [img("phone,socialmedia"), img("content,studio")],
    offerings: [
      ["Management", "Channel planning, publishing calendars and day-to-day coordination."],
      ["Advertising", "Paid social campaigns with defined audiences, creative testing and performance review."],
      ["Content Creation", "Platform-ready photography, video, graphics and written assets."],
      ["Community Management", "Timely, brand-safe responses that help build trust with audiences."],
      ["Influencer Marketing", "Creator research and campaign coordination centred on relevance and fit."],
      ["Training", "Practical workshops that give internal teams repeatable ways of working."],
    ],
  }
);

Object.assign(bySlug("consultancy", "export-import"), {
  intro: "We help businesses prepare for international trade, understand market obligations and coordinate the practical work behind cross-border growth. Support can cover customs readiness, documentation, logistics, risk and market-entry planning.",
  offerings: [
    ["Market Readiness", "A practical review of destination requirements, routes to market and operational risk."],
    ["Customs & Compliance", "Guidance on documentation, tariffs, trade agreements and customs processes."],
    ["Logistics Planning", "Supply-chain coordination designed around cost, resilience and delivery expectations."],
    ["Trade Finance", "Planning support for payment terms, working capital and transaction risk."],
    ["International Coverage", "Established contacts across Poland, Lithuania, Estonia, Peru, South Korea, Portugal and Morocco."],
  ],
});

const consultancy = bySlug("consultancy");
Object.assign(bySlug("consultancy", "software"), {
  intro: "We are developing practical digital products around real customer and operational needs. Our first product concept, a Hamburger & Pizza app, is currently in development and will be announced when ready.",
  offerings: [["Hamburger & Pizza App", "Something tasty is cooking. The app is currently in development; check back soon for the full serving."], ["Product Strategy", "Turning an operational need or opportunity into a focused digital product brief."], ["Custom Development", "Purpose-built web and application solutions scoped around practical workflows."], ["Systems Integration", "Connecting tools and data to reduce duplication and improve visibility."], ["Digital Transformation", "A staged approach to modernising systems, processes and team adoption."]],
});
Object.assign(bySlug("consultancy", "management-consultancy"), {
  offerings: [["Business Strategy", "A clear set of choices about where to compete and how to grow."], ["Strategic Planning", "Priorities, ownership and measures translated into an executable plan."], ["Go-to-Market", "Audience, proposition, channel and launch planning for new offers and markets."], ["Operational Improvement", "Focused review and redesign of the processes limiting performance."]],
});
Object.assign(bySlug("consultancy", "recruitment"), {
  offerings: [["Executive Search", "Discreet search for leadership roles where experience and fit both matter."], ["Specialist Recruitment", "Targeted sourcing for technical, commercial and operational positions."], ["Role & Market Advice", "Support defining the requirement, compensation context and realistic search plan."], ["Selection Support", "Structured screening and coordination through interview and appointment."]],
});
consultancy.services.push(
  {
    slug: "concierge",
    name: "Concierge",
    heroImage: img("concierge,luxury", 1400, 600),
    intro: "Discreet, responsive support for clients whose requests cross travel, hospitality, access and specialist procurement.",
    gallery: [img("luxury,travel"), img("concierge,service")],
    offerings: [["Bespoke Arrangements", "One point of contact for carefully coordinated personal and business requests."], ["Travel & Hospitality", "Itinerary, accommodation and experience planning shaped around the client."], ["Specialist Procurement", "Research and sourcing for considered, hard-to-find requirements."]],
  },
  {
    slug: "china",
    name: "China Advisory",
    heroImage: img("shanghai,business", 1400, 600),
    intro: "Practical support for organisations exploring suppliers, manufacturing relationships and market opportunities in China.",
    gallery: [img("china,manufacturing"), img("china,city")],
    offerings: [["Supplier Sourcing", "Structured partner research and early-stage supplier evaluation."], ["Manufacturing Support", "Coordination that helps clarify specifications, milestones and expectations."], ["Market Entry", "Local-context support for businesses assessing a route into the market."]],
  }
);
delete consultancy.additionalServices;

Object.assign(bySlug("furniture", "interior-design"), {
  intro: "We create interiors around how a space should feel, function and endure. Every project moves through a clear five-stage process, with decisions documented and the client kept close to the work.",
  offerings: [
    ["Discover", "We listen, visit the space and establish the ambitions, constraints and measures of success."],
    ["Define", "The brief becomes a clear creative direction, scope, programme and working budget."],
    ["Design", "Layouts, materials, lighting and bespoke details are developed into a coherent scheme."],
    ["Develop", "Specifications are resolved with makers, suppliers and delivery partners."],
    ["Deliver", "We coordinate installation and finishing so the completed space reflects the agreed vision."],
  ],
  profile: {
    name: "Christopher Hodsoll",
    role: "Design Collaborator",
    copy: "Christopher Hodsoll brings a collector's eye and a deep appreciation for proportion, material and provenance. His relationship with Doronax supports interiors that balance distinctive objects with comfortable, liveable rooms. This original profile is presented with his approval and does not reproduce third-party press coverage.",
  },
});

bySlug("furniture").services.push(
  { slug: "bathroom", name: "Bathroom", heroImage: img("bathroom,luxury", 1400, 600), intro: "Considered bathroom schemes bringing together surfaces, storage, fittings and lighting.", gallery: [img("bathroom,stone"), img("bathroom,interior")], offerings: [["Complete Schemes", "Layouts and specifications developed as one coherent room."], ["Vanities & Storage", "Bespoke and sourced pieces chosen for daily use and durability."], ["Materials & Fittings", "Coordinated surfaces, brassware and details with a consistent finish."]] },
  { slug: "drinks-cabinets", name: "Drinks Cabinets", heroImage: img("drinks,cabinet", 1400, 600), intro: "Bespoke drinks cabinets designed as functional furniture and a focal point in the room.", gallery: [img("cocktail,cabinet"), img("wood,cabinet")], offerings: [["Made to Measure", "Proportions and storage planned around the room and collection."], ["Material Selection", "Timber, metal, stone and specialist finishes combined with care."], ["Integrated Details", "Lighting, shelving and hardware resolved as part of the design."]] }
);

Object.assign(bySlug("furniture", "natural-stone"), { offerings: [["Slabs & Surfaces", "Stone selected for worktops, feature surfaces and architectural applications."], ["Flooring", "Durable natural stone specified around traffic, maintenance and visual character."], ["Bespoke Stonework", "Cut and finished elements developed for individual spaces and details."]] });
Object.assign(bySlug("furniture", "lighting"), { offerings: [["Decorative Lighting", "Statement pendants, chandeliers and lamps selected as part of the interior."], ["Architectural Lighting", "Layered ambient, task and accent lighting coordinated with the space."], ["Bespoke Fixtures", "Custom pieces developed with specialist makers for distinctive requirements."]] });
Object.assign(bySlug("furniture", "flooring"), { offerings: [["Timber", "Solid and engineered timber options chosen for character and performance."], ["Stone", "Natural stone floors specified for finish, format and long-term care."], ["Engineered Materials", "Practical flooring systems for demanding residential and commercial settings."], ["Installation", "Preparation and fitting coordinated to protect the quality of the finished floor."]] });
Object.assign(bySlug("furniture", "decor-wall"), { offerings: [["Wall Panelling", "Proportioned timber and composite panelling for architectural depth."], ["Cladding", "Material-led wall surfaces designed around the setting and required durability."], ["Feature Finishes", "Colour, texture and specialist finishes that establish a focal point."]] });
Object.assign(bySlug("furniture", "custom-pieces"), { offerings: [["Custom Wood Boxes", "Purpose-made boxes with considered joinery, lining and hardware."], ["Bronze Pieces", "Decorative and functional bronze details developed with specialist craftspeople."], ["Coffee Tables", "One-off and small-batch tables balancing material, proportion and everyday use."], ["Bespoke Furniture", "Individual pieces designed to answer a specific room, function and material brief."]] });

Object.assign(bySlug("hospitality-events", "property"), {
  offerings: [["Property Services", "Practical support for hospitality assets, from planning and preparation to ongoing coordination."], ["BnB Management", "Listing setup, guest communication, pricing coordination, cleaning and maintenance arranged as one service."]],
});
bySlug("hospitality-events", "property").comingSoonOfferings = ["Property Services", "BnB Management"];

Object.assign(bySlug("hospitality-events", "workwear"), {
  offerings: [["Hospitality Uniforms", "Coordinated front- and back-of-house clothing built around the venue."], ["Branded Workwear", "Practical garments with consistent embroidery, print and colour application."], ["Outerwear & PPE", "Role-appropriate layers and protective items selected around operational needs."], ["Team Ordering", "Sizing, repeat orders and rollout support for multi-role teams."]],
});

Object.assign(bySlug("hospitality-events", "food-beverage"), {
  intro: "Our food and beverage portfolio spans restaurants, bars, cafés, beach clubs, lounges and in-room dining. As part of Suntory, a global beverage and food company with more than 40,000 employees, we combine local concepts with an international perspective.",
  intro: "Our food and beverage portfolio spans restaurants, bars, cafés, beach clubs, lounges and in-room dining. We combine local concepts with an international perspective and practical operating experience.",
  offerings: [
    ["Spirits", "Original gin, rum and vodka concepts, tasting experiences and gifting opportunities developed with appropriate production partners."],
    ["Food Advisory", "Commercial and operational guidance for hospitality concepts, menus and service models."],
    ["F&B Recruitment", "Role definition and talent search for specialist hospitality teams."],
    ["Food Apps", "Digital product planning for ordering, loyalty and customer experience concepts."],
    ["Coffee & Barista Courses", "Practical training in extraction, milk, workflow and service consistency."],
    ["Coffee Beans", "Coffee selection shaped around flavour, preparation method and venue requirements."],
    ["Celebration Cakes", "Freshly made cakes planned around the occasion, preferred flavours and presentation."],
    ["Burger Concepts", "Focused menus built around quality ingredients, reliable cooking and efficient service."],
    ["Breakfast Club", "Welcoming breakfast concepts created for regular local trade and destination occasions."],
  ],
});
bySlug("hospitality-events", "food-beverage").comingSoonOfferings = ["Spirits"];
bySlug("hospitality-events", "food-beverage").comingSoonOfferings.push("Food Apps", "Coffee & Barista Courses", "Coffee Beans", "Breakfast Club");

Object.assign(bySlug("hospitality-events", "events"), {
  intro: "Dreaming up an extraordinary celebration? We design and deliver social and corporate events from the first idea to the final guest departure, transforming spaces, curating entertainment and managing the details in between.",
  offerings: [
    ["Event Organisation", "Concept, venue, production, entertainment and logistics managed as one joined-up plan."],
    ["Vehicle & Aircraft Hire", "Coordinated cars, helicopters, private jets and yacht hire through suitable operators."],
    ["Talent, Models & DJs", "Talent coordination shaped around the audience, format and tone of each event."],
    ["Luxury Travel", "Tailored journeys that bring transport, stays and experiences into one itinerary."],
    ["Dance & Entertainment", "Performance-led programming for private, corporate and public occasions."],
    ["Yacht Share", "Guidance for clients exploring shared access and fractional yacht models."],
    ["Venue Hire", "Venue research and coordination based on capacity, location and production needs."],
    ["Private Members Club", "Member-focused hospitality concepts centred on service, programming and belonging."],
    ["Photography Courses", "Guided learning experiences for practical camera and visual storytelling skills."],
    ["Gourmet Travel", "Food-led journeys that connect destinations with producers, chefs and local culture."],
    ["Event Photography", "Briefed event coverage that captures atmosphere, people and key moments."],
    ["Event Hosts", "Professional front-of-house support for guest welcome, registration and event flow."],
  ],
  profile: {
    name: "Bruce Daisley",
    role: "Featured Talent",
    copy: "Bruce Daisley is a workplace culture speaker, author and former technology executive known for turning research about work into engaging, practical ideas. His confirmed relationship with Doronax allows clients to explore suitable speaking and event opportunities through our team.",
  },
});
bySlug("hospitality-events", "events").comingSoonOfferings = ["Vehicle & Aircraft Hire", "Talent, Models & DJs", "Luxury Travel", "Dance & Entertainment", "Yacht Share", "Venue Hire", "Private Members Club", "Photography Courses", "Gourmet Travel", "Event Photography", "Event Hosts"];

bySlug("hospitality-events").services.push({
  slug: "yacht-sales",
  name: "Yacht Sales",
  heroImage: img("luxury,yacht", 1400, 600),
  intro: "Explore a selected portfolio of yachts currently based in Türkiye, with enquiries coordinated by Haluk Gundogdu of Yacht Sales Center AS.",
  gallery: [img("yacht,sea"), img("yacht,marina")],
  listings: [
    ["Pershing", "Honey Badger", "2012", "91'9\"", "€3,150,000", "Bodrum, Mugla"],
    ["Numarine", "Inspiration", "2024", "85'4\"", "€4,900,000", "Marmaris, Mugla"],
    ["Azimut", "Nine Nine Wine", "2016", "66'2\"", "€1,750,000", "Gocek, Mugla"],
    ["Fairline", "Hakuna Matata", "2004", "58'10\"", "€275,000", "Gocek, Mugla"],
    ["Sanlorenzo", "Twins PC", "1996", "81'11\"", "€700,000", "Marmaris, Mugla"],
    ["Galeon", "Virtus", "2021", "72'11\"", "€2,000,000", "Marmaris, Mugla"],
  ],
  broker: { name: "Haluk Gundogdu", company: "Yacht Sales Center AS" },
});

// Rights-safe local visual system. Each service inherits the coordinated image
// for its sector, replacing the remote placeholder photography used by the
// initial mockup. Approved people/listing photography can be swapped in later.
const SECTOR_ASSETS = {
  advertising: "assets/images/generated/advertising-sector.png",
  consultancy: "assets/images/generated/consultancy-sector.png",
  furniture: "assets/images/generated/design-furniture-sector.png",
  "hospitality-events": "assets/images/generated/hospitality-events-sector.png",
  "sports-wellness": "assets/images/generated/sports-wellness-sector.png",
};

const LOCAL_SERVICE_ASSETS = {
  "advertising-print": "assets/images/Doranax Advertising Group/Print/Listing Images/Business Cards.png",
  "advertising-graphic-design": "assets/images/Doranax Advertising Group/Graphic Design/Graphic Design Images/Logo and Branding.jpg",
  "advertising-digital-marketing": "assets/images/Doranax Advertising Group/Digital Marketing/Content Images/jcpp72-people-5667416_1920.jpg",
  "advertising-door-to-door-marketing": "assets/images/Door to Door Marketing/Content for Door to Door Marketing.docx",
  "advertising-content-writing": "assets/images/Doranax Advertising Group/Content Writing/Content Writing Images/Website Copy.png",
  "advertising-social-media-marketing": "assets/images/Doranax Advertising Group/Social Media Marketing/Images/image (5).png",
  "consultancy-export-import": "assets/images/Homepage/Homepage Copy and Layout/Globe Hero Image (Example).png",
  "consultancy-management-consultancy": "assets/images/Doranax Consultancy Group/Management Consultancy/Paul Baker.jpeg",
  "consultancy-recruitment": "assets/images/Recruitment/IT Sector Recruitment Content.docx",
};

// Services whose scope or source material is explicitly unresolved in the
// content handoff are published as Coming Soon rather than speculative copy.
const COMING_SOON = {
  consultancy: ["concierge", "china"],
  furniture: ["natural-stone", "lighting", "flooring", "custom-pieces", "bathroom", "drinks-cabinets"],
  "hospitality-events": ["property", "workwear"],
};

Object.entries(COMING_SOON).forEach(([sectorSlug, serviceSlugs]) => {
  const sector = SECTORS.find((item) => item.slug === sectorSlug);
  if (sector) serviceSlugs.forEach((slug) => {
    const service = sector.services.find((item) => item.slug === slug);
    if (service) service.comingSoon = true;
  });
});

SECTORS.forEach((sector) => {
  const localImage = SECTOR_ASSETS[sector.slug];
  sector.tileImage = localImage;
  sector.heroImage = localImage;
  sector.services.forEach((service) => {
    service.heroImage = localImage;
    service.gallery = [localImage, localImage];
    const supplied = LOCAL_SERVICE_ASSETS[`${sector.slug}-${service.slug}`];
    if (supplied && !/\.docx$/i.test(supplied)) service.heroImage = supplied;
    if (supplied && !/\.docx$/i.test(supplied)) service.gallery = [supplied, supplied];
  });
});

SITE.aboutImage = SECTOR_ASSETS.consultancy;
SITE.aboutImageSecondary = SECTOR_ASSETS.furniture;

const CONTACT = {
  heroImage: SECTOR_ASSETS.consultancy,
  intro: "For enquiries across any of our sectors, get in touch and a member of the relevant team will respond directly.",
};

module.exports = { SITE, SECTORS, CONTACT };
