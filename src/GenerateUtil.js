'use strict';

module.exports.randomRGB = () => {
    let random = [];
    for (let i = 0; i < 3; i++) {
        random.push(Math.floor(Math.random() * 256));
    }
    let rgb = 'rgb(' + random.join(', ') + ')';
    return rgb; 
};

module.exports.randomRGBA = () => {
    let random = [];
    for (let i = 0; i < 3; i++) {
        random.push(Math.floor(Math.random() * 256));
    }
    let rgb = 'rgba(' + random.join(', ') + ', '+Math.floor(Math.random()*10)/10+')';
    return rgb; 
};