import type { BlogPost } from "@/types";

export const BLOG_SIDEBAR_TAG_LABELS = [
  "Web Design",
  "Development",
  "Business",
  "SEO",
  "WordPress",
  "Next.js",
  "Shopify",
  "Performance",
  "Strategy",
] as const;

export const blogPosts: BlogPost[] = [
  // ─── Post 1 ────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "I Built a Business Website: Here's What I Would Do Differently",
    slug: "i-built-a-business-website-heres-what-i-would-do-differently",
    date: "12 January 2026",
    listDate: "12 Jan, 2026",
    category: "web design, business, development",
    excerpt:
      "Building a business website can look straightforward from the outside — a few pages, some images, a contact form. The difficult part is making the right decisions before development starts.",
    image: "/img/blog/blog-post-1.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["web design", "business", "development"],
    content: `
<p>Building a business website can look straightforward from the outside. You have a few pages, some images, a contact form, and a design to follow. But once you actually work on the project, you realize that the difficult part isn't always the development.</p>

<p>The difficult part is making the right decisions before development starts.</p>

<p>Over time, I've worked on different types of websites and noticed that many problems could have been avoided if certain things were discussed earlier. If I were starting a business website again today, there are several things I would approach differently.</p>

<h4>I Would Understand the Business Before Thinking About the Website</h4>

<p>The first thing I'd want to understand is the business itself.</p>

<p>Who are the customers? What does the business offer? What makes it different? What does the business actually want from the website?</p>

<p>A website for a restaurant is going to have different priorities from a website for a consulting company or an online store.</p>

<p>It's easy to start thinking about colors, animations, and layouts. But those decisions should come after understanding the business.</p>

<h4>I Would Define the Main Goal</h4>

<p>A website can have ten different pages and still have no clear purpose.</p>

<p>Before building anything, I would define the main action I want visitors to take.</p>

<p>It could be contacting the business, requesting a quote, booking an appointment, buying something, or simply learning about a service.</p>

<p>Once the goal is clear, the rest of the website becomes easier to plan.</p>

<h4>I Would Prepare the Content Earlier</h4>

<p>Placeholder content is useful during development, but relying on it for too long can create problems.</p>

<p>The real headline may be much longer than the placeholder. The actual service description might require another section. Images might have completely different dimensions.</p>

<p>Having the important content ready earlier makes the design and development process much smoother.</p>

<h4>I Would Keep Unnecessary Features Out</h4>

<p>It's tempting to add features because they look impressive.</p>

<p>Animations, sliders, popups, complicated interactions and extra sections can make a website feel more sophisticated. But if they don't help the visitor or the business, they're probably not necessary.</p>

<p>I'd rather build a simple website that works extremely well than a complicated website that makes people work harder to find information.</p>

<h4>I Would Think About Mobile and Performance From the Beginning</h4>

<p>Mobile responsiveness and performance shouldn't be tasks left until the end. I would consider them while building every section.</p>

<p>A website can look amazing on a large screen and still be frustrating to use on a phone.</p>

<h4>The Biggest Lesson</h4>

<p>The biggest thing I've learned is that building a website isn't just about building pages.</p>

<p>It's about understanding what the business needs and creating an experience that helps achieve that goal.</p>

<p>If I were starting again, I'd spend less time asking, <strong>"How should I build this?"</strong> and more time asking: <strong>"What does this business need the website to accomplish?"</strong></p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/5-website-problems-that-could-be-costing-your-business-customers">5 Website Problems That Could Be Costing Your Business Customers</a></li>
  <li><a href="/blog/how-i-approach-building-a-website-for-a-new-business">How I Approach Building a Website for a New Business</a></li>
  <li><a href="/blog/my-process-for-building-a-website-from-start-to-launch">My Process for Building a Website From Start to Launch</a></li>
</ul>
`.trim(),
  },

  // ─── Post 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "5 Website Problems That Could Be Costing Your Business Customers",
    slug: "5-website-problems-that-could-be-costing-your-business-customers",
    date: "19 January 2026",
    listDate: "19 Jan, 2026",
    category: "web design, business, performance",
    excerpt:
      "Your website might be losing customers without you realizing it. Sometimes everything technically works, but the experience is frustrating enough that visitors leave.",
    image: "/img/blog/blog-post-2.webp",
    author: "Wahaj Ansari",
    readTime: "4 min read",
    tags: ["web design", "business", "performance"],
    content: `
<p>Your website might be losing customers without you realizing it.</p>

<p>It doesn't necessarily mean the website is broken. Sometimes everything technically works, but the experience is frustrating enough that visitors leave.</p>

<p>Here are five problems I regularly look for when reviewing business websites.</p>

<h4>1. Visitors Don't Understand What You Do</h4>

<p>Someone should be able to visit your homepage and understand what your business does without reading every section.</p>

<p>If the headline is vague or the important information is buried, visitors may simply move on.</p>

<h4>2. The Website Doesn't Work Well on Mobile</h4>

<p>A website can look perfect on a desktop and still be difficult to use on a phone.</p>

<p>Small text, difficult buttons, awkward spacing and complicated menus can quickly create a poor experience.</p>

<h4>3. The Website Is Slow</h4>

<p>People expect websites to respond quickly.</p>

<p>Large images, unnecessary scripts, excessive animations and third-party services can all affect performance.</p>

<h4>4. Visitors Don't Know What to Do Next</h4>

<p>Imagine someone visits your website, likes what they see, and decides they want to contact you. Where do they go?</p>

<p>Every important page should have a clear next step, such as:</p>
<ul>
  <li>Request a Quote</li>
  <li>Book a Call</li>
  <li>Contact Us</li>
  <li>Get Started</li>
</ul>

<h4>5. There Isn't Enough Trust</h4>

<p>People are naturally cautious when dealing with a business they've never used before.</p>

<p>Clear business information, testimonials, reviews, previous work and contact information can help visitors feel more comfortable.</p>

<h4>Final Thought</h4>

<p>You don't always need a complete redesign to improve a website.</p>

<p>Sometimes fixing a few important problems can make a much bigger difference than adding ten new features.</p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/website-redesign-checklist-for-small-businesses">Website Redesign Checklist for Small Businesses</a></li>
  <li><a href="/blog/i-built-a-business-website-heres-what-i-would-do-differently">I Built a Business Website: Here's What I Would Do Differently</a></li>
  <li><a href="/blog/what-you-should-prepare-before-hiring-a-web-developer">What You Should Prepare Before Hiring a Web Developer</a></li>
</ul>
`.trim(),
  },

  // ─── Post 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "What I Check Before Taking Over an Existing Website",
    slug: "what-i-check-before-taking-over-an-existing-website",
    date: "26 January 2026",
    listDate: "26 Jan, 2026",
    category: "development, web design, strategy",
    excerpt:
      "Taking over an existing website is very different from building a new one. There may be old code, unused features, third-party integrations, and problems that aren't immediately visible.",
    image: "/img/blog/blog-post-3.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["development", "web design", "strategy"],
    content: `
<p>Taking over an existing website is very different from building a new one.</p>

<p>When you build something from scratch, you know why things were structured a certain way. When you take over someone else's project, you don't always have that context.</p>

<p>There may be old code, unused features, third-party integrations, outdated content or problems that aren't immediately visible.</p>

<p>That's why I prefer to investigate before making major changes.</p>

<h4>I Start With the Website Structure</h4>

<p>First, I want to understand how the website is organized.</p>

<p>What pages exist? How does the navigation work? What are the important user journeys?</p>

<h4>I Look for Obvious Problems</h4>

<p>I check for things like:</p>
<ul>
  <li>Broken links</li>
  <li>Missing pages</li>
  <li>Layout issues</li>
  <li>Forms that don't work</li>
  <li>Mobile problems</li>
  <li>Outdated content</li>
  <li>Inconsistent design</li>
</ul>

<h4>I Check Integrations</h4>

<p>A website may depend on several external services.</p>

<p>There could be email systems, analytics, payment providers, booking tools, APIs or other integrations.</p>

<p>Changing one part without understanding these connections can sometimes break something completely unrelated.</p>

<h4>I Look at Performance</h4>

<p>I also want to understand why the website might feel slow.</p>

<p>Large images, unnecessary scripts, excessive plugins or third-party resources can all contribute to performance problems.</p>

<h4>I Understand What the Business Actually Wants</h4>

<p>A technically perfect website isn't useful if it doesn't solve the business's actual problem.</p>

<p>I want to know what is currently working, what isn't working, and what the client wants to improve.</p>

<h4>Final Thought</h4>

<p>Taking over an existing website is partly development and partly investigation.</p>

<p>Before changing something, you need to understand why it exists.</p>

<p>Sometimes the best solution isn't rebuilding everything. It's identifying what actually needs to change and improving it carefully.</p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/website-redesign-checklist-for-small-businesses">Website Redesign Checklist for Small Businesses</a></li>
  <li><a href="/blog/what-i-consider-before-choosing-the-technology-for-a-website">What I Consider Before Choosing the Technology for a Website</a></li>
  <li><a href="/blog/5-website-problems-that-could-be-costing-your-business-customers">5 Website Problems That Could Be Costing Your Business Customers</a></li>
</ul>
`.trim(),
  },

  // ─── Post 4 ────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "How I Approach Building a Website for a New Business",
    slug: "how-i-approach-building-a-website-for-a-new-business",
    date: "2 February 2026",
    listDate: "2 Feb, 2026",
    category: "development, business, strategy",
    excerpt:
      "When a new business comes to me for a website, I don't want to start by opening the code editor. I want to understand the business first.",
    image: "/img/blog/blog-post-4.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["development", "business", "strategy"],
    content: `
<p>When a new business comes to me for a website, I don't want to start by opening the code editor.</p>

<p>I want to understand the business first.</p>

<p>A website is going to represent that business online, so the better I understand it, the better decisions I can make during development.</p>

<h4>First, I Understand the Business</h4>

<p>I want to know what the business offers, who its customers are and what makes it different.</p>

<p>I also want to understand how customers currently find the business and what role the website is expected to play.</p>

<h4>Then I Define the Goal</h4>

<p>What should happen when someone visits the website?</p>

<p>Maybe the business wants phone calls. Maybe it wants leads. Maybe customers need to book appointments. Maybe the goal is to sell products.</p>

<p>There isn't one correct answer.</p>

<h4>Then I Plan the Pages</h4>

<p>Once the goal is clear, I can determine what pages are actually needed.</p>

<p>Not every business needs ten or fifteen pages. Sometimes five well-planned pages are better than fifteen pages filled with unnecessary content.</p>

<h4>I Think About the User Journey</h4>

<p>I try to imagine myself as someone who has never heard of the business.</p>

<p>What would I want to know? What questions would I have? What would convince me to take the next step?</p>

<h4>Content Comes Before Perfection</h4>

<p>A beautiful design can't compensate for poor content.</p>

<p>The website needs clear information about the business, services, products and contact options.</p>

<h4>Then Development Begins</h4>

<p>Once the direction is clear, development becomes much more straightforward.</p>

<p>At this stage I focus on making the website responsive, fast, maintainable and easy to use.</p>

<h4>Final Thought</h4>

<p>For me, a good website project starts with understanding, not development.</p>

<p><strong>Understand the business → define the goal → plan → build → test → launch → improve.</strong></p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/my-process-for-building-a-website-from-start-to-launch">My Process for Building a Website From Start to Launch</a></li>
  <li><a href="/blog/i-built-a-business-website-heres-what-i-would-do-differently">I Built a Business Website: Here's What I Would Do Differently</a></li>
  <li><a href="/blog/what-you-should-prepare-before-hiring-a-web-developer">What You Should Prepare Before Hiring a Web Developer</a></li>
</ul>
`.trim(),
  },

  // ─── Post 5 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "My Process for Building a Website From Start to Launch",
    slug: "my-process-for-building-a-website-from-start-to-launch",
    date: "9 February 2026",
    listDate: "9 Feb, 2026",
    category: "development, strategy, web design",
    excerpt:
      "Every website project is different, but having a process makes things much easier. It gives both the developer and the client a clear idea of what happens next.",
    image: "/img/blog/blog-post-5.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["development", "strategy", "web design"],
    content: `
<p>Every website project is different, but having a process makes things much easier.</p>

<p>It gives both the developer and the client a clear idea of what happens next.</p>

<h4>1. Requirements</h4>

<p>First, I want to understand the project.</p>

<p>What does the business need? What pages are required? What features are needed? Are there any integrations?</p>

<h4>2. Planning</h4>

<p>Once the requirements are clear, I plan the website structure.</p>

<p>I think about pages, navigation, content hierarchy and the main user journeys.</p>

<h4>3. Content and Assets</h4>

<p>The next step is gathering the things the website actually needs.</p>

<p>Logo, images, text, business information, product information and other assets.</p>

<h4>4. Design</h4>

<p>The goal isn't simply to make the website look good.</p>

<p>The design should make information easy to understand and important actions easy to find.</p>

<h4>5. Development</h4>

<p>Once the direction is clear, I start building.</p>

<p>During development, I focus on responsiveness, performance, maintainability and the actual functionality required by the project.</p>

<h4>6. Testing</h4>

<p>I test:</p>
<ul>
  <li>Desktop layouts</li>
  <li>Tablet layouts</li>
  <li>Mobile layouts</li>
  <li>Forms</li>
  <li>Buttons</li>
  <li>Links</li>
  <li>Navigation</li>
  <li>Important user flows</li>
</ul>

<h4>7. Launch</h4>

<p>Once everything has been checked, the website can go live.</p>

<h4>8. Improvements</h4>

<p>The website isn't necessarily finished after launch.</p>

<p>Real users provide information that you can't always get during development.</p>

<h4>My Simple Formula</h4>

<p><strong>Requirements → Planning → Content → Design → Development → Testing → Launch → Improvement</strong></p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/how-i-approach-building-a-website-for-a-new-business">How I Approach Building a Website for a New Business</a></li>
  <li><a href="/blog/what-i-consider-before-choosing-the-technology-for-a-website">What I Consider Before Choosing the Technology for a Website</a></li>
  <li><a href="/blog/website-redesign-checklist-for-small-businesses">Website Redesign Checklist for Small Businesses</a></li>
</ul>
`.trim(),
  },

  // ─── Post 6 ────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "What I Consider Before Choosing the Technology for a Website",
    slug: "what-i-consider-before-choosing-the-technology-for-a-website",
    date: "16 February 2026",
    listDate: "16 Feb, 2026",
    category: "development, strategy, Next.js",
    excerpt:
      "There are a lot of technologies available today. But when I start a project, popularity isn't the first thing I consider. The first question is: what does the business actually need?",
    image: "/img/blog/blog-post-6.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["development", "strategy", "Next.js"],
    content: `
<p>There are a lot of technologies available today.</p>

<p>It's easy to get caught up in which framework, platform or programming language is currently popular.</p>

<p>But when I start a project, popularity isn't the first thing I consider.</p>

<p>The first question is: <strong>What does the business actually need?</strong></p>

<h4>I Start With the Requirements</h4>

<p>I look at the type of website, expected traffic, required functionality, integrations, content, budget and timeline.</p>

<p>A small informational website doesn't have the same requirements as a complex application.</p>

<h4>I Consider Who Will Manage the Website</h4>

<p>If the business team needs to update content regularly, the solution needs to make that practical.</p>

<h4>I Think About Future Requirements</h4>

<p>I also ask what the website might become.</p>

<p>Is it likely to remain a simple website? Could it eventually need accounts, dashboards, advanced functionality or integrations?</p>

<h4>Performance Matters</h4>

<p>The technical choice can affect performance, but it's only one part of the equation.</p>

<p>Images, scripts, hosting, third-party services and implementation also matter.</p>

<h4>Budget Matters Too</h4>

<p>The technically most advanced option isn't always the best option.</p>

<p>A business needs a solution that makes sense financially as well as technically.</p>

<h4>I Don't Choose Technology for the Sake of Technology</h4>

<p>A developer might have a favorite framework or platform. That doesn't mean it should be used for every project.</p>

<p>The technology should serve the project — not the other way around.</p>

<h4>Final Thought</h4>

<p>I don't believe there is one technology that is best for every website.</p>

<p>The right choice depends on the business, the users, the requirements and the future plans.</p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/how-i-decide-between-a-simple-website-and-custom-development">How I Decide Between a Simple Website and Custom Development</a></li>
  <li><a href="/blog/my-process-for-building-a-website-from-start-to-launch">My Process for Building a Website From Start to Launch</a></li>
  <li><a href="/blog/what-i-check-before-taking-over-an-existing-website">What I Check Before Taking Over an Existing Website</a></li>
</ul>
`.trim(),
  },

  // ─── Post 7 ────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "How I Decide Between a Simple Website and Custom Development",
    slug: "how-i-decide-between-a-simple-website-and-custom-development",
    date: "23 February 2026",
    listDate: "23 Feb, 2026",
    category: "development, strategy, business",
    excerpt:
      "One question that comes up often is whether a business should build a simple website or invest in something more customized. My answer is usually: it depends on what the business actually needs.",
    image: "/img/blog/blog-post-7.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["development", "strategy", "business"],
    content: `
<p>One question that comes up often is whether a business should build a simple website or invest in something more customized.</p>

<p>My answer is usually: <strong>It depends on what the business actually needs.</strong></p>

<h4>When Simple Is Better</h4>

<p>If a business mainly needs to explain its services, show its work, provide contact information and generate inquiries, there may be no reason to build something complicated.</p>

<p>A simple solution can be faster, easier to maintain and more affordable.</p>

<h4>When Custom Development Makes Sense</h4>

<p>Custom development becomes more useful when the website needs to do something specific. This might include:</p>

<ul>
  <li>Custom workflows</li>
  <li>User accounts</li>
  <li>Dashboards</li>
  <li>Complex integrations</li>
  <li>Unique business logic</li>
  <li>Advanced data management</li>
  <li>Specialized functionality</li>
</ul>

<h4>I Look at the Business Process</h4>

<p>If the website is just an online brochure, simple might be enough.</p>

<p>If employees are going to use it to manage customers, bookings, orders or business processes, then a more customized approach may make sense.</p>

<h4>Don't Overbuild</h4>

<p>More complexity means more development time, more maintenance and potentially more things that can go wrong.</p>

<h4>But Don't Underbuild Either</h4>

<p>If a business clearly needs custom functionality, choosing a limited solution just because it is cheaper today may create much bigger costs later.</p>

<h4>Finding the Balance</h4>

<p>The goal isn't to choose the most advanced option.</p>

<p>The goal is to choose the option that solves the problem properly without introducing unnecessary complexity.</p>

<h4>Final Thought</h4>

<p>Instead of asking <strong>"Which technology is better?"</strong> I'd ask: <strong>"What does this business actually need?"</strong></p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/what-i-consider-before-choosing-the-technology-for-a-website">What I Consider Before Choosing the Technology for a Website</a></li>
  <li><a href="/blog/how-i-approach-building-a-website-for-a-new-business">How I Approach Building a Website for a New Business</a></li>
  <li><a href="/blog/what-you-should-prepare-before-hiring-a-web-developer">What You Should Prepare Before Hiring a Web Developer</a></li>
</ul>
`.trim(),
  },

  // ─── Post 8 ────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "What You Should Prepare Before Hiring a Web Developer",
    slug: "what-you-should-prepare-before-hiring-a-web-developer",
    date: "2 March 2026",
    listDate: "2 Mar, 2026",
    category: "business, strategy, web design",
    excerpt:
      "You don't need to know how to code before hiring a web developer. But having the right information ready can make the entire project easier.",
    image: "/img/blog/blog-post-8.webp",
    author: "Wahaj Ansari",
    readTime: "5 min read",
    tags: ["business", "strategy", "web design"],
    content: `
<p>You don't need to know how to code before hiring a web developer.</p>

<p>But having the right information ready can make the entire project easier.</p>

<h4>1. Explain Your Business</h4>

<p>Start with the basics. What does your business do? Who are your customers? What products or services do you offer? What makes your business different?</p>

<h4>2. Know What You Want the Website to Achieve</h4>

<p>Do you want more inquiries? More phone calls? Online sales? Bookings? Or simply a professional online presence?</p>

<h4>3. Prepare Your Content</h4>

<p>Collect your:</p>
<ul>
  <li>Business description</li>
  <li>Service information</li>
  <li>Product information</li>
  <li>Contact details</li>
  <li>Images</li>
  <li>Logo</li>
  <li>Team information</li>
  <li>Testimonials</li>
</ul>

<h4>4. Find Examples You Like</h4>

<p>If you have seen websites you like, send them to your developer. You don't need to know how they were built. Just explain what you like about them.</p>

<h4>5. List the Features You Need</h4>

<p>Write down anything you know the website needs. For example:</p>
<ul>
  <li>Contact forms</li>
  <li>Booking</li>
  <li>Payments</li>
  <li>User accounts</li>
  <li>Product management</li>
  <li>Integrations</li>
  <li>Search</li>
  <li>Dashboards</li>
</ul>

<h4>6. Be Honest About Your Timeline</h4>

<p>If you have a launch date, tell your developer early. A realistic timeline is much better than rushing everything at the last minute.</p>

<h4>7. Discuss What Happens After Launch</h4>

<p>Ask about maintenance, updates, bug fixes and future changes.</p>

<h4>Final Thought</h4>

<p>You don't need to understand the technical side of development.</p>

<p>You just need to clearly explain the business problem. The more information you can give your developer at the beginning, the easier it becomes to build the right solution.</p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/how-i-approach-building-a-website-for-a-new-business">How I Approach Building a Website for a New Business</a></li>
  <li><a href="/blog/5-website-problems-that-could-be-costing-your-business-customers">5 Website Problems That Could Be Costing Your Business Customers</a></li>
  <li><a href="/blog/my-process-for-building-a-website-from-start-to-launch">My Process for Building a Website From Start to Launch</a></li>
</ul>
`.trim(),
  },

  // ─── Post 9 ────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Website Redesign Checklist for Small Businesses",
    slug: "website-redesign-checklist-for-small-businesses",
    date: "9 March 2026",
    listDate: "9 Mar, 2026",
    category: "web design, business, strategy",
    excerpt:
      "A website redesign shouldn't be about changing the colors just because the current design looks old. A good redesign should solve problems.",
    image: "/img/blog/blog-post-9.webp",
    author: "Wahaj Ansari",
    readTime: "6 min read",
    tags: ["web design", "business", "strategy"],
    content: `
<p>A website redesign shouldn't be about changing the colors just because the current design looks old.</p>

<p>A good redesign should solve problems.</p>

<p>Before starting, I'd review the following areas.</p>

<h4>1. Review the Current Website</h4>

<p>Before changing anything, understand what already exists.</p>

<p>Look at the pages, navigation, forms, content and important user journeys.</p>

<h4>2. Identify the Actual Problems</h4>

<p>Ask:</p>
<ul>
  <li>What isn't working?</li>
  <li>What do visitors struggle with?</li>
  <li>Is the information outdated?</li>
  <li>Are people finding it difficult to contact the business?</li>
  <li>Is the website slow?</li>
  <li>Does it work properly on mobile?</li>
</ul>

<h4>3. Review the Content</h4>

<p>A redesign is a good opportunity to remove outdated information.</p>

<p>Make sure important services, products, pricing information and business details are accurate.</p>

<h4>4. Check the Mobile Experience</h4>

<p>Open the existing website on your phone. Can you easily navigate it? Can you read everything? Are buttons easy to tap? Are forms comfortable to use?</p>

<h4>5. Look at Performance</h4>

<p>Check whether large images, unnecessary scripts or other resources are slowing the website down.</p>

<h4>6. Improve Navigation</h4>

<p>Visitors shouldn't have to search for important information. Keep navigation simple and make the most important pages easy to reach.</p>

<h4>7. Make Calls to Action Clear</h4>

<p>What should visitors do? Contact you? Request a quote? Book a service? Buy something?</p>

<p>Whatever the action is, make it easy to find.</p>

<h4>8. Add Trust Where Necessary</h4>

<p>Consider whether visitors have enough information to trust the business. Testimonials, reviews, previous work, clear contact information, business details and professional content can all help.</p>

<h4>9. Don't Redesign Everything Automatically</h4>

<p>Not everything needs to change. If a page works well, keep it. If a feature provides value, keep it.</p>

<p>The goal isn't to replace everything. The goal is to improve what needs improvement.</p>

<h4>Final Thought</h4>

<p>A successful redesign isn't simply a newer-looking website.</p>

<p>It's a website that is clearer, easier to use, faster, and more effective for the business.</p>

<p>Before starting a redesign, I'd ask one simple question: <strong>"What problem are we trying to solve?"</strong></p>

<p>If you can answer that clearly, you're already starting in the right direction.</p>

<hr />

<h5>Related Reading</h5>
<ul>
  <li><a href="/blog/5-website-problems-that-could-be-costing-your-business-customers">5 Website Problems That Could Be Costing Your Business Customers</a></li>
  <li><a href="/blog/what-i-check-before-taking-over-an-existing-website">What I Check Before Taking Over an Existing Website</a></li>
  <li><a href="/blog/i-built-a-business-website-heres-what-i-would-do-differently">I Built a Business Website: Here's What I Would Do Differently</a></li>
</ul>
`.trim(),
  },
];

/** Show all 9 posts on page 1, no pagination needed. */
export const BLOG_PAGE_FIRST_COUNT = 9;
export const BLOG_PAGE_NEXT_COUNT = 9;

export function getBlogListPage(page: number): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
} {
  const total = blogPosts.length;
  const totalPages =
    total <= BLOG_PAGE_FIRST_COUNT
      ? 1
      : 1 + Math.ceil((total - BLOG_PAGE_FIRST_COUNT) / BLOG_PAGE_NEXT_COUNT);

  const safe =
    Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
  const currentPage = Math.min(safe, totalPages);

  let start: number;
  let length: number;
  if (currentPage === 1) {
    start = 0;
    length = Math.min(BLOG_PAGE_FIRST_COUNT, total);
  } else {
    start =
      BLOG_PAGE_FIRST_COUNT + (currentPage - 2) * BLOG_PAGE_NEXT_COUNT;
    length = Math.min(BLOG_PAGE_NEXT_COUNT, Math.max(0, total - start));
  }

  return {
    posts: blogPosts.slice(start, start + length),
    totalPages,
    currentPage,
  };
}
