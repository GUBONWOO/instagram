'use client';

import Link from 'next/link';
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';
import useMe from '@/hooks/me';

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-auto relative z-0'>
      {loading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        (!users || users.length === 0) && <p>{`you don't have following`}</p>
      )}
      {users && users?.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className='flex flex-col items-center w-20'
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p className='w-full text-sm text-center  text-ellipsis overflow-auto'>
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
