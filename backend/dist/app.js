"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
const port = 5000;
const https = require('https');
const mongoose = require("mongoose");
const EventModel = require("./models/event");
app.get('/events', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // getEvents().then((eventsList)=>saveEvents(eventsList)); 
    var eventsList = yield EventModel.find();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(eventsList);
}));
app.get('/event/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // getEvents().then((eventsList)=>saveEvents(eventsList)); 
    var event = yield EventModel.find({
        id: req.params.id
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(event);
}));
// DB Config
const db = process.env.MONGODB_URI;
// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
function getEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        var options = {
            host: 'api.riyadh.sa',
            path: '/api/CountedEvents?_format=json&page=https://api.riyadh.sa/api/CountedEvents?_format=json&page=%E2%80%9C0',
            method: 'GET'
        };
        return new Promise(function (resolve, reject) {
            var req = https.request(options, function (res) {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(new Error('statusCode=' + res.statusCode));
                }
                var body = [];
                res.on('data', function (chunk) {
                    body.push(chunk);
                });
                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    }
                    catch (e) {
                        reject(e);
                    }
                    resolve(body);
                });
            });
            // reject on request error
            req.on('error', function (err) {
                reject(err);
            });
            req.end();
        });
    });
}
function saveEvents(data) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = 0;
        data.result.items.forEach(event => {
            id++;
            try {
                let eventObj = new EventModel({
                    id: `${id}`,
                    path: `api/events/${id}`,
                    title: event.title,
                    image: event.image[0].url,
                    body: event.body,
                    created_date: ((new Date((event.created * 1000))).toUTCString()).toLocaleString()
                });
                eventObj.save();
            }
            catch (error) {
                console.log(error);
            }
        });
    });
}
//# sourceMappingURL=app.js.map