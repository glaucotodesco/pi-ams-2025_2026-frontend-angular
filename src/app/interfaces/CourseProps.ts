export interface CourseProps {
  // Tornar opcional para criação; backend gera ID
  id?: number;
  name: string;
  modality: string;
  technologicalAxis: string;
  componentsCount: number;
}
