import { ModalityProps } from "./ModalityProps";
import { PeriodicityProps } from "./PeriodicityProps";

export interface CourseProps {

  id: number;
  name: string;
  description: string;
  modalityId?: number;
  periodicityId?: number;

  modality?: ModalityProps;
  periodicity?: PeriodicityProps;
}