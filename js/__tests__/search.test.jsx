import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";

test("Search renders correctly", () => {
    const component = shallow.create(<Search />);
    expect(component).toMatchSnapshot();
});

