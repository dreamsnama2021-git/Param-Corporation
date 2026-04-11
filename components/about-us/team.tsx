
// TeamSection Component - Updated to match testimonial styling
import { cn } from '@/lib/utils';
import { LinkedinLogoIcon, TwitterLogoIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Mail } from "lucide-react";
import React from 'react';

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