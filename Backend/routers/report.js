const express = require('express');
const _ = require('lodash');
const auth = require('../middleware/auth');
const router = new express.Router();
const { User, Autogios } = require('../models');
const moment = require('moment');

//reports?type=all&fromDate=mmddyyyy&toDate=mmddyyyy
router.get('/reports', auth, async (req, res) => {
    console.log('UserID:', req.user._id);
    let reportType, fromDate, toDate;
    try {
        reportType = req.query.type;
        console.log("ReportType"+reportType);
        console.log("fromDate"+req.query.fromDate);
        console.log("toDate"+req.query.toDate);
        fromDate = moment(req.query.fromDate, "YYYYMMDD", true).toDate();
        console.log("From date here is:"+fromDate.setHours(00, 00, 00,00));
        toDate = moment(req.query.toDate, "YYYYMMDD", true).toDate();
    } catch (e) {
        console.error(e);
        res.status(400).send({ error: 'Invalid request' });
    }

    try {
        let reportArr = await getReport(req.user, reportType, fromDate, toDate);
        let data = [];
        if (reportArr && reportArr.length > 0) {
            // console.log("Before"+reportArr);
            data = _.map(reportArr, function (obj) {
                obj = obj.toObject();
                obj.date = moment(obj.date).format('YYYY-MM-DD');
                return _.omit(obj, ['_id','__v','owner']);
              });
        }
        res.status(200).send(data);
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: 'Error With DB Operation' });
    }
});


async function getReport(user, path, fromDate, toDate) {
    try {
        let userArr = await user.populate({
            path: path,
            match: {
                date: {
                    $gte: new Date(fromDate.setHours(00, 00, 00)),
                    $lte: new Date(toDate.setHours(23, 59, 59))
                }
            },
            options: {
                sort: { date: 1 }
            }
        }).execPopulate();
        return (userArr && userArr[path]) ?  userArr[path] : [];
    } catch (e) {
        throw e;
    }
}

  module.exports = router;