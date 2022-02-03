import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl'

const SquidGame = () => {
    const unityContent = new UnityContent(
        "Build/build1.0v.json",
        "Build/UnityLoader.js"
    );
    // unityContent.on("loaded", () => {
    //     console.log('Game loaded')
    // })
    // unityContent.on("progress", progression => {
    //     console.log('Game loading', progression)
    // })
    return <div>
        <Unity unityContent={unityContent}/>
    </div>;
};

export default SquidGame;
