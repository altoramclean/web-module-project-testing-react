import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';
import Episode from '../Episode';
import Loading from '../Loading';

const testShow = {
    name: "Stranger Things",
    img: "../../../public/stranger_things.png",
    summary: "Movie summary: After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. The boy's mother (Joyce) desperately tries to find him, convinced he is in grave danger, while the police chief searches for answers",
    seasons: [
// Season 1
{   id: 0,
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
},

// Season 4 
{   id: 3,
    name: "Season 4",
    episodes: []
}
]
}





test('renders without errors', ()=>{});

test('renders Loading component when prop show is null', () => {});


test('renders same number of options seasons are passed in', ()=>{});

test('handleSelect is called when an season is selected', () => {});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
