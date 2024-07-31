import FileService from './FileService.js';
import Post from './Post.js';

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    return await Post.create({ ...post, picture: fileName });
  }

  async getAll() {
    return await Post.find();
  }
  
  async getOne(id) {
    if (!id) {
      throw new Error('Не указан Id');
    }

    return await Post.findById(id);
  }

  async update(post) {
    if (!post._id) {
      throw new Error('Не указан Id');
    }

    return await Post.findByIdAndUpdate(post._id, post, { new: true });
  }

  async delete(id) {
    if (!id) {
      throw new Error('Не указан Id');
    }

    return await Post.findByIdAndDelete(id);
  }
}

export default new PostService();
