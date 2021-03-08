<template>
    <div>
        <el-row>
            <el-col>
                <el-tabs type="border-card">
                    <el-tab-pane
                        v-for="tree in TECHNOLOGIES"
                        v-bind:label="tree.name"
                        v-bind:key="tree.name"
                    >
                        <div class="treetable">
                            <div
                                class="levelcolumn"
                                v-for="level in tree.levels"
                                v-bind:key="level.level"
                            >
                                <div class="levelheader">Stufe {{ level.level + 1 }}</div>
                                <div
                                    v-for="technology in level.technologies"
                                    :key="technology.name"
                                    class="technology"
                                    style="position: relative;"
                                    :class="{ enabled: isTechnologyEnabled(technology) }"
                                    @click="addTechnologyStep(technology)"
                                >
                                    <span>{{ technology.name }}</span>
                                    <el-popover
                                        placement="top-start"
                                        trigger="click"
                                        :title="technology.name"
                                        :width="300"
                                    >
                                        <template #reference>
                                            <span
                                                style="position: absolute; top: 3px; right: 5px; font-size: 10px; cursor: pointer;"
                                            >?</span>
                                        </template>

                                        <b>Dauer:</b>
                                        {{ technology.duration }} Ticks
                                        <br />
                                        <b>Kosten:</b>
                                        {{ technology.ranks.map(v => v.cost).join(' / ') }} FP
                                        <br />
                                        <b>Networth:</b>
                                        {{ technology.networth }}
                                        <br />
                                        {{ technology.description }}
                                    </el-popover>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>

        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <el-divider direction="vertical"></el-divider>
            <el-checkbox v-model="isSL">Shadow Labs</el-checkbox>
            <el-divider direction="vertical"></el-divider>
            <el-button type="primary" plain @click="addDelayStep">Verzögerung einfügen</el-button>
            <el-button type="primary" plain @click="clearSteps">Alles entfernen</el-button>
            <el-divider direction="vertical"></el-divider>
        </div>

        <el-row>
            <el-col>
                <el-table
                    :data="getEvaluatedSteps()"
                    border
                    sum-text="Gesamt"
                    show-summary
                    style="width: 100%"
                >
                    <el-table-column prop="name" label="Name"></el-table-column>
                    <el-table-column prop="baseTime" label="Basiszeit"></el-table-column>
                    <el-table-column prop="boniTime" label="Zeit mit Boni"></el-table-column>
                    <el-table-column prop="bonusHours" label="verwendete Bonusstunden"></el-table-column>
                    <el-table-column prop="time" label="Zeit"></el-table-column>
                    <el-table-column :width="60">
                        <template #default="scope">
                            <el-button
                                icon="el-icon-delete"
                                size="mini"
                                circle
                                @click="removeStep(scope.row)"
                            ></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import * as vue from 'vue';
import { TECHNOLOGIES } from '../data/technologies';
import * as tech from '../model/technology';
import { v4 as uuidv4 } from 'uuid';
import * as lodash from 'lodash';

const isSL: vue.Ref<boolean> = vue.ref(false);
const steps: vue.Ref<tech.ResearchStep[]> = vue.ref([]);

const getStepName = (step: tech.ResearchStep): string => {
    if (step.type === 'delay') {
        return `Verzögerung`;
    } else {
        const technology = TECHNOLOGIES[step.technologyTree].levels[step.level].technologies[step.name];
        const amountOfRanks = technology.ranks.length;
        if (amountOfRanks > 1) {
            return `${step.name} ${step.rank + 1}/${amountOfRanks}`;
        } else {
            return step.name;
        }
    }
};

const getCurrentRank = (technology: tech.Technology): number => {
    let highestRank = -1;
    for (const step of steps.value) {
        if (step.type === 'technology'
            && step.technologyTree == technology.technologyTree
            && step.level == technology.level
            && step.name == technology.name) {
            highestRank = step.rank;
        }
    }
    return highestRank;
};

const isRequirementPassed = (technology: tech.Technology): boolean => {
    if (technology.level === 0) {
        return true;
    }
    for (const step of steps.value) {
        if (step.type === 'technology'
            && step.technologyTree == technology.technologyTree
            && step.level == technology.level - 1) {
            return true;
        }
    }
    return false;
};

