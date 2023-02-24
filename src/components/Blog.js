import React from "react";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import PostDetail from "./PostDetail";
import PostList from "./PostList";

export default function Blog() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={PostList} />
        <Route path="/posts/:id">
           <PostList />
        </Route>
      </Switch>
    </div>
  );
}
