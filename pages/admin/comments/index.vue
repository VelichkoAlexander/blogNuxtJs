<template>
  <CommentTable
    :thead="['Name','Text','Status','Change Status','Delete']"
  >
    <tbody slot="tbody">
    <tr v-for="comment in comments" :key="comment.name">
      <td><span>{{comment.name}}</span></td>
      <td><span>{{comment.text}}</span></td>
      <td v-if="comment.status" class="status true"><span >{{comment.status}}</span></td>
      <td v-else class="status false" ><span >Hidden</span></td>
      <td><span @click="onChangeComment(comment.id)" class="link">Change Status</span></td>
      <td><span @click="onRemoveComment(comment.id)" class="link">Delete</span></td>
    </tr>
    </tbody>
  </CommentTable>
</template>

<script>
  import CommentTable from '@/components/Admin/CommentTable';

  export default {
    name: "index",
    components: {CommentTable},
    layout: 'admin',
    data() {
      return {
        comments: [
          {
            id: 1,
            name: 'Alex',
            text: 'Lorem ippppp',
            status: true
          },
          {
            id: 2,
            name: 'Alex2',
            text: 'Lorem ippppp',
            status: false
          }
        ]
      }
    },
    methods: {
      onChangeComment(id) {
        console.log(`Change comment with id=${id}`);
      },
      onRemoveComment(id) {
        console.log(`Delete comment with id=${id}`);
      }
    }
  }
</script>

<style scoped>

</style>


