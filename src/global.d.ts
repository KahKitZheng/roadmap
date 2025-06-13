type TeamEntity = {
  name: string;
  description?: string;
  members: MemberEntity[];
};

type MemberEntity = {
  name: string;
  fullName?: string;
};

type ProjectPhaseEntity = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  members?: MemberEntity[];
};

type ProjectEntity = {
  name: string;
  description: string;
  status: string;
  period: string;
  startDate: string;
  endDate: string;
  categories: string[];
  phases: ProjectPhaseEntity[];
};
