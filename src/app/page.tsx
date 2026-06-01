"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { ShieldCheck, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Tournaments",          id: "#tournaments"},
        {
          name: "Divisions",          id: "#divisions"},
        {
          name: "Stats",          id: "#stats"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/3d-shape-letter-k_23-2150891052.jpg"
      logoAlt="TKD Tournaments Logo"
      brandName="TKD Tournaments"
      button={{
        text: "Admin Login",        href: "#"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "rotated-rays-animated-grid"}}
      title="Elevate Your Taekwondo Tournaments"
      description="Streamline registration, manage events, and engage participants with our powerful platform, built for state and national level competitions."
      tag="Tournament Management"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Explore Tournaments",          href: "#tournaments"},
        {
          text: "Admin Dashboard",          href: "#"},
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/karate-fighters_654080-1330.jpg",          imageAlt: "Taekwondo athletes performing high kick"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/karate-fighters_654080-1926.jpg",          imageAlt: "Taekwondo athlete executing powerful punch"},
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by top academies"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Your Partner in Tournament Excellence"
      description="We provide a secure, fast, and scalable platform for Taekwondo tournament administrators to efficiently manage events from creation to participant registration and data export."
      subdescription="Our system ensures a seamless experience for participants with easy online registration, real-time status updates, and instant receipt generation."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-with-tablet-fixing-servers_482257-86254.jpg"
      imageAlt="Team collaborating on tournament management software"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Admin Tournament Management",          description: "Create, manage, publish, and track all aspects of your tournaments, including dates, venues, deadlines, and fees.",          imageSrc: "http://img.b2bpic.net/free-photo/register-now-document-filling-form-concept_53876-125596.jpg",          imageAlt: "Tournament management dashboard"},
        {
          title: "Secure Access Codes",          description: "Generate, activate, deactivate, and track unique access codes for controlled tournament viewing and registration.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smartphone-atm_23-2148264023.jpg",          imageAlt: "Secure access code system"},
        {
          title: "Effortless Participant Registration",          description: "Participants can easily register online with comprehensive data collection and receive instant confirmation and receipts.",          imageSrc: "http://img.b2bpic.net/free-photo/my-blog-has-got-lot-followers_329181-11539.jpg",          imageAlt: "Online registration form"},
        {
          title: "Automated Categorization",          description: "The system intelligently categorizes participants by age, belt, gender, weight, and event type for streamlined management.",          imageSrc: "http://img.b2bpic.net/free-photo/football-trainer-teaching-his-pupils_23-2149707976.jpg",          imageAlt: "Participant categorization"},
        {
          title: "Exportable Data & Reports",          description: "Access and export all registration data, competitor lists, and category-wise participant lists in Excel and CSV formats.",          imageSrc: "http://img.b2bpic.net/free-photo/business-person-looking-finance-graphs_23-2150461349.jpg",          imageAlt: "Data export to Excel and CSV"},
      ]}
      title="Powerful Tools for Every Role"
      description="From secure access management to detailed participant categorization, our platform empowers administrators and simplifies the registration process for competitors."
      tag="Features"
    />
  </div>

  <div id="tournaments" data-section="tournaments">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "tournament-1",          name: "National Taekwondo Championship 2024",          price: "$75.00",          variant: "August 15-17, 2024 - National Sports Arena",          imageSrc: "http://img.b2bpic.net/free-photo/young-men-sportswear-demonstrating-wrestling-combat_23-2149749698.jpg",          imageAlt: "National Taekwondo Championship poster"},
        {
          id: "tournament-2",          name: "State Poomsae Challenge",          price: "$60.00",          variant: "September 10, 2024 - City Convention Center",          imageSrc: "http://img.b2bpic.net/free-photo/karate-fighters-tatami-fighting-championship_654080-1914.jpg",          imageAlt: "State Poomsae Challenge banner"},
        {
          id: "tournament-3",          name: "Youth Kyorugi Open",          price: "$50.00",          variant: "October 5-6, 2024 - Community Sports Hall",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-asian-people-practicing-taekwondo_23-2150753731.jpg",          imageAlt: "Youth Kyorugi Open poster"},
        {
          id: "tournament-4",          name: "Grand Masters Invitational",          price: "$100.00",          variant: "November 2, 2024 - Elite Martial Arts Center",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-asian-boy-practicing-taekwondo_23-2150753776.jpg",          imageAlt: "Grand Masters Invitational banner"},
        {
          id: "tournament-5",          name: "Inter-Club Taekwondo Tournament",          price: "$45.00",          variant: "November 23, 2024 - Various Club Venues",          imageSrc: "http://img.b2bpic.net/free-photo/people-practicing-taekwondo-gymnasium_23-2150207190.jpg",          imageAlt: "Inter-Club Taekwondo Tournament poster"},
        {
          id: "tournament-6",          name: "Virtual Taekwondo Championship",          price: "$30.00",          variant: "December 7, 2024 - Online Event",          imageSrc: "http://img.b2bpic.net/free-photo/esports-championship-background-3d-illustration_1419-2785.jpg",          imageAlt: "Virtual Taekwondo Championship poster"},
      ]}
      title="Upcoming Taekwondo Competitions"
      description="Browse and register for the latest state and national level Taekwondo tournaments. Find event details, deadlines, and direct registration links."
      tag="Tournaments"
    />
  </div>

  <div id="divisions" data-section="divisions">
      <PricingCardOne
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "poomsae",          badge: "Forms",          badgeIcon: Sparkles,
          price: "$60.00",          subtitle: "Solo & Team Poomsae Competition",          features: [
            "Individual & Pair Forms",            "Creative Poomsae Option",            "All Belt Ranks Included",            "Age-Group Specific Divisions"],
        },
        {
          id: "kyorugi",          badge: "Sparring",          badgeIcon: Sparkles,
          price: "$75.00",          subtitle: "Olympic-Style Sparring",          features: [
            "Weight Category Matching",            "Electronic Scoring System",            "Safety Gear Mandated",            "Experience-Based Brackets"],
        },
        {
          id: "both",          badge: "Best Value",          badgeIcon: Star,
          price: "$110.00",          subtitle: "Poomsae & Kyorugi Combined",          features: [
            "Participate in Both Events",            "Discounted Combined Fee",            "Comprehensive Tournament Experience",            "Qualify for Multiple Medals"],
        },
      ]}
      title="Tournament Registration Categories"
      description="Understand the available divisions, categories, and associated registration fees for Kyorugi and Poomsae events. Choose the perfect fit for your competition."
      tag="Divisions & Fees"
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardSeven
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "200+",          title: "Tournaments Hosted",          items: [
            "State & National Level",            "International Reach",            "Diverse Disciplines"],
        },
        {
          id: "m2",          value: "50K+",          title: "Participants Registered",          items: [
            "Seamless Experience",            "Global Athlete Base",            "Secure Data Handling"],
        },
        {
          id: "m3",          value: "10K+",          title: "Access Codes Issued",          items: [
            "Controlled Access",            "Enhanced Security",            "Trackable Usage"],
        },
      ]}
      title="Tournament Success at a Glance"
      description="Our platform facilitates seamless tournament experiences, empowering organizers and enriching the Taekwondo community."
      tag="Our Impact"
      animationType="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "John Doe",          date: "July 12, 2024",          title: "Effortless Tournament Management",          quote: "This platform transformed how we organize our national championships. The admin tools are intuitive, and participant feedback has been overwhelmingly positive.",          tag: "Tournament Organizer",          avatarSrc: "http://img.b2bpic.net/free-photo/young-volleyball-man-player-court_23-2149492393.jpg",          avatarAlt: "John Doe",          imageSrc: "http://img.b2bpic.net/free-photo/karate-fighters_654080-1940.jpg",          imageAlt: "Large Taekwondo tournament venue"},
        {
          id: "2",          name: "Sarah Chen",          date: "June 28, 2024",          title: "Seamless Registration Experience",          quote: "As a coach, registering my students used to be a headache. Now, it's incredibly smooth. The automated categorization saves so much time!",          tag: "Head Coach, Elite TKD Academy",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-wonderful-lady-holding-hands-crossed-sweatshirt-looking-confident_176474-102970.jpg",          avatarAlt: "Sarah Chen",          imageSrc: "http://img.b2bpic.net/free-photo/boxing-gloves-lying-empty-ring_1303-18929.jpg",          imageAlt: "Modern Taekwondo training academy"},
        {
          id: "3",          name: "Michael Kim",          date: "May 15, 2024",          title: "Professional & Secure",          quote: "Participating in competitions feels more professional with this system. The access codes add a layer of exclusivity, and I always get my receipts instantly.",          tag: "National Athlete",          avatarSrc: "http://img.b2bpic.net/free-photo/karate-player-man-posing-looking_107420-64916.jpg",          avatarAlt: "Michael Kim",          imageSrc: "http://img.b2bpic.net/free-photo/karate-athlete-with-red-belt-medals_23-2148990939.jpg",          imageAlt: "Athlete on podium receiving medal"},
        {
          id: "4",          name: "Emily Rodriguez",          date: "April 30, 2024",          title: "Invaluable Data Insights",          quote: "The ability to export data in multiple formats and filter registrations has been crucial for our post-tournament analysis. A truly comprehensive solution.",          tag: "Club Owner",          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",          avatarAlt: "Emily Rodriguez",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-men-practicing-tai-chi_23-2149960186.jpg",          imageAlt: "Group of Taekwondo students celebrating"},
        {
          id: "5",          name: "David Lee",          date: "March 22, 2024",          title: "A Game-Changer for Event Coordinators",          quote: "From setting up divisions to tracking payments, every feature is designed for efficiency. This platform has significantly reduced our workload.",          tag: "Event Coordinator",          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-volunteer-oganizing-stuff-donation_23-2149134435.jpg",          avatarAlt: "David Lee",          imageSrc: "http://img.b2bpic.net/free-photo/bearded-male-eyeglasses-with-tattoo-his-arm-sits-chair-using-tablet-pc_613910-12174.jpg",          imageAlt: "Administrator viewing participant list on laptop"},
      ]}
      title="What Organizers and Participants Say"
      description="Hear from administrators and athletes who have experienced the efficiency and professionalism of our tournament registration platform."
      tag="Testimonials"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "How do I create and manage a new tournament?",          content: "Administrators can log into their dashboard, navigate to the 'Tournaments' section, and use the 'Create New Tournament' option. Here, you can define all tournament details, including dates, venue, registration deadline, divisions, and fees."},
        {
          id: "faq-2",          title: "What is an access code and how is it used?",          content: "Access codes are unique keys that participants must enter to view and register for specific tournaments. Administrators can create, activate, deactivate, and track these codes from their dashboard, ensuring controlled access to events."},
        {
          id: "faq-3",          title: "How does participant categorization work?",          content: "Upon registration, participants provide details such as age, belt rank, gender, weight category, and event type. Our system automatically processes this information to categorize them into appropriate divisions, simplifying tournament bracket generation."},
        {
          id: "faq-4",          title: "Can I export registration data for offline use?",          content: "Yes, administrators have full control over their data. From the dashboard, you can select specific tournaments or apply filters to generate and export all registration data, participant lists, and competitor lists in both Excel (.xlsx) and CSV formats."},
        {
          id: "faq-5",          title: "What payment methods are supported for registration fees?",          content: "The platform supports tracking of payment status and amounts paid for each participant. Integration with specific payment gateways can be configured based on regional requirements and preferred providers."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Find quick answers to frequently asked questions about tournament registration, platform usage, and administrative controls."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have questions or need support? Contact our team for assistance with tournament setup, participant management, or any other inquiries."
      inputs={[
        {
          name: "fullName",          type: "text",          placeholder: "Your Full Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email Address",          required: true,
        },
        {
          name: "subject",          type: "text",          placeholder: "Subject",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/customer-feedback-review_23-2151952995.jpg"
      imageAlt="Customer support illustration"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Upcoming Tournaments",              href: "#tournaments"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Admin Dashboard",              href: "#"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Support",              href: "#contact"},
            {
              label: "Sales",              href: "#contact"},
          ],
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/3d-shape-letter-k_23-2150891052.jpg"
      logoAlt="TKD Tournaments Logo"
      logoText="TKD Tournaments"
      copyrightText="© 2025 TKD Tournaments. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
