import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Prime Mobile Detailing J&G",
    tagline: "Restoring your car's perfect shine.",
    phone: "(555) 486-2791",
    phoneHref: "tel:+15554862791",
    email: "contact@primemobiledetailingjg.com",
    address: "",
    city: "",
    serviceAreas: [],
    since: "2018",
    google_rating: "4.9",
    review_count: "150",
    emergency: false,
    theme: "clean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "shield-check", title: "Ceramic Coating", desc: "Provides long-lasting hydrophobic protection and a brilliant, glossy finish for your vehicle's paint.", urgent: false },
    { icon: "sparkles", title: "Paint Correction", desc: "Removes swirls, scratches, and imperfections to restore your paint to a flawless, mirror-like shine.", urgent: false },
    { icon: "star", title: "Full Detail Package", desc: "Our most comprehensive service, cleaning and restoring every inch of your vehicle inside and out.", urgent: false },
    { icon: "home", title: "Interior Detail", desc: "Deep cleans and conditions all interior surfaces, from carpets and upholstery to dash and door panels.", urgent: false },
    { icon: "shield-check", title: "Paint Protection Film (PPF)", desc: "Applies a clear, durable film to high-impact areas to guard against rock chips, scratches, and road debris.", urgent: false },
    { icon: "scissors", title: "Window Tinting", desc: "Enhances privacy, reduces heat and glare, and protects your interior from harmful UV rays.", urgent: false }
  ],

  testimonials: [
    { name: "Jessica L.", location: "Local Area", stars: 5, text: "I was absolutely blown away by the paint correction. My 5-year-old black SUV had so many swirl marks, I thought it was a lost cause. The team at Prime Mobile Detailing made it look better than new. The reflection is crystal clear now. Worth every penny!" },
    { name: "Mark T.", location: "Local Area", stars: 5, text: "The convenience of their mobile service is unmatched. They came to my office, and by the time I finished work, my car was transformed. The interior detail was meticulous; they got rid of coffee stains I'd given up on. Professional, punctual, and incredible results." },
    { name: "Samantha R.", location: "Local Area", stars: 5, text: "I opted for the ceramic coating, and the difference is night and day. Water just beads up and rolls right off, making washes so much easier. The depth and gloss they achieved are stunning. It's like my car is permanently wrapped in glass. Highly recommend their expertise." }
  ],

  trustBadges: [
    "Licensed & Insured", "Mobile Service To You", "Ceramic Coating Experts", "Showroom Finish Guarantee", "Premium Products Used"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Cars Detailed", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Combined Exp.", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "Certified Technicians",    desc: "Our detailers are professionally trained and certified, ensuring your vehicle receives expert care and flawless results." },
    { icon: "shield-check",title: "Ceramic Coating Specialists", desc: "We specialize in applying premium ceramic coatings for unmatched gloss, protection, and long-lasting durability." },
    { icon: "truck",       title: "We Come To You",           desc: "Enjoy premium detailing services at your home or office with our fully-equipped, self-contained mobile units." },
    { icon: "star",        title: "Showroom Finish Guarantee",desc: "We're not satisfied until your car looks absolutely pristine. We guarantee a finish that will turn heads." },
    { icon: "sparkles",    title: "Premium Products Only",    desc: "We use only the highest quality, industry-leading products and tools to ensure the best possible care for your vehicle." },
    { icon: "dollar-sign", title: "Transparent Pricing",      desc: "Receive a clear, detailed quote before any work begins. No hidden fees, just honest and fair pricing for exceptional service." }
  ],

  formServiceOptions: ["Ceramic Coating", "Paint Correction", "Full Detail Package", "Interior Detail", "Paint Protection Film (PPF)", "Window Tinting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges