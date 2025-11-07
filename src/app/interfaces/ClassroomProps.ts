export interface ClassroomProps {
  id: number;
  name: string;
  type: string;
  location: string;
  capacity: number;
  hasService: boolean;
  items: string[];
  specifications: string;
}