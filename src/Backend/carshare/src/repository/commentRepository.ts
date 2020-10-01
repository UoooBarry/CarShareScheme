/*
    @Author Yongqian Huang 1/10/2020
*/
import DataRepository from './dataRepository';
import Comment from '../models/comment';
import Customer from '../models/customer';
import ItemNotFound from '../exceptions/ItemNotFound';

class commentRepository implements DataRepository {
    private static instance?: commentRepository;

    async create(object: any) {
        try {
            const comment = await Comment.create({object});
            return Promise.resolve(comment);
        }catch(error){
            return Promise.reject(error);
        }
    }
    
    async getAll() {
        try {
            const comments = await Comment.findAll({
                include: [
                    {
                        model: Customer
                    }
                ]
            });
            return Promise.resolve(comments);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async get(id: number) {
        try{
            const comments = await Comment.findOne({
                where: { id: id },
                include: [
                    {
                        model: Customer
                    }
                ]
            });
            return Promise.resolve(comments);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async update(id: number, data: any) {
        const comment = await Comment.findOne({where:{id: id}});
        try{
            if(!comment) throw new ItemNotFound('Comments not found');
            await comment.update(data);
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }

    static getInstance(): commentRepository{
        if (!commentRepository.instance) 
            commentRepository.instance = new commentRepository();
        
        return commentRepository.instance;
    }

}

export default commentRepository.getInstance();