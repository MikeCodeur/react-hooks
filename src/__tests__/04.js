import {robertAlertTip} from '@mikecodeur/react-course-app/test-utils'
import chalk from 'chalk'
import {render, screen, prettyDOM} from '@testing-library/react'

import App from '../final/04'
//import App from '../final/02.bonus-1'
//import App from '../exercise/02'

test('effectue le rendu et vérifie le style', () => {
  render(<App />)
  const allContainers = screen.getAllByText(/Aucun résultat/i)

  const className = 'reusult-found'
  allContainers.forEach(container => {
    robertAlertTip(
      () => {
        expect(container).toHaveClass(className)
      },
      () =>
        `
Il manque le className "${className}" sur ce container

${chalk.reset(prettyDOM(container))}
    `.trim(),
    )
  })
})
