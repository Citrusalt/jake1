import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71CU3FjMFwL._AC_UL604_SR604,400_.jpg",
  author: "Nita Prose",
  title: "The Maid: A Novel",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
}

const Book = (props) => {
  // **Props destructuring method alternative**
  // const {img, title, author} = props;
  return (
    // <article className="book">
    //   <img src={img} alt="" />
    //   <h1>{title}</h1>
    //   <h4>{author.toUpperCase()}</h4>
    // </article>
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
