import { ref, watch } from 'vue';
import store from '../store';
import { cloneDeep } from 'lodash';
import type { ITasks } from '../interfaces/ITasks';

export function useEditTaskDialog(task: ITasks) {
  const form = ref(cloneDeep(task));

  watch(
    () => task,
    (newVal) => {
      form.value = cloneDeep(newVal);
    },
    { immediate: true }
  );

  const submit = (emit: (event:  'close' | 'update-task', ...args: any[]) => void) => {
    store.commit('updateTaskMutation', form.value);
    emit('update-task', form.value);
  };

  return {
    form,
    submit,
  };
}