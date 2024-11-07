// src/Navigation.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Delete from './Delete';
import Post from './Post';
import Detail from './Detail';
import PostFetch from './PostFetch';
import Navigate from './Navigate'; // 导入 Navigate 组件

function Navigation() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <hr />
        <Link to="/delete">Delete</Link>
        <hr />
        <Link to="/post">Post</Link>
        <hr />
        <Link to="/postFetch">Post Fetch</Link>
        <hr />
        <Link to="/navigate">Navigate</Link> {/* 新增 Navigate 链接 */}
        <hr />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/post" element={<Post />} />
        <Route path="/postFetch" element={<PostFetch />} />
        <Route path="/navigate" element={<Navigate />} /> {/* 新增 Navigate 路由 */}
        <Route path="/:id" element={<Detail />} /> {/* 动态路由 */}
      </Routes>
    </Router>
  );
}

export default Navigation;