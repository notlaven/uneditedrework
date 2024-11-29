import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectsPage() {
  const projectsDirectory = path.join(process.cwd(), "app/projects/posts");
  const projectFolders = fs
    .readdirSync(projectsDirectory)
    .filter((folder) => folder !== ".DS_Store");

  const projects = projectFolders.map((folder) => {
    return {
      name: folder,
    };
  });

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="hover:bg-violet-500 hover:border-none transition-colors duration-300"
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={`/${project.name}.png`}
                alt={project.name}
                width="1600"
                height="10"
                className="w-auto max-h-48"
              />

              <Link href={`/projects/posts/${project.name}`}>
                <Button variant="link" className="mt-4">
                  View Project
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
