export interface CourseProps {
  // Tornar opcional para criação; backend gera ID
  id?: number;
  name: string;
  description: string;
}