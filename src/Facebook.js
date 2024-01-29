import React from 'react';
import { FaFacebook,FaTwitch,FaPinterest,FaVimeoV, FaUserSecret } from 'react-icons/fa';
import background from '../src/material/kioto16.jpg'
import profilePhoto from '../src/material/profilePhoto.png'

const FacebookIcon= () =>{
    const faceUrl='https://www.facebook.com/davidleesoria/';
    const twitchUrl='https://www.twitch.tv/djleepro9613';
    const pinterestUrl='https://www.pinterest.es/davidlee9613/';
    const vimeoUrl= 'https://vimeo.com/user214679366';
    const secretUrl='https://openai.com'
    const containerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white' 
    };
   const iconStyle = {
    color: 'blue',
    marginRight: '10px'
   };

    return(
        <div style={containerStyle}>
            <div style={{ display: 'flex', alignItems:'center'}}>
                <div>
                    <img src={profilePhoto} alt="Perfil" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
                <h2 style={{ margin: '0', marginLeft: '10px'}}>David Soria</h2>
                </div>
                <div style={{ display: 'flex',alignItems:'center', marginTop: '20px'}}> 

                <a href={faceUrl} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} style={{marginRight:'10px'}}/>
                </a>

                <a href={pinterestUrl} target="_blank" rel="noopener noreferrer">
                <FaPinterest size={40} style={{marginRight:'10px'}}/>
                </a>

                <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitch size={40} style={{marginRight:'10px'}}/>
                </a>

                <a href={vimeoUrl} target="_blank" rel="noopener noreferrer">
                <FaVimeoV size={40} style={{marginRight:'10px'}}/>
                </a>
                <a href={secretUrl} target="_blank" rel="noopener noreferrer">
                <FaUserSecret size={40} style={{iconStyle}}/>
                </a>

            </div>
        </div>
    );
}
export default FacebookIcon;