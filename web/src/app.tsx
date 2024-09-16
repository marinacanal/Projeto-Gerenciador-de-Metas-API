import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'

// JSX - Javascript XML -> HTML

export function App() {
  return (
    <Dialog>
      <EmptyGoals />
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
