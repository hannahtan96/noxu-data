import { CommentOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import React from 'react';
import Buttons from './Buttons';

export default function Footer() {

  const descriptions = [
    'Suggest question one',
    'Suggest question two',
    'Suggest question three',
  ]

  return (
    <div className="px-24 py-8 flex flex-col gap-4 border-t border-gray-200">
      <Buttons descriptions={descriptions} />
      <div className="flex flex-row gap-4">
        <Input
          addonBefore={
            <div className="flex gap-2 items-center">
              <CommentOutlined />
              <span>Chat</span>
            </div>
          }
          suffix={<SendOutlined />}
          placeholder="Start a new chat"
        />
        <Button danger>End Chat</Button>
      </div>
    </div>
  );
};

