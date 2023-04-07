import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
   
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));


player.on('timeupdate', throttle(function (data) {
    let timeFoLocalStorege = data.seconds;
    addLocalStorage(timeFoLocalStorege);
    
}, 2000, { 'trailing' : false }));

player.on('ended', function () {
   removeLocalStorage();
});

const addLocalStorage = function (currentTime) {
    localStorage.setItem('videoplayer-current-time', String(currentTime));
};

const removeLocalStorage = function () {
    localStorage.removeItem('videoplayer-current-time');
};
