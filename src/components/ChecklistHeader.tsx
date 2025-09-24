import { Target, RotateCcw, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

interface ChecklistHeaderProps {
  completedCount: number;
  totalCount: number;
  progressPercentage: number;
  onReset: () => void;
}

export const ChecklistHeader = ({ 
  completedCount, 
  totalCount, 
  progressPercentage, 
  onReset 
}: ChecklistHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 sm:space-y-4">
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Método de Afinación Estratégica
          </h1>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Checklist profesional para optimizar tu rendimiento y productividad en el trabajo
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm italic">
          Elaborado por MSc. María Auxiliadora Vielma
        </p>
      </div>

      <Card className="p-4 sm:p-6 bg-gradient-card">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-semibold">Progreso General</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reiniciar
          </Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Tareas completadas
            </span>
            <span className="font-semibold">
              {completedCount} de {totalCount}
            </span>
          </div>
          
          <Progress 
            value={progressPercentage} 
            className="h-3"
          />
          
          <div className="text-center">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {Math.round(progressPercentage)}%
            </span>
            <span className="text-muted-foreground ml-1 text-sm sm:text-base">completado</span>
          </div>
        </div>
      </Card>
    </div>
  );
};