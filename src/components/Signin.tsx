'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import ColorBotton from './ui/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};
export default function Signin({ providers, callbackUrl }: Props) {
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
