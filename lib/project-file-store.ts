import fs from "fs";
import path from "path";
import crypto from "crypto";

export type ProjectConfig = {
  shedSize: string;
  useCase: string;
  style: string;
  budget: string;
};

export type AIPlan = {
  title: string;
  summary: string;
  layoutBullets: string[];
  budgetNotes: string[];
};

export type StoredProject = {
  projectId: string;
  status: string;
  config: ProjectConfig;
  aiPlan?: AIPlan | null;
  createdAt: string;
  updatedAt: string;
};

const dataFilePath = path.join(process.cwd(), "data", "projects.json");

function ensureDataFile() {
  const dir = path.dirname(dataFilePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, "[]", "utf8");
  }
}

function readProjects(): StoredProject[] {
  ensureDataFile();

  const raw = fs.readFileSync(dataFilePath, "utf8");

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeProjects(projects: StoredProject[]) {
  ensureDataFile();
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2), "utf8");
}

export function getAllProjects(): StoredProject[] {
  return readProjects();
}

export function getProjectById(projectId: string): StoredProject | undefined {
  const projects = readProjects();
  return projects.find((project) => project.projectId === projectId);
}

export function createProject(config: ProjectConfig): StoredProject {
  const projects = readProjects();

  const newProject: StoredProject = {
    projectId: crypto.randomUUID(),
    status: "draft",
    config,
    aiPlan: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  projects.push(newProject);
  writeProjects(projects);

  return newProject;
}

export function updateProjectAIPlan(
  projectId: string,
  aiPlan: AIPlan
): StoredProject | undefined {
  const projects = readProjects();
  const index = projects.findIndex((project) => project.projectId === projectId);

  if (index === -1) return undefined;

  projects[index] = {
    ...projects[index],
    aiPlan,
    updatedAt: new Date().toISOString(),
  };

  writeProjects(projects);
  return projects[index];
}

export function deleteProjectById(projectId: string): boolean {
  const projects = readProjects();
  const filtered = projects.filter((project) => project.projectId !== projectId);

  if (filtered.length === projects.length) {
    return false;
  }

  writeProjects(filtered);
  return true;
}