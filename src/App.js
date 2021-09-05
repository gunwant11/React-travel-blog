import { Redirect, Route, Switch } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import BlogItem from "./components/Blog/BlogItem";
import axios from "axios";
import NotFound from "./components/layout/NotFound";
import Landing from "./components/layout/Landing";
import ScrollToTop from "./components/UI/ScrollToTop";

const baseURL =
  "https://react-travel-blog-234c6-default-rtdb.firebaseio.com/data.json";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);


  if (!post) return null;

  return (
    <Fragment>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <Redirect to="home" />
          </Route>
          <Route path="/home" exact>
            <Landing blogs={post} />
          </Route>
          <Route
            exact
            path="/blog/:blogId"
            render={(props) => {
              let idPost = props.location.pathname.replace("/blog/", "");
              var result = Object.values(post);
              if (Number(idPost) <= result.length) {
                let filter;
                filter = result.filter((post) => post.id === Number(idPost));
                return <BlogItem post={filter[0]} />;
              } else {
                return <NotFound />;
              }
            }}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
    </Fragment>
  );
}

export default App;
