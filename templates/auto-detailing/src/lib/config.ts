import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Prime Mobile Detailing J&G",
    tagline: "Bringing showroom shine to your driveway.",
    phone: "(555) 123-4567",
    phoneHref: "tel:+15551234567",
    email: "contact@primemobiledetailing.com",
    address: "",
    city: "",
    serviceAreas: ["Your City & Surrounding Areas"],
    license: "",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "clean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "shield-check", title: "Ceramic Coating", desc: "Protect your vehicle's paint with a durable, high-gloss ceramic layer.", urgent: false },
    { icon: "sparkles", title: "Paint Correction", desc: "Remove swirls, scratches, and imperfections to restore a flawless, mirror-like finish.", urgent: false },
    { icon: "star", title: "Full Detail Package", desc: "Our comprehensive package cleans and restores your vehicle inside and out.", urgent: false },
    { icon: "home", title: "Interior Detail", desc: "Deep clean and condition every surface inside your car for a fresh, new feel.", urgent: false },
    { icon: "shield-check", title: "Paint Protection Film (PPF)", desc: "Apply a clear, self-healing film to shield your paint from rock chips and scratches.", urgent: false },
    { icon: "wrench", title: "Window Tinting", desc: "Enhance privacy, reduce heat, and protect your interior with professional window tinting.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah K.", location: "Local Client", stars: 5, text: "I was honestly embarrassed by the state of my minivan after years of kids and road trips. J&G came right to my office, and when I saw it after they were done... wow. It looked better than when I first bought it. The interior detail was magic; they got out stains I thought were permanent. Absolutely worth every penny for that new car feeling again." },
    { name: "Mark T.", location: "Local Client", stars: 5, text: "I'm meticulous about my sports car, so I was hesitant to trust a mobile service with paint correction. Prime Mobile Detailing exceeded all my expectations. The level of detail was incredible, removing all the fine swirls. The ceramic coating they applied makes the blue paint pop like never before. It's a true showroom finish, and they did it all in my garage." },
    { name: "Emily R.", location: "Local Client", stars: 5, text: "Booking was so easy, and they showed up right on time. I got the full detail package for my sedan before selling it. I'm convinced their work is why I got multiple offers over my asking price within a day. The car looked absolutely pristine. The team was professional, courteous, and clearly passionate about what they do. Highly, highly recommend." }
  ],

  trustBadges: [
    "Mobile Service To You", "Certified Detailing Technicians", "Ceramic Coating Specialists", "Guaranteed Showroom Finish", "Premium Products Only", "Licensed & Insured"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Cars Detailed", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "truck",       title: "We Come To You",          desc: "Get professional detailing at your home or office with our fully equipped mobile units." },
    { icon: "dollar-sign", title: "Transparent Pricing",        desc: "No hidden fees. We provide clear, upfront quotes for all our detailing packages." },
    { icon: "award",       title: "Certified Technicians",         desc: "Our team holds certifications in paint correction and ceramic coating application." },
    { icon: "thumbs-up",   title: "Showroom Finish Guarantee", desc: "We're not satisfied until your vehicle looks absolutely stunning, guaranteed." },
    { icon: "sparkles",       title: "Premium Products",     desc: "We use only high-end, industry-proven products to ensure a lasting, quality finish." },
    { icon: "shield-check",       title: "Coating Specialists",         desc: "We are experts in applying long-lasting ceramic coatings for ultimate paint protection." }
  ],

  formServiceOptions: ["Ceramic Coating", "Paint Correction", "Full Detail Package", "Interior Detail", "Paint Protection Film (PPF)", "Window Tinting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges