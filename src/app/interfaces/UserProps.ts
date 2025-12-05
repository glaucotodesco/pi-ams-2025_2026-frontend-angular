export interface UserProps {
  id: number;
  name: string;
  email: string;
  password?: string;

  // response
  accessLevel?: {
    id: number;
    level: number;
    description: string;
  };

  // request
  accessLevelId?: number;
}
