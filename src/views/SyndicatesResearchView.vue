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
                                <el-popover
                                    v-for="technology in level.technologies"
                                    :key="technology.name"
                                    placement="top-start"
                                    trigger="hover"
                                    :title="technology.name"
                                    :width="300"
                                >
                                    <template #reference>
                                        <div
                                            class="technology"
                                            @click="addTechnologyStep(technology)"
                                        >{{ technology.name }}</div>
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
                    <el-table-column prop="bonusHours" label="Bonusstunden"></el-table-column>
                    <el-table-column prop="time" label="Zeit"></el-table-column>
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

const isSL: vue.Ref<boolean> = vue.ref(false);
const steps: vue.Ref<tech.ResearchStep[]> = vue.ref([]);

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

const addTechnologyStep = (technology: tech.Technology) => {
    const currentRank = getCurrentRank(technology);
    const amountOfRanks = technology.ranks.length;
    if (currentRank + 1 >= amountOfRanks) {
        return;
    }
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

const getEvaluatedSteps = () => {
    const evaluatedSteps = [];

    let totalTime = 0;
    let isMotiResearched = false;
    let bonusHours = 45;

    for (const step of steps.value) {
        if (step.type === 'delay') {
            evaluatedSteps.push({
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

// const getSummaries = () => {
//     const column = [];

//     return columns;
// }
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
    background: #99a9bf;
    border-radius: 4px;
    margin: 2px;
    padding: 8px;
}
.technology {
    background: #e5e9f2;
    border-radius: 4px;
    margin: 2px;
    padding: 8px;
}

.el-row {
    margin-bottom: 10px;
}
</style>