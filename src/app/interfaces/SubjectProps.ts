import { ModalityProps } from "./ModalityProps";
import { TechAxisProps } from "./TechAxisProps";

export interface SubjectProps {
  id: number;
  name: string;
  acronym: string;

  //resposse
  techAxis:TechAxisProps;
  modality: ModalityProps;

  //request
  techAxisId?: number;
  modalityId?: number;
}
