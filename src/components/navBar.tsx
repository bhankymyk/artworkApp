'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavList = [
  {
    name: 'Art',
    link: '#',
  },
  {
    name: 'About',
    link: '#',
  },
  {
    name: 'Pricing',
    link: '#',
  },
  {
    name: 'Contact Us',
    link: '#',
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray-400">
        <nav className="flex flex-wrap items-center justify-between p-3">
          <div className="mr-6 flex flex-shrink-0 items-center text-white lg:mr-[15rem]">
            <Link href="/">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                className=" mr-2"
                alt="Logo"
              />
            </Link>
            <h1 className="text-2xl font-bold text-gray-200">Artify</h1>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black-500 hover:text-black-400 flex items-center rounded bg-white px-3 py-2"
            ></button>
          </div>
          <div
            className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${isOpen ? 'block' : 'hidden'}`}
          >
            <ul className="text-sm lg:flex lg:flex-grow">
              {NavList.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="mr-10 mt-4 block text-base font-bold  text-white lg:mt-0 lg:inline-block "
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="">
              <Image
                src="/appStore.png"
                width={100}
                height={120}
                className=" mr-2"
                alt="Logo"
              />
            </div>
            <div className="">
              <Image
                src="/googlePlay.png"
                width={100}
                height={120}
                className=" mr-2"
                alt="Logo"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
