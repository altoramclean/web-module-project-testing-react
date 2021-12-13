import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id: 1,
    name: "",
    image: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}






test("renders without error", () => {
    render(<Episode episode = { testEpisode } />);

});

test("renders the summary test passed as prop", ()=>{
render(<Episode episode = { testEpisode } />);

const summary = screen.queryByText(/ test /i);

expect(summary).toBeInTheDocument();
expect(summary).toBeTruthy();
expect(summary).toHaveTextContent("Test Summary");
});


test("renders default image when image is not defined", ()=>{ render(<Episode episode = { testEpisode } />);

const img = screen.queryByAltText("./stranger_things.png");

expect(img).toBeInTheDocument();
})

