import { useState, useEffect } from 'react';
import Post from './post';
import { PostProps } from './types/type';

function App() {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      const jsonData = await res.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;
