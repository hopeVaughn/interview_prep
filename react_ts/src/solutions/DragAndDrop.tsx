/*
1. Item interface: The Item interface is defined in the DraggableItem.tsx file to represent each list item with properties id, content, and index.

2. DraggableItem component: The DraggableItem component is a functional component that receives an item, its index, and the moveItem function as props. It creates a ref for the item's DOM node and initializes the drag and drop functionality using the useDrag and useDrop hooks.

3. Drag functionality: The useDrag hook is called with an object that includes the type ("item"), the item object, and a collect function. The collect function returns an object containing the isDragging property, which indicates whether the item is currently being dragged. This property is used to control the item's opacity while it's being dragged.

4. Drop functionality: The useDrop hook is called with an object that includes the accept property (indicating which items can be dropped), and a hover function. The hover function is called when an item is dragged over another item. It updates the order of the items using the moveItem function, and also updates the index property of the dragged item.

5. DragAndDrop component: The main DragAndDrop component is a functional component that uses the DndProvider component from react-dnd to enable drag and drop functionality. Inside this component, the moveItem function is responsible for updating the order of the items when a dragged item is dropped. The initial state called items is an array of objects implementing the Item interface. The useState hook is used to manage the state of the items.

6. Rendering DraggableItem components: In the DragAndDrop component, the items are mapped to DraggableItem components, passing the item, index, and moveItem function as props.

7. DndProvider: The DndProvider component is used to wrap the list of DraggableItem components. It is responsible for providing the drag and drop context for the items.
*/

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem, { Item } from '../solutions_components/DraggableItem';

const initialItems: Item[] = [
  { id: 'item-1', content: 'Item 1', index: 0 },
  { id: 'item-2', content: 'Item 2', index: 1 },
  { id: 'item-3', content: 'Item 3', index: 2 },
];

const DragAndDrop: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = items[dragIndex];
    const newItems = [...items];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    newItems.forEach((item, index) => {
      item.index = index;
    });
    setItems(newItems);
  };

  const renderItem = (item: Item, index: number) => {
    const ref = {
      current: null as HTMLDivElement | null,
    };

    const [{ isDragging }, drag] = useDrag({
      type: 'item',
      item: { id: item.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: 'item',
      hover: (item: Item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        if (!ref.current) {
          return;
        }

        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) {
          return;
        }

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;
    return (
      <div
        key={item.id}
        ref={(node) => {
          if (node) {
            drag(node);
            drop(node);
            ref.current = node;
          }
        }}
        style={{ opacity }}
        className='bg-white p-2 rounded shadow mb-2 md:w-1/2 lg:w-1/3 mx-auto'
      >
        {item.content}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-white p-2 rounded shadow mb-2 w-full mx-auto'>
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            item={item}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DragAndDrop;
