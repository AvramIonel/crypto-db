import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/header/header";


test("This should render the Header component corect", () => {
  const { getByText } = render(<Header />);
  expect(getByText('Gecko Client')).toBeInTheDocument()
});
