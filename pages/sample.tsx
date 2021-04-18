import React from 'react';
import Link from 'next/link';
import Sample from '@/components/Sample';

/**
 * Using lower case for lower case URL. This is the
 * sample page.
 */
const sample = () => (
  <div>
    <h1>Sample Page</h1>
    <Sample />
    <Link href="/">Back to home</Link>
  </div>
);

export default sample;
