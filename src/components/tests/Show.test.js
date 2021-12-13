import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Episode from '../Episode';
import Loading from '../Loading';

const testShow = {
    name: "Stranger Things",
    summary: "Movie summary",
    seasons:[{
  id: 0,
    name: "Season 1",
    episode: []
},

{   id: 1,
    name: "Season 2",
    episode: []
},

{   id: 2,
    name: "Season 3",
    episode: []
}

]
}

const testShow2 = {
    name: "Stranger Things 2",
    summary: "Movie summary",
    seasons:[{
        id: 0,
        name: "Season 1",
        episode:[]
    }]
}


test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show = {testShow} selectedSeason = { "none" }/>)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show = {null}/>);
    const loading = screen.queryByTestId("loading-container");
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
    let episodes  = screen.queryByTestId('episodes-container');
    expect(episodes).not.toBeInTheDocument();

    rerender(<Show show={testShow} selectedSeason={1}/>)
    episodes  = screen.queryByTestId('episodes-container');
    expect(episodes).toBeInTheDocument();
});
