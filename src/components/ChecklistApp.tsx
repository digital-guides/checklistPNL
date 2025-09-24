import { useChecklist } from '@/hooks/useChecklist';
import { ChecklistHeader } from './ChecklistHeader';
import { ChecklistItem } from './ChecklistItem';
import { useToast } from '@/hooks/use-toast';
import logo from '@/assets/logo77.png';

export const ChecklistApp = () => {
  const { 
    tasks, 
    updateTask, 
    toggleTaskStatus, 
    resetTasks, 
    completedCount, 
    totalCount, 
    progressPercentage 
  } = useChecklist();
  
  const { toast } = useToast();

  const handleToggleStatus = (id: number) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      toggleTaskStatus(id);
      const newStatus = task.status === 'Pending' ? 'Done' : 'Pending';
      toast({
        title: newStatus === 'Done' ? "¡Tarea completada!" : "Tarea marcada como pendiente",
        description: task.title,
        duration: 2000,
      });
    }
  };

  const handleReset = () => {
    resetTasks();
    toast({
      title: "Checklist reiniciado",
      description: "Todas las tareas han sido marcadas como pendientes",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-6">
          <img 
            src={logo} 
            alt="Desbloquea Tu Potencial Profesional" 
            className="mx-auto h-20 w-auto"
          />
        </div>
        <ChecklistHeader
          completedCount={completedCount}
          totalCount={totalCount}
          progressPercentage={progressPercentage}
          onReset={handleReset}
        />

        <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <ChecklistItem
              key={task.id}
              task={task}
              onUpdate={updateTask}
              onToggleStatus={handleToggleStatus}
            />
          ))}
        </div>

        {completedCount === totalCount && (
          <div className="mt-8 text-center p-8 bg-gradient-success/10 rounded-lg border border-success/20">
            <h2 className="text-2xl font-bold text-success mb-2">
              ¡Felicitaciones! 🎉
            </h2>
            <p className="text-muted-foreground">
              Has completado todas las tareas del Método de Afinación Estratégica
            </p>
          </div>
        )}
      </div>
    </div>
  );
};