export type LearningStep = {
  title: string;
  duration: string;
  lesson: string;
  action: string;
};

export type CommerceCourse = {
  slug: string;
  title: string;
  category: string;
  level: "Starter" | "Building" | "Advanced";
  duration: string;
  description: string;
  accent: string;
  steps: LearningStep[];
};

export const courses: CommerceCourse[] = [
  {
    slug: "shopify-store",
    title: "Build your Shopify store",
    category: "Store setup",
    level: "Starter",
    duration: "48 min",
    description: "Set up the foundations of a trustworthy storefront before you spend on traffic.",
    accent: "mint",
    steps: [
      { title: "Choose a focused store concept", duration: "8 min", lesson: "A focused store makes product choices, brand voice, and customer expectations easier to align. Start with a customer and a problem, not a theme template.", action: "Write a one-sentence description of who your store serves and what problem it helps with." },
      { title: "Plan your navigation", duration: "7 min", lesson: "Good navigation helps a shopper understand the range quickly. Keep the first menu short and group products around how customers think about them.", action: "Sketch a menu with no more than five top-level links." },
      { title: "Create useful product pages", duration: "12 min", lesson: "A product page should answer the buyer's questions: what it is, who it is for, what arrives, how long delivery takes, and what happens if it is not right.", action: "Draft a product title, three concrete benefits, delivery expectations, and a returns summary." },
      { title: "Set policies and checkout expectations", duration: "10 min", lesson: "Clear shipping, returns, privacy, and contact information reduce avoidable surprises. Check local consumer and tax rules before publishing.", action: "Make a list of the policies your store must show before accepting orders." },
      { title: "Test the full customer journey", duration: "11 min", lesson: "A test order checks the store from a customer's point of view, including mobile layout, confirmation messages, shipping costs, and payment configuration.", action: "Run a test order on mobile and note every confusing or broken step." },
    ],
  },
  {
    slug: "product-research",
    title: "Research products with evidence",
    category: "Product strategy",
    level: "Starter",
    duration: "36 min",
    description: "Evaluate customer demand, competition, fulfillment, and unit economics before committing.",
    accent: "orange",
    steps: [
      { title: "Start with a customer problem", duration: "7 min", lesson: "Products are easier to evaluate when tied to a specific job or frustration. A trend alone does not prove a sustainable business opportunity.", action: "Describe one customer, one recurring problem, and how they handle it today." },
      { title: "Compare demand signals", duration: "8 min", lesson: "Search interest, customer reviews, community questions, and competitor activity are useful clues. Treat each as imperfect evidence and look for patterns across sources.", action: "Collect three independent demand signals and note what each one cannot tell you." },
      { title: "Inspect the competitive landscape", duration: "7 min", lesson: "Competition can validate demand, but it also reveals expectations around price, quality, delivery, and service.", action: "Compare five alternatives by price, promise, review themes, and delivery terms." },
      { title: "Check sourcing and fulfillment", duration: "7 min", lesson: "Supplier reliability, product quality, packaging, shipping time, and returns affect both margin and customer trust.", action: "Write down the supplier questions you need answered before making a claim to customers." },
      { title: "Model the unit economics", duration: "7 min", lesson: "Revenue is not profit. Include product cost, shipping, platform fees, refunds, taxes, and acquisition cost in a conservative estimate.", action: "Use the profit calculator to test a cautious, expected, and optimistic case." },
    ],
  },
  {
    slug: "dropshipping-operations",
    title: "Run dropshipping responsibly",
    category: "Operations",
    level: "Building",
    duration: "42 min",
    description: "Set customer expectations, vet suppliers, and build a reliable order-support process.",
    accent: "blue",
    steps: [
      { title: "Understand the seller's responsibility", duration: "8 min", lesson: "A supplier may ship the parcel, but the store remains responsible for accurate product claims, customer communication, and applicable consumer obligations.", action: "List the customer promises your store must be able to keep even when a supplier is involved." },
      { title: "Vet samples and supplier terms", duration: "9 min", lesson: "A sample helps verify that photos, quality, packaging, and delivery match expectations. Document defects and agreed service levels.", action: "Create a sample inspection checklist and supplier response-time target." },
      { title: "Publish realistic delivery information", duration: "7 min", lesson: "State shipping windows clearly and update customers when a delay occurs. Do not imply local or express fulfillment unless it is true.", action: "Write a plain-language shipping estimate with a plan for delays." },
      { title: "Prepare for returns and support", duration: "9 min", lesson: "Returns and support need a clear owner, response process, evidence trail, and policy aligned with the regions where you sell.", action: "Map how a customer gets help from first message through resolution." },
      { title: "Monitor fulfillment quality", duration: "9 min", lesson: "Track late shipments, cancellations, defects, and support contacts. Pause a product when the experience falls below your stated promise.", action: "Choose three operational metrics and define an escalation threshold for each." },
    ],
  },
  {
    slug: "ethical-marketing",
    title: "Market with useful creative",
    category: "Marketing",
    level: "Building",
    duration: "39 min",
    description: "Build an original message, test creative responsibly, and measure quality beyond clicks.",
    accent: "purple",
    steps: [
      { title: "Define the audience and promise", duration: "7 min", lesson: "A useful campaign connects a real audience need to a verifiable product benefit. Avoid guarantees, fabricated urgency, and unsupported health or performance claims.", action: "Write one audience insight and one benefit you can substantiate." },
      { title: "Develop an original creative angle", duration: "8 min", lesson: "Show the product solving a real task, explain a tradeoff, or demonstrate how it fits a routine. Use original material or assets you have rights to use.", action: "Draft three different opening hooks without copying a competitor's wording." },
      { title: "Choose a small test", duration: "7 min", lesson: "A test should change one meaningful variable at a time and have a spending limit. Set the measurement window before launching.", action: "Write a test hypothesis, budget cap, and stop condition." },
      { title: "Read the funnel", duration: "8 min", lesson: "Impressions and clicks are not enough. Check product-page engagement, checkout starts, conversion, refunds, and contribution margin together.", action: "Pick a leading indicator and a business outcome for your next test." },
      { title: "Learn and iterate", duration: "9 min", lesson: "Keep a record of what changed and what happened. A negative result is useful if it narrows uncertainty without exceeding the test budget.", action: "Write a short experiment note with result, interpretation, and next action." },
    ],
  },
  {
    slug: "shopify-growth",
    title: "Improve a Shopify store",
    category: "Store growth",
    level: "Advanced",
    duration: "44 min",
    description: "Use customer and funnel evidence to prioritize improvements without chasing vanity metrics.",
    accent: "mint",
    steps: [
      { title: "Map the customer journey", duration: "8 min", lesson: "Separate discovery, product evaluation, checkout, delivery, and post-purchase experience. Each stage has different friction and different evidence.", action: "Map the journey and add one measurable question to each stage." },
      { title: "Find the highest-friction step", duration: "9 min", lesson: "Combine analytics with customer messages and usability checks. A high exit rate is a prompt to investigate, not proof of a cause.", action: "Choose one funnel drop-off and list two plausible explanations to test." },
      { title: "Improve clarity and trust", duration: "8 min", lesson: "Clear pricing, specific product details, accessible content, delivery expectations, and contact information help customers make informed decisions.", action: "Run a product page review using the customer questions checklist." },
      { title: "Plan a controlled experiment", duration: "9 min", lesson: "Change one important thing, define the comparison, and give the test enough time to avoid reacting to noise.", action: "Create a before-and-after experiment card with a stop rule." },
      { title: "Review profitable growth", duration: "10 min", lesson: "Growth is healthy when contribution after variable costs improves while customer experience remains reliable.", action: "Review margin, repeat behavior, refunds, and delivery quality together." },
    ],
  },
];

export const launchTasks = [
  { id: "customer", title: "Write your ideal customer profile", detail: "Describe a real person, their need, and what they use today." },
  { id: "offer", title: "Choose one focused offer", detail: "Start with a clear problem and a product you can verify." },
  { id: "supplier", title: "Verify supplier quality and shipping", detail: "Check samples, delivery ranges, support, and return handling." },
  { id: "store", title: "Draft your store policies", detail: "Review shipping, returns, privacy, contact, and local requirements." },
  { id: "test-order", title: "Run a test order", detail: "Check the complete storefront and checkout on a phone." },
  { id: "launch-metric", title: "Set a first-week budget and metric", detail: "Choose a small cap, a stop rule, and one meaningful outcome." },
];