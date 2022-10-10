import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage, PostListPage, PostPage, RegisterPage, WritePage } from './pages'
function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/@:username" element={<PostListPage />} />
      <Route path="/@:username/:postId" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="write" element={<WritePage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
