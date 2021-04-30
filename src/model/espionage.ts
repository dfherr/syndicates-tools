import { Faction } from "./general"

export interface EspionagePlayer {
    faction: Faction,
    land: number,
    buildings: EspionagePlayerBuildings,
    units: EspionagePlayerSpies,
    research: EspionagePlayerResearch,
    partnerBoni: EspionagePlayerPartnerBoni,
    points: {
        ip: number,
        op: number,
        dp: number,
    },
}

export interface EspionagePlayerBuildings {
    lagerhallen: number,
    spionagezentren: number,
    geheimdienstzentren: number,
    hauptquartiere: number,
}

export interface EspionagePlayerSpies {
    agents: number,
    thiefs: number,
    guards: number,
}

export interface EspionagePlayerResearch {
    FMH: number,
    SpyWeb: number,
    II: number,
    HN: number,
    IT: number,
    ISSDN: number,
    IS: number,
    CTP: number,
}

export interface EspionagePlayerPartnerBoni {
    kapazitaet: boolean,
    spionagestaerke: boolean,
    plusIPSpione: boolean,
}

export const DIFFICULTY = {
    "Einfach": 0.3,
    "Mittel": 0.6,
    "Schwer": 0.9,
    "Sehr schwer": 1.5,
}

export interface Operation {
    name: string,
    difficulty: keyof typeof DIFFICULTY,
    ops: number,
    isEspionage: boolean,
}

export function createEmptyPlayer(): EspionagePlayer {
    return {
        faction: Faction.BF,
        land: 400,
        buildings: {
            lagerhallen: 0,
            spionagezentren: 0,
            geheimdienstzentren: 0,
            hauptquartiere: 0,
        },
        units: {
            agents: 0,
            thiefs: 0,
            guards: 0,
        },
        research: {
            FMH: 0,
            SpyWeb: 0,
            II: 0,
            HN: 0,
            IT: 0,
            ISSDN: 0,
            IS: 0,
            CTP: 0,
        },
        partnerBoni: {
            kapazitaet: false,
            spionagestaerke: false,
            plusIPSpione: false,
        },
        points: {
            ip: 0,
            op: 0,
            dp: 0,
        },
    };
}
