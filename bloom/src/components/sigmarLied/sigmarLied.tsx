///////////////////////////////////////////////////////////////
///// WRITING CREDIT                                        ///
///// Age of Sigmar Cinematic Trailer                       ///
///// by Warhammer                                          ///
///// youtube: https://www.youtube.com/watch?v=TGF9qLmy1wU  ///
///////////////////////////////////////////////////////////////

// Modules
import React from 'react';
// Models
// Components
// CSS
import './sigmarLied.css'
// Services

const SigmarLied: React.FC = () => {
    return (
        <>
            <div className='stormcast'></div>
            <div className='text-block1'>
                Sigmar lied. Sigmar told us we were chosen. Warriors, stolen from death to be reforged as 
                his weapons. The immortal sons and daughters of the Storm god.
            </div>
            <div className='text-block2'>
                Sigmar lied. He never told us the true cost of this honor. Soon, all that will remain of me 
                is an echo, lost to the storm. But until that day, I fight.
            </div>
        </>
    )
}

export default SigmarLied;
