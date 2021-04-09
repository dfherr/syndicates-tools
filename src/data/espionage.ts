import { Operation } from "@/model/espionage";

export const OPERATIONS: Operation[] = [{
    name: "Konzernspion",
    difficulty: "Einfach",
    ops: 1,
    isEspionage: true,
}, {
    name: "Gebäudespion",
    difficulty: "Einfach",
    ops: 2,
    isEspionage: true,
}, {
    name: "Forschungsspion",
    difficulty: "Mittel",
    ops: 3,
    isEspionage: true,
}, {
    name: "Genauer Militärspion",
    difficulty: "Schwer",
    ops: 3,
    isEspionage: true,
}, {
    name: "Lagerspion",
    difficulty: "Schwer",
    ops: 3,
    isEspionage: true,
}, {
    name: "Syndikatsspion",
    difficulty: "Sehr schwer",
    ops: 3,
    isEspionage: true,
}, {
    name: "Stehlen",
    difficulty: "Schwer",
    ops: 2,
    isEspionage: false,
}, {
    name: "Militäreinheiten zerstören",
    difficulty: "Sehr schwer",
    ops: 4,
    isEspionage: false,
}, {
    name: "Gebäude zerstören",
    difficulty: "Sehr schwer",
    ops: 4,
    isEspionage: false,
}, {
    name: "Rückkehr verzögern",
    difficulty: "Sehr schwer",
    ops: 8,
    isEspionage: false,
}, {
    name: "Ortung stören",
    difficulty: "Sehr schwer",
    ops: 8,
    isEspionage: false,
}, {
    name: "Forschung zerstören",
    difficulty: "Sehr schwer",
    ops: 15,
    isEspionage: false,
}];
