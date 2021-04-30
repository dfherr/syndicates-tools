<template>
    <div>
        <el-row type="flex" justify="center">
            <h4>{{ playerName }}</h4>
            <el-popover placement="right-start" title :width="420" trigger="hover">
                <template #reference>
                    <div style="display: flex;">
                        <el-button
                            size="mini"
                            v-on:click="loadReports()"
                            style="margin: auto; margin-left: 30px;"
                        >Berichte laden</el-button>
                    </div>
                </template>
                <p v-html="loadReportTooltip"></p>
            </el-popover>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form
                    :ref="`form.${playerKey}.left`"
                    label-width="120px"
                    :model="player"
                    size="mini"
                >
                    <el-form-item label="Fraktion" prop="faction">
                        <el-select v-model="player.faction" placeholder="--">
                            <el-option
                                v-for="item in FACTIONS"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Land" prop="land">
                        <el-input-number v-model="player.land" v-bind:min="400"></el-input-number>
                    </el-form-item>

                    <h5>Gebäude</h5>
                    <el-form-item label="Lagerhallen" prop="lagerhallen">
                        <el-input-number v-model="player.buildings.lagerhallen" v-bind:min="0"></el-input-number>
                    </el-form-item>
                    <el-form-item label="Spionagezentren" prop="spionagezentren">
                        <el-input-number v-model="player.buildings.spionagezentren" v-bind:min="0"></el-input-number>
                    </el-form-item>
                    <el-form-item
                        label="Geheimdienstzentrum"
                        prop="geheimdienstzentren"
                        v-if="player.faction === FACTIONS.SL"
                    >
                        <el-input-number
                            v-model="player.buildings.geheimdienstzentren"
                            v-bind:min="0"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item
                        label="Hauptquartier"
                        prop="hauptquartiere"
                        v-if="player.faction === FACTIONS.BF"
                    >
                        <el-input-number v-model="player.buildings.hauptquartiere" v-bind:min="0"></el-input-number>
                    </el-form-item>

                    <h5>Einheiten</h5>
                    <el-form-item label="Agents" prop="agents">
                        <el-input-number v-model="player.units.agents" v-bind:min="0"></el-input-number>
                        <el-button
                            icon="el-icon-top"
                            circle
                            :type="unitButtonHighlight"
                            v-on:click="setMaxUnits('agents')"
                        ></el-button>
                    </el-form-item>
                    <el-form-item label="Thiefs" prop="thiefs">
                        <el-input-number v-model="player.units.thiefs" v-bind:min="0"></el-input-number>
                        <el-button
                            icon="el-icon-top"
                            circle
                            :type="unitButtonHighlight"
                            v-on:click="setMaxUnits('thiefs')"
                        ></el-button>
                    </el-form-item>
                    <el-form-item label="Guards" prop="guards">
                        <el-input-number v-model="player.units.guards" v-bind:min="0"></el-input-number>
                        <el-button
                            icon="el-icon-top"
                            circle
                            :type="unitButtonHighlight"
                            v-on:click="setMaxUnits('guards')"
                        ></el-button>
                    </el-form-item>

                    <h5>Partnerboni</h5>
                    <el-form-item label prop="kapazitaet" style="text-align: left;">
                        <el-checkbox v-model="player.partnerBoni.kapazitaet">Kapazität</el-checkbox>
                    </el-form-item>
                    <el-form-item label prop="spionagestaerke" style="text-align: left;">
                        <el-checkbox
                            v-model="player.partnerBoni.spionagestaerke"
                        >+10% Spionagestärke</el-checkbox>
                    </el-form-item>
                    <el-form-item label prop="plusIPSpione" style="text-align: left;">
                        <el-checkbox
                            v-model="player.partnerBoni.plusIPSpione"
                        >Alle Spione erhalten +0,5 IP</el-checkbox>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
                <el-form
                    :ref="`form.${playerKey}.right`"
                    label-width="120px"
                    :model="player"
                    size="mini"
                >
                    <h5>Forschung</h5>
                    <el-form-item label="FMH" prop="FMH">
                        <el-input-number
                            v-model="player.research.FMH"
                            v-bind:min="0"
                            v-bind:max="2"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="SpyWeb" prop="SpyWeb">
                        <el-input-number
                            v-model="player.research.SpyWeb"
                            v-bind:min="0"
                            v-bind:max="3"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="II" prop="II">
                        <el-input-number v-model="player.research.II" v-bind:min="0" v-bind:max="3"></el-input-number>
                    </el-form-item>
                    <el-form-item label="HN" prop="HN">
                        <el-input-number v-model="player.research.HN" v-bind:min="0" v-bind:max="3"></el-input-number>
                    </el-form-item>
                    <el-form-item label="IT" prop="IT">
                        <el-input-number v-model="player.research.IT" v-bind:min="0" v-bind:max="2"></el-input-number>
                    </el-form-item>
                    <el-form-item label="ISSDN" prop="ISSDN">
                        <el-input-number
                            v-model="player.research.ISSDN"
                            v-bind:min="0"
                            v-bind:max="3"
                        ></el-input-number>
                    </el-form-item>
                    <el-form-item label="IS" prop="IS">
                        <el-input-number v-model="player.research.IS" v-bind:min="0" v-bind:max="3"></el-input-number>
                    </el-form-item>
                    <el-form-item label="CTP" prop="CTP">
                        <el-input-number
                            v-model="player.research.CTP"
                            v-bind:min="0"
                            v-bind:max="1"
                        ></el-input-number>
                    </el-form-item>

                    <h5>Punkte</h5>
                    <el-form-item label="IP" prop="ip">
                        <el-input
                            type="number"
                            v-model="player.points.ip"
                            v-bind:min="0"
                            :disabled="true"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="OP" prop="op">
                        <el-input
                            type="number"
                            v-model="player.points.op"
                            v-bind:min="0"
                            :disabled="true"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="DP" prop="dp">
                        <el-input
                            type="number"
                            v-model="player.points.dp"
                            v-bind:min="0"
                            :disabled="true"
                        ></el-input>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import * as general from '../model/general';
