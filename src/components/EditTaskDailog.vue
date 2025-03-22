<template>
  <el-dialog v-model="props.visible" :show-close="false" width="40%">
    <span class="font-mono text-xl text-black pb-2.5 block">Task Details</span>
    <el-form ref="formRef" :model="form" :rules="formRules">
      <el-form-item label="Task Title" prop="title" required>
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Priority" prop="priority" required>
        <el-select v-model="form.priority" placeholder="Priority" clearable>
          <el-option label="High" value="High" />
          <el-option label="Medium" value="Medium" />
          <el-option label="Low" value="Low" />
        </el-select>
      </el-form-item>
      <el-form-item label="Deadline" prop="deadline" required>
        <el-date-picker
          v-model="form.deadline"
          type="date"
          placeholder="Pick a date"
          clearable
          style="width: 100%"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="Status" prop="status" required>
        <el-select v-model="form.status" placeholder="Status" clearable>
          <el-option label="Todo" value="Todo" />
          <el-option label="In Progress" value="In Progress" />
          <el-option label="Complete" value="Complete" />
        </el-select>
      </el-form-item>
      <div class="flex justify-end gap-2 mt-4">
        <el-button @click="closeEditDialog">Cancel</el-button>
        <el-button @click="submitHandler" type="primary">Submit</el-button>
      </div>
    </el-form>

  </el-dialog>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { ITasks } from '../interfaces/ITasks';
import { useEditTaskDialog } from '../composables/useEditTaskDailog';

const props = defineProps<{
  visible: boolean;
  task: ITasks;
}>();

const emit = defineEmits(['close', 'update-task']);

const { 
  form,
  formRef,
  formRules,
  submit,
  resetForm
} = useEditTaskDialog(props.task);

const closeEditDialog = () => {
  resetForm();
  emit('close');
};

const submitHandler = () =>{
  formRef.value?.validate((valid) => {
    if (valid) {
      submit(emit);
    } else {
      console.log('Validation failed');
    }
  });
}
</script>