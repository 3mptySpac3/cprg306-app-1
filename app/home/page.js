"use client";

import { useDrag, useDrop } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DroppableArea from './droparea';
import { ItemType } from './constants';
import dynamic from 'next/dynamic';


const DynamicDroppableArea = dynamic(() => import('./droparea'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});


function WeekCard({ week, image }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.CARD,
    item: { week },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img src={image} alt={`Week ${week} Image`} className="max-w-md max-h-md mx-auto" />
      <p>Week {week}</p>
    </div>
  );
}


function HomePage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white">
        <DroppableArea>
          <WeekCard className="border-4 "week="1" image="/595879.png" />
          <WeekCard week="2" image="/595865.jpg" />
          <WeekCard week="3" image="/595864.jpg" />
          <WeekCard week="4" image="/595881.png" />
          <WeekCard week="5" image="/595882.jpg" />
          <WeekCard week="6" image="/595869.jpg" />
        </DroppableArea>
      </div>
    </DndProvider>
  );
}

export default HomePage;

