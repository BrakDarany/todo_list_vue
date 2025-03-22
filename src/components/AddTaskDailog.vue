<template>
    <el-dialog v-model="props.visible" :show-close="false" width="40%">
        <span class="font-mono text-xl text-black pb-2.5 block">Task Details</span>
        <el-form ref="formRef" :model="formModel" :rules="formRules" label-width="120px">
            <el-form-item label="Task Title" prop="title" required>
                <el-input v-model="formModel.title" />
            </el-form-item>
            <el-form-item label="Priority" prop="priority" required>
                <el-select v-model="formModel.priority" placeholder="Priority" clearable>
                    <el-option label="High" value="High" />
                    <el-option label="Medium" value="Medium" />
                    <el-option label="Low" value="Low" />
                </el-select>
            </el-form-item>
            <el-form-item label="Deadline" prop="deadline" required>
                <el-date-picker v-model="formModel.deadline" type="date" placeholder="Pick a date" clearable
                    style="width: 100%" value-format="YYYY-MM-DD" />
            </el-form-item>
            <el-form-item label="Status" prop="status" required>
                <el-select v-model="formModel.status" placeholder="Status" clearable>
                    <el-option label="Todo" value="Todo" />
                    <el-option label="In Progess" value="In Progess" />
                    <el-option label="Complete" value="Complete" />
                </el-select>
            </el-form-item>
            <div class="flex justify-end gap-2 mt-4">
                <el-button @click="$emit('close')">Cancel</el-button>
                <el-button @click="createTaskHandler" type="primary">Submit</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script lang="ts" setup>
import { useAddTaskDialog } from '../composables/useAddTaskDailog';

const props = defineProps({
    visible: Boolean,
});
const emit = defineEmits(['close', 'add-task']);

const {
    formModel,
    formRules,
    formRef,
    createTask,
} = useAddTaskDialog();

const createTaskHandler = () => {
    console.log('formRef' + formRef.value);
  formRef.value?.validate((valid) => {
    if (valid) {
        
    console.log('formRef in submit' + formRef.value);
      createTask(emit);
    } else {
      console.log('Validation failed');
    }
  });
};
</script>

<style></style>