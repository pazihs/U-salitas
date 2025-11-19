import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import type { ClassroomData } from './types/classrooms';
import AppRouter from './components/AppRouter';

const App = () => {
  const [query, setQuery] = useState<string>('');
  const [classrooms, setClassrooms] = useState<ClassroomData[]>([]);

  return (
    <div>
      <NavBar setClassrooms={setClassrooms} setQuery={setQuery} />
      <AppRouter query={query} classrooms={classrooms} />
    </div>
  );
}

export default App;