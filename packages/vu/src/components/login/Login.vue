<template>
    <div :class="getClass">
        <div class="login-container">
            <a-row type="flex">
                <a-col :xs="15" :sm="15" :md="15" :lg="15" :xl="15"></a-col>
                <a-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                    <div class="login-form">
                        <div class="login-container-hello">hello!</div>
                        <div class="login-container-title">欢迎来到 vadmin</div>
                        <a-form @submit.prevent name="loginForm" ref="formRef" :model="formData" :rules="rules">
                            <a-form-item name="username">
                                <a-input v-model:value="formData.username" size="large" autocomplete="off"
                                         placeholder="Username" />
                            </a-form-item>
                            <a-form-item name="password">
                                <a-input-password v-model:value="formData.password" size="large" autocomplete="off"
                                                  placeholder="Password" />
                            </a-form-item>
                            <a-form-item>
                                <a-button type="primary" block shape="round" @click="onLogin">登录</a-button>
                            </a-form-item>
                            <a-form-item>
                                <a-button block shape="round" @click="resetForm">重置</a-button>
                            </a-form-item>
                        </a-form>
                    </div>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref,reactive, computed} from 'vue'
// import { styleCls } from '@/components/composable'
// import { useTopCls } from '@/component/composable'
// import { useUserStore } from '@/store/user'
import { message, type FormInstance } from 'ant-design-vue'
import { type Rule } from 'ant-design-vue/es/form'
// import { LoginReq } from '@/request'
defineOptions({
    name: 'vu-login'
})

const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'admin'

// const { topCls } = useTopCls(styleCls.login)
const getClass = computed(() => {
    return ['aa']
})

const { formData, formRef, rules, resetForm, onLogin } = useLogin()

export interface LoginReq {
    username: string
    password: string
}

function useLogin() {
    // const userStore = useUserStore()
    const formRef = ref<FormInstance>()

    const formData = reactive<LoginReq>({
        username: DEFAULT_USERNAME,
        password: DEFAULT_PASSWORD,
    })

    const resetForm = () => {
        formRef.value?.resetFields()
    }

    const _validateForm = async () => {
        await formRef.value?.validateFields().catch((e) => {
            message.error('表单校验失败，请检查参数')
            return Promise.reject(e);
        })
    }

    let _checkUserName = async (_rule: Rule, value: string) => {
        if (value === '') {
            return Promise.reject('账号必填')
        }

        return Promise.resolve()
    }

    let _checkPassword = async (_rule: Rule, value: string) => {
        if (value === '') {
            return Promise.reject('密码必填')
        }

        return Promise.resolve()
    }

    const rules: Record<string, Rule[]> = {
        username: [{ required: true, validator: _checkUserName, trigger: 'change' }],
        password: [{ required: true, validator: _checkPassword, trigger: 'change' }]
    }


    const onLogin = async () => {
        await _validateForm()
        // await userStore.login(unref(formData))
        message.success('登录成功')
    }

    return {
        formData,
        rules,
        formRef,
        onLogin,
        resetForm,
    }
}
</script>

<style scoped lang="scss">
@import './index.scss'
</style>
