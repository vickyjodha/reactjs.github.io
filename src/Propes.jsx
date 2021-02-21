import React from 'react';

function card(props) {
    return (
    <div className="cards">
      <div className="card">        
        <img src={props.img} alt="randomimager " className="card_img"/>
        <div className="card_info">
          <span className="card_category">{props.title} </span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} target="_blank" rel="noreferrer" className="">
            <button>Watch Now</button>
          </a>
      </div>
      </div>
    </div>
   
  );
}

export default card;