import { useState, useEffect } from 'react';

export function useTypingAnimation(text: string, speed: number = 50) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  // Convert string to array of grapheme clusters (handles emojis properly)
  const getGraphemeClusters = (str: string): string[] => {
    if ('Segmenter' in Intl) {
      // Use modern Intl.Segmenter if available (supported in modern browsers)
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(str), segment => segment.segment);
    } else {
      // Fallback: split by characters but preserve emoji sequences
      return [...str];
    }
  };

  useEffect(() => {
    const clusters = getGraphemeClusters(text);
    
    if (index < clusters.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + clusters[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setIndex(0);
  }, [text]);

  return displayText;
}