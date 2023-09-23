'use client';
import Card from '@/app/ui/components/Card';
import PropTypes from 'prop-types';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import styles from './styles/ScheduleList.module.scss';

const ScheduleList = ({ onEdit, onCreate, onDelete, data }) => {
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
            <div className={styles.table.div}>
              <div>Things To Do</div>
              <div>When?</div>
            </div>
            {data.map((item) => {
              return (
                <div key={item._id} className={styles['table-child']}>
                  <div>{item.name}</div>
                  <div>
                    {item.time}&nbsp;
                    <FaPenSquare
                      className={styles.pointer}
                      onClick={() => onEdit(item._id)}
                    />
                    &nbsp;
                    <FaTrash
                      className={styles.pointer}
                      onClick={() => onDelete(item._id)}
                    />
                  </div>
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
      No schedule for now.{' '}
      <span className={styles['create-one']} onClick={onCreate}>
        Try to create one..
      </span>
    </h2>
  );
};

ScheduleList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ScheduleList;
