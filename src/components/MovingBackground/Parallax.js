import React from 'react';
import ParaBackground from './ParaBackground';
import img from '../../styling/images/noun_Mandala_1112539.png';


class Parallax extends React.Component{
    backgroundImages = () => {
        const imgs = Array(40).fill(img);

        return imgs.map((img, index) => {
           return <ParaBackground 
                key={index}
                img={img}
                index={index}
            />
        })
        }

        render(){
            return(
                <>
                {this.backgroundImages()}
                </>
            )
        }
}

export default Parallax;