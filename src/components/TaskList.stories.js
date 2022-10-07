import TaskList from './TaskList'
import * as TaskStories from './Task.stories'

export default {
    component: TaskList,
    title: 'TaskList',
    //  デコレーターを使ってストーリーに任意のラッパーを設定できます。
    // 上記のコードでは、decorators というキーをデフォルトエクスポートに追加し、
    // 描画するコンポーネントの周りに padding を設定してます。
    // ストーリーで使用する「プロバイダー」(例えば、React のコンテキストを設定するライブラリコンポーネントなど) を使うためにも使用します。
    decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
}

const Template = (args) => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
}

export const WithPinnedTasks = Template.bind({})
WithPinnedTasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
}

export const Loading = Template.bind({})
Loading.args = {
    tasks: [],
    loading: true,
}

export const Empty = Template.bind({})
Empty.args = {
    ...Loading.args,
    loading: false,
}
