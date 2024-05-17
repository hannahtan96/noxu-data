import { SmileTwoTone } from '@ant-design/icons';
import React from 'react';

export default function Header() {
  return (
    <div className="px-24 py-8 font-inter text-16 font-400 leading-24 text-left flex items-center">
      <SmileTwoTone className="mr-4" />
      <span>List your top 10 accounts</span>
    </div>
  );
};


