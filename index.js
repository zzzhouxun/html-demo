/*
 * @Author: Arthur
 * @Date: 2020-10-12 16:11:22
 * @LastEditors: Arthur
 * @LastEditTime: 2020-10-12 16:20:26
 * @Description: file content
 */
function play() {
    console.log('paly audio');
    let playerDom = document.getElementById('player');
    playerDom.pause();
    playerDom.src = '/static/audio/小丑.wav'
    playerDom.play();
}