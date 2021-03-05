import { Technologies, Technology, TechnologyTree, TechnologyTreeLevel } from "../src/model/technology";
const https = require('https');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;
const _ = require('lodash');
const fs = require('fs');

const WIKI_URL = 'https://www.syndicates-wiki.de/';
const TECHNOLOGY_OVERVIEW_PAGE = 'index.php?title=Forschung_(Menüpunkt)';

async function importTechnologiesFromWiki(): Promise<Technologies> {
    return loadPageContent(TECHNOLOGY_OVERVIEW_PAGE)
        .then(parseTechnologyOverview);
}

async function parseTechnologyOverview(body: string): Promise<Technologies> {
    // console.log(body);
    const doc = new dom().parseFromString(body);
    const treeTables = xpath.select(`//div[@id='mw-content-text']/div//h2[contains(./span/text(), 'Forschungsbäume')]/following-sibling::table`, doc);
    return Promise.all(_.map(treeTables, (treeTable, treeIndex) => importTechnologyTree(treeTable, treeIndex)))
        .then(trees => _.keyBy(trees, 'name'));
}

async function importTechnologyTree(treeTable: any, treeIndex: number): Promise<TechnologyTree> {
    const title = xpath.select(`string(./tr[1]/th/big[${treeIndex + 1}])`, treeTable);
    const levelElements = xpath.select(`./tr[2]/td/table`, treeTable);
    const levels = await Promise.all(_.map(levelElements, (levelTable, level) => importTechnologyTreeLevel(levelTable, level, title))) as unknown as TechnologyTreeLevel[];
    return {
        name: title,
        levels: levels,
    };
}

async function importTechnologyTreeLevel(table: any, level: number, technologyTree: string): Promise<TechnologyTreeLevel> {
    const technologyElements = xpath.select(`./tr[position()>1]/th/a/@href`, table);
    const technologies = await Promise.all(technologyElements.map(technologyElement => importTechnology(technologyElement.value, level, technologyTree))) as unknown as Technology[];
    return {
        technologyTree,
        level,
        technologies,
    }
}

async function importTechnology(url: string, level: number, technologyTree: string): Promise<Technology> {
    const body = await loadPageContent(url);
    const doc = new dom().parseFromString(body);
    const technologyTable = xpath.select(`//div[@id='mw-content-text']/div/table[1]`, doc)[0];

    const nameElement = xpath.select(`./tr[3]//span`, technologyTable)[0];
    const descriptionElement = xpath.select(`./tr[4]/td`, technologyTable)[0];
    const rankElements = xpath.select(`./tr[5]/td[position()>1]/text()`, technologyTable);
    const durationElement = xpath.select(`./tr[6]/td[2]`, technologyTable)[0];
    const networthElement = xpath.select(`./tr[6]/td[4]`, technologyTable)[0];
    const abbreviationElement = xpath.select(`./tr[7]/td[2]`, technologyTable)[0];

    const name = nameElement.textContent.substring('Forschung: '.length);

    return {
        technologyTree,
        level,
        name,
        abbreviation: abbreviationElement.textContent.trim(),
        description: descriptionElement.textContent.trim(),
        duration: Number(durationElement.textContent.trim().split(' ')[0]),
        networth: Number(networthElement.textContent.trim().split(' ')[0]),
        ranks: _.map(rankElements, (rankElement, rankIndex) => {
            const text = rankElement.textContent.trim();
            if (text.length > 0) {
                return {
                    technologyTree,
                    level,
                    name,
                    rank: rankIndex,
                    cost: Number(text.split(' ')[0]),
                };
            } else {
                return undefined;
            }
        }).filter(v => !!v),
    };
}

async function loadPageContent(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const request = https.get(WIKI_URL + url, res => {
            let result = '';
            res.setEncoding('utf8');
            res.on('data', data => result += data);
            res.on('error', error => reject(error));
            res.on('end', () => resolve(result));
        });
        request.end();
    });
}

importTechnologiesFromWiki()
    .then(technologies => fs.writeFile('./technologies.json', JSON.stringify(technologies), 'utf8', err => {
        if (err) return console.log(err);
        console.log('Output written to technologies.json');
    }))
    .catch(e => console.error(e));
