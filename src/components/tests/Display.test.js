import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import mockFetchShow from "./../../api/fetchShow";

jest.mock("./../../api/fetchShow");

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
        } 
    ]
};

test("render without errors", () => {
    render(<Display />);
  });
  
  test("renders Show component when the button is clicked", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow)

    render(<Display />);

    const button = screen.getByRole("button");
    userEvent.click(button);
  
    const showContainer = await screen.findAllByTestId("show-container");
  
    expect(showContainer).toHaveLength(1);
  });
  
  test("renders season options matching fetch returns when button is clicked", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    render(<Display />);
    const button = screen.getByRole("button");
    userEvent.click(button);
  
    await waitFor(() => {
      const seasonOptions = screen.queryAllByTestId("season-option");
      expect(seasonOptions).toHaveLength(3);
    });
  });
  
  test("displayFunc is called when the fetch button is pressed", async () => {
    mockFetchShow.mockResolvedValueOnce(testShow);
    const displayFunc = jest.fn();
  
    render(<Display displayFunc={displayFunc} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
  
    await waitFor(() => {
      expect(displayFunc).toHaveBeenCalled();
    });
  });