'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const crypto = require('crypto');

const serviceAccount = require('./service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.GCLOUD_PROJECT}.firebaseio.com`
});

exports.subscribe = functions.https.onRequest((req, res) => {
    switch (req.method) {
        case 'GET':
            res.send(req.query['hub.challenge']);
            break;
        case 'POST':
            console.log(req.body);
            const tags = req.query['tags'];
            if (req.body[0].object == 'user' && req.body[0].changed_aspect == 'media') {
                const databaseTask = admin.database().ref(`/instagramTags/${tags}`)
                    .push()
                    .set(req.body[0].data)
                    .then(() => {
                        res.status(200).send();
                    });
            } else {
                res.status(200).send();
            }
            break;
    }
});