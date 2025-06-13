type ProjectPhaseEntity = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

type ProjectEntity = {
  name: string;
  description: string;
  status: string;
  period: string;
  startDate: string;
  endDate: string;
  categories: string[];
  users: string[];
  phases: ProjectPhaseEntity[];
};
