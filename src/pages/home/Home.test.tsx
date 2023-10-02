import { render, screen } from "@testing-library/react";
import { Home } from "src/pages/home/Home";

describe("Render Home correctly", () => {
  test("should render the title", async () => {
    render(<Home />);

    const header = await screen.findByText(/Home/);

    expect(header).toBeInTheDocument();
  });
});
