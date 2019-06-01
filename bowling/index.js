const NB_FRAMES = 10, 
    MISSED = '-',
    STRIKE = 'X',
    SPARE = '/';

export const score = game => {
    const frames =  game.split(' ');
    let total = 0;

    for(let i=0 ; i < NB_FRAMES ; i++) {

        let firstRoll = getFirstRoll(frames[i]);
        let secondRoll= getSecondRoll(frames[i]);

        if(secondRoll === SPARE) {
            let nextFrameFirstRoll = getFirstRoll(frames[i+1]);
            total += 10 + calculateRoll(nextFrameFirstRoll);
        } else if(firstRoll === STRIKE) {
            let nextFrameFirstRoll = getFirstRoll(frames[i+1]);
            let nextFrameSecondRoll = MISSED;

            if(nextFrameFirstRoll !== STRIKE)
                nextFrameSecondRoll = getSecondRoll(frames[i+1]);
            else
                nextFrameSecondRoll = getFirstRoll(frames[i+2]);             

            total += 10 + calculateRoll(nextFrameFirstRoll) + calculateRoll(nextFrameSecondRoll);
        } else {
            total += calculateRoll(firstRoll) + calculateRoll(secondRoll);
        }

    }

    return total;
};


const getFirstRoll = frame => {
    if(frame && frame.length > 0)
        return frame.substring(0,1);
    else return MISSED;
};

const getSecondRoll = frame => {
    if(frame && frame.length == 2)
        return frame.substring(1,2);
    else return MISSED;
};

const calculateRoll = roll => {
    switch(roll) {
    case MISSED: return 0;
    case STRIKE: return 10;
    case SPARE: return 10;
    default: return parseInt(roll);
    }
};