'use client';
import Card from '@/app/ui/components/Card';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './styles/BlogFilter.module.scss';

const BlogFilter = ({ onSearch }) => {
  const [filter, setFilter] = useState('');

  return (
    <Card>
      <div className={styles.div}>
        <input
          className={styles['input-text']}
          type='text'
          name='filter'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          autoComplete='off'
        />
        <FaSearch className={styles.pointer} onClick={() => onSearch(filter)} />
      </div>
    </Card>
  );
};

export default BlogFilter;
