//MAIN IMPORTS
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

//CSS IMPORT
import classes from './Accordion.module.scss';

//UTILS IMPORT
import { endpoints, routes } from '../../utilities/utils';

function Accordion(props) {
  const [accordionActive, setAccordionActive] = useState(false);
  const panelRef = useRef();

  useEffect(() => {
    if (panelRef.current.style.display === '') {
      panelRef.current.style.display = 'none';
    } else if (panelRef.current.style.display === 'flex') {
      panelRef.current.style.display = 'none';
    } else {
      panelRef.current.style.display = 'flex';
    }
  }, [accordionActive]);

  const toggleAccordion = () => {
    setAccordionActive(!accordionActive);
  };

  const toggleActiveState = () => {
    if (accordionActive) {
      return `${classes.active}`;
    } else {
      return '';
    }
  };

  const content = () => {
    return (
      <>
        <div className={`${classes.flex_item}`}>
          <h3>content for the accordion goes here!!!!!</h3>
        </div>
      </>
    );
  };

  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row_col_1} ${classes.center_align}}`}>
        <div className={`${classes.accordion} ${toggleActiveState()}`} onClick={toggleAccordion}>
          <div className={`${classes.flex_container}`} ref={panelRef}>
            {content()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
