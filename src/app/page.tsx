'use client';
import { useEffect, useState } from 'react';

type Infobox = { title: string; content: string };

function parseInfoboxes(text: string): Infobox[] {
  // Split by double newlines, then split each block into title and content
  return text
    .split(/\r?\n\r?\n/)
    .map(block => {
      const [title, ...rest] = block.split(/\r?\n/);
      return title && rest.length > 0
        ? { title: title.trim(), content: rest.join('\n').trim() }
        : null;
    })
    .filter(Boolean) as Infobox[];
}

export default function Home() {
  const [infoboxes, setInfoboxes] = useState<Infobox[]>([]);

  useEffect(() => {
    fetch('infobox/info.txt')
      .then(res => res.ok ? res.text() : '')
      .then(text => {
        if (text.trim()) {
          setInfoboxes(parseInfoboxes(text));
        }
      });
  }, []);

  return (
    <div className="space-y-8">
      <img src="img/logo.png" alt="" className="mx-auto w-1/2 2xl:w-1/4 mt-8" />
      <div className="w-fit mx-auto">
        <p className="text-4xl md:text-6xl text-center font-bold tracking-wide leading-relaxed">
          <span className="text-[#f39535]">Wir geben Halt und Herz</span><br/>
          <span className="text-[#52b155]">für starke Kinder</span><br />
          <span className="text-[#00b0e2]">mit leuchtender Fantasie!</span>
        </p>
      </div>
      {infoboxes.length > 0 && (
        <div className="space-y-4">
          {infoboxes.map((box, idx) => (
            <div key={box.title + idx} className="card-gradient rounded-md p-4 border-0 border-t-0 border-l-0 mx-4">
              <h3 className="font-bold mb-2 text-white">{box.title}</h3>
              <p className="whitespace-pre-line text-white">{box.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}