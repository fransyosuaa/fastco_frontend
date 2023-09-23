'use client';
import axios from 'axios';
import { useState } from 'react';
import BlogFilter from './BlogFilter';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

const BlogLayout = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const handleSearch = async (q) => {
    setIsLoading(true);
    setOpenList(false);
    const resp = await axios.get(`/api/blog?q=${q}`);
    const {
      data: { data: response },
    } = resp;
    setBlogList(response);
    setIsLoading(false);
    setOpenList(true);
  };

  const handleCreate = () => {
    setOpenForm(true);
    setShowFilter(false);
    setOpenList(false);
  };

  const handleSave = async (payload) => {
    await axios.post('/api/blog', payload);
    await handleSearch('');
    setOpenForm(false);
    setShowFilter(true);
    setOpenList(true);
  };

  const handleCancel = () => {
    setOpenForm(false);
    setShowFilter(true);
    setOpenList(true);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {showFilter ? <BlogFilter onSearch={handleSearch} /> : <></>}
      {openForm ? (
        <BlogForm onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <></>
      )}
      {openList ? <BlogList onCreate={handleCreate} data={blogList} /> : <></>}
    </>
  );
};

export default BlogLayout;
