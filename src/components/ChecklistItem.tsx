import { CheckCircle2, Circle, Calendar, AlertTriangle, FileText } from 'lucide-react';
import { ChecklistTask, Priority } from '@/types/checklist';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MobileSelect } from '@/components/MobileSelect';
import { cn } from '@/lib/utils';

interface ChecklistItemProps {
  task: ChecklistTask;
  onUpdate: (id: number, updates: Partial<ChecklistTask>) => void;
  onToggleStatus: (id: number) => void;
}

const priorityColors = {
  'Alta': 'bg-destructive text-destructive-foreground',
  'Media': 'bg-warning text-warning-foreground',
  'Baja': 'bg-success text-success-foreground',
  'none': 'bg-muted text-muted-foreground'
};

const priorityOptions = [
  { value: 'none', label: 'Sin prioridad' },
  { value: 'Alta', label: 'Alta' },
  { value: 'Media', label: 'Media' },
  { value: 'Baja', label: 'Baja' }
];

// Hook to detect mobile devices
const useIsMobile = () => {
  const isMobile = typeof window !== 'undefined' && 
    (window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  return isMobile;
};

export const ChecklistItem = ({ task, onUpdate, onToggleStatus }: ChecklistItemProps) => {
  const isCompleted = task.status === 'Done';
  const isMobile = useIsMobile();

  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-lg",
      "bg-gradient-card border-border/50",
      isCompleted && "opacity-75 bg-gradient-success/10"
    )}>
      <div className="flex items-start gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggleStatus(task.id)}
          className={cn(
            "mt-1 h-6 w-6 p-0 rounded-full",
            isCompleted 
              ? "text-success hover:text-success/80" 
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {isCompleted ? (
            <CheckCircle2 className="h-6 w-6" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </Button>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">#{task.id}</span>
              {task.priority !== 'none' && (
                <Badge className={priorityColors[task.priority as Priority]}>
                  {task.priority}
                </Badge>
              )}
            </div>
            <h3 className={cn(
              "font-semibold text-lg leading-tight",
              isCompleted && "line-through text-muted-foreground"
            )}>
              {task.title}
            </h3>
            <p className="text-primary font-medium text-base leading-relaxed">
              {task.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <AlertTriangle className="h-4 w-4" />
                Prioridad
              </label>
              {isMobile ? (
                <MobileSelect
                  value={task.priority}
                  onValueChange={(value: Priority) => onUpdate(task.id, { priority: value })}
                  placeholder="Seleccionar prioridad"
                  options={priorityOptions}
                />
              ) : (
                <Select
                  value={task.priority}
                  onValueChange={(value: Priority) => onUpdate(task.id, { priority: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar prioridad" />
                  </SelectTrigger>
                  <SelectContent align="start" side="bottom">
                    <SelectItem value="none">Sin prioridad</SelectItem>
                    <SelectItem value="Alta">Alta</SelectItem>
                    <SelectItem value="Media">Media</SelectItem>
                    <SelectItem value="Baja">Baja</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                Fecha límite
              </label>
              <Input
                type="date"
                value={task.dueDate}
                onChange={(e) => onUpdate(task.id, { dueDate: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <FileText className="h-4 w-4" />
              Notas
            </label>
            <Textarea
              placeholder="Agregar notas personales..."
              value={task.notes}
              onChange={(e) => onUpdate(task.id, { notes: e.target.value })}
              className="resize-none"
              rows={2}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};