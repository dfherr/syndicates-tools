export type Technologies = {
    [name: string]: TechnologyTree,
}

export interface TechnologyTree {
    name: string,
    levels: [TechnologyTreeLevel],
}

export interface TechnologyTreeLevel {
    technologyTree: string,
    level: number,
    technologies: [Technology],
}

export interface Technology {
    technologyTree: string,
    level: number,
    name: string,
    abbreviation: string | undefined,
    description: string,
    duration: number,
    networth: number,
    ranks: [TechnologyRank],
}

export interface TechnologyRank {
    technologyTree: string,
    level: number,
    name: string,
    rank: number,
    cost: number,
}