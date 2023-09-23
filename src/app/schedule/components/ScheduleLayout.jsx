'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScheduleList from './ScheduleList';
import ScheduleForm from './ScheduleForm';

const ScheduleLayout = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [schedList, setSchedList] = useState([]);
  const [formMode, setFormMode] = useState('create');
  const [formData, setFormData] = useState({});
  const [scheduleId, setScheduleId] = useState(null);

  const getSchedule = async () => {
    setIsLoading(true);
    setOpenList(false);
    const resp = await axios.get('/api/schedule');
    const {
      data: { data: response },
    } = resp;
    setSchedList(response);
    setIsLoading(false);
    setOpenList(true);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const handleCreate = () => {
    setFormMode('create');
    setFormData({});
    setOpenForm(true);
    setOpenList(false);
  };

  const handleEdit = async (id) => {
    setScheduleId(id);
    setFormMode('edit');
    const selectedData = schedList.find((k) => k._id === id);
    setFormData({
      name: selectedData.name,
      time: selectedData.time,
    });
    setOpenForm(true);
    setOpenList(false);
  };

  const handleSave = async (payload) => {
    await axios.post('/api/schedule', payload);
    await getSchedule();
    setOpenForm(false);
    setOpenList(true);
  };

  const handleCancel = () => {
    setOpenForm(false);
    setOpenList(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/schedule?q=${id}`);
    await getSchedule();
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {openForm ? (
        <ScheduleForm
          id={scheduleId}
          mode={formMode}
          dt={formData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <></>
      )}
      {openList ? (
        <ScheduleList
          data={schedList}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ScheduleLayout;
