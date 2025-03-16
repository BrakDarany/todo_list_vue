import { ref } from "vue";
import type { ITasks } from "../interfaces/ITasks";
import store from "../store";

export function useCardComponent(task: ITasks, taskIndex: number) {
  const editTask = ref({ ...task });
  const editDialogVisible = ref(false);
  const deleteDialog = ref(false);

  const openEditDialog = () => {
    editDialogVisible.value = true;
  };

  const closeEditDialog = () => {
    editDialogVisible.value = false;
  };

  const deleteTask = () => {
    store.commit("delectTaskMutation", taskIndex);
    deleteDialog.value = false;
  };
  const updateTask = (updatedTask: ITasks) => {
    store.dispatch("updateTaskAction", updatedTask);
    closeEditDialog();
  };

  return {
    editTask,
    editDialogVisible,
    deleteDialog,
    openEditDialog,
    closeEditDialog,
    deleteTask,
    updateTask,
  };
}
