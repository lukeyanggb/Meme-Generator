import React from "react";
import { useState, useEffect } from "react";

export default function Meme(){

    const [meme, setMeme] = useState(
        {
            topText: "me trying to enjoy the weekend",
            bottomText: "monday",
            randomImage: "https://i.imgflip.com/6a9erc.jpg"
        }
    );

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = useState([]);
    
    function getMemeImage(){
        const index = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[index].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
       
    return (
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >   Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}