/* eslint-disable */
import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {

    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }

        static insertPost(text) {
            return axios.post(url, {
                text
            });
        }
    }

export default PostService;

/* eslint-disable */