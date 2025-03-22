import { ref, watch } from 'vue';
import store from '../store';
import { cloneDeep } from 'lodash';
import type { ITasks } from '../interfaces/ITasks';
import type { FormInstance, FormRules } from 'element-plus';

export function useEditTaskDialog(task: ITasks) {
  const form = ref(cloneDeep(task));

  watch(
    () => task,
    (newVal) => {
      form.value = cloneDeep(newVal);
    },
    { immediate: true }
  );
  const formRef = ref<FormInstance | null>(null);

  const formRules: FormRules = {
    title: [{ required: true, message: 'Task Title is required', trigger: 'blur' }],
    priority: [{ required: true, message: 'Priority is required', trigger: 'change' }],
    deadline: [{ required: true, message: 'Deadline is required', trigger: 'change' }],
    status: [{ required: true, message: 'Status is required', trigger: 'change' }],
  };

  const submit = (emit: (event:  'close' | 'update-task', ...args: any[]) => void) => {
    store.commit('updateTaskMutation', form.value);
    emit('update-task', form.value);
  };

  const resetForm = () => {
    form.value = cloneDeep(task); // Reset the form to the initial task
  };
  
  return {
    form,
    formRef,
    formRules,
    resetForm,
    submit,
  };
}