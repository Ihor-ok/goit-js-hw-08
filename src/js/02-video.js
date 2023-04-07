import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
   
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));


player.on('timeupdate', throttle(function (data) {
    let timeFoLocalStorege = data.seconds;
    addLocalStorage(timeFoLocalStorege);
    
}, 2000));

// player.on('ended', function () {
//     removeLocalStorage();
// });


const addLocalStorage = function (currentTime) {
    localStorage.setItem('videoplayer-current-time', String(currentTime));
    // console.log('Test1');
};

// const removeLocalStorage = function () {
//     player.off('timeupdate');
//     localStorage.removeItem('videoplayer-current-time');
//     console.log('Test2');
// };
