import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Event {
  id: number;
  day: number;
  name: string;
  description: string;
}

const events: Event[] = [
  // Day 1
  {
    id: 1,
    day: 1,
    name: 'Opening Ceremony & Keynote',
    description: 'Join us for an inspiring opening ceremony featuring industry leaders and tech pioneers.',
  },
  {
    id: 2,
    day: 1,
    name: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop exploring the latest developments in artificial intelligence and ML algorithms.',
  },
  {
    id: 3,
    day: 1,
    name: 'Hackathon Kickoff',
    description: 'Launch of our 48-hour hackathon with exciting challenges and amazing prizes.',
  },
  // Day 2
  {
    id: 4,
    day: 2,
    name: 'IoT Innovation Panel',
    description: 'Expert panel discussion on the Internet of Things and its impact on modern society.',
  },
  {
    id: 5,
    day: 2,
    name: 'Robotics Competition',
    description: 'Watch cutting-edge robotics in action as teams compete in various challenges.',
  },
  {
    id: 6,
    day: 2,
    name: 'Tech Startup Showcase',
    description: 'Meet innovative startups and discover groundbreaking technologies shaping the future.',
  },
  // Day 3
  {
    id: 7,
    day: 3,
    name: 'Cybersecurity Summit',
    description: 'Learn about the latest threats and defense strategies in the world of cybersecurity.',
  },
  {
    id: 8,
    day: 3,
    name: 'Hackathon Finale',
    description: 'Final presentations and awards ceremony for our 48-hour hackathon participants.',
  },
  {
    id: 9,
    day: 3,
    name: 'Closing Ceremony',
    description: 'Celebrate three days of innovation with awards, networking, and closing remarks.',
  },
];

function EventCard({ event, index }: { event: Event; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="bg-[#1a1a1a] border border-purple-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Event Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-purple-900/40 to-purple-600/20 flex items-center justify-center">
        <ImageWithFallback
          src={`https://source.unsplash.com/800x600/?technology,${event.name.split(' ')[0]}`}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full mb-3">
          <span className="text-purple-300 text-sm">Day {event.day}</span>
        </div>
        <h3 className="text-white text-xl mb-2">{event.name}</h3>
        <p className="text-white/70">{event.description}</p>
      </div>
    </motion.div>
  );
}

export function TechFest() {
  const dayGroups = [
    events.filter(e => e.day === 1),
    events.filter(e => e.day === 2),
    events.filter(e => e.day === 3),
  ];

  return (
    <section id="ieee-techfest" className="bg-[#0a0a0a] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-white text-4xl lg:text-5xl mb-4 font-bold">
            IEEE Techithon 2026
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto">
            Three days of cutting-edge technology, innovation, and collaboration
          </p>
        </div>

        {/* Events by Day */}
        <div className="space-y-16">
          {dayGroups.map((dayEvents, dayIndex) => (
            <div key={dayIndex}>
              <div className="mb-8">
                <h3 className="text-purple-400 text-3xl lg:text-4xl mb-2">
                  Day {dayIndex + 1}
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {dayEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
