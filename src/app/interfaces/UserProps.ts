import { AccessLevelProps } from "./AccessLevelProps";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  password?: string;

  // response
  accessLevel?: AccessLevelProps

  // request
  accessLevelId?: number;
}
