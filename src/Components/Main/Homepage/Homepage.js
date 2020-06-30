import React from "react";
import classes from "./Homepage.module.scss";
import lmsImage from "./last-man-standing.png";
import Cards from "../../Cards/Cards";
import { Link } from "react-router-dom";
import CardsTight from "../../Cards/CardTight";

const howToPlayText = "How to play?";
const howToPlayDesc = `It’s easy to set up a league and play Football Survivor. As
‘Captain’ the power is in your hands, you choose the rules which
the league is run by. Below are what you have to play with:`;
const winningMarket = "Winning";
const winningMarketDesc = `This is the type of prediction your league will be ran by. The
default is ‘Pick a team to win’ but you can choose markets such
as amount of goals scored, corners and clean sheets.`;

const amountOfLives = "Amount Of Lives";
const amountOfLivesDesc = `Select how many lives all players in your league will start off
with, either 1 or 2. Every incorrect week will lose a life for
the player.`;

const buyInAmount = "Buy In Amount";
const buyInAmountDesc = `This is the amount which all players must pay to enter your
league. These entry fees make up the prize pot at the end (minus
an admin fee).`;

const payoutStructure = "Payout Structure";
const payoutStructureDesc = `Select how you want the winnings of your league to be divided
up. Is it a winner takes all jobby, or 1st (75% of the pot), 2nd
(20% of the pot), 3rd (5% of the pot).`;

function Homepage() {
  return (
    <div>
      <div className={` ${classes.container_max_width_1280px}`}>
        <div
          className={`${classes.row} ${classes.grid_gap_10px} ${classes.margin_y_25px} ${classes.margin_all_10px}`} //extra 10 margin to align with the cards
        >
          <div
            className={`${classes.col_4} ${classes.border_thin_radius_10px}`}
          >
            <h1> This will be in the intro / pitch text.</h1>
            <p> Quick introduction to what the product is</p>
          </div>
          <div className={`${classes.col_8}`}>
            <img
              className={`${classes.img_full} ${classes.img_restrict_height_512px} ${classes.img_radius_10px} `}
              src={lmsImage}
            ></img>
          </div>
        </div>

        <div className={`${classes.row} ${classes.grid_gap_10px}`}>
          <div
            className={`${classes.col_12} ${classes.center_align} ${classes.margin_all_25px}`}
          >
            <h1>3 cards describing how to play</h1>
          </div>
        </div>

        <div className={`${classes.row} ${classes.center_align} `}>
          <div className={`${classes.col_4} ${classes.expand_animation}`}>
            <h1>How To Play: 1</h1>
            <Cards></Cards>
          </div>

          <div className={`${classes.col_4} ${classes.expand_animation}`}>
            <h1>How To Play: 2</h1>
            <Cards></Cards>
          </div>

          <div className={`${classes.col_4} ${classes.expand_animation}`}>
            <h1>How To Play: 3</h1>
            <Cards></Cards>
          </div>
        </div>

        <div
          className={`${classes.row} ${classes.grid_gap_10px} ${classes.center_align} ${classes.margin_top_50px} `}
        >
          <div className={`${classes.col_12} ${classes.margin_bottom_50px}`}>
            <h1>Fancy Creating Your Own League?</h1>
            <Link
              className={`${classes.btn} ${classes.btn_primary} ${classes.button_width_50pc} ${classes.button_center}`}
              to="#"
            >
              Create A League
            </Link>
          </div>
        </div>

        <div
          className={`${classes.row} ${classes.center_align} ${classes.border_thin_radius_10px} ${classes.box_shadow_1px} ${classes.margin_all_10px}`}
        >
          <div className={classes.col_6}>
            <h1>Open Leagues</h1>
            <Cards></Cards>
          </div>
          <div className={classes.col_6}>
            <h1>Closed Leagues</h1>
            <Cards></Cards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
