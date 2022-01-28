import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, NavLink, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import TodosPage from './pages/TodosPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/">Home page</Link> | {" "}
          <Link to="/users">Users page</Link> | {" "}
          <Link to="/todos">Todos page</Link>
        </nav>
        <Routes>
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
