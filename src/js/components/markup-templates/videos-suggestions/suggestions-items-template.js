export const suggestionItemTemplate = (
  videoId,
  thumbnail,
  videoTitle,
  channelName
) => {
  return `<a
  href="https://www.youtube.com/watch?v=${videoId}"
  class="videos-suggestions__items"
>
  <img src="${thumbnail}" alt="youtube video thumbnail" class="suggestion-item__img" />
  <div class="suggestion-item__data">
    <h1 class="data__title">${videoTitle}</h1>
    <p class="data__video-channel-name">${channelName}</p>
    <p class="data__views">views not available</p>
  </div>
</a>`;
};
