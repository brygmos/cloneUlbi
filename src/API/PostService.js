import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }

    static async getPostsByUserId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
        return response
    }
}

// let posts = await PostService.getPostsByUserId(1)
//     console.log(posts.data)