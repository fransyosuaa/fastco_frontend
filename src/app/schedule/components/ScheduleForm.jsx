'use client';
import Card from '@/app/ui/components/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './styles/ScheduleForm.module.scss';
import { timeList } from '@/app/timeList';

const ScheduleForm = ({ mode, dt, id, onSave, onCancel }) => {
  const [name, setName] = useState(dt?.name ? dt.name : '');
  const [time, setTime] = useState(dt?.time ? dt.time : '5:30 AM');

  const onSubmit = () => {
    if (name === '') {
      return;
    }

    const payload = {
      id: mode === 'edit' ? id : undefined,
      name,
      time,
    };
    onSave(payload);
  };

  return (
    <Card>
      <div className={styles.div}>
        Schedule name :
        <input
          className={styles['input-text']}
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete='off'
        />
      </div>
      <div className={styles.div}>
        Time :
        <select
          className={styles['input-text']}
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {timeList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
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

ScheduleForm.propTypes = {
  mode: PropTypes.string.isRequired,
  dt: PropTypes.object.isRequired,
};

export default ScheduleForm;
