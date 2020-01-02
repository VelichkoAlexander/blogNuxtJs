import Vue from 'vue';
// Ui
import AppButton from '@/components/UI/Controls/Button';
import AppInput from '@/components/UI/Controls/Input';
import AppTextArea from '@/components/UI/Controls/Textarea';
// Components
import Message from '@/components/UI/Message';
import Intro from "@/components/UI/Intro";
import PostList from "@/components/Blog/PostList";

// UI
Vue.component('AppButton', AppButton);
Vue.component('AppInput', AppInput);
Vue.component('AppTextArea', AppTextArea);
// Components
Vue.component('Message', Message);
Vue.component('Intro', Intro);
Vue.component('PostList', PostList);
