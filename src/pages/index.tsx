import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex justify-center w-screen h-screen items-center'>
      <p className='text-[8rem]  text-gray-50'> framer motion</p>
    </div>
  );
}
