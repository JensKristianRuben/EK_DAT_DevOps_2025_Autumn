import fs from 'fs';
import {load} from 'cheerio';




function fetchProshop() {
    fetch("https://www.proshop.dk/")
    .then(Response => Response.text())
    .then(html => {
        console.log(html)
        fs.writeFileSync("proshop.html", html)
    });
}

fetchProshop();


const $ = load(htmlPageString);

$("#products [product]").each((index, element) => {
    console.log($(element).text());
});