import * as espionage from '../model/espionage';
import { computed, defineComponent, PropType, ref, watchEffect } from '@vue/runtime-core';
import lodash from 'lodash';

export default defineComponent({
    props: {
        playerName: String,
        playerKey: String,
        player: {
            type: Object as PropType<espionage.EspionagePlayer>,
            required: true,
        }
    },
    setup(props) {
        watchEffect(() => {
            const player = props.player;
            const unitsTotal = player.units.agents + player.units.thiefs + player.units.guards;
            const commonPoints = (1 + 0.5 * player.research.II) * unitsTotal;

            player.points.ip = commonPoints + player.units.agents + player.research.CTP * 18 * player.land + (player.partnerBoni.plusIPSpione ? 0.5 : 0) * unitsTotal;
            player.points.op = commonPoints + player.units.thiefs + player.research.CTP * 12 * player.land;
            player.points.dp = commonPoints + player.units.guards + player.research.CTP * 18 * player.land;
        });

        const unitButtonHighlight = ref('primary');
        watchEffect(() => {
            const player = props.player;
            const emptyPlayer = lodash.omit(espionage.createEmptyPlayer(), 'units');
            const playerWithoutUnits = lodash.omit(player, 'units');
            const isAnythingSet = !lodash.isEqual(playerWithoutUnits, emptyPlayer);
            const isAnyUnitSet = player.units.agents > 0 || player.units.thiefs > 0 || player.units.guards > 0;
            const isHighlightButton = isAnythingSet && !isAnyUnitSet;
            unitButtonHighlight.value = isHighlightButton ? 'primary' : 'default';
        });

        const loadReportTooltip = "Zieht Informationen aus Spionageberichten:<ul><li>Berichte zu Konzern in Spionage-DB auswählen</li><li>Alle aufklappen</li><li>Gesamte Seite auswählen (Strg+A) und kopieren (Strg+C)</li><li>\"Berichte laden\" klicken</li></ul>";

        return {
            FACTIONS: general.Faction,
            unitButtonHighlight,
            loadReportTooltip,
        };
    },
    methods: {
        setMaxUnits(unitType: keyof espionage.EspionagePlayerSpies): void {
            const units = this.player.land * (12 + this.player.research.ISSDN + (this.player.faction === general.Faction.SL ? 3 : 0))
                + (3 + 2 * this.player.research.FMH) * (this.player.buildings.lagerhallen + this.player.buildings.hauptquartiere)
                + (15 + 4 * this.player.research.IS + (this.player.partnerBoni.kapazitaet ? 1 : 0)) * this.player.buildings.spionagezentren;
            for (const type in this.player.units) {
                if (type === unitType) {
                    this.player.units[type] = units;
                } else {
                    this.player.units[type as keyof espionage.EspionagePlayerSpies] = 0;
                }
            }
        },
        loadReports(): void {
            const newPlayer = espionage.createEmptyPlayer();

            const unitFactionMapping: Record<string, general.Faction> = {
                "Strike Fighter": general.Faction.BF,
                "Patriot": general.Faction.NEB,
                "Carrier": general.Faction.NoF,
                "Stalker": general.Faction.SL,
                "Firestorm": general.Faction.UIC,
            }

            const buildingMapping: Record<string, keyof espionage.EspionagePlayerBuildings> = {
                "Lagerhallen": "lagerhallen",
                "Spionageeinrichtungen": "spionagezentren",
                "Geheimdienstzentren": "geheimdienstzentren",
                "Hauptquartiere": "hauptquartiere",
            }

            const researchMapping: Record<string, keyof espionage.EspionagePlayerResearch> = {
                "Flexible Military Halls": "FMH",
                "Spy Web": "SpyWeb",
                "Improved Intelligence": "II",
                "Hacknet": "HN",
                "Intelligence Training": "IT",
                "Inner Syndicate Spy Defense Network": "ISSDN",
                "Improved Spylabs": "IS",
                "Continuous Training Program": "CTP",
            }

            const partnerBoniMapping: Record<string, keyof espionage.EspionagePlayerPartnerBoni> = {
                "Die Kapazität von Lagerhallen und Hauptquartieren (BF) wird für Militäreinheiten um 1 erhöht. Die Kapazität von Spionageeinrichtungen wird für Spionageeinheiten um 1 erhöht.": "kapazitaet",
                "+10% Spionagestärke": "spionagestaerke",
                "Alle Spione erhalten +0,5 IP (Aufklärung)": "plusIPSpione",
            }

            const number = "([0-9.]+)";

            navigator.clipboard.readText().then(clipText => {
                const lines = (clipText || "").split("\n");

                nextLine: for (let i = lines.length - 1; i >= 0; i--) {
                    const line = lines[i].trim();

                    const landMatch = line.match(`- ${number}Nw, ${number}ha am .*`);
                    if (landMatch) {
                        newPlayer.land = Number(landMatch[2].replaceAll("\.", ""));
                    }

                    for (const unit in unitFactionMapping) {
                        if (line.match(unit + "\t" + number)) {
                            newPlayer.faction = unitFactionMapping[unit];
                            continue nextLine;
                        }
                    }

                    for (const building in buildingMapping) {
                        const match = line.match(building + "\t" + number);
                        if (match) {
                            newPlayer.buildings[buildingMapping[building]] = Number(match[1].replaceAll("\.", ""));
                            continue nextLine;
                        }
                    }

                    for (const research in researchMapping) {
                        const match = line.match(research + "\tStufe " + number);
                        if (match) {
                            newPlayer.research[researchMapping[research]] = Number(match[1]);
                            continue nextLine;
                        }
                    }

                    for (const partnerBonus in partnerBoniMapping) {
                        if (line === partnerBonus) {
                            newPlayer.partnerBoni[partnerBoniMapping[partnerBonus]] = true;
                            continue nextLine;
                        }
                    }

                }

                lodash.merge(this.player, newPlayer);
            });

        },
    },
});
</script>

<style lang="scss">
</style>