import express from 'express';
import Sale from '../models/sale';
import Realestate from '../models/realestate';
import sale from '../models/sale';

export class RealestateController {

    search = (req: express.Request, res: express.Response)=>{

        let filter = {
            "pending": false,
            "city":  { $regex: req.body.city ? req.body.city : '.*', $options: 'i' },
            "cost": {   
                        $gte: req.body.minCost ? req.body.minCost : 0,
                        $lte: req.body.maxCost ? req.body.maxCost : Number.MAX_VALUE
                    }
        }

        console.log(filter);

        Realestate.find(filter).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    add = (req: express.Request, res: express.Response)=>{
        req.body.promoted = false;
        let re = new Realestate(req.body);
        re.save().then((ok)=>{
            res.status(200).json({'message': 'Success!'}); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getNotPending = (req: express.Request, res: express.Response)=>{
        Realestate.find({"pending": false}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getPromoted = (req: express.Request, res: express.Response)=>{
        Realestate.find({"promoted": true}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getAll = (req: express.Request, res: express.Response)=>{

        Realestate.find().sort({"pending": -1}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getPending = (req: express.Request, res: express.Response)=>{
        Realestate.find({"pending": true}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getById = (req: express.Request, res: express.Response)=>{
        let _id = req.body._id;
        Realestate.findById(_id).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getByOwner = (req: express.Request, res: express.Response)=>{
        let owner = req.body.owner;
        Realestate.find({"owner": owner}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    delete = (req: express.Request, res: express.Response)=>{
        let _id = req.body._id;
        console.log(req.body);
        
        Realestate.findByIdAndDelete(_id, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": re});
        });
    }

    update = (req: express.Request, res: express.Response)=>{
        let realestate = new Realestate(req.body);
        delete realestate._id;
        console.log(realestate);
        
        Realestate.findOneAndUpdate({"_id": req.body._id}, realestate, {}, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }

    createRequest = (req: express.Request, res: express.Response)=>{
        let sale = new Sale(req.body);
        
        sale.save().then((ok)=>{
            res.status(200).json({'message': 'Success!'}); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    updateRequest = (req: express.Request, res: express.Response)=>{
        let sale = new Sale(req.body);
        delete sale._id;
        console.log(sale);
        
        Sale.findOneAndUpdate({"_id": req.body._id}, sale, {}, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": "Success!"});
        });
    }

    addSale = (req: express.Request, res: express.Response)=>{
        let sale = new Sale(req.body);
        console.log(sale);
        sale.save().then((ok)=>{
            res.status(200).json({'message': 'Success!'}); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getSaleByOwner = (req: express.Request, res: express.Response)=>{
        let owner = req.body.owner;
        console.log(owner);
        Sale.find({"owner": owner}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    getSaleByStatus = (req: express.Request, res: express.Response)=>{
        let status = req.body.status;
        Sale.find({"status": status}).then((re)=>{
            res.status(200).json(re); 
        }).catch((err)=>{
            res.status(400).json({'message': err});
        });
    }

    deleteSaleById = (req: express.Request, res: express.Response)=>{
        let _id = req.body._id;
        console.log(req.body);
        
        Sale.findByIdAndDelete(_id, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": re});
        });
    }

    deleteSaleByRealestate = (req: express.Request, res: express.Response)=>{
        let rid = req.body.realestateId;
        console.log(req.body);
        
        Sale.updateMany({"realestateId": rid}, {"status": -1}, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": re});
        });
    }

    deleteSaleByDates = (req: express.Request, res: express.Response)=>{
        let dateFrom = req.body.dateFrom;
        let dateTo = req.body.dateTo;
        let rid = req.body.realestateId;
        console.log(req.body);
        
       /* Sale.findByIdAndDelete(_id, (err, re)=>{
            if(err) console.log(err);
            else res.status(200).json({"message": re});
        });*/
    }
}