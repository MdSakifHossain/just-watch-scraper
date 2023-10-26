const axios = require("axios");
const cheerio = require("cheerio");

// const url = "https://www.justwatch.com/in/movie/spider-man-into-the-spider-verse-2";
const url = "https://www.justwatch.com/in/movie/jawan";

async function scrapeData() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const name = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(2) > div.title-block__container > div.title-block > div > h1"
        )
            .text()
            .trim();
        const releasingYear = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(2) > div.title-block__container > div.title-block > div > span"
        )
            .text()
            .trim();
        const littleDescription = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(2) > article.article-block > div > h3"
        )
            .text()
            .trim();
        const littleMoreDescription = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(2) > article.article-block > div > p"
        )
            .text()
            .trim();
        const whatToKnowTitle = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > section > article.article-block > div > h3"
        )
            .text()
            .trim();
        const whatToKnowPara1 = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > section > article.article-block > div > p:nth-child(2)"
        )
            .text()
            .trim();
        const whatToKnowPara2 = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > section > article.article-block > div > p:nth-child(3)"
        )
            .text()
            .trim();
        const justWatchRating = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(1) > div > div > div:nth-child(1) > span"
        )
            .text()
            .trim();
        const imdbRating = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(1) > div > div > div:nth-child(2) > span"
        )
            .text()
            .trim();
        const genres = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(2) > div"
        )
            .text()
            .trim();
        const runtime = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(3) > div"
        )
            .text()
            .trim();
        const ageRating = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(4) > div"
        )
            .text()
            .trim();
        const productionCountry = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div:nth-child(1) > div.title-info.visible-xs.visible-sm > div:nth-child(5) > div"
        )
            .text()
            .trim();
        const backdropLink = $(
            "#base > div.backdrops > div > div > div.youtube-player__image-preview-container > picture > img"
        ).attr("src");
        const posterLink = $(
            "#base > div.jw-info-box > div > div.jw-info-box__container-content > div:nth-child(7) > div.hidden-sm.hidden-md.hidden-lg > div > picture > img"
        ).attr("data-src");
        
        // const _ = $("").text().trim();
        
        const movieObject = {
            name,
            releasingYear,
            littleDescription,
            littleMoreDescription,
            whatToKnowTitle,
            whatToKnowPara1,
            whatToKnowPara2,
            justWatchRating,
            imdbRating,
            genres,
            runtime,
            ageRating,
            productionCountry,
            backdropLink,
            posterLink,
        };
        console.log(movieObject);
    } catch (err) {
        console.error(err);
    }
}
scrapeData();

// some comment on this project....
// Finally done....
// at
// Mon Oct 23 2023 02:01:32 GMT+0600 (Bangladesh Standard Time)
// thanks to: [ Allah, siam, freeCodeCamp, internet &&
// everyone else in between... ]
// this scraper is my first successful scraper....
// this app is made by "Md Sakif Hossain"
