export type ProjectConfig = {
  shedSize: string;
  useCase: string;
  style: string;
  budget: string;
};

export type StoredProject = {
  projectId: string;
  status: string;
  config: ProjectConfig;
  createdAt: string;
};

const projectStore = new Map<string, StoredProject>();

export function saveProject(project: StoredProject) {
  projectStore.set(project.projectId, project);
}
