import IBook from "./IBook"
import './index.css'

interface Props {
    books: IBook[],
    setCurrentBookIndex: (i: number) => void;
}
export default function BookList({books, setCurrentBookIndex}: Props) {
    return (
        <ul >
            {books.map((book, i) => (
                <li onClick={() => setCurrentBookIndex(i)}>{book.name}</li>
            ))}
        </ul>
    )
}

