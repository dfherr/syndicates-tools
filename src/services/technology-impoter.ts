import { Technologies, TechnologyTree } from "../model/technology";

const WIKI_URL = 'https://www.syndicates-wiki.de/';
const TECHNOLOGY_OVERVIEW_PAGE = 'index.php?title=Forschung_(Menüpunkt)';

export async function importTechnologiesFromWiki(): Promise<Technologies> {
    return loadPageContent(WIKI_URL + TECHNOLOGY_OVERVIEW_PAGE)
        .then(parseTechnologyOverview);
}

function parseTechnologyOverview(body: string): Promise<Technologies> {
    new DOMParser().parseFromString(body, 'text/html');
}

async function loadPageContent(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.responseText);
            } else {
                reject(request.status);
            }
        }
        request.open("GET", url, true);
        request.send();
    });
}
