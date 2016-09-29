'use strict';
const ObjectId = require('mongodb').ObjectID;

exports.insertIOU = function(db, iou, cb) {
  db.collection('ious').insertOne(iou, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.updateIOU = function(db, iou, cb) {
  db.collection('ious').updateOne(
    { '_id': new ObjectId(iou.id) },
    {
      $set: {
        friendID: iou.friend,
        title: iou.title,
        description: iou.description,
        dateDue: iou.dateDue
      }
    }, (err, result) => {
      if (err) {
        return cb(err);
      }
      return cb(null, result);
  });
}

exports.deleteIOU = function(db, iou, cb) {
  db.collection('ious').remove({ '_id': new ObjectId(iou) }, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.getIOUs = function(db, cb) {
  db.collection('ious').find().toArray((err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.getIOU = function(db, iou, cb) {
  db.collection('ious').findOne({ '_id': new ObjectId(iou.id) }, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}
