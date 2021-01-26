import React, { useState } from 'react';

const HomeScreen = () => {
  const [url, setUrl] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    // Check the formattng of the url
    const videoId = url.match(
      /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
    );
    let response;
    if (videoId != null) {
      // console.log('video id = ', videoId[1]);
      const key = 'AIzaSyDRENGlncflJil3HJRT_y7Yzynl-MVsiKs';
      response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?id=${videoId[1]}&part=snippet%2CcontentDetails%2Cstatistics&key=${key}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const body = await response.json();
      console.log(body);
      if (body && body.items[0]) {
        console.log(body.items[0].snippet.channelTitle);
      }
    } else {
      console.log('The youtube url is not valid.');
    }
  };
  return (
    <div>
      <h1>Welcome to Bodycoached</h1>
      <p>
        A web app to help you get fitter using the Bodycoach's YouTube training
        videos
      </p>
      <form onSubmit={submitHandler}>
        <label>Add Video</label>
        <input
          type='url'
          name='url'
          id='url'
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default HomeScreen;
