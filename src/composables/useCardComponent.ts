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
  const getPriorityColor = (priority: string) => {
    console.log(priority);
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-orange-500";
      case "Low":
        return "text-green-500";
    }
  };
  return {
    editTask,
    editDialogVisible,
    deleteDialog,
    getPriorityColor,
    openEditDialog,
    closeEditDialog,
    deleteTask,
    updateTask,
  };
}
