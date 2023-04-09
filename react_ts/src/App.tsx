import UserTable from './solutions/UserTable';
interface User {
  name: string;
  age: number;
  gender: 'male' | 'female';
}

const users: User[] = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Charlie', age: 20, gender: 'male' },
  { name: 'Danielle', age: 35, gender: 'female' },
];
function App() {
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}

export default App;
