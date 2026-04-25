import postService from "../services/postService.js";

class PostController {
    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();
            res.render("posts", { posts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getCreate(req, res) {
        res.render("create");
    }

    async create(req, res) {
        try {
            const { title, content, hashtags, imageUrl, userId } = req.body;
            await postService.createPost({
                title,
                content,
                hashtags: hashtags ? hashtags.split(",").map(h => h.trim()) : [],
                imageUrl,
                user: userId
            });
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getEdit(req, res) {
        try {
            const post = await postService.getPostById(req.params.id);
            res.render("edit", { post });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { title, content, hashtags, imageUrl } = req.body;
            await postService.updatePost(req.params.id, {
                title,
                content,
                hashtags: hashtags ? hashtags.split(",").map(h => h.trim()) : [],
                imageUrl
            });
            res.redirect("/posts");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await postService.deletePost(req.params.id);
            res.redirect("/posts");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new PostController();