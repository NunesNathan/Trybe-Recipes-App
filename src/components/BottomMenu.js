import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function BottomMenu() {
  return (
    <footer id="bottom-menu" data-testid="footer">
      <Link
        to="/drinks"
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="/explore"
      >
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="/foods"
      >
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="drinks-bottom-btn"
        />
      </Link>
    </footer>);
}
