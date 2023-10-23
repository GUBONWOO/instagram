'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import React from 'react';
import { PropagateLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-md shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-auto'>
      {isLoading ? (
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