import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Prime Mobile Detailing J&G",
    tagline: "Showroom shine delivered to you.",
    phone: "(555) 555-5555",
    phoneHref: "tel:+15555555555",
    email: "hello@primemobiledetailing.com",
    address: "",
    city: "",
    serviceAreas: ["Your Location"],
    license: "",
    since: "2018",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "clean",
    niche: "auto-detailing",
  },

  services: [
    { icon: "shield-check", title: "Ceramic Coating", desc: "Protect your vehicle's paint with a durable, glossy, hydrophobic layer.", urgent: false },
    { icon: "sparkles", title: "Paint Correction", desc: "Remove swirls, scratches, and imperfections for a flawless finish.", urgent: false },
    { icon: "star", title: "Full Detail Package", desc: "Comprehensive interior and exterior cleaning for a like-new vehicle.", urgent: false },
    { icon: "truck", title: "Interior Detail", desc: "Deep clean and condition every surface inside your car.", urgent: false },
    { icon: "shield-check", title: "Paint Protection Film (PPF)", desc: "Apply a clear, self-healing film to guard against rock chips and damage.", urgent: false },
    { icon: "scissors", title: "Window Tinting", desc: "Enhance privacy, reduce heat, and protect your interior from UV rays.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah K.", location: "Local Customer", stars: 5, text: "I was absolutely blown away by the ceramic coating from Prime Mobile Detailing. My 5-year-old black SUV looks better than the day I bought it. The gloss is insane, and water just beads off. They came right to my office, which was incredibly convenient. Worth every penny for this level of quality and professionalism." },
    { name: "Mike R.", location: "Local Customer", stars: 5, text: "My car's interior was a disaster thanks to my two kids and a dog. I honestly didn't think it could be saved. The team at Prime Mobile Detailing worked magic. Every stain is gone, the leather is conditioned, and it smells brand new. I feel like I'm driving a luxury car again. So impressed!" },
    { name: "Jessica L.", location: "Local Customer", stars: 5, text: "Booking was easy, and the communication was excellent. They arrived at my home on time and were so thorough with the full detail package. The paint correction they did removed years of swirl marks. It's amazing what they can do right in your driveway. Highly recommend their service for anyone who values their time and their car." }
  ],

  trustBadges: [
    "Licensed & Insured", "Mobile Service To You", "Premium Quality Products", "Satisfaction Guaranteed", "5-Star Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Cars Detailed", suffix: "+", decimals: 0 },
    { value: 5, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award",       title: "Certified Technicians",  desc: "Our detailers are trained and certified in the latest techniques." },
    { icon: "shield-check",title: "Coating Specialists",    desc: "We specialize in ceramic coatings for ultimate paint protection." },
    { icon: "truck",       title: "We Come To You",         desc: "Enjoy our premium detailing services at your home or office." },
    { icon: "star",        title: "Showroom Finish",        desc: "We guarantee a flawless, better-than-new look for your vehicle." },
    { icon: "sparkles",    title: "Premium Products",       desc: "We use only high-end, tested products for the best results." },
    { icon: "thumbs-up",   title: "Transparent Results",    desc: "We document our process so you can see the stunning transformation." }
  ],

  formServiceOptions: ["Ceramic Coating", "Paint Correction", "Full Detail Package", "Interior Detail", "Paint Protection Film (PPF)", "Window Tinting"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges