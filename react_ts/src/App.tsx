import ItemList from './solutions/ItemList';
const items = ['apple', 'banana', 'cherry', 'date'];
function App() {
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
