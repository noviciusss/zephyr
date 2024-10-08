'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface ProfileCardProps {
  isDarkMode: boolean;
  avatarSrc: string;
  username: string;
  profession: string;
  followers: number;
  following: number;
  aura: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  isDarkMode,
  avatarSrc,
  username,
  profession,
  followers,
  following,
  aura,
}) => (
  <Card className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
    <CardContent className="p-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative">
          <div
            className={`h-20 w-20 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden rounded-2xl`}
          >
            <Image
              src={avatarSrc}
              alt="Profile background"
              className="h-full w-full object-cover"
              width={80}
              height={80}
            />
          </div>
          <Avatar
            className={`absolute -bottom-2 -right-2 h-12 w-12 border-4 ${isDarkMode ? 'border-gray-800' : 'border-white'}`}
          >
            <AvatarImage src={avatarSrc} alt={`${username}'s avatar`} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="flex items-center text-lg font-bold">
            <Link href="/profile" className={isDarkMode ? 'text-white' : 'text-gray-900'}>
              {username} <span className="ml-1 text-blue-500">✓</span>
            </Link>
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
            {profession}
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{followers}K</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Followers</p>
        </div>
        <div>
          <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{following}K</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Following</p>
        </div>
        <div>
          <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{aura}</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>Aura</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProfileCard;
