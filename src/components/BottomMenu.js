import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import CustomizedLink from './CustomizedLink';

export default function BottomMenu() {
  return (
    <footer id="bottom-menu" data-testid="footer">
      <CustomizedLink
        path="/drinks"
        test="drinks-bottom-btn"
        src={ drinkIcon }
      />
      <CustomizedLink
        path="/explore"
        test="explore-bottom-btn"
        src={ exploreIcon }
      />
      <CustomizedLink
        path="/foods"
        test="food-bottom-btn"
        src={ mealIcon }
      />
    </footer>);
}
