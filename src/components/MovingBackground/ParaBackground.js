import React from 'react';
import { useSpring, animated} from 'react-spring';


const ParaBackground = (props) =>{
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [position, set] = useSpring(() => ({ 
        xys: [0, 0, 1], 
        config: { mass: 5, tension: 350, friction: 40 } 
    }))

        return(
            <animated.div 
            className='container' 
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: position.xys.interpolate(trans) }}
            >
            <img key={props.index} src={props.img} alt="mandala" />
        </animated.div>
        )
}

export default ParaBackground;

    // const [{ xy }, set] = useSpring(() => 
    //     ({xy: [0, 0],
    //     config: config.slow
    //      }))
    // const [direction, setDirection] = useState(null);
    // const [moved, setMoved] = useState(false);

    // const calc = (y, b) => {
    //     if(b > y){
    //         setDirection('up')
    //     }else{
    //         setDirection('down')
    //     }
    // }

    // useEffect(() => {
    //     calculateTranslate();
    // })

    // const calculateTranslate = () => {
    //     if(direction === 'up'){
    //         set({xy: moved ? [30, 40] : [0,0]})
    //     }if(direction === 'down'){
    //         set({xy: moved ? [30, -40] : [0,0]})
    //     }
    // }