// for levels 2-6 only all but one tech can be researched per tree
// for level 7 only one tech from any tree can be researched
const isLevelOversatisfied = (technology: tech.Technology): boolean => {
    if (technology.level === 0) {
        return false;
    } else if (technology.level === 6) {
        for (const step of steps.value) {
            if (step.type === 'technology'
                && step.level === 6
                && step.name !== technology.name) {
                return true;
            }
        }
        return false;
    } else {
        const levelTechnologiesAmount = lodash.size(TECHNOLOGIES[technology.technologyTree].levels[technology.level].technologies);
        const otherResearchedTechsInSameTree = new Set();
        for (const step of steps.value) {
            if (step.type === 'technology'
                && step.technologyTree === technology.technologyTree
                && step.level === technology.level
                && step.name !== technology.name) {
                otherResearchedTechsInSameTree.add(step.name);
            }
        }
        return otherResearchedTechsInSameTree.size >= levelTechnologiesAmount - 1;
    }
};

const isTechnologyEnabled = (technology: tech.Technology): boolean => {
    let currentRank = getCurrentRank(technology);
    const amountOfRanks = technology.ranks.length;
    return currentRank + 1 < amountOfRanks && isRequirementPassed(technology) && !isLevelOversatisfied(technology);
};

const addTechnologyStep = (technology: tech.Technology) => {
    if (!isTechnologyEnabled(technology)) {
        return;
    }
    const currentRank = getCurrentRank(technology);
    const step: tech.ResearchStep = {
        type: 'technology',
        uuid: uuidv4(),
        technologyTree: technology.technologyTree,
        level: technology.level,
        name: technology.name,
        rank: currentRank + 1,
    };
    steps.value.push(step);
    console.log(`'${getStepName(step)}' selected`);
};

const addDelayStep = () => {
    const lastStep = steps.value[steps.value.length - 1];
    if (lastStep !== undefined && lastStep.type === 'delay') {
        lastStep.duration += 1;
    } else {
        const step: tech.ResearchStep = {
            type: 'delay',
            uuid: uuidv4(),
            duration: 1,
        };
        steps.value.push(step);
    }
    console.log(`Delay added`);
};

const clearSteps = () => {
    steps.value = [];
}

const removeStep = (step: tech.ResearchStep) => {
    steps.value = steps.value.filter(v => v.uuid != step.uuid);
}

const getEvaluatedSteps = () => {
    const evaluatedSteps = [];

    let totalTime = 0;
    let isMotiResearched = false;
    let bonusHours = 45;

    for (const step of steps.value) {
        if (step.type === 'delay') {
            evaluatedSteps.push({
                uuid: step.uuid,
                name: getStepName(step),
                baseTime: step.duration,
                boniTime: step.duration,
                bonusHours: 0,
                time: step.duration,
            });
        } else {
            const technology = TECHNOLOGIES[step.technologyTree].levels[step.level].technologies[step.name];
            const factor = 1 - (isMotiResearched ? 0.25 : 0) - (isSL.value ? 0.25 : 0);
            const boniTime = technology.duration * factor;

            const bonusHoursAllowed = technology.duration > 4;
            const maxInitialBonusUsage = bonusHoursAllowed ? Math.min(bonusHours, boniTime - 1) : 0;
            const timeAfterInitialBonusHours = boniTime - maxInitialBonusUsage;
            bonusHours -= maxInitialBonusUsage;

            let actualTicks = 0;
            let usedBonusHours = maxInitialBonusUsage;

            for (let i = timeAfterInitialBonusHours; i >= 1; i--) {
                if (bonusHours > 0 && i > 1 && bonusHoursAllowed) {
                    bonusHours -= 1;
                    i -= 1;
                    usedBonusHours += 1;
                }
                actualTicks += 1;
                totalTime += 1;
                if (totalTime % 24 === 0) {
                    bonusHours += 1;
                }
            }

            if (technology.name === 'Motivationsprogramm für deprimierte Wissenschaftler') {
                isMotiResearched = true;
            }

            evaluatedSteps.push({
                uuid: step.uuid,
                name: getStepName(step),
                baseTime: technology.duration,
                boniTime: boniTime,
                bonusHours: usedBonusHours,
                time: actualTicks,
            });
        }
    }

    return evaluatedSteps;
}
</script>

<style>
.treetable {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
.levelcolumn {
    display: flex;
    flex-direction: column;
}
.levelheader {
    background: #545c64;
    color: white;
    border-radius: 4px;
    margin: 2px;
    padding: 8px;
}
.technology {
    background: #eef0f5;
    color: gray;
    border-radius: 4px;
    margin: 2px;
    padding: 10px 20px;
    cursor: default;
}
.technology.enabled {
    background: #cfd5e4;
    color: black;
}
.technology.enabled:hover {
    cursor: pointer;
}

.el-row {
    margin-bottom: 10px;
}
</style>