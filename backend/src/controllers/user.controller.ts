import express from 'express';
import Config from '../models/config';
import User from '../models/user';

export class UserController {
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({username: username, password: password}, (err, user)=>{
            if(err) res.json({'message': 'User doesn\'t exist!'});
            else res.json(user);
        });
    }

    get = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({username: username}, (err, user)=>{
            if(err) res.json({'message': 'User doesn\'t exist!'});
            else res.json(user);
        });
    }

    create = (req: express.Request, res: express.Response)=>{
        let user = new User(req.body);
        console.log(user);
        user.save().then((user)=>{
            res.status(200).json({'message': 'Success!'}); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    register = (req: express.Request, res: express.Response)=>{
        req.body.type = 2;

        let user = new User(req.body);
        console.log(user);
        user.save().then((user)=>{
            res.status(200).json({'message': 'Success!'}); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getPendingRequests = (req: express.Request, res: express.Response)=>{
        User.find({type: 2}, (err, requests)=>{
            if(err) console.log(err);
            else {
                res.json(requests);
            }
        });
    }

    approveRequest = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        
        User.findOneAndUpdate({"username": username}, {"type": 3}, {}, (err, user)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }

    deleteUser = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        
        User.findOneAndDelete({"username": username}, (err, user)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }

    update = (req: express.Request, res: express.Response)=>{
        let user = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            country: req.body.country,
            city: req.body.city,
            type: req.body.type,
            password: req.body.password,
            avatar: req.body.avatar
        };
        console.log(user);
        
        User.findOneAndUpdate({"username": req.body.username}, user, {}, (err, user)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }

    getAll = (req: express.Request, res: express.Response)=>{   
        User.find({}, (err, users)=>{
            if(err) console.log(err);
            else res.status(200).json(users);
        });
    }

    getConfig = (req: express.Request, res: express.Response)=>{   
        Config.findOne({}, (err, users)=>{
            if(err) console.log(err);
            else res.status(200).json(users);
        });
    }

    updateConfig = (req: express.Request, res: express.Response)=>{
        let id = req.body._id;
        let config = new Config(req.body);
        delete config._id;
        console.log(req.body);
        
        Config.findOneAndUpdate({_id: id}, config, {}, (err, user)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }
}