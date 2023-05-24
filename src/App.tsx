import { useState } from 'react';
import BookList from './BookList.tsx';
import BookViewer from './BookViewer.tsx';
import books from './data.tsx';


function App() {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  return (
    <>
    <BookViewer currentBook={books[currentBookIndex]}/>
    <BookList books={books} setCurrentBookIndex={setCurrentBookIndex}/>
    </>
  )

  
}

export default App
