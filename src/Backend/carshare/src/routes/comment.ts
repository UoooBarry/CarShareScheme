/*
    @Author Yongqian Huang 1/10/2020
*/

import ValidatorFactory from '../helpers/validatorFactory';
const CommentValidator = ValidatorFactory.getValidator('comment');
import express, { Request, Response, NextFunction } from 'express';
import _Comment from '../repository/commentRepository';
import { verifyToken } from '../helpers/authorizationHelper';
const router = express.Router();

router.post('/create/:id', [CommentValidator.validate, verifyToken], (req: Request, res: Response) => {
    const validationErrors = req.validationError;
    if (validationErrors && validationErrors.length > 0) {
        res.json({
            message: "fail",
            errors: validationErrors,
        });
    } else {
        //Create comment with passed body
        const newComment = {
            user_id: req.user.id,
            stars: req.body.stars,
            comment: req.body.comment,
            car_id: req.params.id
        }
        _Comment.create(newComment)
            .then((comment) => {
                res.json({
                    message: 'success',
                    comment
                });
            })
            .catch((err) => {
                console.log(err);
                res.json({
                    message: 'fail'
                });
            });
    }
})

export default router;
