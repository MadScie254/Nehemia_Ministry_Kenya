
import React from 'react';
import { NavLinkItem, SocialLink, Ministry, Testimonial, Sermon, EventItem, GalleryImage, BlogPost, FAQItem } from './types';

export const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Events', path: '/events' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Prayer Wall', path: '/prayer-wall' },
  { label: 'Give', path: '/give' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', icon: <i className="fab fa-facebook-f"></i>, url: 'https://facebook.com/nehemiaministry' },
  { name: 'Twitter', icon: <i className="fab fa-twitter"></i>, url: 'https://twitter.com/nehemiaministry' },
  { name: 'YouTube', icon: <i className="fab fa-youtube"></i>, url: 'https://youtube.com/nehemiaministry' },
  { name: 'Instagram', icon: <i className="fab fa-instagram"></i>, url: 'https://instagram.com/nehemiaministry' },
];

export const MINISTRIES_DATA: Ministry[] = [
  { 
    id: 'hospital', 
    name: 'Kingdom Faith-Based Hospital', 
    description: 'Providing compassionate healthcare services rooted in faith.',
    longDescription: 'The Kingdom Faith-Based Hospital is a cornerstone of our ministry, offering quality medical care to the community. We believe in holistic healing, addressing both physical and spiritual needs. Our dedicated staff provides a range of services from general consultations to specialized treatments.',
    image: 'https://picsum.photos/seed/hospital/600/400', // Placeholder for asset/hospital.jpg
    ctaLink: '/ministries#hospital'
  },
  { 
    id: 'matco', 
    name: 'Matco Training Institute (Malaha)', 
    description: 'Empowering individuals with vocational skills and biblical training.',
    longDescription: 'Matco Training Institute in Malaha equips students with practical vocational skills and strong biblical foundations. We offer courses in tailoring, carpentry, computer studies, and more, preparing individuals for sustainable livelihoods and impactful ministry.',
    image: 'https://picsum.photos/seed/matco/600/400', // Placeholder for asset/matco.jpg
    ctaLink: '/ministries#matco'
  },
  { 
    id: 'orphanage', 
    name: 'New Promise Orphanage (Lwandeti)', 
    description: 'Nurturing and supporting orphaned children in a loving environment.',
    longDescription: 'New Promise Orphanage in Lwandeti provides a safe, loving, and Christ-centered home for orphaned and vulnerable children. We focus on their education, health, and spiritual development, aiming to give them hope and a bright future.',
    image: 'https://picsum.photos/seed/orphanage/600/400', // Placeholder for asset/orphanage.jpg
    ctaLink: '/ministries#orphanage'
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', quote: "This ministry has been a true blessing to my family. The teachings are profound and life-changing.", author: "Grace M.", event: "Sunday Service" },
  { id: '2', quote: "I found hope and healing through the prayer sessions. God is truly working here.", author: "John K.", event: "Healing Crusade" },
  { id: '3', quote: "The community support is incredible. I've grown so much in my faith since joining.", author: "Esther A.", event: "Small Group Fellowship" },
];

export const SERMONS_DATA: Sermon[] = [
  { id: '1', title: 'The Power of Faith', speaker: 'Bishop David Walukhu', date: '2024-07-14', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', tags: ['faith', 'power'], transcriptUrl: '#' },
  { id: '2', title: 'Living a Life of Purpose', speaker: 'Reverend Selina Walukhu', date: '2024-07-07', videoUrl: 'https://www.youtube.com/embed/rokUy7pGNEo', tags: ['purpose', 'christian living'] },
  { id: '3', title: 'Grace Greater Than Our Sin', speaker: 'Guest Pastor', date: '2024-06-30', videoUrl: 'https://www.youtube.com/embed/6_b7RDuLwcI', tags: ['grace', 'forgiveness'] },
];

export const EVENTS_DATA: EventItem[] = [
  { id: '1', title: 'Annual Youth Conference', date: '2024-08-15', time: '9:00 AM - 5:00 PM', location: 'Main Church, Mukhonje', description: 'A dynamic conference for youth focusing on spiritual growth and leadership.', image: 'https://picsum.photos/seed/event-youth/600/400', isUpcoming: true },
  { id: '2', title: 'Women of Faith Seminar', date: '2024-09-20', time: '10:00 AM - 3:00 PM', location: 'Matco Training Institute', description: 'Empowering women through word and fellowship.', image: 'https://picsum.photos/seed/event-women/600/400', isUpcoming: true },
  { id: '3', title: 'Community Outreach Day', date: '2024-05-10', time: 'All Day', location: 'Lwandeti Village', description: 'Serving the local community with food, clothes, and prayer.', image: 'https://picsum.photos/seed/event-outreach/600/400', isUpcoming: false },
];

export const GALLERY_IMAGES_DATA: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/seed/gallery1/600/400', alt: 'Church congregation singing', caption: 'Joyful worship session' },
  { id: '2', src: 'https://picsum.photos/seed/gallery2/600/400', alt: 'Community outreach event', caption: 'Serving the community with love' },
  { id: '3', src: 'https://picsum.photos/seed/gallery3/600/400', alt: 'Children at New Promise Orphanage', caption: 'Our precious children' },
  { id: '4', src: 'https://picsum.photos/seed/gallery4/600/400', alt: 'Bishop David preaching', caption: 'Word of God shared' },
  { id: '5', src: 'https://picsum.photos/seed/gallery5/600/400', alt: 'Matco students learning', caption: 'Empowering through education' },
  { id: '6', src: 'https://picsum.photos/seed/gallery6/600/400', alt: 'Baptism ceremony', caption: 'New beginnings in Christ' },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  { id: '1', title: 'The Importance of Daily Devotion', author: 'Bishop David Walukhu', date: '2024-07-10', excerpt: 'Discover why starting your day with God is crucial for spiritual strength...', content: 'Full content here...', category: 'Faith', image: 'https://picsum.photos/seed/blog1/600/300' },
  { id: '2', title: 'My Journey to Founding Nehemia Ministry', author: 'Reverend Selina Walukhu', date: '2024-07-05', excerpt: 'A personal testimony of faith, challenges, and God`s faithfulness...', content: 'Full content here...', category: 'Testimony', image: 'https://picsum.photos/seed/blog2/600/300' },
  { id: '3', title: 'Principles of Godly Leadership', author: 'Guest Writer', date: '2024-06-28', excerpt: 'Exploring key characteristics and responsibilities of leaders in the church...', content: 'Full content here...', category: 'Leadership', image: 'https://picsum.photos/seed/blog3/600/300' },
];

export const FAQ_DATA: FAQItem[] = [
  { question: "What are your service times?", answer: "Our main Sunday service is at 10:00 AM. We also have midweek services on Wednesdays at 6:00 PM." },
  { question: "How can I get involved in a ministry?", answer: "We'd love for you to join us! Please visit our Ministries page for an overview or contact the church office for more details on specific opportunities." },
  { question: "Do you offer child care during services?", answer: "Yes, we have a dedicated children's ministry program during our Sunday services for various age groups." },
  { question: "How can I submit a prayer request?", answer: "You can submit a prayer request through our Prayer Wall page on this website, or speak to one of our pastors." }
];

export const CONTACT_DETAILS = {
  phone: "+254 7XX XXX XXX",
  email: "info@nehemiaministry.or.ke",
  address: "P.O. Box XXX, Mukhonje, Kakamega County, Kenya",
  whatsapp: "https://wa.me/2547XXXXXXXX" // Replace with actual number
};

export const FOUNDERS_INFO = {
  name: "Bishop David Walukhu & Reverend Selina Walukhu",
  bio: "Bishop David Walukhu and Reverend Selina Walukhu are the visionary founders of Nehemia Ministry Kenya. With a deep passion for souls and a commitment to God's work, they established the ministry in 2006 in Mukhonje, Kakamega County. Their leadership has seen the ministry grow from a small fellowship to a multi-faceted organization impacting thousands of lives through church planting, education, healthcare, and community development. Bishop David is known for his powerful teaching and apostolic calling, while Reverend Selina is recognized for her compassionate pastoral care and dedication to women's and children's ministries. Together, they champion a message of hope, healing, and transformation through the Gospel of Jesus Christ.",
  image: "https://picsum.photos/seed/founders/600/400" // Placeholder for asset/founders.jpg
};

export const CHURCH_HISTORY_TIMELINE = [
  { year: "2006", event: "Nehemia Ministry founded in Mukhonje, Kakamega County by Bishop David and Rev. Selina Walukhu." },
  { year: "2008", event: "First church building constructed." },
  { year: "2010", event: "Launch of Matco Training Institute in Malaha." },
  { year: "2012", event: "Establishment of New Promise Orphanage in Lwandeti." },
  { year: "2015", event: "Kingdom Faith-Based Hospital opens its doors." },
  { year: "2018", event: "Expansion to over 10 branch churches across Kenya." },
  { year: "Present", event: "Continuing to grow and serve communities with the love of Christ." }
];

export const CHURCH_MISSION_VISION_DOCTRINE = {
  mission: "To preach the Gospel of Jesus Christ, make disciples of all nations, demonstrate God's love through compassionate service, and equip believers for impactful ministry.",
  vision: "To be a beacon of hope and transformation, raising a generation of faithful Christians who will impact their communities and the world for Christ, establishing God's Kingdom on earth.",
  doctrine: [
    "The Bible as the inspired, infallible Word of God.",
    "The Trinity: God the Father, God the Son (Jesus Christ), and God the Holy Spirit.",
    "The deity, virgin birth, sinless life, atoning death, resurrection, and ascension of Jesus Christ.",
    "Salvation by grace through faith in Jesus Christ.",
    "The indwelling and work of the Holy Spirit, including spiritual gifts.",
    "The Church as the body of Christ.",
    "The sacraments of Water Baptism and Holy Communion.",
    "The second coming of Jesus Christ and the resurrection of the dead.",
  ]
};

