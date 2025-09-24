export type TaskStatus = 'Pending' | 'Done';
export type Priority = 'Alta' | 'Media' | 'Baja' | '';

export interface ChecklistTask {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;
  status: TaskStatus;
  notes: string;
}

export const initialTasks: ChecklistTask[] = [
  {
    id: 1,
    title: "Revisar y anotar el propósito del puesto / motivo del emprendimiento",
    description: "Revisar perfil de cargo u objetivos y resumir 3 metas trimestrales.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 2,
    title: "Negociar condiciones al recibir tarea nueva",
    description: "Solicitar tiempos, condiciones y cómo afecta carga actual; dejar por escrito.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 3,
    title: "Dejar TODO por escrito",
    description: "Registrar solicitudes, acuerdos y confirmaciones por email o documento compartido.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 4,
    title: "Revisar canales organizacionales a primera hora",
    description: "Verificar correo institucional y grupos de mensajería para novedades urgentes.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 5,
    title: "Mantener el sitio de trabajo limpio y ordenado",
    description: "Asignar un lugar para cada cosa y despejar el área de trabajo.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 6,
    title: "Planificación diaria visible",
    description: "Colocar pizarra o nota en pantalla con prioridades del día.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 7,
    title: "Ordenar y respaldar archivos físicos y digitales",
    description: "Clasificación y copias de seguridad periódicas.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 8,
    title: "Hablar directamente con la persona involucrada ante dudas o conflictos",
    description: "Solicitar aclaraciones y resolver en privado y con respeto.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 9,
    title: "Evitar juicios y comentarios dañinos",
    description: "Ceñirse a hechos, no alimentar rumores.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 10,
    title: "Comunicar tus logros relevantes",
    description: "Informar resultados clave a superiores con evidencia y humildad.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 11,
    title: "Ser humano antes que profesional",
    description: "Practicar empatía, cooperación y sinergia en el equipo.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  },
  {
    id: 12,
    title: "Corroborar y aclarar rumores o comentarios tóxicos",
    description: "Investigar origen y buscar la aclaración directa con las partes.",
    priority: "",
    dueDate: "",
    status: "Pending",
    notes: ""
  }
];