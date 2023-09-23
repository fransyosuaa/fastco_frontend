'use client';
import Card from '@/app/ui/components/Card';
import PropTypes from 'prop-types';
import styles from './styles/BlogList.module.scss';

const BlogList = ({ onCreate, data }) => {
  if (data.length > 0) {
    return (
      <>
        <div className={styles['section-add']}>
          <button className={styles['btn-save']} onClick={onCreate}>
            Add new
          </button>
        </div>
        <Card>
          <div className={styles.table}>
            {data.map((item) => {
              return (
                <div key={item._id} className={styles.item}>
                  <p>{item.title}</p>
                  <ul>
                    <li>{item.content}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </Card>
      </>
    );
  }
  return (
    <h2 className={styles.h2}>
      No blog for now.{' '}
      <span className={styles['create-one']} onClick={onCreate}>
        Try to create one..
      </span>
    </h2>
  );
};

BlogList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BlogList;
