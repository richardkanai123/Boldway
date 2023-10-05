'use client'
import { TypeAnimation } from 'react-type-animation';

const WelcomeText = () => {
    return (
        <TypeAnimation
            sequence={[
                'Be Bold,',
                1000,
                'Be You!',
                2000,
            ]}
            className='w-full inline-block text-lg text-left font-light text-cyan-200'
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            style={{
            }}
        />
    );
};

export default WelcomeText;