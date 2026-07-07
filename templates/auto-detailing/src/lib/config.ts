import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Prime Mobile Detailing J&G",
    tagline: "Bringing showroom shine to you.",
    phone: "(XXX) XXX-XXXX",
    phoneHref: "tel:+1XXXXXXXXXX",
    email: "...",
    address: "...",
    city: "...",
    serviceAreas: ["..."],
    license: "...",
    since: "...",
    google_rating: "4.9",
    review_count: "50",
    emergency: false,
    theme: "clean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "sparkles", title: "Ceramic Coating", desc: "Protect your paint with a durable, high-gloss ceramic layer for ultimate shine.", urgent: false },
    { icon: "wrench", title: "Paint Correction", desc: "Remove swirls, scratches, and imperfections to restore your paint's original luster.", urgent: false },
    { icon: "star", title: "Full Detail Package", desc: "A comprehensive interior and exterior cleaning to bring your car back to life.", urgent: false },
    { icon: "home", title: "Interior Detail", desc: "Deep clean and condition every surface inside your vehicle for a fresh feel.", urgent: false },
    { icon: "shield-check", title: "Paint Protection Film (PPF)", desc: "Apply a clear, self-healing film to guard against rock chips and scratches.", urgent: false },
    { icon: "scissors", title: "Window Tinting", desc: "Enhance privacy, reduce heat, and protect your interior with professional window films.", urgent: false }
  ],

  testimonials: [
    { name: "Michael R.", location: "...", stars: 5, text: "J&G's mobile service is a game-changer. They came right to my office and completely transformed my car. The paint correction they performed made my 5-year-old BMW look brand new. The attention to detail was incredible, from the wheels to the interior stitching. Absolutely worth it." },
    { name: "Jessica L.", location: "...", stars: 5, text: "I was hesitant about ceramic coating, but the team at Prime Mobile Detailing explained the process so clearly. The result is stunning! Water just beads off, and the gloss is insane. Their professionalism and meticulous work have earned them a customer for life. Highly recommend their services." },
    { name: "David C.", location: "...", stars: 5, text: "Wow! I got the Full Detail Package for my SUV after a long road trip with the kids, and it looks better than the day I bought it. They removed stains I thought were permanent. It feels so good to drive a truly clean car again. Exceptional service and value." }
  ],

  trustBadges: [
    "Licensed & Insured", "Ceramic Coating Specialists", "Mobile Service To You", "Premium Products Used", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 50, label: "5-Star Reviews", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "Certified Technicians",  desc: "Our team holds certifications in modern detailing techniques, ensuring expert care for your vehicle." },
    { icon: "sparkles",    title: "Ceramic Coating Specialists", desc: "We specialize in applying professional-grade ceramic coatings for long-lasting protection and shine." },
    { icon: "truck",       title: "Convenient Mobile Service",     desc: "We bring our fully equipped, professional detailing studio directly to your home or office." },
    { icon: "star",        title: "Guaranteed Showroom Finish",   desc: "We're not satisfied until your vehicle has that stunning, better-than-new showroom look." },
    { icon: "shield-check",title: "Premium Products Only",        desc: "We exclusively use high-end, tested products to ensure the best results and protection for your car." },
    { icon: "dollar-sign", title: "Transparent Pricing",      desc: "Receive a clear, detailed quote before any work begins. No surprises, just exceptional value." }
  ],

  formServiceOptions: ["Ceramic Coating", "Paint Correction", "Full Detail Package", "Interior Detail", "Paint Protection Film (PPF)", "Window Tinting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges