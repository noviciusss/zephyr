'use client';

import React from 'react';

import Experience from '@/CW/ProfileRightSideBar/experienceProfile';
import ProfileCard from '@/CW/ProfileRightSideBar/userDetails';
import FollowedTopics from '@/CW/ProfileRightSideBar/userFollowedTopics';
import InterestedCommunities from '@/CW/ProfileRightSideBar/userIntrestedCommunities';

// Temporary static data
const tempData = {
  userDetails: {
    name: 'Parazeeknova',
    role: 'Pesky Corp CEO',
    avatar: '/useriii.jpg',
    followers: 1234,
    following: 567,
    aura: 69,
    bio: 'Experienced Programmer with a strong background in Peskyness, programming and designing.',
    socialMedia: [
      { platform: 'Twitter', username: '@hashcodes_' },
      { platform: 'Instagram', username: '@hashcodes' },
      { platform: 'GitHub', username: 'parazeeknova' },
      { platform: 'Reddit', username: 'u/parazeeknova' },
    ],
  },
  experience: [
    {
      company: 'PeskyCorp',
      role: 'CEO',
      period: 'Oct 2020 - Present',
      location: 'Github',
      logo: '/placeholderi.jpg',
    },
    {
      company: 'Facebook',
      role: 'Senior UX Designer',
      period: 'Jun 2018 - Sep 2020',
      location: 'Poland',
      logo: '/placeholderii.jpg',
    },
    {
      company: 'Sketch',
      role: 'Interface Designer',
      period: 'May 2015 - Jun 2018',
      location: 'Freelance',
      logo: '/placeholderiii.jpg',
    },
  ],
  followedTopics: [
    'UX Design',
    'UI Trends',
    'Accessibility',
    'Mobile UX',
    'Design Systems',
    'User Research',
    'Interaction Design',
    'Prototyping',
    'Visual Design',
    'Information Architecture',
  ],
  interestedCommunities: [
    'UX/UI Designers',
    'Tech Innovators',
    'Accessibility Advocates',
    'Frontend Developers',
    'Product Managers',
  ],
};

interface RightSidebarProps {
  isDarkMode: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isDarkMode }) => (
  <aside
    className={`flex w-96 flex-col overflow-auto p-6 pt-0 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}
  >
    <div className="space-y-12">
      <ProfileCard data={tempData.userDetails} isDarkMode={isDarkMode} />
      <Experience data={tempData.experience} isDarkMode={isDarkMode} />
    </div>
    <div className="space-y-5 pt-5">
      <FollowedTopics topics={tempData.followedTopics} isDarkMode={isDarkMode} />
      <InterestedCommunities communities={tempData.interestedCommunities} isDarkMode={isDarkMode} />
    </div>
  </aside>
);

export default RightSidebar;
