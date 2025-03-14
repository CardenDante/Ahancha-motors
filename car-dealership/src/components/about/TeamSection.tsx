'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Joyce Wegesa",
      position: "Founder & CEO",
      bio: "Joyce founded Ahancha Motors in 2002 with a vision to create a dealership that prioritizes customer relationships over sales quotas. With over 30 years of experience in the automotive industry, his leadership has established Ahancha Motors as a trusted name in the community.",
      image: "/images/team/joy.jpg",
      email: "joyce@ahancha.com",
      phone: "+2541 1483-3381",
      linkedin: "#"
    },
    {
      name: "Daniel Madaraka",
      position: "Sales Director",
      bio: "Daniel leads our sales team with a customer-first approach. Her background in customer service and 15 years in automotive sales ensures that every client receives personalized attention and finds the perfect vehicle to match their needs.",
      image: "/images/team/dante.jpg",
      email: "cardendante@gmail.com",
      phone: "+2547 1117-5616",
      linkedin: "#"
    },
    {
      name: "Chacha Chacha",
      position: "Service Manager",
      bio: "Chacha manages our service department with precision and care. A certified master technician with experience across multiple brands, he ensures that every vehicle receives the highest quality maintenance and repairs.",
      image: "/images/team/alexa.jpg",
      email: "calex2607@gmail.com",
      phone: "+2547 9628-0700",
      linkedin: "#"
    }
  ];

  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  return (
    <section className="py-12 my-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-red-600/10 rounded-full text-red-600 font-medium text-sm mb-4">
            Meet Our Team
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The People Behind Ahancha Motors</h2>
          <p className="text-lg text-gray-700">
            Our dedicated team of professionals is committed to providing you with an exceptional 
            automotive experience. Get to know the people who make Ahancha Motors special.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveTeamMember(index)}
            >
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/team/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 line-clamp-2">{member.bio}</p>
                <button className="mt-3 text-sm font-medium text-red-600 hover:text-red-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for team member details */}
        {activeTeamMember !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative h-64 md:h-full bg-gray-200 rounded-lg overflow-hidden">
                      <Image 
                        src={teamMembers[activeTeamMember].image} 
                        alt={teamMembers[activeTeamMember].name} 
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/team/placeholder.jpg';
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{teamMembers[activeTeamMember].name}</h3>
                        <p className="text-red-600 font-medium">{teamMembers[activeTeamMember].position}</p>
                      </div>
                      <button 
                        onClick={() => setActiveTeamMember(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="my-4 space-y-4">
                      <p className="text-gray-700">{teamMembers[activeTeamMember].bio}</p>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-gray-500 mr-2" />
                            <a href={`mailto:${teamMembers[activeTeamMember].email}`} className="text-red-600 hover:underline">
                              {teamMembers[activeTeamMember].email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-2" />
                            <a href={`tel:${teamMembers[activeTeamMember].phone}`} className="text-gray-700">
                              {teamMembers[activeTeamMember].phone}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Linkedin className="h-5 w-5 text-gray-500 mr-2" />
                            <a href={teamMembers[activeTeamMember].linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                              LinkedIn Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button 
                        onClick={() => setActiveTeamMember(null)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;