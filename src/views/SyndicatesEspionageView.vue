<template>
    <div>
        <el-row>
            <el-col :span="11">
                <SyndicatesEspionagePlayerComponent
                    playerName="Attacker"
                    playerKey="attacker"
                    :player="attacker"
                ></SyndicatesEspionagePlayerComponent>
            </el-col>
            <el-col :span="2">
                <el-divider direction="vertical" style="height: 100%;"></el-divider>
            </el-col>
            <el-col :span="11">
                <SyndicatesEspionagePlayerComponent
                    playerName="Defender"
                    playerKey="defender"
                    :player="defender"
                ></SyndicatesEspionagePlayerComponent>
            </el-col>
        </el-row>
        <el-row>
            <table id="probabilityTable">
                <tr>
                    <th style="text-align: left;">Operation</th>
                    <th style="text-align: left;">Schwierigkeit</th>
                    <th style="text-align: left;">Ops</th>
                    <th v-for="extraOps in [0,1,2,3,4,5]" :key="extraOps">{{ extraOps }} extra</th>
                </tr>
                <tr v-for="operation in OPERATIONS">
                    <td style="text-align: left;">{{ operation.name }}</td>
                    <td style="text-align: left;">{{ operation.difficulty }}</td>
                    <td style="text-align: left;">{{ calculateOps(operation) }}</td>
                    <td
                        v-for="extraOps in [0,1,2,3,4,5]"
                        :key="extraOps"
                    >{{ calculateSuccessProbability(operation, extraOps).toFixed(2) }}</td>
                </tr>
            </table>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import * as vue from 'vue';
import { OPERATIONS } from '../data/espionage';
import * as general from '../model/general';
import * as espionage from '../model/espionage';
import * as lodash from 'lodash';
import SyndicatesEspionagePlayerComponent from '../components/SyndicatesEspionagePlayerComponent.vue';

const attacker: vue.Ref<espionage.EspionagePlayer> = vue.ref(espionage.createEmptyPlayer());
const defender: vue.Ref<espionage.EspionagePlayer> = vue.ref(espionage.createEmptyPlayer());

const localStorageAttacker = JSON.parse(localStorage.getItem("espionage.attacker") || "{}");
const localStorageDefender = JSON.parse(localStorage.getItem("espionage.defender") || "{}");
lodash.merge(attacker.value, localStorageAttacker);
lodash.merge(defender.value, localStorageDefender);

vue.watchEffect(() => {
    localStorage.setItem("espionage.attacker", JSON.stringify(attacker.value));
    localStorage.setItem("espionage.defender", JSON.stringify(defender.value));
});

const calculateOps = (operation: espionage.Operation): number => {
    return operation.isEspionage ? Math.max(1, operation.ops - attacker.value.research.IT) : operation.ops;
};

const calculateSuccessProbability = (operation: espionage.Operation, extraOps: number): number => {
    // console.log(operation.name, extraOps);
    let attackerPointsPerLand = (operation.isEspionage ? attacker.value.points.ip : attacker.value.points.op) / attacker.value.land;
    let defenderPointsPerLand = defender.value.points.dp / defender.value.land;
    // console.log(attackerPointsPerLand, defenderPointsPerLand);

    attackerPointsPerLand *= 1 + (!operation.isEspionage && attacker.value.faction === general.Faction.SL ? 0.3 : 0) + 0.1 * attacker.value.research.HN + (attacker.value.partnerBoni.spionagestaerke ? 0.1 : 0);
    defenderPointsPerLand *= 1 + (operation.isEspionage && defender.value.research.SpyWeb === 3 ? 0.2 : 0) + (!operation.isEspionage ? 0.09 * defender.value.research.ISSDN_Syn : 0);
    // console.log(attackerPointsPerLand, defenderPointsPerLand);

    defenderPointsPerLand *= espionage.DIFFICULTY[operation.difficulty];
    // console.log(attackerPointsPerLand, defenderPointsPerLand);

    const requiredOps = calculateOps(operation);
    attackerPointsPerLand *= 1 + (extraOps * 0.2 / requiredOps);
    // console.log(attackerPointsPerLand, defenderPointsPerLand);

    if (attackerPointsPerLand <= 0) {
        return 0;
    } else {
        return Math.min(0.98, Math.max(0.02, 1 - (defenderPointsPerLand / (2 * attackerPointsPerLand))));
    }
};
</script>

<style lang="scss">
#probabilityTable {
    width: 900px;
    margin: auto;
}
#probabilityTable tr {
    height: 25px;
}
</style>