import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
export type TodoFilter = 'pending' | 'completed' | 'both'
const Index = () => {
  const [filter, setFilter] = useState<TodoFilter>('both')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <TabFilter filter={filter} setFilter={setFilter} />
        <div className="pt-10">
          <TodoList filter={filter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

const TabButton = ({
  value,
  children,
}: {
  value: TodoFilter
  children: React.ReactNode
  isActive: boolean
}) => (
  <Tabs.Trigger
    value={value}
    className="cursor-pointer rounded-full border border-[#E2E8F0] px-[24px] py-[12px] text-sm font-bold outline-none focus:outline-none data-[state=active]:bg-[#334155] data-[state=active]:text-white"
  >
    {children}
  </Tabs.Trigger>
)

const TabFilter = ({
  filter,
  setFilter,
}: {
  filter: TodoFilter
  setFilter: (filter: TodoFilter) => void
}) => (
  <Tabs.Root
    defaultValue="both"
    value={filter}
    onValueChange={(value) => setFilter(value as TodoFilter)}
    className="pt-4"
  >
    <Tabs.List className="flex space-x-2">
      <TabButton value="both" isActive={filter === 'both'}>
        All
      </TabButton>
      <TabButton value="pending" isActive={filter === 'pending'}>
        Pending
      </TabButton>
      <TabButton value="completed" isActive={filter === 'completed'}>
        Completed
      </TabButton>
    </Tabs.List>
  </Tabs.Root>
)
