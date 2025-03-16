import { computed, ref } from "vue";
import store from "../store";
import type { ITasks } from "../interfaces/ITasks";

export function useTabBarComponent() {
  const activeTab = ref("Todo");
  const addDailogVisible = ref(false);
  const openAddDialog = () => {
    addDailogVisible.value = true;
  };

  const formModel = ref({
    title: "",
    priority: "",
    deadline: "",
    status: "",
  });

  const closeAddDialog = () => {
    addDailogVisible.value = false;
    // Reset the form model
    formModel.value = {
      title: "",
      priority: "",
      deadline: "",
      status: "",
    };
  };
  const tasks = computed(() => store.state.tasks);

  const todoTasks = computed(() =>
    tasks.value.filter((task: ITasks) => task.status === "Todo")
  );
  const inProgressTasks = computed(() =>
    tasks.value.filter((task: ITasks) => task.status === "In Progress")
  );
  const completedTasks = computed(() =>
    tasks.value.filter((task: ITasks) => task.status === "Completed")
  );
  return {
    activeTab,
    todoTasks,
    inProgressTasks,
    completedTasks,
    addDailogVisible,
    formModel,
    closeAddDialog,
    openAddDialog,
  };
}
