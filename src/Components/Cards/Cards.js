import React from 'react';
import classes from './Cards.module.scss';
import { Link } from 'react-router-dom';
import testImage from '../../logo.svg';
import lmsImage from '../../Components/Main/Homepage/last-man-standing.png';

function Cards(props) {
  return (
    <div className={`${classes.card}`}>
      <div
        className={`
        ${classes.card_row} 
        ${classes.margin_all_10px} 
        ${classes.padding_all_25px} 
        ${classes.border_thin_radius_6px} 
        ${classes.center_align}
        ${classes.box_shadow_1px}
        ${classes.bg_color}
        `}
      >
        <img className={`${classes.img_full}`} src={lmsImage}></img>
        <div className={`${classes.border_bottom_1px} ${classes.margin_top_15px}`}></div>
        <h1>Title: Card</h1>
        <p>
          description: n one column card, this is being controlled by the main grid container which we have set to be 1
          column, we will need to change this later
        </p>
        <Link className={`${classes.btn} ${classes.btn_warning} ${classes.card_button}`} to="#">
          Read More
        </Link>
      </div>
    </div>

    // <div className={`${classes.container}`}>
    //   <div className={`${classes.row} `}>
    //     <div
    //       className={`${classes.col_4} ${classes.border_thin_radius_6px}`}
    //     ></div>
    //   </div>
    // </div>
  );
}

export default Cards;
