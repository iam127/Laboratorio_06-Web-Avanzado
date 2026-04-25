import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js";

class PostService {
    async createPost(postData) {
        return await postRepository.create(postData);
    }
    async getPosts() {
        return await postRepository.findAll();
    }
    async getPostById(postId) {
        return await postRepository.findById(postId);
    }
    async updatePost(postId, postData) {
        return await postRepository.update(postId, postData);
    }
    async deletePost(postId) {
        return await postRepository.delete(postId);
    }
}

export default new PostService();