<template>

    <div id="add-blog">
       <center> <h2>Blog</h2></center>
        <form>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <label>Author Name:</label>
            <input type="text" v-model.lazy="blog.authorname" required/>
            <p>Date</p>
            <input type="date" v-model="date">
            <br>
            <label>Comments</label><br>
            
            <input type="text" v-model.lazy="blog.comments" placeholder="Hey..  say something" required/>
            
        </form>
       </div>
</template>

<script>
export default {   
    data () {
        return {
            blog: {
                title: '',
                authorname:'',
                date:new Date()
                
            }
        } 
    },
    methods: {
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
