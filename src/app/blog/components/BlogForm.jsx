'use client';
import Card from '@/app/ui/components/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './styles/BlogForm.module.scss';

const BlogForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = () => {
    if (title === '' || content === '') {
      return;
    }

    const payload = {
      title,
      content,
    };
    onSave(payload);
  };

  return (
    <Card>
      <div className={styles.div}>
        Title :
        <input
          className={styles['input-text']}
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete='off'
        />
      </div>
      <div className={styles.div}>
        Content :
        <textarea
          className={styles['input-text']}
          name='content'
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          autoComplete='off'
        />
      </div>
      <div className={styles.div}>
        <button className={styles['btn-cancel']} onClick={onCancel}>
          Cancel
        </button>
        <button className={styles['btn-save']} onClick={onSubmit}>
          Save
        </button>
      </div>
    </Card>
  );
};

BlogForm.propTypes = {
  mode: PropTypes.string.isRequired,
  dt: PropTypes.object.isRequired,
};

export default BlogForm;
