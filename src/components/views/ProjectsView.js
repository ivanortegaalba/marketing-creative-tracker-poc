import React from "react";
import { ProjectCard } from "..";
import { project } from "../../data";

const projects = Array.from(new Array(20)).map(project);

export default function ListView() {
    return (
        <div className="ProjectsView">
            <div className="ProjectsView-list">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        className="ProjectsView-listItem"
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}
