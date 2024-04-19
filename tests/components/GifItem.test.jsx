import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 
    const title = "Animation Click GIF by Chris Gannon";
    const url = "https://media0.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif?cid=565dda93tv2byza57gmucp9ihxqcv3cqsxp4f4pjjg1ikwol&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    const id = "26his8ERHOSxKuWw8";

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title = { title } url = { url } id = { id } />);
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title = { title } url = { url } id = { id } />);
        // screen.debug(); sirve para ver el componente en consola
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title ); 
     });

     test('debe de mostrar el titulo en el component', () => { 
        render(<GifItem title = { title } url = { url } id = { id } />);
        expect( screen.getByText( title )).toBeTruthy();
      })
 })