<template>
  <div class="flex flex-col gap-2 mt-3 w-auto">
    <el-card shadow="hover">
      <div class="flex flex-row items-center justify-between text-xl">
        <span class="w-36">{{ props.task.title }}</span>
        <span class="w-40">{{ props.task.status }}</span>
        <span class="w-40" :class="{ 
          'text-red-500': props.task.priority === 'High',
          'text-yellow-500': props.task.priority === 'Medium',
          'text-green-500': props.task.priority === 'Low',
          'text-blue-500': props.task.priority === 'Low'
        }">{{ props.task.priority }}</span>
        <span class="w-44">{{ props.task.deadline }}</span>
        <div>
          <el-button type="danger" @click="deleteDialog = true">Delete</el-button>
          <el-button type="primary" @click="openEditDialog">Edit</el-button>
        </div>
      </div>
    </el-card>
  </div>
  <EditTaskDailog
    :visible="editDialogVisible"
    :task="editTask"
    @close="closeEditDialog"
    @update-task="updateTask"
  />
  <el-dialog v-model="deleteDialog" title="Confirm delete" width="500">
    <span>
      Are you sure you want to delete this task?
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="deleteDialog = false">Cancel</el-button>
        <el-button type="danger" @click="deleteTask">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import EditTaskDailog from './EditTaskDailog.vue';
import type { ITasks } from '../interfaces/ITasks';
import { useCardComponent } from '../composables/useCardComponent';

const props = defineProps<{
  task: ITasks;
  taskIndex: number;
}>();
const {
  editTask,
  editDialogVisible,
  deleteDialog,
  openEditDialog,
  closeEditDialog,
  deleteTask,
  updateTask,
} = useCardComponent(props.task, props.taskIndex);
</script>