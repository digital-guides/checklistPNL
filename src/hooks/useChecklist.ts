import { useState, useEffect } from 'react';
import { ChecklistTask, TaskStatus, Priority, initialTasks } from '@/types/checklist';

export const useChecklist = () => {
  const [tasks, setTasks] = useState<ChecklistTask[]>(() => {
    const saved = localStorage.getItem('checklist-tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });

  useEffect(() => {
    localStorage.setItem('checklist-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const updateTask = (id: number, updates: Partial<ChecklistTask>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'Pending' ? 'Done' : 'Pending' }
        : task
    ));
  };

  const resetTasks = () => {
    setTasks(initialTasks);
    localStorage.removeItem('checklist-tasks');
  };

  const completedCount = tasks.filter(task => task.status === 'Done').length;
  const totalCount = tasks.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return {
    tasks,
    updateTask,
    toggleTaskStatus,
    resetTasks,
    completedCount,
    totalCount,
    progressPercentage
  };
};