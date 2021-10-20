import express from 'express';
import { RealestateController } from '../controllers/realestate.controller';

const realestateRouter = express.Router();

realestateRouter.route('/add').post((req, res)=>new RealestateController().add(req, res));
realestateRouter.route('/getAll').get((req, res)=>new RealestateController().getAll(req, res));
realestateRouter.route('/getPending').get((req, res)=>new RealestateController().getPending(req, res));
realestateRouter.route('/getNotPending').get((req, res)=>new RealestateController().getNotPending(req, res));
realestateRouter.route('/getPromoted').get((req, res)=>new RealestateController().getPromoted(req, res));
realestateRouter.route('/getByOwner').post((req, res)=>new RealestateController().getByOwner(req, res));
realestateRouter.route('/getById').post((req, res)=>new RealestateController().getById(req, res));
realestateRouter.route('/delete').post((req, res)=> new RealestateController().delete(req, res));
realestateRouter.route('/update').post((req, res)=> new RealestateController().update(req, res));
realestateRouter.route('/search').post((req, res)=> new RealestateController().search(req, res));

realestateRouter.route('/addSale').post((req, res)=> new RealestateController().addSale(req, res));
realestateRouter.route('/getSalesByOwner').post((req, res)=> new RealestateController().getSaleByOwner(req, res));
realestateRouter.route('/getSalesByStatus').post((req, res)=> new RealestateController().getSaleByStatus(req, res));
realestateRouter.route('/deleteSaleById').post((req, res)=> new RealestateController().deleteSaleById(req, res));
realestateRouter.route('/deleteSaleByDates').post((req, res)=> new RealestateController().deleteSaleByDates(req, res));
realestateRouter.route('/deleteSaleByRealestate').post((req, res)=> new RealestateController().deleteSaleByRealestate(req, res));

export default realestateRouter;