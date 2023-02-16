import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import scifi from "./data/scifi.json";
import MyJumbotron from "./components/MyJumbotron";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <MyJumbotron />
      <BookList booksJson={scifi} />
      <MyFooter />
    </>
  );
}

export default App;
