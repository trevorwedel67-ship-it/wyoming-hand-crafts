generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum ProjectStatus {
  draft
  generating
  completed
  archived
}

model Project {
  id        String         @id @default(uuid()) @db.Uuid
  status    ProjectStatus  @default(draft)
  createdAt DateTime       @default(now())
  updatedAt DateTime       @updatedAt

  configs   ProjectConfig[]

  @@map("projects")
}

model ProjectConfig {
  id        String   @id @default(uuid()) @db.Uuid
  projectId String   @db.Uuid
  shedSize  String
  useCase   String
  style     String
  budget    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)

  @@index([projectId])
  @@map("project_configs")
}