import { Technologies, TechnologyTree } from "../src/model/technology";
const https = require('https');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;

const WIKI_URL = 'https://www.syndicates-wiki.de/';
const TECHNOLOGY_OVERVIEW_PAGE = 'index.php?title=Forschung_(Menüpunkt)';

async function importTechnologiesFromWiki(): Promise<Technologies> {
    return loadPageContent(WIKI_URL + TECHNOLOGY_OVERVIEW_PAGE)
        .then(parseTechnologyOverview);
}

function parseTechnologyOverview(body: string): Promise<Technologies> {
    // console.log(body);
    const doc = new dom().parseFromString(body);
    const treeTables = xpath.select(`//div[@id='mw-content-text']/div//h2[contains(./span/text(), 'Forschungsbäume')]/following-sibling::table`, doc);
    console.log(treeTables.length);
    return new Promise((resolve, reject) => {
        reject();
    });
}

async function loadPageContent(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const request = https.get(url, res => {
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
    .then(technologies => console.log(JSON.stringify(technologies)))
    .catch(e => console.error(e));
