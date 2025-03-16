import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import type { ITasks } from '../interfaces/ITasks';
interface State {
    tasks: ITasks[];
}
const store = createStore<State>({
    state() {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Task 1',
                    priority: 'Low',
                    deadline: '2021-12-31',
                    status: 'Completed',
                },
                {
                    id: 2,
                    title: 'Task 2',
                    priority: 'Medium',
                    deadline: '2021-12-31',
                    status: 'Todo',
                },
                {
                    id: 3,
                    title: 'Task 3',
                    priority: 'High',
                    deadline: '2021-12-31',
                    status: 'Todo',
                }
            ],
        }
    },
    mutations: {
        addTaskMutation(state: State, task: ITasks) {
            state.tasks.push(task);
        },
        delectTaskMutation(state: State, index: number) {
            state.tasks.splice(index,1);
        },
        updateTaskMutation(state: State, updateTask: ITasks) {
            const index = state.tasks.findIndex((el: { id: number }) => el.id === updateTask.id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], ...updateTask };
            }
        },
    },
    actions: {
        addTaskAction({ commit }: { commit: Function }, task: ITasks) {
            commit('addTaskMutation', task);
        },
        delectTaskAction({ commit }:  { commit: Function }, index: number) {
            commit('delectTaskMutation', index);
        },
        updateTaskAction({ commit }:  { commit: Function }, updateTask : ITasks) {
            commit('updateTaskMutation', updateTask);
        }
    },
    plugins: [createPersistedState()],
});

export default store;