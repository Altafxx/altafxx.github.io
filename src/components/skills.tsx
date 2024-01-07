// skills.tsx
import React from 'react';
import Badge from "@/components/badge";

interface SkillsProps {
    skill: {
        language: string[];
        framework: string[][];
        ui: string[];
        database: string[];
        other: string[];

    };
}

export default function Skills({ skill }: SkillsProps) {
    return (
        <div className="text-left">
            <Badge>Relevant Skills</Badge>
            <h3>Language:</h3>
            <ul className="mb-4">
                {skill.language.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Framework:</h3>
            <ul className="mb-4">
                {skill.framework.map((item, index) => (
                    <li key={index}>{item[0]} ({item[1]})</li>
                ))}
            </ul>
            <h3>UI:</h3>
            <ul className="mb-4">
                {skill.ui.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Databases:</h3>
            <ul className="mb-4">
                {skill.database.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Others:</h3>
            <ul className="mb-4">
                {skill.other.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}