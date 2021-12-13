import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

const testShow = {
    name: "Stranger Things",
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    seasons:[{
// Season 1
  id: 0,
    name: "Season 1",
    episodes: []
},

// Season 2
{   id: 1,
    name: "Season 2",
    episodes: []
},

// Season 3
{   id: 2,
    name: "Season 3",
    episodes: []
}

]
}

const testShow2 = {
    name: "Stranger Things 2",
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    seasons:[{
        id: 0,
        name: "Season 1",
        episodes:[]
    }]
}


test('renders testShow and no selected Season without errors', ()=>{
    render( <Show show = {testShow} selectedSeason = { "none" }/>)
});

test('renders Loading component when prop show is null', () => {
    render( <Show show = {null} />)
    const loading = screen.queryByText('Fetching data...');
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', ()=>{
    render (<Show show={testShow} selectedSeason={'none'} />)
    const season = screen.queryAllByTestId("season-option");
    expect(season).toHaveLength(3);
});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render(<Show show = {testShow2} selectedSeason={'none'} handleSelect={handleSelect} />);

    const select = screen.getByLabelText(/Select a season/i);
    userEvent.selectOptions(select, ['0']);
    expect(handleSelect).toBeCalled();
})

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testShow} selectedSeason={'none'}/>);
    let episodes  = screen.queryAllByTestId('episodes-container')
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={0}/>)
    episodes  = screen.queryAllByTestId('episodes-container')
    expect(episodes).toBeInTheDocument();
});
