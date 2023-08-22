import { describe, expect,test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {CardGame} from '../../components/cards/CardGame';


describe('Card Game', () => {
    test('renders a card', () => {
      render(<CardGame/>);
       
      const cardElement = screen.getByTestId('card');    
      expect(cardElement).toBeInTheDocument();
     
      screen.debug()
    });

    test('Fetch the images array', () => {
      render(<CardGame/>);
       
      const cardElement = screen.getByTestId('card');    
      expect(cardElement).toBeInTheDocument();
     
      screen.debug()
    });
  });
