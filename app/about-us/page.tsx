"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  Search,
  Download,
  Building2,
  Users,
  Calendar,
  Award,
  User,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Timeline Data
const timelineData = [
  {
    year: "2003",
    title: "We started here",
    description: "Founded with a vision to revolutionize corporate gifting.",
    position: "left",
  },
  {
    year: "2005",
    title: "12 Employees & 25 Pharma Companies",
    description: "Expanded our team and client base significantly.",
    position: "right",
  },
  {
    year: "2007",
    title: "New Office, New Possibilities",
    description:
      "We upgraded ourselves to a new office a new world of possibilities.",
    position: "left",
  },
  {
    year: "2010",
    title: "Team Expansion",
    description:
      "We expanded our team to 30+ people to cater our customers rightly.",
    position: "right",
  },
  {
    year: "2015",
    title: "Customer Centric Award",
    description: "Received 1st Award for Customer Centric Business Partner.",
    position: "left",
  },
  {
    year: "2016",
    title: "Major Expansion",
    description:
      "Won Most Customer Centric Business Award. Expanded to a large corporate office in Bandra.",
    position: "right",
  },
  {
    year: "2017",
    title: "Digital Transformation",
    description:
      "Our team became bigger with 50+ employees, we launched BigImpex Mobile & Web app and became national distributors for International Brands.",
    position: "left",
  },
  {
    year: "2018",
    title: "Brand Launch",
    description: "Won Best Vendor Award. Launched brand GROB for B2C.",
    position: "right",
  },
  {
    year: "2019",
    title: "B2C Focus",
    description:
      "Crossed 100+ employees count. Opened showroom in Mumbai focusing on B2C sales.",
    position: "left",
  },
  {
    year: "2022",
    title: "Brand Portfolio",
    description:
      "BigImpex has 4 Brands under it, GROB, Self-Gard, Crafted by BIG.",
    position: "right",
  },
  {
    year: "2024",
    title: "100 Crore Milestone",
    description: "Heading towards 100 crores sales turnover.",
    position: "left",
  },
];

// Statistics Data
const stats = [
  {
    icon: <Building2 className="w-8 h-8 text-[var(--clr-primary)]" />,
    number: "10,000+",
    label: "Products",
  },
  {
    icon: <Users className="w-8 h-8 text-[var(--clr-primary)]" />,
    number: "300+",
    label: "Corporate Customers",
  },
  {
    icon: <Calendar className="w-8 h-8 text-[var(--clr-primary)]" />,
    number: "1,000+",
    label: "Corporate Orders Annually",
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--clr-primary)]" />,
    number: "100+",
    label: "Experienced Employees",
  },
];

// Founders Data
const founders = [
  {
    name: "Shri Vishamber Khatri",
    image:
      "https://www.bigimpex.com/wp-content/uploads/2024/09/Shri-Vishamber-Khatri.jpg",
  },
  {
    name: "Late Shri Bansidhar Khatri",
    image:
      "https://www.bigimpex.com/wp-content/uploads/2024/09/Late-Shri-Bansidhar-Khatri.jpg",
  },
  {
    name: "Mr. Rishi V. Khatri",
    image:
      "https://www.bigimpex.com/wp-content/uploads/2024/09/Mr.-Rishi-V.-Khatri.jpg",
  },
  {
    name: "Mr. Gaurav B. Khatri",
    image:
      "https://www.bigimpex.com/wp-content/uploads/2024/09/Mr.-Gaurav-B.-Khatri.jpg",
  },
];

export default function AboutUs() {
  // State to track visible timeline items
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of item is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully in view
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Aligned at Bottom */}
      <section className="bg-[#1a1a1a] text-white relative min-h-[200px] xl:min-h-[280px] flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 xl:pb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About Us</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <span>»</span>
            <span className="text-[var(--clr-primary)]">About Us</span>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Leading the world of corporate Gifting, BigImpex is the only name
            you need to remember when you are in need of corporate gifts.
            Founded in 2003, BigImpex is a well established organization
            catering to top corporates such as Sun Pharmaceuticals Ltd., Dr.
            Reddy's Ltd., Abbott India, Torrent Pharmaceuticals Ltd., HDFC Bank
            and many more.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            To name a few operating from their plush office of 8000 sq. feet
            area based in Bandra, a prime suburb in Mumbai and servicing their
            customers from their warehouse spread over 30,000 sq feet in Vasai
            (Thane), each and every member of the 100+ team at BIGIMPEX strives
            to provide their customer with the best products and top service.
          </p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">
            Our Journey
          </h2>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[var(--clr-secondary)]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const isVisible = visibleItems.has(index);

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    data-index={index}
                    className={`relative flex items-center ${item.position === "left" ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-5/12 ${item.position === "left" ? "text-right pr-8" : "text-left pl-8"}`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="w-2/12 flex justify-center relative">
                      <div
                        className={`w-10 h-10 rounded-full border-4 border-white flex items-center justify-center z-10 transition-all duration-500 ${
                          isVisible
                            ? "bg-red-100 scale-110"
                            : "bg-gray-100 scale-100"
                        }`}
                      >
                        <Calendar
                          className={`w-5 h-5 transition-all duration-500 ${
                            isVisible ? "text-[var(--clr-primary)]" : "text-gray-400"
                          }`}
                        />
                      </div>
                      {/* Year Label */}
                      <div
                        className={`absolute top-12 ${item.position === "left" ? "left-1/2 ml-2" : "right-1/2 mr-2"} font-bold text-sm transition-colors duration-500 ${
                          isVisible ? "text-[var(--clr-primary)]" : "text-gray-400"
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Company Statistics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Founders
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-gray-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <h3 className="font-medium text-gray-800 text-sm">
                  {founder.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
