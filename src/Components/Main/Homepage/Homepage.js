import React from "react";
import classes from "./Homepage.module.scss";
import lmsImage from "./last-man-standing.png";

function Homepage() {
  return (
    <div>
      <segment className={classes.grid_columns}>
        <div className={classes.main_section}>
          <div className={classes.columns_3_2center}>
            <div className={classes.center_col}>
              <img className={classes.center_image} src={lmsImage}></img>
            </div>
          </div>
        </div>
      </segment>

      <segment className={classes.grid_columns}>
        <div className={classes.second_section}>
          <div className={classes.columns_5}>
            <div
              className={`${classes.first_col} ${classes.card_border_info} ${classes.test}`}
            >
              <h1>infographic 1</h1>
            </div>
            <div
              className={`${classes.second_col} ${classes.card_border_info} ${classes.test2}`}
            >
              <h1>infographic 2</h1>
            </div>
            <div className={`${classes.third_col} ${classes.card_border_info}`}>
              <h1>infograpic 3</h1>
            </div>
          </div>
        </div>
      </segment>

      <segment className={classes.grid_columns}>
        <div className={classes.third_section}>
          <div className={classes.columns_1}>
            <div className={`${classes.first_col} ${classes.howToPlay}`}>
              <h1>How to play?</h1>
              <p>
                It’s easy to set up a league and play Football Survivor. As
                ‘Captain’ the power is in your hands, you choose the rules which
                the league is run by. Below are what you have to play with:
              </p>
            </div>
          </div>
          <div className={`${classes.columns_2} ${classes.howToPlay_cards}`}>
            <div
              className={`${classes.center} ${classes.card_border_howToPlay}`}
            >
              <h1>WINNING MARKET</h1>
              <p>
                This is the type of prediction your league will be ran by. The
                default is ‘Pick a team to win’ but you can choose markets such
                as amount of goals scored, corners and clean sheets.
              </p>
            </div>
            <div
              className={`${classes.first_col} ${classes.card_border_howToPlay}`}
            >
              <h1>AMOUNT OF LIVES</h1>
              <p>
                Select how many lives all players in your league will start off
                with, either 1 or 2. Every incorrect week will lose a life for
                the player.
              </p>
            </div>
            <div
              className={`${classes.center} ${classes.card_border_howToPlay}`}
            >
              <h1>BUY IN AMOUNT</h1>
              <p>
                This is the amount which all players must pay to enter your
                league. These entry fees make up the prize pot at the end (minus
                an admin fee).
              </p>
            </div>
            <div
              className={`${classes.first_col} ${classes.card_border_howToPlay}`}
            >
              <h1>PAYOUT STRUCTURE</h1>
              <p>
                Select how you want the winnings of your league to be divided
                up. Is it a winner takes all jobby, or 1st (75% of the pot), 2nd
                (20% of the pot), 3rd (5% of the pot).
              </p>
            </div>
          </div>
        </div>
      </segment>
    </div>
  );
}

export default Homepage;
