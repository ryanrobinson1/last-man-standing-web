const mainNavBar = () => {
  return (
    <div className={`${classes.container_max_width_100} ${classes.bg_dark}`}>
      <div className={`${classes.container_row_height_80px}`}>
        <div className={`${classes.container_max_width_1280px}`}>
          <div className={`${classes.margin_top_20px}`}>
            <div className={`${classes.row}`}>
              <div className={`${classes.col_4}`}></div>
              <div className={`${classes.col_8}`}>
                <div className={`${classes.navbar_container}`}>
                  <div
                    className={`${classes.navbar_row} ${classes.navbar_row_grid_gap_10px}`}
                  >
                    <div
                      className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                    >
                      <Link to="#">Links </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cards = () => {
  return (
    <div className={`${classes.card}`}>
      <div
        className={`${classes.card_row} ${classes.margin_all_10px} ${classes.padding_all_25px} ${classes.border_thin_radius_6px} ${classes.center_align}${classes.box_shadow_1px}${classes.bg_color}`}
      >
        <img className={`${classes.img_full}`} src={lmsImage}></img>
        <div
          className={`${classes.border_bottom_1px} ${classes.margin_top_15px}`}
        ></div>
        <h1>Title: Card</h1>
        <p>
          description: n one column card, this is being controlled by the main
          grid container which we have set to be 1 column, we will need to
          change this later
        </p>
        <Link
          className={`${classes.btn} ${classes.btn_warning} ${classes.card_button}`}
          to="#"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const layout = () => {
  return (
    <div>
      <div className={` ${classes.container_max_width_1280px}`}>
        <div className={`${classes.row} ${classes.grid_gap_10px}`}>
          <div className={`${classes.col_4}`}>
            <h1> this will take up 4 columns</h1>
          </div>
          <div className={`${classes.col_8}`}>
            <h1>
              START: this will take up 8 columns this will take up 8 columns
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
