// import { adminServices } from "../../youtube-data-fetch.js";
import { suggestionItemTemplate } from "../markup-templates/videos-suggestions/suggestions-items-template.js";
import { videosData } from "../../videos-data.js";

const suggestionsHolder = document.querySelector(
  "[data-videos-suggestions-holder]"
);

videosData.items.forEach((videoItem) => {
  suggestionsHolder.innerHTML += suggestionItemTemplate(
    videoItem.id.videoId,
    videoItem.snippet.thumbnails.default.url,
    videoItem.snippet.title,
    videoItem.snippet.channelTitle.toLocaleLowerCase()
  );
});

// adminServices
//   .videosData()
//   .then((data) => {
//     const videosData = data.items;
//     injectVideoDataIntoTemplate(videosData);
//   })
//   .catch((error) => console.log(error));
