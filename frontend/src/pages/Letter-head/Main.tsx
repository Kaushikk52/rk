import * as React from 'react';
import LetterheadEditor from './LetterheadEditor';

export default function LetterHead() {
  return (
    <div style={{ 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}>
        <LetterheadEditor />
      </div>
  )
}

