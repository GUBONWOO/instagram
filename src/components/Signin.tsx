'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import ColorBotton from './ui/ColorBotton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorBotton
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size='big'
        />
      ))}
    </>
  );
}
