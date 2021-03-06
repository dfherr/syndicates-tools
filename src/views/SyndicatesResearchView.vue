<template>
    <el-tabs type="border-card">
        <el-tab-pane v-for="tree in technologies" v-bind:label="tree.name" v-bind:key="tree.name">
            <div class="treetable">
                <div class="levelcolumn" v-for="level in tree.levels" v-bind:key="level.level">
                    <div class="levelheader">
                        Stufe {{ level.level + 1 }}
                    </div>
                    <el-popover
                        v-for="technology in level.technologies" 
                        :key="technology.name"
                        placement="top-start"
                        trigger="hover"
                        :title="technology.name"
                        :width="300"
                    >
                        <template #reference>
                            <div class="technology">
                                {{ technology.name }}
                            </div>
                        </template>

                        <b>Dauer:</b> {{ technology.duration }} Ticks
                        <br>
                        <b>Kosten:</b> {{ technology.ranks.map(v => v.cost).join(' / ') }} FP
                        <br>
                        <b>Networth:</b> {{ technology.networth }}
                        <br>
                        {{ technology.description }}
                    </el-popover>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
    import { TECHNOLOGIES } from '../data/technology';
    import { Technology } from '../model/technology';

    export default {
        data() {
            return {
                technologies: TECHNOLOGIES
            }
        },
        methods: {
            popoverContent(technology: Technology): string {
                return ``;
            }
        }
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
</style>