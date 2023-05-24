import books from './data.tsx';
import IBook from './IBook.tsx';


interface Props {
    currentBook: IBook;
}

export default function BookViewer({currentBook}: Props) {
    const getSequels = (sequels: string[]) => {
        return(
            sequels.map((sequel) => {sequel})
        )
        
    }
    const getRating = (rating: number) => {

    }
    return (
        <div>
            <h1>{currentBook.name}</h1>
            <div>
            <img src={currentBook.coverImg}></img>
            <ul>
                {'coAuthor' in currentBook 
                ? <li>Author: {currentBook.author} (Co-Author: {currentBook.coAuthor})</li>
                : <li>Author: {currentBook.author}</li>}
                {'sequels' in currentBook
                ? <li>Sequels: Sequels </li>
                : <li>Sequels: N/A</li>}
                {<li>{currentBook.rating}</li>}
            </ul>
            </div>
            
        </div>
        
    )
}