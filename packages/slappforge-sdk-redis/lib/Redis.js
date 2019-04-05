/*
 * Copyright (c) 2017-2018 SLAppForge Lanka Private Ltd. (https://www.slappforge.com).
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let redisStrings = require('./commands/string/StringCommandsHandler');
let redisKeys = require('./commands/key/KeyCommandsHandler');

/**
 *
 * https://redis.io/commands
 * @author Lahiru Ananda
 */
module.exports = function (clusterManager) {

    this.clusters = new clusterManager().clusters;

    /**
     * Append a value to a key/multiple values to multiple keys.
     */
    this.append = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.append(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Decrement the integer value of a key by the given number.
     */
    this.decrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.decrby(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Increment the integer value of a key by the given amount.
     */
    this.incrby = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.incrby(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get a key/multiple keys.
     */
    this.get = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.get(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set the string value of a key.
     */
    this.set = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.set(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set the value and expiration of a key/multiple keys.
     */
    this.setex = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.setex(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Get the length of the value stored in a key.
     */
    this.strlrn = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisStrings.strlen(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

    /**
     * Delete a key/multiple keys.
     */
    this.del = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.del(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Set a key's time to live in seconds.
     */
    this.expire = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.expire(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Remove the expiration from a key.
     */
    this.persist = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.persist(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Determine the type stored at key.
     */
    this.type = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.type(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };
    /**
     * Rename a key.
     */
    this.rename = function (params, callback) {
        let clusterSpec = this.clusters[params.clusterIdentifier];
        redisKeys.rename(clusterSpec, params, (error, response, redisClient) => {
            callback(error, response, redisClient);
        });
    };

};