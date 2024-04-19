import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    test('debe cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Dog' }} ); //Cambiando el valor de la caja de texto
        expect( input.value ).toBe('Dog');
        // screen.debug();

     });
     
     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Dog';
        const onNewCategory = jest.fn(); // Mock de una funcion

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        expect( input.value ).toBe(''); 
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

      });      

      test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn(); // Mock de una funcion

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('textbox');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

      })
})
