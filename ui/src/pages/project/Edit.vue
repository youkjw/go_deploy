<template>
  <x-page-header :subtitle="model.name">
    <template #action>
      <n-button secondary size="small" @click="$router.push({ name: 'project_list' })">
        <template #icon>
          <n-icon>
            <back-icon />
          </n-icon>
        </template>
        {{ t('buttons.return') }}
      </n-button>
    </template>
  </x-page-header>
  <n-space class="page-body" vertical :size="12">
    <n-form :model="model" :rules="rules" ref="form" label-placement="top" label-width="90">
      <n-grid cols="1 640:2" :x-gap="24">
        <n-form-item-gi :label="t('fields.project_name')" path="name">
          <n-input :placeholder="t('fields.project_name')" v-model:value="model.name" :disabled="Boolean(model.id)" />
        </n-form-item-gi>
        <n-form-item-gi :label="t('fields.project_desc')" path="desc" span="2">
          <n-input
            type="textarea"
            :placeholder="t('fields.project_desc')"
            v-model:value="model.desc"
            :autosize="{ minRows: 5, maxRows: 30 }"
          />
        </n-form-item-gi>
        <n-form-item-gi :label="t('fields.project_warehouse')" path="depository_id">
          <n-select
              v-model:value="selectedValue"
              filterable
              placeholder="选择分支"
              :options="options"
          />
        </n-form-item-gi>
        <n-form-item-gi :label="t('fields.dockerfile')" path="dockerfile" span="2">
          <n-input
              type="textarea"
              rows="10"
              :placeholder="t('fields.dockerfile')"
              v-model:value="model.dockerfile"
          />
        </n-form-item-gi>
        <n-form-item-gi :label="t('fields.compose_yml')" path="compose_yml" span="2">
          <n-input
              type="textarea"
              rows="10"
              :placeholder="t('fields.compose_yml')"
              v-model:value="model.compose_yml"
          />
        </n-form-item-gi>
        <n-form-item-gi span="3" :label="t('fields.file_config')" path="file_config">
          <n-dynamic-input v-model:value="model.file_config" #="{ index, value }" :on-create="newPair">
            <n-space style="width:70%" vertical>
              <n-input style="width:50%" :placeholder="t('fields.file_name')" v-model:value="value.name" />
              <n-input type="textarea" rows="10" :placeholder="t('fields.file_value')" v-model:value="value.value" />
            </n-space>
          </n-dynamic-input>
        </n-form-item-gi>
      </n-grid>
      <n-button @click.prevent="submit" type="primary" :disabled="submiting" :loading="submiting">
        <template #icon>
          <n-icon>
            <save-icon />
          </n-icon>
        </template>
        {{ t('buttons.save') }}
      </n-button>
    </n-form>
  </n-space>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  NButton,
  NSpace,
  NInput,
  NIcon,
  NForm,
  NGrid,
  NFormItemGi,
  NDynamicInput,
  NRadioGroup,
  NRadio,
  NDivider,
} from "naive-ui";
import {
  ArrowBackCircleOutline as BackIcon,
  SaveOutline as SaveIcon,
} from "@vicons/ionicons5";
import XPageHeader from "@/components/PageHeader.vue";
import XPanel from "@/components/Panel.vue";
import projectApi, {ProjectDepository} from "@/api/project";
import type { Project } from "@/api/project";
import { useRoute } from "vue-router";
import { router } from "@/router/router";
import { useForm, requiredRule } from "@/utils/form";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute();
const name = route.params.name as string || ''
const model = ref({} as Project);
const rules: any = {
  name: requiredRule(),
  desc: requiredRule(),
  depository: requiredRule(),
  dockerfile: requiredRule(),
  compose_yml: requiredRule(),
};
const form = ref();
const { submit, submiting } = useForm(form, () => projectApi.save(model.value), () => {
  window.message.info(t('texts.action_success'));
  router.push({ name: 'project_list' })
})

function newPair() {
  return { name: '', value: '' }
}

async function fetchData() {
  const id = route.params.id as string
  if (id) {
    let tr = await projectApi.find(id);
    model.value = tr.data?.item as Project;
  }
}

const depository = ref();
async function fetchDepository() {
  let tr = await projectApi.search_depository();
  depository.value = tr.data?.items as ProjectDepository[];
}

onMounted(fetchData);
onMounted(fetchDepository);
</script>