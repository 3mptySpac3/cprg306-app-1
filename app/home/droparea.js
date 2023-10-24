"use client";

import { ItemType } from './constants';
import { useDrop } from 'react-dnd';
import dynamic from 'next/dynamic';


function DroppableArea({ children }) {
  const [ drop] = useDrop({
    accept: ItemType.CARD,
    drop: (item, monitor) => {
      console.log(`Dropped item: Week ${item.week}`);
    },
  });

  return <div /*ref={drop}*/ className="w-full h-full">{children}</div>;
}

export default DroppableArea;