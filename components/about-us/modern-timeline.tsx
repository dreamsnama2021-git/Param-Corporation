'use client'

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { CheckCircle, Clock, Circle } from "lucide-react"

export interface TimelineItem {
  title: string
  description: string
  date?: string
  image?: string
  status?: "completed" | "current" | "upcoming"
  category?: string
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const getStatusConfig = (status: TimelineItem["status"]) => {
  const configs = {
    completed: {
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-600",
      iconColor: "text-emerald-500"
    },
    current: {
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-600",
      iconColor: "text-blue-500"
    },
    upcoming: {
      badgeBg: "bg-slate-50",
      badgeText: "text-slate-600",
      iconColor: "text-slate-400"
    }
  }
  
  return configs[status || "upcoming"]
}

const getStatusIcon = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full py-8", className)}>
        <p className="text-center text-slate-500">No timeline items to display</p>
      </div>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        {/* Vertical line */}
        <div 
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-[1px] bg-slate-200" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-4 sm:left-6 top-0 w-[1px] bg-[var(--clr-primary)] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ 
            scaleY: 1,
            transition: {
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="space-y-6 relative">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status)
            const IconComponent = getStatusIcon(item.status)
            
            return (
              <motion.div
                key={index}
                className="relative group pl-12 sm:pl-16"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-30px" }}
              >
                {/* Timeline dot/icon */}
                <div className="absolute left-0 top-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center z-10">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <IconComponent className={cn("w-4 h-4 sm:w-5 sm:h-5", config.iconColor)} />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className="group relative flex flex-col gap-3 p-6 overflow-hidden cursor-default transition-colors duration-200 bg-white"
                  style={{ background: "#fff" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
                >
                  {/* Bottom accent */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: "var(--clr-primary)" }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 
                        className="text-lg font-bold mb-1 group-hover:text-[var(--clr-primary)] transition-colors duration-300"
                        style={{ color: "var(--clr-text-dark)" }}
                      >
                        {item.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                        {item.category && (
                          <span className="font-medium text-[var(--clr-primary)]">{item.category}</span>
                        )}
                        {item.category && item.date && (
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        )}
                        {item.date && (
                          <time dateTime={item.date} className="text-slate-400 text-xs tracking-wide">{item.date}</time>
                        )}
                      </div>
                    </div>
                    
                    <Badge 
                      className={cn(
                        "w-fit text-[11px] font-semibold uppercase tracking-wider border-0",
                        config.badgeBg,
                        config.badgeText
                      )}
                    >
                      {item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1) : "Upcoming"}
                    </Badge>
                  </div>

                  <p className="text-[14px] leading-[1.75] text-slate-600">
                    {item.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-2 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", 
                        item.status === "completed" ? "bg-emerald-500" : 
                        item.status === "current" ? "bg-[var(--clr-primary)]" : "bg-slate-300"
                      )}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: item.status === "completed" ? "100%" : 
                               item.status === "current" ? "65%" : "25%"
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// TeamSection Component - Updated to match testimonial styling
import { LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import { Mail } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-20 md:py-28",
          className
        )}
        style={{ background: "#fff" }}
        {...props}
      >
        <div className="ui-container">
          {/* Header - Matching testimonial style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
              style={{ color: "var(--clr-primary)" }}
            >
              <span className="inline-block w-5 h-[1.5px]" style={{ background: "var(--clr-primary)" }} />
              OUR TEAM
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: "var(--clr-text-dark)" }}
            >
              {title}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Team Grid - Styled like testimonial cards */}
          <div className="grid md:grid-cols-3 overflow-hidden rounded-2xl" style={{
            gap: "1.5px",
            background: "rgba(0,147,203,0.12)",
            border: "1.5px solid rgba(0,147,203,0.12)",
          }}>
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex flex-col items-center gap-4 p-8 overflow-hidden cursor-default transition-colors duration-200"
                style={{ background: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f0f9ff")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                {/* Bottom accent */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: "var(--clr-primary)" }}
                />

                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-[var(--clr-primary)] transition-colors duration-300 mb-4">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "var(--clr-text-dark)" }}>
                    {member.name}
                  </h3>
                  <p className="text-[12px] text-slate-500 mb-4 uppercase tracking-wider">
                    {member.designation}
                  </p>

                  {/* Social Links */}
                  {member.socialLinks && member.socialLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-3">
                      {member.socialLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[var(--clr-primary)] hover:bg-blue-50 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Optional CTA */}
          {registerLink && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <a
                href={registerLink}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-colors duration-200"
                style={{ 
                  background: "var(--clr-primary)", 
                  color: "#fff"
                }}
              >
                JOIN OUR TEAM
                <span className="w-4 h-[1px] bg-white/50" />
              </a>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
