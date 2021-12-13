import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "episode",
    image: "image",
    season: 1,
    number: 1,
    summary: "blah",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id: 1,
    name: "episode",
    image: "null",
    season: 1,
    number: 1,
    summary: "blah",
    runtime: 1
}


test("renders without error", () => {

    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{

    render(<Episode episode={testEpisode} />);
    
    const summary = screen.queryByText(/blah/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent(/blah/i);
    expect(summary).toBeTruthy();
});

test("renders default image when image is not defined", ()=>{

    render(<Episode episode={testEpisodeWithoutImage}/>);

    const image = screen.queryAllByAltText('./stranger_things.png');
    expect(image).toBeTruthy();
})

