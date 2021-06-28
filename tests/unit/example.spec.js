import { render, screen, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Home from '../../src/views/Home.vue'
import Collections from '../../src/views/Collections.vue'
import Header from '../../src/components/Header'

describe('Navigation on website', () => {
  it('Renders the home page with the title', () => {
    render(Home)

    expect(screen.getByText(/welcome/i))
  })

  it('The button works correctly', async () => {
    render(Home)

    const $button = screen.getByRole('button', { name: /collections/i })

    await fireEvent.click($button)

    waitFor(() =>
      expect(screen.getByTestId("title-collection"))
    )
  })

  it('Nav bar at header component', async () => {
    render(Header)

    const $favs = screen.getByTestId("test-fav")

    await fireEvent.click($favs)

    waitFor(() =>
      expect(screen.getByTestId("test-favorites"))
    )
  })
})
