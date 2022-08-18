const router = require('express').Router();
let Hour = require('../models/hour.model');

router.route('/').get((req, res) => {
    hour.find()
      .then(hours => res.json(hours))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/add').post((req, res) => {
    const Monday = req.body.Monday;
    const MondayOpenTime = req.body.MondayOpenTime;
    const MondayCloseTime = req.body.MondayCloseTime;
    const Tuesday = req.body.Tuesday;
    const TuesdayOpenTime = req.body.TuesdayOpenTime;
    const TuesdayCloseTime = req.body.TuesdayCloseTime;
    const Wednesday = req.body.Wednesday;
    const WednesdayOpenTime = req.body.WednesdayOpenTime;
    const WednesdayCloseTime = req.body.WednesdayCloseTime;
    const Thursday = req.body.Thursday;
    const ThursdayOpenTime = req.body.ThursdayOpenTime;
    const ThursdayCloseTime = req.body.ThursdayCloseTime;
    const Friday = req.body.Friday;
    const FridayOpenTime = req.body.FridayOpenTime;
    const FridayCloseTime = req.body.FridayCloseTime;
    const Saturday = req.body.Saturday;
    const SaturdayOpenTime = req.body.SaturdayOpenTime;
    const SaturdayCloseTime = req.body.SaturdayCloseTime;
    const Sunday = req.body.Sunday;
    const SundayOpenTime = req.body.SundayOpenTime;
    const SundayCloseTime = req.body.SundayCloseTime;
  
    const newHour = new Hour({
        Monday,
        MondayOpenTime,
        MondayCloseTime,
        Tuesday,
        TuesdayOpenTime,
        TuesdayCloseTime,
        Wednesday,
        WednesdayOpenTime,
        WednesdayCloseTime,
        Thursday,
        ThursdayOpenTime,
        ThursdayCloseTime,
        Friday,
        FridayOpenTime,
        FridayCloseTime,
        Saturday,
        SaturdayOpenTime,
        SaturdayCloseTime,
        Sunday,
        SundayOpenTime,
        SundayCloseTime
    });
  
    newHour.save()
    .then(() => res.json('Hours added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;