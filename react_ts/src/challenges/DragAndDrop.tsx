/*
Problem:
Write a React component that displays a list of items that can be sorted by dragging and dropping. The user should be able to drag an item and drop it at a different position in the list. When an item is dropped, the component should update the list to reflect the new order.

Example:
If the list of items is initially ['Item 1', 'Item 2', 'Item 3'],
the component should display the following list:

- Item 1
- Item 2
- Item 3

The user can then drag 'Item 3' and drop it between 'Item 1' and 'Item 2',
and the component should display the following list:

- Item 3
- Item 1
- Item 2

IMPORTANT: If you decide to use react-dnd to complete this challenge you will have to create a new component as well as modify the App.tsx file to import and render your component. You can create your component in the src/challenges_components folder and import it into src/challenges/DragAndDrop.tsx. You can then import your component into src/App.tsx and render it. To properly render your component, you will need to add code to the render function in src/App.tsx:
Here is an example of how to import your component into src/App.tsx and render it:

import React from 'react';
import DragAndDrop from './solutions/DragAndDrop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <DragAndDrop />
      </div>
    </DndProvider>
  );
}

export default App;
*/
