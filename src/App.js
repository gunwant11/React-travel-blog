import classes from "./App.module.scss";
import Head from "./components/layout/Head";
import Author from "./components/Blog/Author";
import BlogList from "./components/Blog/BlogList";
import BlogPage from "./components/Blog/BlogPage";
import img1 from "./assets/blogImgs/1.jpg";
import img2 from "./assets/blogImgs/2.jpg";
import img3 from "./assets/blogImgs/3.jpg";

const DUMMY_DATA = [
  {
    id: "b1",
    image: img1,
    title: "Max",
    description: "Learning React is fun!",
    date: '11/11',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "b2",
    image: img2,
    title: "Max",
    description: "Learning React is fun!",
    date: '11/11',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "b3",
    image: img3,
    title: "Max",
    description: "Learning React is fun!",
    date: '11/11',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function App() {
  return (
    <div className="App">
      <Head />
      <div className={classes["grid-container"]}>
        <Author />
      </div>
      <div className={classes["grid-container"]}>
        <BlogList blogs={DUMMY_DATA} />
      </div>
      <BlogPage blogContent={DUMMY_DATA} />
    </div>
  );
}

export default App;
