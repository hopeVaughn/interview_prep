/*
This solution uses React and the react-dnd library to create a draggable and sortable list of items. The drag and drop functionality is implemented using the useDrag and useDrop hooks, and the items are rendered with refs to update their positions in the list when they are dropped.

1. Initial state and interface: The component starts by defining an interface Item to represent each list item. It then creates an initial state called items, which is an array of objects with properties id, content, and index. The useState hook is used to manage the state of the items.

2. DragAndDrop component: The main DragAndDrop component is a functional component that uses the DndProvider component from react-dnd to enable drag and drop functionality. Inside this component, the moveItem function is responsible for updating the order of the items when a dragged item is dropped.

3. Rendering items: The renderItem function is responsible for rendering each item in the list. It takes an item and its index as parameters, creates a ref for the item's DOM node, and initializes the drag and drop functionality using the useDrag and useDrop hooks.

4. Drag functionality: The useDrag hook is called with an object that includes the type ("item"), the item object, and a collect function. The collect function returns an object containing the isDragging property, which indicates whether the item is currently being dragged. This property is used to control the item's opacity while it's being dragged.

5. Drop functionality: The useDrop hook is called with an object that includes the accept property (indicating which items can be dropped), and a hover function. The hover function is called when an item is dragged over another item. It updates the order of the items using the moveItem function, and also updates the index property of the dragged item.

6. Rendering with refs: In the renderItem function, the ref is assigned to the item's DOM node using an inline function. This function checks if the node is not null, and if so, it calls the drag and drop functions from the useDrag and useDrop hooks, and assigns the node to ref.current.

7. DndProvider and mapping: The DndProvider component is used to wrap the list of rendered items. It is responsible for providing the drag and drop context for the items. The items.map(renderItem) function is used to render each item in the list using the renderItem function.
*/
import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Item {
  id: string;
  content: string;
  index: number;
}

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
        className='bg-white p-2 rounded shadow mb-2'
      >
        {item.content}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>{items.map(renderItem)}</DndProvider>
  );
};

export default DragAndDrop;
